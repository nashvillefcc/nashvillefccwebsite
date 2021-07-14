import { Link, useStaticQuery, graphql } from 'gatsby';
import React, { useState } from 'react';
import BlueFCCLogo from '../assets/FCC-Nashville-blue-logo.svg';
import OrangeFCCLogo from '../assets/FCC-Nashville-orange-logo.svg';
import componentStyles from './header.module.css';
import MobileNavbar from './mobile-navbar';

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

  const navbarLinks = [
    {
      route: `/`,
      title: `Home`,
    },
    {
      route: `/about`,
      title: `About`,
    },
    {
      route: `/code-of-conduct`,
      title: `Code Of Conduct`,
    },
  ];
  const currentPathname =
    typeof window !== `undefined` ? window.location.pathname : '/';
  const logo = path => {
    if (path !== '/')
      return (
        <OrangeFCCLogo
          className={`${componentStyles.logo} ${componentStyles.logoOrange}`}
          alt={`${site.siteMetadata.title} Orange Logo`}
        />
      );
    return (
      <BlueFCCLogo
        className={`${componentStyles.logo} ${componentStyles.logoBlue}`}
        alt={`${site.siteMetadata.title} Blue Logo`}
      />
    );
  };

  return (
    <header className="bg-white">
      <div className={componentStyles.navBar}>
        <Link to="/">{logo(currentPathname)}</Link>

        <button
          className={componentStyles.navMenuButton}
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className={componentStyles.burgerIcon}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <MobileNavbar navbarLinks={navbarLinks} isExpanded={isExpanded} />

        <nav className={componentStyles.navMenu}>
          {navbarLinks.map(link => (
            <Link
              className={componentStyles.navMenuItems}
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
