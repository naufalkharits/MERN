import React from "react";
import Button from "../components/Button";
import { RiHome5Line } from "react-icons/ri";
import { BiCompass } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { GoGear } from "react-icons/go";
import { FiChevronDown } from "react-icons/fi";

function MainNav() {
    const navigate = useNavigate();
    return (
        <div className="flex h-screen flex-col justify-between dark:bg-neutral-800">
            <div>
                <div className="mb-4 flex h-20 items-center justify-between p-4">
                    <div className="flex items-center gap-2">
                        <div className="h-12 w-12 rounded-xl bg-neutral-100 dark:bg-neutral-700"></div>
                        <div>
                            <div className="font-semibold dark:text-neutral-300">
                                Naufal Kharits
                            </div>
                            <div className="dark:text-neutral-300">Admin</div>
                        </div>
                    </div>
                    <FiChevronDown className="h-8 w-8 cursor-pointer rounded-full p-1 hover:bg-neutral-200 hover:text-cyan-500 dark:text-neutral-300 dark:hover:bg-neutral-700" />
                </div>
                <div className="px-4">
                    <Button
                        className="flex w-full items-center gap-4 py-4 px-6 hover:rounded-2xl hover:bg-neutral-100 dark:hover:bg-neutral-700"
                        onClick={() => {
                            navigate("/dashboard");
                        }}
                    >
                        <RiHome5Line className="h-8 w-8 dark:text-neutral-300" />
                        <span className="text-lg font-medium dark:text-neutral-300">
                            Home
                        </span>
                    </Button>
                    <Button
                        className="flex w-full items-center gap-4 py-4 px-6 hover:rounded-2xl hover:bg-neutral-100 dark:hover:bg-neutral-700"
                        onClick={() => {
                            navigate("/explore");
                        }}
                    >
                        <BiCompass className="h-8 w-8 dark:text-neutral-300" />
                        <span className="text-lg font-medium dark:text-neutral-300">
                            Explore
                        </span>
                    </Button>
                </div>
            </div>
            <div>
                <div className="mb-4 px-4">
                    <Button className="flex w-full items-center gap-4 rounded-2xl py-4 px-6 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-700">
                        <GoGear className="hover:text-cyan-300" />
                        <span className="font-medium">Settings</span>
                    </Button>
                </div>
                <div className="flex justify-center p-4">
                    <img
                        className="w-16 cursor-pointer"
                        src="/images/logo.png"
                        alt=""
                        onClick={() => {
                            navigate("/");
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default MainNav;
