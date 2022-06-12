import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchVehicles, vehiclesSelectors } from "../features/vehiclesSlice";
import AboutPackage from "../components/AboutPackage";
import CarCard from "../components/CarCard";

function DetailCar() {
    const params = useParams();
    const dispatch = useDispatch();
    const vehicles = useSelector((state) =>
        vehiclesSelectors.selectById(state, params.carId)
    );

    useEffect(() => {
        console.log(params.carId);
        dispatch(fetchVehicles());
    }, [dispatch]);

    return (
        <div className="mb-14 flex flex-col-reverse gap-4 md:flex-row ">
            <div className="md:w-2/3">
                <AboutPackage />
            </div>
            <div className="md:w-1/3">
                <CarCard
                    id={vehicles.id}
                    image={vehicles.image}
                    name={vehicles.name}
                    year={vehicles.year}
                    price={vehicles.price}
                    seat={vehicles.seat}
                    color={vehicles.color}
                />
            </div>
        </div>
    );
}

export default DetailCar;
