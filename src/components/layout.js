import PropTypes from 'prop-types';
import React from 'react';

import Header from './header';
import Footer from './footer';

function Layout({ children }) {
  return (
    <div className="relative flex flex-col min-h-screen w-full overflow-x-hidden font-sans text-gray-900">
      <Header />

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
