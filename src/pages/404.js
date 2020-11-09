import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className="text-center">
        <h2 className="bg-yellow-400 text-2xl font-bold inline-block my-8 p-3">
          What do we put on a 404 page?
        </h2>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
