import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { insertVehicle } from "../features/vehicles";
import Button from "./Button";

const AddForm = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const dispatch = useDispatch();
    // insert
    const createVehicle = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "nvqdlovn");
        axios
            .post(process.env.REACT_APP_CLOUDINARY_API_URL, formData)
            .then((res) => {
                console.log(res);
                setImage(res);
            });
        dispatch(
            insertVehicle({
                name,
                price,
                image,
            })
        );
        navigate("/explore");
    };

    return (
        <>
            <form onSubmit={createVehicle}>
                <input type="text" onChange={(e) => setName} />
                <input type="text" onChange={(e) => setPrice} />
                <input
                    type="file"
                    onChange={(e) => {
                        setImage(e.target.files[0]);
                    }}
                />
                <Button
                    className={
                        "rounded-full border border-neutral-200 py-2 px-4 hover:bg-neutral-200 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700"
                    }
                >
                    Save
                </Button>
            </form>
        </>
    );
};

export default AddForm;
