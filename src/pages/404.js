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

export default NotFoundPage;
