import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

function AboutPage() {
  return (
    <Layout>
      <SEO keywords={[`nashville`, `freecodecamp`]} title="Home" />

      <section className="text-center">
        <h2 className="inline-block p-3 mb-4 text-2xl font-bold bg-yellow-400">
          Code of Conduct
        </h2>

        <p className="text-left leading-loose">
          In the interest of fostering an open and welcoming environment, we
          pledge to making participation in our community a harassment-free
          experience for everyone, regardless of age, body size, disability,
          ethnicity, gender identity and expression, level of experience,
          nationality, personal appearance, race, religion, or sexual identity
          and orientation.
        </p>

        <p className="text-left leading-loose mt-4">
          Examples of behavior that contributes to creating a positive
          environment include:
        </p>

        <ul className="text-left">
          <li>Using welcoming and inclusive language</li>
          <li>Being respectful of differing viewpoints and experiences</li>
          <li>Gracefully accepting constructive criticism</li>
          <li>Focusing on what is best for the community</li>
          <li>Showing empathy towards other community members</li>
        </ul>

        <p className="text-left leading-loose mt-4">
          Examples of unacceptable behavior by participants include:
        </p>

        <ul className="text-left">
          <li>
            The use of sexualized language or imagery and unwelcome sexual
            attention or advances
          </li>
          <li>
            Trolling, insulting/derogatory comments, and personal or political
            attacks
          </li>
          <li>Public or private harassment</li>
          <li>
            Publishing others&apos; private information, such as a physical or
            electronic address, without explicit permission
          </li>
          <li>
            Other conduct which could reasonably be considered inappropriate in
            a professional setting
          </li>
        </ul>
      </section>
    </Layout>
  );
}

export default AboutPage;
