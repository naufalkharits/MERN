import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AddForm from "../components/AddForm";
import Button from "../components/Button";
import EditForm from "../components/EditForm";
import Topbar from "../components/Topbar";

const AddCar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="h-screen border-x border-neutral-200 dark:border-neutral-700">
            <Topbar />
            <div className="p-8">
                <div className="mb-8 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="h-6 w-1 bg-rose-500"></div>
                        <span className="text-2xl font-semibold dark:text-neutral-300">
                            Add Car
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button
                            className={
                                "rounded-full border border-neutral-200 py-2 px-4 hover:border-neutral-300 hover:bg-neutral-200 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700"
                            }
                            onClick={() => {
                                navigate("/explore");
                            }}
                        >
                            Cancel
                        </Button>
                        <button
                            className="rounded-full border border-neutral-200 py-2 px-4 hover:border-neutral-300 hover:bg-neutral-200 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700"
                            type="submit"
                            form="add-form"
                        >
                            Save
                        </button>
                    </div>
                </div>
                {location.pathname === "/explore/add" ? (
                    <AddForm />
                ) : (
                    <EditForm />
                )}
            </div>
        </div>
    );
};

export default AddCar;
