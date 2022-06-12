import { configureStore } from "@reduxjs/toolkit";
import vehiclesReducer from "../features/vehiclesSlice";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        vehicles: vehiclesReducer,
    },
});
