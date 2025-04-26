import React from 'react'
import { Navigation } from './Navigation'
import { Outlet } from 'react-router'
import { Footer } from './Footer'

export const Layout = () => {
  return (
    <> 
      <Navigation/>
      <Outlet/>
      <Footer/>
    </>
  )
}
