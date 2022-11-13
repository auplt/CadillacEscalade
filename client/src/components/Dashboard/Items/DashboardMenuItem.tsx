import React from "react";

type DashboardMenuItemProps = {
    title: string;
    img: React.ReactNode;
};

const DashboardMenuItem = ({ title, img }: DashboardMenuItemProps) => {
    return (
        <div className="dashboard-menu-item">
            <div>{title}</div>
            <div>{img}</div>
        </div>
    );
};

export default DashboardMenuItem;
