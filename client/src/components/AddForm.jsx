import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { insertVehicle } from "../features/vehiclesSlice";

const AddForm = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [seat, setSeat] = useState("");
    const [color, setColor] = useState("");
    const [year, setYear] = useState(0);
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.vehicles.loading);
    // insert
    const createVehicle = async (e) => {
        e.preventDefault();
        dispatch(
            insertVehicle({
                name,
                seat,
                color,
                year,
                price,
                description,
                image,
            })
        );
        console.log(loading);
        navigate("/explore");
    };

    return (
        <>
            <form id="add-form" onSubmit={createVehicle}>
                <div className="mb-8 flex flex-wrap gap-4">
                    {/* name */}
                    <label className="block">
                        <span className="block dark:text-neutral-300">
                            Car Name
                        </span>
                        <input
                            className="rounded-xl border-neutral-200 bg-neutral-100 py-1 px-3 focus:border focus:border-neutral-300 focus:ring-0 dark:border-neutral-700 dark:bg-neutral-700 dark:text-neutral-300 dark:focus:border-neutral-600"
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <label className="block">
                        <span className="block dark:text-neutral-300">
                            Car Sheet
                        </span>
                        <input
                            className="rounded-xl border-neutral-200 bg-neutral-100 py-1 px-3 focus:border focus:border-neutral-300 focus:ring-0 dark:border-neutral-700 dark:bg-neutral-700 dark:text-neutral-300 dark:focus:border-neutral-600"
                            type="number"
                            onChange={(e) => setSeat(e.target.value)}
                        />
                    </label>
                    {/* color */}
                    <label className="block">
                        <span className="block dark:text-neutral-300">
                            Car Color
                        </span>
                        <input
                            className="rounded-xl border-neutral-200 bg-neutral-100 py-1 px-3 focus:border focus:border-neutral-300 focus:ring-0 dark:border-neutral-700 dark:bg-neutral-700 dark:text-neutral-300 dark:focus:border-neutral-600"
                            type="text"
                            onChange={(e) => setColor(e.target.value)}
                        />
                    </label>
                    <label className="block">
                        <span className="block dark:text-neutral-300">
                            Car Year
                        </span>
                        <input
                            className="rounded-xl border-neutral-200 bg-neutral-100 py-1 px-3 focus:border focus:border-neutral-300 focus:ring-0 dark:border-neutral-700 dark:bg-neutral-700 dark:text-neutral-300 dark:focus:border-neutral-600"
                            type="number"
                            onChange={(e) => setYear(e.target.value)}
                        />
                    </label>
                    <label className="block">
                        <span className="block dark:text-neutral-300">
                            Car Description
                        </span>
                        <input
                            className="rounded-xl border-neutral-200 bg-neutral-100 py-1 px-3 focus:border focus:border-neutral-300 focus:ring-0 dark:border-neutral-700 dark:bg-neutral-700 dark:text-neutral-300 dark:focus:border-neutral-600"
                            type="text"
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </label>
                    <label className="block">
                        <span className="block dark:text-neutral-300">
                            Car Price
                        </span>
                        <input
                            className="rounded-xl border-neutral-200 bg-neutral-100 py-1 px-3 focus:border focus:border-neutral-300 focus:ring-0 dark:border-neutral-700 dark:bg-neutral-700 dark:text-neutral-300 dark:focus:border-neutral-600"
                            type="number"
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </label>
                </div>
                <label className="block">
                    <span className="block dark:text-neutral-300">
                        Car Image
                    </span>
                    <input
                        className="block cursor-pointer file:cursor-pointer file:rounded-full file:border-none file:bg-rose-500 file:py-1 file:px-3 file:text-white dark:text-neutral-300 dark:file:text-neutral-300"
                        type="file"
                        accept=".svg, .png, .jpeg, .jpg, .webp"
                        onChange={(e) => {
                            setImage(e.target.files[0]);
                        }}
                    />
                </label>
            </form>
        </>
    );
};

export default AddForm;
