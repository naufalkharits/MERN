import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
    fetchVehicles,
    updateVehicle,
    vehiclesSelectors,
} from "../features/vehicles";
import Button from "./Button";

const EditForm = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const dispatch = useDispatch();
    const { id } = useParams();

    const vehicle = useSelector((state) =>
        vehiclesSelectors.selectById(state, id)
    );

    useEffect(() => {
        dispatch(fetchVehicles());
    }, [dispatch]);

    useEffect(() => {
        if (vehicle) {
            setName(vehicle.name);
            setPrice(vehicle.price);
        }
    }, [vehicle]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        await dispatch(updateVehicle({ id, name, price }));
        navigate("/explore");
    };

    return (
        <>
            <form onSubmit={handleUpdate}>
                <input type="text" onChange={(e) => setName} />
                <input type="text" onChange={(e) => setPrice} />
                <Button
                    className={
                        "rounded-full border border-neutral-200 py-2 px-4 hover:bg-neutral-200 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700"
                    }
                    type={"submit"}
                >
                    Edit
                </Button>
            </form>
        </>
    );
};

export default EditForm;
