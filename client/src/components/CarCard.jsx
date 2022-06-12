import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteVehicle } from "../features/vehiclesSlice";
import { FiEdit2, FiX } from "react-icons/fi";
import { HiColorSwatch } from "react-icons/hi";
import { GiCarSeat } from "react-icons/gi";

const CarCard = ({ id, image, name, year, price, seat, color }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <div
            className="overflow-hidden rounded-xl border border-neutral-200 shadow dark:border-neutral-700"
            key={id}
        >
            {location.pathname === "/explore" && (
                <div className="mb-2 flex justify-between">
                    <div></div>
                    <div className="px-2 pt-2">
                        <FiX
                            className="h-6 w-6 cursor-pointer rounded-full p-1 hover:bg-neutral-200 hover:text-rose-500 dark:text-neutral-300 dark:hover:bg-neutral-700"
                            onClick={() => dispatch(deleteVehicle(id))}
                        />
                    </div>
                </div>
            )}
            <img className="w-full" src={image} alt="" />
            <div className="mb-4 space-y-4 px-4">
                <div className="">
                    <div className="flex items-center gap-1">
                        <span className="text-sm font-medium dark:text-neutral-300">
                            {name}
                        </span>
                        <span className="text-xs dark:text-neutral-300">
                            {year}
                        </span>
                    </div>
                    <span className="font-semibold dark:text-neutral-300">
                        $ {price}
                    </span>
                    <span className="text-sm dark:text-neutral-300">
                        {" "}
                        / day
                    </span>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center">
                            <GiCarSeat className="text-rose-500" />
                            <span className="dark:text-neutral-300">
                                {seat}
                            </span>
                        </div>
                        <div className="flex items-center">
                            <HiColorSwatch className="text-rose-500" />
                            <span className="dark:text-neutral-300">
                                {color}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {location.pathname === "/explore" && (
                <button
                    className="group flex w-full items-center justify-center gap-2 border-t border-neutral-200 p-2 hover:bg-neutral-200 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700"
                    onClick={() => {
                        navigate(`edit/${id}`);
                    }}
                >
                    <FiEdit2 className="group-hover:text-rose-500" />
                    <span>Edit Car</span>
                </button>
            )}
            {location.pathname === "/car" && (
                <button
                    className="w-full border-t border-neutral-200 p-2 hover:bg-neutral-200 hover:text-rose-600 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700"
                    onClick={() => {
                        navigate(`${id}`);
                    }}
                >
                    Rent Car
                </button>
            )}
        </div>
    );
};

export default CarCard;
