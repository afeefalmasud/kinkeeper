import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Outlet } from 'react-router'
import { Footer } from '../Footer/Footer'

export const Root = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
      
  )
}
