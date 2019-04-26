import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Work from './Work';
import Personal from './Personal';
import Health from './Health';
import '../styles/overview.css';
import '../styles/tabs.css';

const Overview = () => (
  <article id="overview">
    <h2>Overview</h2>
    <Tabs>
      <TabList>
        <Tab>Work</Tab>
        <Tab>Personal</Tab>
        <Tab>Health</Tab>
      </TabList>
      <TabPanel>
        <Work />
      </TabPanel>
      <TabPanel>
        <Personal />
      </TabPanel>
      <TabPanel>
        <Health />
      </TabPanel>
    </Tabs>
    {/* Start entering something for tabbed information */}
  </article>
);

export default Overview;
