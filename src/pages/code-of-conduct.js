/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

function CodeOfConductPage(props) {
  // const { avatarSethAlexanderImage } = [
  //   data.avatarSethAlexanderImage.childImageSharp.fluid,
  // ];
  console.log(props.data);

  return (
    <Layout>
      <SEO keywords={[`nashville`, `freecodecamp`]} title="Code Of Conduct" />
      <section className="main-section bg-white">
        <div className="main-section-content main-section-index-1">
          <div className="pt-8 px-2">
            <h2 className=" text-FCCblue-200">
              <span>freeCodeCamp Nashville Code of Conduct</span>
            </h2>

            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              varius sem id felis facilisis molestie. In posuere libero lorem.
              Maecenas ut purus tristique, ultricies leo quis, convallis neque.
              Nam sollicitudin risus eleifend leo feugiat, et facilisis erat
              dapibus. Maecenas ullamcorper sem nec sapien semper, eget pulvinar
              lectus porttitor. Aenean libero odio, imperdiet pretium ex at,
              aliquet vestibulum libero. Ut metus nulla, aliquet quis orci eu,
              dignissim suscipit lacus. Fusce quam velit, molestie a elit nec,
              hendrerit vulputate metus. Nulla vulputate volutpat dapibus. Cras
              at orci ut tellus elementum laoreet. Aenean sed augue lacus. Proin
              molestie a ante vel euismod. Morbi iaculis, nibh a gravida porta,
              velit erat faucibus ex, pulvinar rhoncus lectus lacus ac augue.
              Etiam pellentesque est eget nulla congue euismod.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query {
    avatarSethAlexanderImage: file(relativePath: { eq: "Seth-Alexander.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 260, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    avatarAlexThomasImage: file(relativePath: { eq: "Alex-Thomas.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 260, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default CodeOfConductPage;
