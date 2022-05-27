import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars, carsSelectors } from "../features/cars";
import Button from "./Button";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { BsGear, BsCalendar4 } from "react-icons/bs";

function AllCar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cars = useSelector(carsSelectors.selectAll);

    useEffect(() => {
        dispatch(fetchCars());
    }, [dispatch]);

    return (
        <>
            {cars.map((item) => {
                return (
                    <div
                        className="min-h-fit rounded-lg border p-6 dark:border-slate-700 2xl:w-96"
                        key={item.id}
                    >
                        <div className="h-fit md:h-40">
                            <img src={item.image} alt="" className="h-full" />
                        </div>
                        <h2 className="text-sm dark:text-white">{item.name}</h2>
                        <h1 className="font-bold dark:text-white">
                            {new Intl.NumberFormat("id-ID", {
                                style: "currency",
                                currency: "IDR",
                            }).format(item.price)}{" "}
                            / hari
                        </h1>
                        <p className="dark:text-white">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>
                        <div className="flex items-center gap-2 dark:text-white">
                            <MdOutlinePeopleAlt />
                            <span>{item.sheet} orang</span>
                        </div>
                        <div className="flex items-center gap-2 dark:text-white">
                            <BsGear />
                            <span>{item.motor}</span>
                        </div>
                        <div className="flex items-center gap-2 dark:text-white">
                            <BsCalendar4 />
                            <span>Tahun {item.year}</span>
                        </div>
                        <Button
                            className={
                                "bg-fern px-4 py-2 text-white transition-all hover:bg-green-700"
                            }
                            onClick={() => {
                                navigate(`${item.id}`);
                            }}
                        >
                            Pilih Mobil
                        </Button>
                    </div>
                );
            })}
        </>
    );
}

export default AllCar;
