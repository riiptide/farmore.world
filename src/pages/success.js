import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import SectionHeader from "./section-header"


const Success = props => (
  <Layout>
    <Helmet>
      <title>Success Page</title>
      <meta name="description" content="Success Page" />
    </Helmet>

    <div id="main" className="alt">
      <SectionHeader id="one">
        <div className="inner">
          <header className="major">
            <h1>Thank You</h1>
          </header>
          <span className="image main">
            
          </span>
          <p>Thank you for signing up. We will notify you when farmore is ready to download from the app store!</p>
        </div>
      </SectionHeader>
    </div>
  </Layout>
);

export default Success;
