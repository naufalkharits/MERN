import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVehicles, vehiclesSelectors } from "../features/vehiclesSlice";
import CarCard from "../components/CarCard";

function Car() {
    const dispatch = useDispatch();
    const vehicles = useSelector(vehiclesSelectors.selectAll);

    useEffect(() => {
        dispatch(fetchVehicles());
    }, [dispatch]);

    return (
        <div className="grid grid-cols-fit-96 justify-center gap-4">
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
    );
}

export default Car;
