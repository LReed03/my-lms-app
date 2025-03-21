import React from "react";
import logo from './images/logo.jpg'

function Header(){
    return(
        <div>
            <header>
                <img src={logo} height="100px" width="100px" alt="'logo"></img>
                <h1 class="header-title">LMS - Learning Management System</h1>
            </header>
            <div class="navigation-bar">
                <a class="navigation-bar-item">Login</a> 
                <a class="navigation-bar-item">Leaderboard</a> 
                <a class="navigation-bar-item">About LMS</a>
            </div>
        </div>
    );
}

export default Header;