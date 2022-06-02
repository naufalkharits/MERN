import React from "react";
import Search from "./Search";
import Widget from "./Widget";
import { GoGear } from "react-icons/go";
import WidgetTest from "./WidgetTest";

const RightSidebar = () => {
    return (
        <div className="h-screen space-y-4">
            <div className="flex h-20 flex-col justify-center p-4">
                <Search />
            </div>
            <div className="flex items-center justify-between px-4 dark:text-neutral-300">
                <span className="font-medium">Widgets</span>
                <GoGear className="cursor-pointer hover:text-rose-500" />
            </div>
            <div className="space-y-4 px-4">
                <Widget />
                <WidgetTest />
                <Widget />
            </div>
        </div>
    );
};

export default RightSidebar;
