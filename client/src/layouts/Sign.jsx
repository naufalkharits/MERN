import React from "react";
import { Outlet } from "react-router-dom";

function Sign() {
    return (
        <div className="Sign">
            <div className="childSign">
                <Outlet />
            </div>
        </div>
    );
}

export default Sign;
