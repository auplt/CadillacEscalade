import React from "react";

type DashboardItemProps = {
    title: string;
    extraStyle?: string;
    children: React.ReactNode;
    onClick?: (() => void) | undefined;
};

const DashboardItem = ({ title, extraStyle, children, onClick }: DashboardItemProps) => {
    return (
        <div
            className={`dashboard-item ${extraStyle}`}
            onClick={() => {
                onClick && onClick();
            }}
        >
            <div className="dashboard-item-title">{title}</div>
            {children}
        </div>
    );
};

export default DashboardItem;
