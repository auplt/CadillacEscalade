import React from "react";
import { Modal } from "react-bootstrap";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
    {
        date: "2016",
        Gold: 2400,
    },
    {
        date: "2017",
        Gold: 1398,
    },
    {
        date: "2018",
        Gold: 9800,
    },
    {
        date: "2019",
        Gold: 3908,
    },
    {
        date: "2020",
        Gold: 4800,
    },
    {
        date: "2021",
        Gold: 3800,
    },
    {
        date: "2022",
        Gold: 4300,
    },
];

type DashboardGraphicModalProps = {
    show: boolean;
    handleClose: () => void;
};

const DashboardGraphicModal = ({ show, handleClose }: DashboardGraphicModalProps) => {
    // TODO Get new Dada from server then fields changed
    return (
        <Modal show={show} onHide={handleClose} centered size="xl">
            <Modal.Header closeButton>
                <Modal.Title className="w-100">График</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <span>
                        От <input type="date" className="modal-input" onChange={(e) => console.log(e.target.value)} />
                    </span>
                    <span className="ms-5">
                        До <input type="date" className="modal-input" onChange={(e) => console.log(e.target.value)} />
                    </span>
                </div>
                <div className="mt-4">
                    <span className="ms-5">
                        Параметр{" "}
                        <select className="modal-input">
                            <option>Донаты по дням</option>
                            <option>Донаты по месяцам</option>
                        </select>
                    </span>
                </div>
                <div style={{ width: "100%", height: "600px", marginTop: "40px" }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" name="Год" />
                            <YAxis name="Gold" />
                            <Tooltip />
                            <Line type="monotone" dataKey="Gold" name="Руб" stroke="#8884d8" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default DashboardGraphicModal;
