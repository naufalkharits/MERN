import React from "react";
import { useNavigate } from "react-router-dom";
import { GiTruck } from "react-icons/gi";

function Navbar() {
    const navigate = useNavigate();
    return (
        <div className="bg-hawkes-blue dark:bg-hawkes-dblue">
            <div className="container mx-auto flex items-center justify-between p-4">
                <img
                    className="h-8 cursor-pointer"
                    src="/images/logo.png"
                    alt=""
                    onClick={() => {
                        navigate("/");
                    }}
                />
                <div className="flex items-center gap-4 dark:text-white">
                    <span className="font-bold text-slate-500 dark:text-white">
                        Our Services
                    </span>
                    <span className="font-bold text-slate-500 dark:text-white">
                        Why Us
                    </span>
                    <span className="font-bold text-slate-500 dark:text-white">
                        Testimonial
                    </span>
                    <span className="font-bold text-slate-500 dark:text-white">
                        FAQ
                    </span>
                    <button className="rounded bg-cyan-500 py-1 px-3 font-bold text-white hover:bg-cyan-600">
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
