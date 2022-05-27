import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "./features/cars";
import vehiclesReducer from "./features/vehicles";

export const store = configureStore({
    reducer: {
        cars: carsReducer,
        vehicles: vehiclesReducer,
    },
});
