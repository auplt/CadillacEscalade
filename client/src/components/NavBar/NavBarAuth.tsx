import React from "react";
import { useAppSelector } from "redux/hooks";
import { selectUser } from "redux/slices/userSlice";
import NavBarLogIn from "./NavBarLogIn";
import NavBarProfile from "./NavBarProfile";

const NavBarAuth = () => {
    const user = useAppSelector(selectUser);
    return <div className="main-navbar-auth">{user.isAuth ? <NavBarProfile /> : <NavBarLogIn />}</div>;
};

export default NavBarAuth;
