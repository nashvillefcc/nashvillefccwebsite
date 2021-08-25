/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Img from 'gatsby-image';

function NotFoundPage(props) {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className="text-center">
        <h2 className="bg-yellow-400 text-2xl font-bold inline-block my-8 p-3">
          What do we put on a 404 page?

          <Img 
            className= "final404Img"
            fluid={props.data.final404Image.childImageSharp.fluid}
            alt="Image of a computer with the number 404 in the middle surrounded by an orange half circle."
          />

        </h2>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    final404Image: file(relativePath: { eq: "404Page-Final.png" }) {
      childImageSharp {
        fluid(maxWidth: 260, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default NotFoundPage;
