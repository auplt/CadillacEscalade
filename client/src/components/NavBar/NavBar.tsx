import React from "react";
import NavBarAuth from "./NavBarAuth";
import NavBarLogo from "./NavBarLogo";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand justify-content-between main-navbar">
            <NavBarLogo />
            <NavBarAuth />
        </nav>
    );
};

export default NavBar;
