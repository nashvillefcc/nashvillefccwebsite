import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';
import styles from './index.module.css';

function IndexPage() {
  const data = useStaticQuery(graphql`
    query {
      placeholderImageOne: file(
        relativePath: { eq: "30-photos-absurdes-banques-dimages-23.jpg" }
      ) {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      placeholderImageTwo: file(
        relativePath: { eq: "feet-face-599c412c22fa3a0011d92add.jpg" }
      ) {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      placeholderImageThree: file(relativePath: { eq: "332260066.jpg" }) {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO keywords={[`nashville`, `freecodecamp`]} title="Home" />

      <section className="text-center mb-16">
        <h2 className="inline-block p-3 mb-4 text-4xl font-bold bg-yellow-400">
          Welcome to Nashville! We code here.
        </h2>

        <p className="text-left leading-loose">
          Nashville freeCodeCamp is an affiliation of coders, programmers,
          developers and designers with an eye toward helping others break into
          the tech industry. Our goal is to foster a welcoming community of
          learners, by grouping up more experienced mentors with students.
        </p>
      </section>

      <section className="text-center mb-16">
        <h2 className="inline-block p-3 mb-4 text-2xl font-bold bg-yellow-400">
          Links
        </h2>

        <p className="text-left leading-loose">
          We organize weekly meetings under <a href="#">this Meetup account</a>.
        </p>

        <p className="text-left leading-loose">
          We communicate regularly through <a href="#">our Discord channel</a>.
        </p>

        <p className="text-left leading-loose">
          We have a number of project repositories under{' '}
          <a href="#">our GitHub account</a>.
        </p>
      </section>

      <section className="text-center mb-16">
        <h2 className="inline-block p-3 mb-4 text-2xl font-bold bg-yellow-400">
          Leadership
        </h2>

        <div className="grid grid-cols-3 gap-2">
          <div className="py-4 bg-gray-200 border-2 border-gray-400 rounded">
            <Img
              className={styles.profilePhoto + ` mx-8 my-4 w-1/4`}
              fixed={data.placeholderImageOne.childImageSharp.fixed}
              alt="Professor Xavier"
            />
            <p className="text-xl font-bold">Professor Xavier</p>
            <p className="italic">Organization founder</p>
            <p>
              <a href="#">GitHub profile</a>
            </p>
          </div>
          <div className="py-4 bg-gray-200 border-2 border-gray-400 rounded">
            <Img
              className={styles.profilePhoto + ` mx-8 my-4 w-1/4`}
              fixed={data.placeholderImageTwo.childImageSharp.fixed}
              alt="Wolverine"
            />
            <p className="text-xl font-bold">Wolverine</p>
            <p className="italic">Canadian</p>
            <p>
              <a href="#">GitHub profile</a>
            </p>
          </div>
          <div className="py-4 bg-gray-200 border-2 border-gray-400 rounded">
            <Img
              className={styles.profilePhoto + ` mx-8 my-4 w-1/4`}
              fixed={data.placeholderImageThree.childImageSharp.fixed}
              alt="Cyclops"
            />
            <p className="text-xl font-bold">Cyclops</p>
            <p className="italic">Wise guy</p>
            <p>
              <a href="#">GitHub profile</a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
