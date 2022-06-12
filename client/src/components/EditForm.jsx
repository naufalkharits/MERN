import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
    fetchVehicles,
    updateVehicle,
    vehiclesSelectors,
} from "../features/vehiclesSlice";
import Button from "./Button";

const EditForm = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const dispatch = useDispatch();
    const { vehicleId } = useParams();

    const vehicle = useSelector((state) =>
        vehiclesSelectors.selectById(state, vehicleId)
    );

    useEffect(() => {
        dispatch(fetchVehicles());
    }, [dispatch]);

    useEffect(() => {
        console.log(vehicle);
        if (vehicle) {
            setName(vehicle.name);
            setPrice(vehicle.price);
        }
    }, [vehicle]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        await dispatch(updateVehicle({ vehicleId, name, price }));
        navigate("/explore");
    };

    return (
        <>
            <form onSubmit={handleUpdate}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <button
                    className="rounded-full border border-neutral-200 py-2 px-4 hover:bg-neutral-200 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700"
                    type="submit"
                >
                    Edit
                </button>
            </form>
        </>
    );
};

export default EditForm;
