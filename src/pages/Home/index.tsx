import React from 'react'
import Splash from '../../components/Splash'
import Overview from '../../components/Overview'
import Page from '../../components/Page'

function HomePage() {
  return (
    <Page title="Home | Scott Roberts">
      <Splash />
      <Overview />
    </Page>
  )
}

export default HomePage
