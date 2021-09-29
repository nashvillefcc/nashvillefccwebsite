const fetch = require('node-fetch');
var faunadb = require('faunadb'),
  q = faunadb.query;
var client = new faunadb.Client({
  secret: 'fnAEMbG7V8ACBCYzAGMmFrbunudXm4WMofc2WMMy',
});

var collection_reference = '301610187038392838'; // a reference to the specific collection that contains the cached events data

const handler = async function () {
  try {
    const cache_is_expired = await client
      // query the events collection to grab the timestamp of the last time it was changed
      .query(q.Get(q.Collection('Events')))
      .then(function (response) {
        // 8 hours is the expiration time
        const eight_hours = 28800000;
        const today = Date.now();

        // take the timestamp and convert it to milliseconds (from microseconds which is faunaDB default)
        let lastCachedDate = new Date(response.ts / 1000);
        let now = new Date(today);

        // take the difference between today and the last timestamp
        let difference = now - lastCachedDate;

        // return whether or not the timestamp is expired
        return difference >= eight_hours;
      });

    // if the cache_is_expired is true, then request fresh data from the api, store it and then return it
    const response = cache_is_expired
      ? await fetch(
          'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.meetup.com%2FfreeCodeCamp-Nashville%2Fevents%2Frss',
          {
            headers: { Accept: 'application/json' },
          }
        )
          .then(response => response.json())
          .then(data => {
            return client.query(
              q.Replace(q.Ref(q.Collection('Events'), collection_reference), {
                // replace the expired data
                data: { events: data },
              }),
              // return the fresh data
              q.Get(q.Ref(q.Collection('Events'), collection_reference))
            );
          })
      : await client.query(
          // if it is not expired, just query the database
          q.Get(q.Ref(q.Collection('Events'), collection_reference))
        );

    let stringifiedData = JSON.stringify(response.data.events);
    return {
      statusCode: 200,
      body: stringifiedData,
    };
  } catch (error) {
    // output to netlify function log
    console.error(error);
    return {
      statusCode: 500,
      // Could be a custom message or object i.e. JSON.stringify(err)
      body: JSON.stringify({ msg: error.message }),
    };
  }
};

module.exports = { handler };
