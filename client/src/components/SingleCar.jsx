import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { carsSelectors, fetchCars } from "../features/cars";
import Button from "./Button";

import { MdOutlinePeopleAlt } from "react-icons/md";
import { BsGear, BsCalendar4 } from "react-icons/bs";

function SingleCar() {
    const { carId } = useParams();
    const dispatch = useDispatch();
    const cars = useSelector((state) => carsSelectors.selectById(state, carId));

    useEffect(() => {
        dispatch(fetchCars());
    }, [dispatch]);

    return (
        <div
            className="flex h-[30rem] flex-col justify-between rounded-lg border p-6 dark:border-slate-700 2xl:w-96"
            key={cars.id}
        >
            <div className="space-y-4">
                <div className="h-56">
                    <img src={cars.image} alt="" className="h-full" />
                </div>
                <h2 className="text-sm font-bold dark:text-white">
                    {cars.name}
                </h2>
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-xs dark:text-white">
                        <MdOutlinePeopleAlt />
                        <span>4 orang</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs dark:text-white">
                        <BsGear />
                        <span>Manual</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs dark:text-white">
                        <BsCalendar4 />
                        <span>Tahun 2020</span>
                    </div>
                </div>
            </div>
            <div className="space-y-4">
                <div className="flex items-center justify-between text-sm dark:text-white ">
                    <span>Total</span>
                    <h1 className="font-bold">
                        {new Intl.NumberFormat("id-ID", {
                            style: "currency",
                            currency: "IDR",
                        }).format(cars.price)}
                    </h1>
                </div>
                <Button
                    className={
                        "bg-fern w-full py-2 text-white transition-all hover:bg-green-700"
                    }
                >
                    Lanjutkan Pembayaran
                </Button>
            </div>
        </div>
    );
}

export default SingleCar;
