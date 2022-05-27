import React from "react";
import AC from "./AreaChart";

const Widget = () => {
    return (
        <div className="h-48 rounded-xl bg-neutral-100 p-2 dark:bg-neutral-800">
            <div className="flex justify-between">
                <span className="dark:text-neutral-300">Persen here</span>
                <span className="dark:text-neutral-400">Orders</span>
            </div>
            <AC />
        </div>
    );
};

export default Widget;
