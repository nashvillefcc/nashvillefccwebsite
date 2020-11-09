import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

function AboutPage() {
  return (
    <Layout>
      <SEO keywords={[`nashville`, `freecodecamp`]} title="Home" />

      <section className="text-center mb-16">
        <p className="text-left leading-loose mb-4">
          Description: Content here is provided by Nashville FCC members. We
          encourage members to write up information they find useful as they
          work on their skills, to share with others and improve memorization of
          the material. These blog posts are also presented as lightning talks
          during our weekly meetings. Want to contribute? Pitch us your ideas!
        </p>

        <p className="text-left leading-loose">
          We should probably follow a traditional blog structure here, with an
          archive or list of posts on the side for easy access. Each post should
          contain author credits, timestamps, and content tags.
        </p>
      </section>

      <section className="text-center mb-16">
        <h2 className="inline-block p-3 mb-4 text-2xl font-bold bg-yellow-400">
          Blog Post 1
        </h2>

        <p className="text-left leading-loose">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>

      <section className="text-center mb-16">
        <h2 className="inline-block p-3 mb-4 text-2xl font-bold bg-yellow-400">
          Blog Post 2
        </h2>

        <p className="text-left leading-loose">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>

      <section className="text-center mb-16">
        <h2 className="inline-block p-3 mb-4 text-2xl font-bold bg-yellow-400">
          Blog Post 3
        </h2>

        <p className="text-left leading-loose">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
    </Layout>
  );
}

export default AboutPage;
