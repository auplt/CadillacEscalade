import React, { useEffect } from "react";
import LogInPage from "components/Auth/LogInPage";
import RegisterPage from "components/Auth/RegisterPage";
import DashboardPage from "components/Dashboard/DashboardPage";
import NavBar from "components/NavBar/NavBar";
import PrivateWrapper from "components/PrivateWrapper";
import { ServerAPI_GET } from "libs/ServerAPI";
import { DeleteToken, HasToken } from "libs/Token";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { selectUser, setUserData } from "redux/slices/userSlice";
import "./App.css";
import DonatePage from "components/Donate/DonatePage";

const App = () => {
    const user = useAppSelector(selectUser);
    const dispatch = useAppDispatch();

    const tryLogin = () => {
        console.log("TryLogin");
        if (HasToken()) {
            ServerAPI_GET({
                url: "/api/v1/auth/user",
                onDataReceived: (data) => {
                    if (data.access_token === undefined) {
                        console.log(data);
                        dispatch(setUserData({ isAuth: true, ...data }));
                    } else {
                        dispatch(setUserData({ isAuth: false }));
                    }
                },
                handleStatus: (res) => {
                    if ((res.status = 403)) {
                        console.log(res);
                        DeleteToken();
                        dispatch(setUserData({ isAuth: false }));
                    }
                },
                handleServerError: () => {
                    console.log("Error");
                    DeleteToken();
                    dispatch(setUserData({ isAuth: false }));
                },
            });
        } else dispatch(setUserData({ isAuth: false }));
    };

    useEffect(() => {
        tryLogin();
        //const data = { username: "Никнейм" };
        //dispatch(setUserData({ isAuth: true, ...data }));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (user.isAuth === true) {
        }
    }, [user.isAuth]);

    const NavigateIfLoged = (comp: React.ReactNode) => {
        return user.isAuth ? <Navigate to="/dashboard" /> : comp;
    };

    return (
        <div className="App">
            <NavBar drawAuth={user.isAuth !== undefined} />
            {user.isAuth === undefined ? (
                <></>
            ) : (
                <>
                    <div className="container">
                        <Routes>
                            <Route path="/" element={NavigateIfLoged(<div>Main Page</div>)} />
                            <Route path="/login" element={NavigateIfLoged(<LogInPage tryLogin={tryLogin} />)} />
                            <Route path="/register" element={NavigateIfLoged(<RegisterPage tryLogin={tryLogin} />)} />
                            <Route element={<PrivateWrapper condition={user.isAuth} />}>
                                <Route path="/dashboard" element={<DashboardPage />} />
                            </Route>
                        </Routes>
                    </div>
                    {/* <input type="button" value="T" onClick={() => console.log(GetToken())} /> */}
                </>
            )}
            <Routes>
                <Route path="/donate/:streamer" element={<DonatePage />} />
            </Routes>
        </div>
    );
};

export default App;
