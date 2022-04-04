import React from "react";
import classes from './Navbar.module.css';

export const NavBar = () => {
    return <nav className={classes.nav}>
        <div className={classes.nav}>
            <a> Profile </a>
        </div>
        <div className={classes.nav}>
            <a> Messages </a>
        </div>
        <div className={classes.nav}>
            <a> News </a>
        </div>
        <div className={classes.nav}>
            <a> Music </a>
        </div>
        <div className={classes.nav}>
            <a> Settings </a>
        </div>
    </nav>
}

