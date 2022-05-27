import React from "react";

function Topbar() {
    return (
        // <div className="flex h-16 w-full items-center justify-around bg-white dark:bg-slate-900">
        //     <div className="leftTopbar">
        //         <img src="images/dashboard-logo-2.svg" alt="" />
        //     </div>
        //     <div className="rightTopbar flex items-center gap-2">
        //         <div className="h-8 w-8 rounded-full bg-hawkes-blue"></div>
        //         <span className="text-sm">Naufal</span>
        //         <BsCaretDown />
        //     </div>
        // </div>
        <div className="flex h-20 flex-col justify-center border-b border-neutral-200 p-4 dark:border-neutral-700">
            <h1 className="text-center text-3xl dark:text-neutral-300">
                Hello, World!
            </h1>
        </div>
    );
}

export default Topbar;
