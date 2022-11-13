import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import DashboardGraphicModal from "../Modals/DashboardGraphicModal/DashboardGraphicModal";
import DashboardItem from "./DashboardItem";

const DashboardGraphicItemData = [
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

const DashboardGraphicItem = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        console.log("Close", show);
        setShow(false);
    };
    const handleShow = () => {
        console.log("Show", show);
        setShow(true);
    };

    return (
        <>
            <DashboardItem title="График" extraStyle="dashboard-item-hover" onClick={handleShow}>
                <ResponsiveContainer width={"100%"} height="80%">
                    <LineChart
                        width={500}
                        height={300}
                        data={DashboardGraphicItemData}
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
            </DashboardItem>
            <DashboardGraphicModal show={show} handleClose={handleClose} />
        </>
    );
};

export default DashboardGraphicItem;
