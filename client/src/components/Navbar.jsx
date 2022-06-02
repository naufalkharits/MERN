import React from "react";
import { useNavigate } from "react-router-dom";
import { GiTruck } from "react-icons/gi";

function Navbar() {
    const navigate = useNavigate();
    return (
        <nav className="bg-neutral-300 dark:bg-neutral-800">
            <div className="container mx-auto flex items-center justify-between p-4">
                <img
                    className="h-8 cursor-pointer"
                    src="/images/Bicarent.png"
                    alt=""
                    onClick={() => {
                        navigate("/");
                    }}
                />
                <div className="hidden items-center gap-4 dark:text-white md:flex">
                    <span className="font-bold dark:text-white">
                        Our Services
                    </span>
                    <span className="font-bold dark:text-white">Why Us</span>
                    <span className="font-bold dark:text-white">
                        Testimonial
                    </span>
                    <span className="font-bold dark:text-white">FAQ</span>
                    <button className="rounded bg-rose-500 py-1 px-3 font-bold text-white hover:bg-rose-600">
                        Register
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
