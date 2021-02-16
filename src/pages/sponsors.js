import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import styles from './sponsors.module.css';

function AboutPage() {
  return (
    <Layout>
      <SEO keywords={[`nashville`, `freecodecamp`]} title="Home" />

      <section className="text-center">
        <h2 className="inline-block p-3 mb-4 text-2xl font-bold bg-yellow-400">
          Become one of our sponsors!
        </h2>

        <p className="leading-loose">
          Use this area for highlighting our current sponsors and include copy
          on how to attract new ones.
        </p>

        <form className="text-left border-2 border-black rounded">
          <div className="m-2">
            <label className="w-1/3">Name</label>
            <input
              className={
                styles.contactInput + ' w-2/3 bg-gray-300 rounded p-1 mx-2'
              }
              type="text"
              placeholder="Your name"
            ></input>
          </div>
          <div className="m-2">
            <label className="w-1/3">E-mail</label>
            <input
              className={
                styles.contactInput + ' w-2/3 bg-gray-300 rounded p-1 mx-2'
              }
              type="email"
              placeholder="Your name"
            ></input>
          </div>
          <div className="m-2">
            <label className="w-1/3">Message</label>
            <textarea
              className="w-2/3 bg-gray-300 rounded p-1 mx-2"
              rows="4"
            ></textarea>
          </div>
          <button className={styles.contactSubmit}>Submit</button>
        </form>
      </section>
    </Layout>
  );
}

export default AboutPage;
