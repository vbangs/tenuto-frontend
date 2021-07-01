import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav class="navbar has-background-grey-dark" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <img src="https://i.imgur.com/VssO41n.jpg" width="55" height="28"/>
          </a>
      
          <a role="button" class="navbar-burger is-white" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      
        <div class="navbar-menu">
          <div class="navbar-start">
            <a href="/assignments" class="navbar-item has-text-white">Home</a>
            <a href="/about" class="navbar-item has-text-white">About</a>
            <a href="/contact" class="navbar-item has-text-white">Contact</a>
          </div>
        </div>
      </nav>
    )
}

export default Header