import React from "react";

type DashboardHistoryItemProps = {
    item: any;
};

const DashboardHistoryItem = ({ item }: DashboardHistoryItemProps) => {
    return (
        <div style={{ borderBottom: "1px solid black" }}>
            <div>
                <span className="me-5">{item.username}</span>
                <span className="ps-5">{item.date}</span>
            </div>
            <div>{item.message}</div>
        </div>
    );
};

export default DashboardHistoryItem;
