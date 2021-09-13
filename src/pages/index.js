import React, { useEffect, useState } from 'react';
import CommunityLogo from '../assets/Community-Learning.svg';
import GridLoader from 'react-spinners/BeatLoader';
import EventCard from '../components/event-card';
import Layout from '../components/layout';
import SEO from '../components/seo';

function IndexPage() {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [eventsStatus, setEventsStatus] = useState('ok');

  useEffect(() => {
    // If the upcomingEvents array is still empty after 5 seconds, then something failed, set status to error, stop loading events
    // This is if the events are "returned", but are actually null. (Status = "ok", but events are absent)
    setTimeout(() => {
      if (upcomingEvents.length === 0) setEventsStatus('error');
    }, 5000);

    fetch(`${window.location.href}.netlify/functions/pingEvents`)
      .then(res => res.json())
      .then(data => {
        // track the events status in a state
        setEventsStatus(data.status);

        // Check the status of the Promise returned from fetch
        // if the status is not "ok" then stop the code, events will not be loaded
        if (data.status !== 'ok') return;

        // assumes this is the standard date format and will not change
        let date_regex = /\w+(day), \w+ \d{1,2} (at) \d{1,2}:\d{1,2} \w+/g;

        // gets the id at the end of the url
        let id_regex = /\w+(?=\/$)/g;

        let events = [];
        let { items } = data;
        for (let i = 0; i < 3; i++) {
          // only need to display the three most upcoming events
          let date_matches = items[i].content.match(date_regex);
          let id_matches = items[i].guid.match(id_regex);

          let event = {
            id: id_matches ? id_matches[0] : 'no id found...',
            time: date_matches ? date_matches[0] : 'no date found...',
            name: items[i].title,
            thumbnail: items[i].thumbnail,
            is_online_event: items[i].content.includes('online'), // for now, I don't really see a better way to obtain this info, as there isn't any attribute that specifies this
          };

          // event.id = i === 2 ? 'no id found...' : event.id; //Just to test that the individual event will not be displayed if its ID is not found

          if (event.id !== 'no id found...') events.push(event); // a small workaround, if no ID is found then we won't display that specific event
        }

        setUpcomingEvents(events);
      });
  }, []);

  return (
    <Layout>
      <SEO keywords={[`nashville`, `freecodecamp`]} title="Home" />

      <section className="mainSection md:bg-FCCblue-100">
        <div className="mainSectionOne mainSectionContent">
          <div className="pt-8 px-2 md:px-0 md:mr-8 md:w-5/12">
            <h2>
              <span>freeCodeCamp Nashville</span>
              <span className="inline md:hidden">:</span>
            </h2>

            <p className="mb-5">
              The Nashville chapter of FreeCodeCamp, a non-profit organization
              offering free online coding curriculum, is a thriving community of
              developers, designers and students in Middle Tennessee.
            </p>
            <p>
              We welcome coders of all varieties: never wrote a line of code to
              senior-level looking to give back. Follow us on our social media
              platforms or join us at one of our meetings.
            </p>
          </div>

          <div className="flex-auto">
            <CommunityLogo
              className="inline-block"
              alt="Community: learning together"
            />
          </div>
        </div>
      </section>

      <section className="fccDivider">
        <h2>
          <span className="hidden md:inline">UPCOMING</span> <span>EVENTS</span>
        </h2>
      </section>

      <section className="mainSection">
        <div className="mainSectionContent">
          {upcomingEvents.length > 0 ? (
            <div className="px-8 grid gap-12 md:grid-cols-3 justify-center md:p-0">
              {upcomingEvents.map(e => {
                return <EventCard key={e.id} event={e} />;
              })}
            </div>
          ) : (
            <div className="my-24 flex justify-center">
              {eventsStatus === 'ok' ? (
                <GridLoader
                  speedMultiplier="1"
                  color="#5AC2CD" // fcc-blue-200
                  size={30}
                />
              ) : (
                <h2 className="text-2xl text-white w-min p-4 bg-red-500 text-center">
                  Error loading events :( <br />
                  Try again later.
                </h2>
              )}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
