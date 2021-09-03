import React, { useEffect, useState } from 'react';
import CommunityLogo from '../assets/Community-Learning.svg';
import EventCard from '../components/event-card';
import Layout from '../components/layout';
import SEO from '../components/seo';

function IndexPage() {
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  useEffect(() => {
    fetch(`${window.location.href}.netlify/functions/pingEvents`)
      .then(res => res.json())
      .then(data => {
        let date_regex = /\w+(day), \w+ \d{1,2} (at) \d{1,2}:\d{1,2} \w+/g; // assumes this is the standard date format and will not change
        let id_regex = /\w+(?=\/$)/g; // gets the id at the end of the url
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
          <div className="px-8 grid gap-12 md:grid-cols-3 justify-center md:p-0">
            {upcomingEvents.length > 0 ? (
              upcomingEvents.map(e => {
                return <EventCard key={e.id} event={e} />;
              })
            ) : (
              <div className="my-24">
                <h1 className="text-3xl text-white bg-red-500 text-center">
                  Error loading events
                </h1>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
