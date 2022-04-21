import React from 'react'
import NavBar from '../Nav/Nav'
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
        <NavBar/>

        <div>
            <Outlet/>
        </div>
    </div>
  )
}

export default Layout