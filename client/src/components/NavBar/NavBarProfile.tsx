import ProfileModal from "components/Auth/ProfileModal";
import { ServerAPI_GET } from "libs/ServerAPI";
import { DeleteToken } from "libs/Token";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { selectUser, setUserIsAuth } from "redux/slices/userSlice";
import NavBarProfileSVG from "./resources/NavBarProfileSVG";

const NavBarProfile = () => {
    const [show, setShow] = useState(false);
    const user = useAppSelector(selectUser);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onLogOut = () => {
        // TODO Send logout to serve
        ServerAPI_GET({
            url: "/api/v1/auth/perform_logout",
            onDataReceived: () => {
                DeleteToken();
                dispatch(setUserIsAuth(false));
            },
        });
        navigate("/");
    };

    const handleClose = () => {
        console.log("Close", show);
        setShow(false);
    };
    const handleShow = () => {
        console.log("Show", show);
        setShow(true);
    };

    return (
        <div>
            <span className="me-4">{user.username}</span>
            <span className="me-4 main-navbar-profile" onClick={handleShow}>
                {user.icon !== undefined && user.icon !== null ? <img src={user.icon} alt="" /> : <NavBarProfileSVG />}
            </span>
            <input type="button" value="Выход" className="button red-btn" onClick={onLogOut} />
            <ProfileModal show={show} handleClose={handleClose} />
        </div>
    );
};

export default NavBarProfile;
