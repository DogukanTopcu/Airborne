import React from 'react'
import NavBar from '../Nav/Nav'
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
        <NavBar/>

        <div className="container-for-content">
            <Outlet/>
        </div>
    </div>
  )
}

export default Layout