import { ServerAPI_POST } from "libs/ServerAPI";
import React from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import {
    resetFormDonate,
    selectFormDonate,
    setFormDonateComment,
    setFormDonateSender,
    setFormDonateSumm,
} from "redux/slices/formDonateSlice";
import DonateAlphaSVG from "./resources/DonateAlphaSVG";

const DonatePage = () => {
    const formDonate = useAppSelector(selectFormDonate);
    const dispatch = useAppDispatch();
    const { streamer } = useParams();

    const handleSubmit = () => {
        ServerAPI_POST({
            url: "/api/v1/donate/save",
            body: {
                username: streamer,
                sender: formDonate.sender,
                summ: formDonate.summ,
                comment: formDonate.comment,
                date: "2022-12-01",
            },
            useToken: false,
            onDataReceived: (data) => {
                console.log("Login", data.access_token);
                dispatch(resetFormDonate);
            },
            handleStatus: (res) => {
                console.log(res);
            },
        });
    };

    const handleChangeSender = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setFormDonateSender(e.target.value));
    };
    const handleChangeSumm = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setFormDonateSumm(e.target.value));
    };
    const handleChangeComment = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setFormDonateComment(e.target.value));
    };

    return (
        <div>
            <div className="auth-form-block text-center">
                <div className="auth-form-title">Донат для {streamer}</div>
                <form>
                    <div className="auth-form-input-block">
                        <input
                            type="text"
                            placeholder="Никнейм"
                            className="auth-form-input"
                            value={formDonate.sender}
                            onChange={handleChangeSender}
                        />
                    </div>
                    <div className="auth-form-input-block">
                        <input
                            type="number"
                            placeholder="Сумма"
                            className="auth-form-input"
                            value={formDonate.summ}
                            onChange={handleChangeSumm}
                        />
                    </div>
                    <div className="auth-form-input-block">
                        <input
                            type="text"
                            placeholder="Текст доната"
                            className="auth-form-input"
                            value={formDonate.comment}
                            onChange={handleChangeComment}
                        />
                    </div>
                    <div className="card-holder">
                        <div className="ms-auto pt-4 d-flex justify-content-end me-5">
                            <DonateAlphaSVG />
                        </div>
                        <div className="auth-form-input-block">
                            <input type="text" placeholder="Номер карты" className="card-holder-input mt-3" />
                        </div>
                        <div className="auth-form-input-block d-flex justify-content-between">
                            <input type="text" placeholder="ММ/ГГ" className="card-holder-input me-5" />
                            <input type="text" placeholder="CVC/CVV" className="card-holder-input" />
                        </div>
                    </div>
                    <input type="button" value="Отправить" className="button red-btn auth-btn" onClick={handleSubmit} />
                </form>
            </div>
        </div>
    );
};

export default DonatePage;
