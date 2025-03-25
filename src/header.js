import React from "react";
import logo from './images/logo.jpg'

function Header(){
    return(
        <div>
            <header>
                <img src={logo} height="100px" width="100px" alt="logo"></img>
                <h1 className="header-title">LMS - Learning Management System</h1>
            </header>
            <div className="navigation-bar">
                <a href='/' className="navigation-bar-item">Home</a> 
                <a href='/course' className="navigation-bar-item">Courses</a> 
                <a href='/login' className="navigation-bar-item">Login</a>
            </div>
        </div>
    );
}

export default Header;