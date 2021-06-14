import React, { useEffect, useState } from 'react';
import CommunityLogo from '../assets/Community-Learning.svg';
import EventCard from '../components/event-card';
import Layout from '../components/layout';
import SEO from '../components/seo';
import mockEvents from '../mock-data/mockEvents';

function IndexPage() {
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      setUpcomingEvents(mockEvents);
    };
    getEvents();
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
        <div className="mainSectionContent md:max-w-full md:px-12">
          <div className="px-8 grid gap-12 md:grid-cols-3 md:p-0">
            {upcomingEvents.map(e => {
              return <EventCard key={e.id} event={e} />;
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
