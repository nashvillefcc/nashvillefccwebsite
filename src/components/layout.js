import PropTypes from 'prop-types';
import React from 'react';

import Header from './header';

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <Header />

      <main className="flex-1">{children}</main>

      <footer className="bg-blue-700">
        <nav className="flex justify-between max-w-5xl p-4 mx-auto text-sm md:p-8">
          <p className="text-white">This is a footer.</p>
          <p className="text-white">We have no use for it yet!</p>
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
