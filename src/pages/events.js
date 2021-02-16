import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

function AboutPage() {
  return (
    <Layout>
      <SEO keywords={[`nashville`, `freecodecamp`]} title="Home" />

      <section className="text-center mb-16">
        <h2 className="inline-block p-3 mb-4 text-2xl font-bold bg-yellow-400">
          Upcoming Events
        </h2>

        <p className="text-left leading-loose">
          A list of upcoming events that we host and promote, with descriptions.
          An API will need to be implemented which pulls these in dynamically.
          And better list styling.
        </p>

        <ul className="text-left">
          <li>
            Aug 14, 6 PM: <a href="#">Nashville FCC Meetup</a>
          </li>
          <li>
            Aug 15, 6 PM: <a href="#">Nashville FCC Meetup</a>
          </li>
          <li>
            Aug 16, 7 PM: <a href="#">NashJS Meetup</a>
          </li>
          <li>
            Aug 17, 6 PM: <a href="#">Nashville FCC Meetup</a>
          </li>
        </ul>

        <p className="leading-loose">
          [We should include a calendar view here]
        </p>
      </section>

      <section className="text-center mb-16">
        <h2 className="inline-block p-3 mb-4 text-2xl font-bold bg-yellow-400">
          Past events
        </h2>

        <p className="text-left leading-loose">
          A list of our past events. We should probably limit it to 20 or 30
          items.
        </p>

        <ul className="text-left">
          <li>
            Aug 14, 6 PM: <a href="#">Nashville FCC Meetup</a>
          </li>
          <li>
            Aug 15, 6 PM: <a href="#">Nashville FCC Meetup</a>
          </li>
          <li>
            Aug 16, 7 PM: <a href="#">NashJS Meetup</a>
          </li>
          <li>
            Aug 17, 6 PM: <a href="#">Nashville FCC Meetup</a>
          </li>
        </ul>
      </section>
    </Layout>
  );
}

export default AboutPage;
