import React from "react";

type DashboardItemProps = {
    title: string;
    extraStyle?: string;
    children: React.ReactNode;
};

const DashboardItem = ({ title, extraStyle, children }: DashboardItemProps) => {
    return (
        <div className={`dashboard-item ${extraStyle}`}>
            <div className="dashboard-item-title">{title}</div>
            {children}
        </div>
    );
};

export default DashboardItem;
