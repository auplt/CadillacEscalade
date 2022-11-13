import React from "react";
import DashboardItem from "./DashboardItem";
import DashboardMenuItem from "./DashboardMenuItem";
import DashboardQrSVG from "./resources/DashboardQrSVG";
import DashboardQuizSVG from "./resources/DashboardQuizSVG";
import DashboardSaveSVG from "./resources/DashboardSaveSVG";

const DashboardMenu = () => {
    return (
        <DashboardItem title="Меню">
            <div className="row">
                <div className="col-6">
                    <DashboardMenuItem title="ПРОВЕДЕНИЕ ОПРОСА" img={<DashboardQuizSVG />} />
                </div>
                <div className="col-6">
                    <DashboardMenuItem title="СБОР СРЕДСТВ" img={<DashboardSaveSVG />} />
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <DashboardMenuItem title="QR-КОД НА ОПЛАТУ" img={<DashboardQrSVG />} />
                </div>
            </div>
        </DashboardItem>
    );
};

export default DashboardMenu;
