import React from 'react'
import NavBar from '../Nav/Nav'
import Footer from "../Footer/Footer"
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
        <NavBar/>

        <div className="container-for-content">
            <Outlet/>
        </div>

        <Footer/>
    </div>
  )
}

export default Layout