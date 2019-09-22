import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';


const Success = props => (
  <Layout>
    <Helmet>
      <title>Success Page</title>
      <meta name="description" content="Success Page" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Thank You</h1>
          </header>
          <span className="image main">
            
          </span>
          <p>Thank you for signing up. We will notify you wheb farmore is ready to download from the app store!</p>
        </div>
      </section>
    </div>
  </Layout>
);

export default Success;
