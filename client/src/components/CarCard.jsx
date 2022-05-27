import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchVehicles,
    deleteVehicle,
    vehiclesSelectors,
} from "../features/vehicles";
import Button from "./Button";
import { FiEdit2, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const CarCard = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const vehicles = useSelector(vehiclesSelectors.selectAll);
    useEffect(() => {
        dispatch(fetchVehicles());
    }, [dispatch]);
    return (
        <>
            {vehicles.map((car) => {
                return (
                    <div
                        className="flex-1 rounded-xl bg-neutral-100 p-2 dark:bg-neutral-800"
                        key={car.id}
                    >
                        <div className="mb-2 flex justify-between">
                            <div></div>
                            <FiX
                                className="h-6 w-6 cursor-pointer rounded-full p-1 hover:bg-neutral-200 hover:text-cyan-500 dark:text-neutral-300 dark:hover:bg-neutral-700"
                                onClick={() => dispatch(deleteVehicle(car.id))}
                            />
                        </div>
                        <img className="mb-4 w-full" src={car.image} alt="" />
                        <div className="mb-4">
                            <div className="text-sm font-medium dark:text-neutral-300">
                                {car.name}
                            </div>
                            <span className="font-semibold dark:text-neutral-300">
                                $ {car.price}
                            </span>
                            <span className="text-sm dark:text-neutral-300">
                                {" "}
                                / day
                            </span>
                        </div>
                        <Button
                            className={
                                "group flex w-full items-center justify-center gap-2 rounded-xl border border-neutral-200 p-2 hover:bg-neutral-200 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700"
                            }
                            onClick={() => {
                                navigate(`edit/${car.id}`);
                            }}
                        >
                            <FiEdit2 className="group-hover:text-cyan-500" />
                            <span>Edit Car</span>
                        </Button>
                    </div>
                );
            })}
        </>
    );
};

export default CarCard;
