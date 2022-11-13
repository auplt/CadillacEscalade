import React from "react";
import NavBarAuth from "./NavBarAuth";
import NavBarLogo from "./NavBarLogo";

type NavBarProps = {
    drawAuth: boolean;
};

const NavBar = ({ drawAuth }: NavBarProps) => {
    return (
        <nav className="navbar navbar-expand justify-content-between main-navbar">
            <NavBarLogo />
            {drawAuth && <NavBarAuth />}
        </nav>
    );
};

export default NavBar;
