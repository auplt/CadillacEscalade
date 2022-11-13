import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { selectDashboard, setDashboardPreview } from "redux/slices/dashboardSlice";
import DashboardHistory from "./DashboardHistory";
import DashboardGraphicItem from "./Items/DashboardGraphicItem";
import DashboardMenu from "./Items/DashboardMenu";
import DashboardStatisticsItem from "./Items/DashboardStatisticsItem";
import DashboardTimeStatItem from "./Items/DashboardTimeStatItem";

const DashboardPage = () => {
    const dashboard = useAppSelector(selectDashboard);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const data = {
            history: [
                {
                    username: "Vasia",
                    message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
                    //date: new Date(),
                },
            ],
        };
        dispatch(setDashboardPreview(data));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            {dashboard.items === undefined ? (
                <div>Loading . . .</div>
            ) : (
                <div className="row">
                    <div className="col-9">
                        <div className="row">
                            <div className="col-6">
                                <DashboardStatisticsItem />
                            </div>
                            <div className="col-6">
                                <DashboardGraphicItem />
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-6">
                                <DashboardMenu />
                            </div>
                            <div className="col-6">
                                <DashboardTimeStatItem />
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <DashboardHistory items={dashboard.items.history} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default DashboardPage;
