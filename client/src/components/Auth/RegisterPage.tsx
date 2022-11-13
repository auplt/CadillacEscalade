import { ServerAPI_POST } from "libs/ServerAPI";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import {
    selectFormRegister,
    setFormRegisterEmail,
    setFormRegisterPassword1,
    setFormRegisterPassword2,
    setFormRegisterUsername,
} from "redux/slices/formRegisterSlice";

type RegisterPageProps = {
    tryLogin: () => void;
};

const RegisterPage = ({ tryLogin }: RegisterPageProps) => {
    const formRegister = useAppSelector(selectFormRegister);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setFormRegisterUsername(e.target.value));
    };
    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setFormRegisterEmail(e.target.value));
    };
    const handleChangePassword1 = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setFormRegisterPassword1(e.target.value));
    };
    const handleChangePassword2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setFormRegisterPassword2(e.target.value));
    };

    const handleSubmit = () => {
        if (formRegister.password1 === formRegister.password2) {
            ServerAPI_POST({
                url: "/api/v1/auth/streamer/save",
                body: {
                    username: formRegister.username,
                    email: formRegister.email,
                    password: formRegister.password1,
                },
                onDataReceived: () => {
                    tryLogin();
                    navigate("/login");
                },
            });
        }
    };

    return (
        <div className="auth-form-block">
            <div className="auth-form-title">Регистрация</div>
            <form>
                <div className="auth-form-input-block">
                    <input
                        type="text"
                        placeholder="Логин"
                        className="auth-form-input"
                        value={formRegister.username}
                        onChange={handleChangeUsername}
                    />
                </div>
                <div className="auth-form-input-block">
                    <input
                        type="email"
                        placeholder="Почта"
                        className="auth-form-input"
                        value={formRegister.email}
                        onChange={handleChangeEmail}
                    />
                </div>
                <div className="auth-form-input-block">
                    <input
                        type="password"
                        placeholder="Пароль"
                        className="auth-form-input"
                        value={formRegister.password1}
                        onChange={handleChangePassword1}
                    />
                </div>
                <div className="auth-form-input-block">
                    <input
                        type="password"
                        placeholder="Подтверждение пароля"
                        className="auth-form-input"
                        value={formRegister.password2}
                        onChange={handleChangePassword2}
                    />
                </div>
                <input type="button" value="Войти" className="button red-btn auth-btn" onClick={handleSubmit} />
            </form>
        </div>
    );
};

export default RegisterPage;
