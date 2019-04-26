import React from 'react';
import Work from './Work';
import Personal from './Personal';
import Health from './Health';
import '../styles/overview.css';

const Overview = () => (
  <article id="overview">
    <h2>Overview</h2>
    {/* Start entering something for tabbed information */}
    <Work />
    <Personal />
    <Health />
  </article>
);

export default Overview;
