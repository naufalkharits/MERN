import React from "react";
import PC from "./PieChart";

const WidgetTest = () => {
    return (
        <div className="h-72 rounded-xl bg-neutral-100 p-2 dark:bg-neutral-800">
            <div className="flex justify-between">
                <span className="dark:text-neutral-300">Persen here</span>
                <span className="dark:text-neutral-400">Orders</span>
            </div>
            <PC />
        </div>
    );
};

export default WidgetTest;
