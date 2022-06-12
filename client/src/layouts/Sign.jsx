import React from "react";
import { Outlet } from "react-router-dom";

function Sign() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-[url('/public/img/car.jpg')] bg-cover bg-center bg-no-repeat sm:justify-end">
            <div className="flex flex-col justify-center rounded-xl bg-white/95 dark:bg-neutral-900/95 sm:right-0 sm:h-screen sm:w-2/5 sm:rounded-none sm:bg-white dark:sm:bg-neutral-900 xs:w-96 3xl:w-1/4">
                <Outlet />
            </div>
        </div>
    );
}

export default Sign;
