import ProfileModal from "components/Auth/ProfileModal";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "redux/hooks";
import { selectUser } from "redux/slices/userSlice";
import NavBarProfileSVG from "./resources/NavBarProfileSVG";

const NavBarProfile = () => {
    const [show, setShow] = useState(false);
    const user = useAppSelector(selectUser);
    const navigate = useNavigate();

    const onLogOut = () => {
        // TODO Send logout to server
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
                {user.icon !== undefined ? <img src={user.icon} alt="" /> : <NavBarProfileSVG />}
            </span>
            <input type="button" value="Выход" className="button red-btn" onClick={onLogOut} />
            <ProfileModal show={show} handleClose={handleClose} />
        </div>
    );
};

export default NavBarProfile;
