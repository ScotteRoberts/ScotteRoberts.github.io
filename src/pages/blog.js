import React from 'react';
import { Helmet } from 'react-helmet';

class Blog extends React.Component {
  render() {
    return (
      <body>
        <Helmet>
          <meta charset="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Blog | Portfolio</title>
        </Helmet>
        <h1>Blog</h1>
      </body>
    );
  }
}

export default Blog;
