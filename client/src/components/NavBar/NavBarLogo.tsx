import React from "react";
import { Link } from "react-router-dom";
import NavBarLogoSVG from "./resources/NavBarLogoSVG";

const NavBarLogo = () => {
    return (
        <div className="main-navbar-logo">
            <Link to="/">
                <NavBarLogoSVG />
            </Link>
        </div>
    );
};

export default NavBarLogo;
