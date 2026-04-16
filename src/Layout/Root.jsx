import React from 'react'

import { Outlet, ScrollRestoration } from 'react-router'
import { Navbar } from '../Components/Shared/Navbar/Navbar'
import { Footer } from '../Components/Shared/Footer/Footer'

export const Root = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <ScrollRestoration />
    </>
      
  )
}
