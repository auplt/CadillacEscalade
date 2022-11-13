import React from "react";

type DashboardHistoryItemProps = {
    item: any;
};

const DashboardHistoryItem = ({ item }: DashboardHistoryItemProps) => {
    return (
        <div>
            <div>
                <span>{item.username}</span>
                {/* <span>{" " + item.date.toLocaleDateString("ru-RU") + " " + item.date.toLocaleTimeString("ru-RU")}</span> */}
            </div>
            <div>{item.message}</div>
        </div>
    );
};

export default DashboardHistoryItem;
