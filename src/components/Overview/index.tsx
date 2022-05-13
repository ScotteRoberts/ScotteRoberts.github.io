import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Work from '../Work'
import Personal from '../Personal'
import Health from '../Health'
import './styles/index.scss'

function Overview() {
  return (
    <article id="overview">
      <h2>Overview</h2>
      <Tabs>
        <TabList>
          <Tab>Work</Tab>
          <Tab>Personal</Tab>
          <Tab>Health</Tab>
        </TabList>
        <TabPanel>
          <article className="panel-article">
            <Work />
          </article>
        </TabPanel>
        <TabPanel>
          <article className="panel-article">
            <Personal />
          </article>
        </TabPanel>
        <TabPanel>
          <article className="panel-article">
            <Health />
          </article>
        </TabPanel>
      </Tabs>

      {/* Start entering something for tabbed information */}
    </article>
  )
}

export default Overview
