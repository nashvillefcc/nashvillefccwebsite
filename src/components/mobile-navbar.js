import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import componentStyles from './mobile-navbar.module.css';

function MobileNavbar({ navbarLinks, isExpanded }) {
  return (
    <div
      className={`${componentStyles.navbarMenu} ${
        isExpanded ? `${componentStyles.isExpanded}` : ``
      } bg-FCCblue-200 w-3/4 pt-24`}
    >
      {navbarLinks.map(link => (
        <Link
          className="block mt-12 mr-12 text-right font-Roboto uppercase text-white text-xl font-bold"
          key={link.title}
          to={link.route}
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
}

MobileNavbar.defaultProps = {
  navbarLinks: [],
  isExpanded: false,
};

MobileNavbar.propTypes = {
  navbarLinks: PropTypes.arrayOf(PropTypes.object),
  isExpanded: PropTypes.bool,
};

export default MobileNavbar;
