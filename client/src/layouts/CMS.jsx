import React from "react";
import { Outlet } from "react-router-dom";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";

function Dashboard() {
    return (
        <div className="flex">
            <div className="flex-1">
                <LeftSidebar />
            </div>
            <div className="flex-[3_3_0%]">
                <Outlet />
            </div>
            <div className="flex-1">
                <RightSidebar />
            </div>
        </div>
    );
}

export default Dashboard;
