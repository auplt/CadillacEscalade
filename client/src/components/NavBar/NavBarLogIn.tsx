import React from "react";
import { useNavigate } from "react-router-dom";

const NavBarLogIn = () => {
    const navigate = useNavigate();

    return (
        <div>
            <input type="button" value="Вход" className="button white-btn me-4" onClick={() => navigate("/login")} />
            <input type="button" value="Регистрация" className="button red-btn" onClick={() => navigate("/register")} />
        </div>
    );
};

export default NavBarLogIn;
