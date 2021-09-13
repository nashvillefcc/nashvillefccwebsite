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
        {/* <h2 className="bg-yellow-400 text-2xl font-bold inline-block my-8 p-3"></h2> */}
          <div>
            <Img 
              className= "errorpage404"
              fluid={props.data.errorpage404allorangewebsizelg.childImageSharp.fluid}
              alt="Image of a computer with the number 404 in the middle surrounded by an orange half circle."
            />
          </div>
        
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    ErrorPage404AllOrangeWebSizeLg: file(relativePath: { eq: "ErrorPage404AllOrangeWebSizeLg.svg" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default NotFoundPage;
