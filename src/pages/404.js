/* eslint-disable react/prop-types */
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ErrorImage from '../assets/errorpage404allorangewebsizelg.svg';

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className="text-center">
          <div>
            <ErrorImage 
            className="container mx-auto mb-6"
            alt="404 Error Image" />
          </div>
        
      </div>
    </Layout>
  );
}

// export const query = graphql`
//   query {
//     errorpage404allorangewebsizelg: file(relativePath: { eq: "errorpage404allorangewebsizelg.svg" }) {
//       childImageSharp {
//         fluid(maxWidth: 800, quality: 100) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `;

export default NotFoundPage;
