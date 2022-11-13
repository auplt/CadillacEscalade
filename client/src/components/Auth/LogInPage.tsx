import { ServerAPI_POST } from "libs/ServerAPI";
import { SetToken } from "libs/Token";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { selectFormLogin, setFormLoginPassword, setFormLoginUsername } from "redux/slices/formLoginSlice";

type LogInPageProps = {
    tryLogin: () => void;
};

const LogInPage = ({ tryLogin }: LogInPageProps) => {
    const formLogin = useAppSelector(selectFormLogin);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setFormLoginUsername(e.target.value));
    };
    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setFormLoginPassword(e.target.value));
    };

    const handleSubmit = () => {
        ServerAPI_POST({
            url: "/api/v1/auth/login",
            body: {
                username: formLogin.username,
                password: formLogin.password,
            },
            useToken: false,
            onDataReceived: (data) => {
                console.log("Login", data.access_token);
                SetToken(data.access_token);
                tryLogin();
                navigate("/dashboard");
            },
            handleStatus: (res) => {
                console.log(res);
            },
        });
    };

    return (
        <div className="auth-form-block">
            <div className="auth-form-title">Вход</div>
            <form>
                <div className="auth-form-input-block">
                    <input
                        type="text"
                        placeholder="Логин"
                        className="auth-form-input"
                        value={formLogin.username}
                        onChange={handleChangeUsername}
                    />
                </div>
                <div className="auth-form-input-block">
                    <input
                        type="password"
                        placeholder="Пароль"
                        className="auth-form-input"
                        value={formLogin.password}
                        onChange={handleChangePassword}
                    />
                </div>
                <input type="button" value="Войти" className="button red-btn auth-btn" onClick={handleSubmit} />
            </form>
        </div>
    );
};

export default LogInPage;
