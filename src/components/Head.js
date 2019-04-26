import React from 'react';
import { Helmet } from 'react-helmet';

const Head = ({ title }) => (
  <Helmet>
    <meta charset="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{title}</title>
  </Helmet>
);

export default Head;
