import React from "react";
import NavBarProfileSVG from "components/NavBar/resources/NavBarProfileSVG";
import { Modal } from "react-bootstrap";
import { useAppSelector } from "redux/hooks";
import { selectUser } from "redux/slices/userSlice";

type ProfileModalProps = {
    show: boolean;
    handleClose: () => void;
};

const ProfileModal = ({ show, handleClose }: ProfileModalProps) => {
    const user = useAppSelector(selectUser);
    const handleChangeProfile = () => {
        // TODO Send to server user profile changes
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered className="modal" size="lg">
            <Modal.Header className="text-center" closeButton>
                <Modal.Title className="w-100">Изменение профиля</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
                <div className="row">
                    <div className="col-3 text-center">
                        <div>{user.icon !== undefined ? <img src={user.icon} alt="" /> : <NavBarProfileSVG />}</div>
                        <div className="profile-modal-tab-selected">Основные данные</div>
                        <div className="profile-modal-tab">Личные данные</div>
                        <div className="profile-modal-tab">Изменение пароля</div>
                    </div>
                    <div className="col-9">
                        <form>
                            <div className="auth-form-input-block">
                                <input type="text" placeholder="Имя" className="auth-form-input" value={user.name} />
                            </div>
                            <div className="auth-form-input-block">
                                <input
                                    type="text"
                                    placeholder="Фамилия"
                                    className="auth-form-input"
                                    value={user.surname}
                                />
                            </div>
                            <div className="auth-form-input-block">
                                <input
                                    type="text"
                                    placeholder="Логин"
                                    className="auth-form-input"
                                    value={user.username}
                                />
                            </div>
                            <div className="mt-4">
                                <input
                                    type="button"
                                    className="button red-btn me-4"
                                    value="Изменить"
                                    onClick={handleChangeProfile}
                                />
                                <input
                                    type="button"
                                    className="button white-btn"
                                    value="Отменить"
                                    onClick={handleClose}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default ProfileModal;
