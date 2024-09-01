import React from 'react'
import Header from './Components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import './Layout.css'


  const Layout = () => {
    return (
      <div className="layout">
        <Header /> {/* Add Header here */}
        <div className="main-container">
          <Sidebar /> {/* Add Sidebar here */}
          <div className="content">
            <Outlet /> {/* Renders the nested routes */}
          </div>
        </div>
        <Footer /> {/* Add Footer here */}
      </div>
    );
  };
  
  export default Layout;
