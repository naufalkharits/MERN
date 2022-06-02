import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars, carsSelectors } from "../features/cars";
import Button from "./Button";
import { GiCarSeat } from "react-icons/gi";
import { GoGear } from "react-icons/go";
import { AiTwotoneCalendar } from "react-icons/ai";

function AllCar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cars = useSelector(carsSelectors.selectAll);

    useEffect(() => {
        dispatch(fetchCars());
    }, [dispatch]);

    return (
        <>
            {cars.map((car) => {
                return (
                    <div
                        className="overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-700"
                        key={car.id}
                    >
                        <img className="w-full" src={car.image} alt="" />
                        <div className="mb-4 space-y-4 px-4">
                            <div>
                                <div className="text-sm font-medium dark:text-neutral-300">
                                    {car.name}
                                </div>
                                <span className="font-semibold dark:text-neutral-300">
                                    {new Intl.NumberFormat("id-ID", {
                                        style: "currency",
                                        currency: "IDR",
                                    }).format(car.price)}{" "}
                                </span>
                                <span className="text-sm dark:text-neutral-300">
                                    {" "}
                                    / day
                                </span>
                            </div>
                            <p className="dark:text-neutral-300">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 dark:text-neutral-300">
                                    <GiCarSeat className="text-rose-500" />
                                    <span>{car.sheet} orang</span>
                                </div>
                                <div className="flex items-center gap-2 dark:text-neutral-300">
                                    <GoGear className="text-rose-500" />
                                    <span>{car.motor}</span>
                                </div>
                                <div className="flex items-center gap-2 dark:text-neutral-300">
                                    <AiTwotoneCalendar className="text-rose-500" />
                                    <span>Tahun {car.year}</span>
                                </div>
                            </div>
                        </div>
                        <Button
                            className={
                                "w-full border-t border-neutral-200 p-2 hover:bg-neutral-200 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700"
                            }
                            onClick={() => {
                                navigate(`${car.id}`);
                            }}
                        >
                            Rent Car
                        </Button>
                    </div>
                );
            })}
        </>
    );
}

export default AllCar;
