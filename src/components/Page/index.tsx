import React, { PropsWithChildren } from 'react'
import NavBar from '../NavBar'
import Head from '../../core/Head'
import { PageProps } from './types'
import Footer from '../Footer'
import './styles.scss'

function Page({ title, children }: PropsWithChildren<PageProps>) {
  return (
    <>
      <Head title={title} />
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Page
