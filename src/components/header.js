import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql, Link, useStaticQuery } from 'gatsby';
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
        <Link to="/">
          <span className="sr-only">Go to homepage</span>
          {logo(currentPathname)}
        </Link>

        <button
          className={`${componentStyles.navMenuButton} relative`}
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <span className="sr-only">
            {isExpanded ? 'Close menu' : 'Open menu'}
          </span>
          <FontAwesomeIcon
            icon={faTimes}
            size="2x"
            className={`${componentStyles.timesIcon} ${
              isExpanded ? `${componentStyles.isExpanded}` : ``
            } fill-current text-white`}
          />
          <FontAwesomeIcon
            icon={faBars}
            size="2x"
            className={`${componentStyles.barsIcon} ${
              isExpanded ? `${componentStyles.isExpanded}` : ``
            } fill-current text-gray-700`}
          />
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
