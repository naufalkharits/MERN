import React from "react";
import { useNavigate } from "react-router-dom";
import CarCard from "../components/CarCard";
import Button from "../components/Button";
import Topbar from "../components/Topbar";

const Explore = () => {
    const navigate = useNavigate();
    return (
        <div className="h-screen border-x border-neutral-200 dark:border-neutral-700">
            <Topbar />
            <div className="p-8">
                <div className="mb-8 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="h-6 w-1 bg-cyan-500"></div>
                        <span className="text-2xl font-semibold dark:text-neutral-300">
                            List Car
                        </span>
                    </div>
                    <Button
                        className={
                            "rounded-full border border-neutral-200 py-2 px-4 hover:bg-neutral-200 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700"
                        }
                        onClick={() => {
                            navigate("add");
                        }}
                    >
                        Add Car
                    </Button>
                </div>
                <div className="mb-4 flex gap-4">
                    <CarCard />
                </div>
            </div>
        </div>
    );
};

export default Explore;
