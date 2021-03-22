import React from 'react';
import CommunityLogo from '../assets/Community-Learning.svg';

import Layout from '../components/layout';
import SEO from '../components/seo';

function IndexPage() {
  return (
    <Layout>
      <SEO keywords={[`nashville`, `freecodecamp`]} title="Home" />

      <section className="main-section md:bg-FCCblue-100">
        <div className="main-section-content main-section-index-1">
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

      <section className="FCC-divider">
        <h2>
          <span className="hidden md:inline">UPCOMING</span> <span>EVENTS</span>
        </h2>
      </section>

      <section className="main-section">
        <div className="main-section-content grid grid-cols-3 gap-2">
          <div className="p-4 border-2 border-gray-400">
            <p className="text-xl font-bold">(This section is a WIP)</p>
            <p className="italic">Meetup Title</p>
            <p>
              <a href="#">Meetup Location</a>
            </p>
          </div>
          <div className="p-4 border-2 border-gray-400">
            <p className="text-xl font-bold">Meetup Date/Time</p>
            <p className="italic">Meetup Title</p>
            <p>
              <a href="#">Meetup Location</a>
            </p>
          </div>
          <div className="p-4 border-2 border-gray-400">
            <p className="text-xl font-bold">Meetup Date/Time</p>
            <p className="italic">Meetup Title</p>
            <p>
              <a href="#">Meetup Location</a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
