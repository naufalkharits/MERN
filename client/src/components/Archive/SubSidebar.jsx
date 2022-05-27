import React from "react";

function SubNav() {
    return (
        <div className="h-full w-56 bg-white dark:bg-slate-800">
            <div className="p-2 text-sm font-bold text-slate-400">
                DASHBOARD
            </div>
            <div className="p-2 text-sm font-bold hover:bg-hawkes-blue hover:transition-all  dark:text-white">
                Main
            </div>
            <div className="p-2 text-sm font-bold hover:bg-hawkes-blue hover:transition-all dark:text-white">
                Sub
            </div>
        </div>
    );
}

export default SubNav;
