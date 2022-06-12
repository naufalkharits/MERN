import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVehicles, vehiclesSelectors } from "../features/vehiclesSlice";
import { useNavigate } from "react-router-dom";
import CarCard from "../components/CarCard";
import Button from "../components/Button";
import Topbar from "../components/Topbar";

const Explore = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const vehicles = useSelector(vehiclesSelectors.selectAll);

    useEffect(() => {
        dispatch(fetchVehicles());
    }, [dispatch]);

    return (
        <div className="border-x border-neutral-200 dark:border-neutral-700">
            <Topbar />
            <div className="p-8">
                <div className="mb-8 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="h-6 w-1 bg-rose-500"></div>
                        <span className="text-2xl font-semibold dark:text-neutral-300">
                            List Car
                        </span>
                    </div>
                    <Button
                        className={
                            "rounded-full border border-neutral-200 py-2 px-4 hover:bg-neutral-200 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700"
                        }
                        onClick={() => {
                            navigate("add");
                        }}
                    >
                        Add Car
                    </Button>
                </div>
                <div className="mb-4 grid grid-cols-fit-80 justify-center gap-4">
                    {vehicles.map((car) => (
                        <CarCard
                            id={car.id}
                            image={car.image}
                            name={car.name}
                            year={car.year}
                            price={car.price}
                            seat={car.seat}
                            color={car.color}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Explore;
