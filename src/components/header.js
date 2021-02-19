import { Link, useStaticQuery, graphql } from 'gatsby';
import React, { useState } from 'react';
import FCCLogo from "../assets/FCC-Nashville-blue-logo.svg"


function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className="bg-white">
      <div className="navBar">
        <Link to="/">
          <FCCLogo className="logo" alt={`${site.siteMetadata.title} Logo`}/>
        </Link>

        <button
          className="navMenuButton"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="burgerIcon"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } navMenu`}
        >
          {[
            {
              route: `/`,
              title: `Home`,
            },
            {
              route: `/about`,
              title: `About`,
            },
            {
              route: `/code_of_conduct`,
              title: `Code Of Conduct`,
            },
          ].map(link => (
            <Link
              className="navMenuItems"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
