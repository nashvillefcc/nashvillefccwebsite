import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

function AboutPage() {
  return (
    <Layout>
      <SEO keywords={[`nashville`, `freecodecamp`]} title="Home" />

      <section className="text-center mb-16">
        <p className="text-left leading-loose">
          We should probably follow a traditional portfolio structure here.
        </p>
      </section>

      <section className="text-center mb-16">
        <h2 className="inline-block p-3 mb-4 text-2xl font-bold bg-yellow-400">
          Free Code Camp Nashville
        </h2>

        <p className="text-left leading-loose">
          A description of the project and its goals.
        </p>

        <p className="text-left leading-loose">[Screenshots]</p>

        <p className="text-left leading-loose">
          A list of contributors, with team leaders and contact information.
        </p>

        <p className="text-left leading-loose">
          Links to project repo and any other relevant information.
        </p>
      </section>

      <section className="text-center mb-16">
        <h2 className="inline-block p-3 mb-4 text-2xl font-bold bg-yellow-400">
          Light Brite App
        </h2>

        <p className="text-left leading-loose">
          A description of the project and its goals.
        </p>

        <p className="text-left leading-loose">[Screenshots]</p>

        <p className="text-left leading-loose">
          A list of contributors, with team leaders and contact information.
        </p>

        <p className="text-left leading-loose">
          Links to project repo and any other relevant information.
        </p>
      </section>
    </Layout>
  );
}

export default AboutPage;
