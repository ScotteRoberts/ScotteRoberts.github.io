import React from 'react';
import { Helmet } from 'react-helmet';

const Head = ({ title }) => (
  <Helmet>
    <html lang="en" amp />
    <meta charset="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta
      name="Description"
      content="Creator: Scott Roberts, Role: Full-Stack Engineer Consultant, Company: Talent Path, Blog: Technical Ramblings"
    />
    <title>{title}</title>
  </Helmet>
);

export default Head;
