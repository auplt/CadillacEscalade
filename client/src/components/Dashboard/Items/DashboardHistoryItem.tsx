import React from "react";

type DashboardHistoryItemProps = {
    item: any;
};

const DashboardHistoryItem = ({ item }: DashboardHistoryItemProps) => {
    return (
        <div style={{ borderBottom: "1px solid black" }}>
            <div>
                <span className="me-5">{item.sender}</span>
                <span className="ps-5">{item.date}</span>
            </div>
            <div>{item.summ} Руб</div>
            <div>{item.comment}</div>
        </div>
    );
};

export default DashboardHistoryItem;
