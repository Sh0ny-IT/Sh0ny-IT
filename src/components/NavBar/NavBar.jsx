import React from "react";
import classes from './Navbar.module.css';

export const NavBar = () => {
    return <nav className={classes.nav}>
        <div className={classes.nav}>
            <a href='/profile'> Profile </a>
        </div>
        <div className={classes.nav}>
            <a href='/messages'> Messages </a>
        </div>
        <div className={classes.nav}>
            <a href='news'> News </a>
        </div>
        <div className={classes.nav}>
            <a href='music'> Music </a>
        </div>
        <div className={classes.nav}>
            <a href='settings'> Settings </a>
        </div>
    </nav>
}

