import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVehicles, vehiclesSelectors } from "../features/vehicles";

const ListCar = () => {
    const dispatch = useDispatch();
    const vehicles = useSelector(vehiclesSelectors.selectAll);
    useEffect(() => {
        dispatch(fetchVehicles());
    }, [dispatch]);
    return (
        <div className="p-8 dark:border-neutral-700">
            <div className="mb-8 flex items-center gap-2">
                <div class="h-6 w-1 bg-cyan-500"></div>
                <span class="text-2xl font-semibold dark:text-neutral-300">
                    List Car
                </span>
            </div>
            <div className="relative overflow-auto rounded-xl">
                <table class="w-full table-auto text-left">
                    <thead class="dark:text-neutral-400">
                        <tr>
                            <th class="px-6 py-3">Name</th>
                            {/* <th class="px-6 py-3">Category</th> */}
                            <th class="px-6 py-3">Price</th>
                            {/* <th class="px-6 py-3">Start Rent</th> */}
                            {/* <th class="px-6 py-3">Finish Rent</th> */}
                        </tr>
                    </thead>
                    <tbody className="dark:text-neutral-500">
                        <>
                            {vehicles.map((car) => {
                                return (
                                    <tr key={car.id}>
                                        <td class="px-6 py-3">{car.name}</td>
                                        {/* <td class="px-6 py-3">APV</td> */}
                                        <td class="px-6 py-3">
                                            $ {car.price} / day
                                        </td>
                                        {/* <td class="px-6 py-3">Start Rent</td> */}
                                        {/* <td class="px-6 py-3">Finish Rent</td> */}
                                    </tr>
                                );
                            })}
                        </>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListCar;
