import {
    createAsyncThunk,
    createEntityAdapter,
    createSlice,
} from "@reduxjs/toolkit";
import { vehicle, cloudinary } from "../app/api";

export const uploadImage = createAsyncThunk(
    "vehicles/fetchVehicles",
    async () => {
        try {
            const respone = await vehicle.get("/vehicles");
            return respone.data;
        } catch (error) {
            return error;
        }
    }
);

export const fetchVehicles = createAsyncThunk(
    "vehicles/fetchVehicles",
    async () => {
        const respone = await vehicle.get("/vehicles");
        return respone.data;
    }
);

export const insertVehicle = createAsyncThunk(
    "vehicles/saveVehicle",
    async ({ name, seat, color, year, price, description, image }) => {
        console.log(image);
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "nvqdlovn");
        const respone = await vehicle
            .post(cloudinary, formData)
            .then(async (respone) => {
                console.log(respone.data.secure_url);
                await vehicle.post("/vehicles", {
                    name,
                    seat,
                    color,
                    year,
                    price,
                    description,
                    image: respone.data.secure_url,
                });
            });
        return respone.data;
    }
);

export const updateVehicle = createAsyncThunk(
    "vehicles/updateVehicle",
    async ({ vehicleId, name, price }) => {
        const respone = await vehicle.put(`/vehicles/${vehicleId}`, {
            name,
            price,
        });
        return respone.data;
    }
);

export const deleteVehicle = createAsyncThunk(
    "vehicles/deleteVehicle",
    async (id) => {
        await vehicle.delete(`/vehicles/${id}`);
        return id;
    }
);

const vehiclesAdapter = createEntityAdapter();

const vehiclesSlice = createSlice({
    name: "vehicles",
    initialState: vehiclesAdapter.getInitialState({
        loading: "idle",
    }),
    reducers: {
        // addVehicle: (state, action) => {
        //     state.push(action.payload);
        // },
        // editVehicle: (state, action) => {
        //     const { id, name, price, image } = action.payload;
        //     const existingVehicle = state.find((vehicle) => vehicle.id === id);
        //     if (existingVehicle) {
        //         existingVehicle.name = name;
        //         existingVehicle.price = price;
        //         existingVehicle.image = image;
        //     }
        // },
        // deleteVehicle: (state, action) => {
        //     const { id } = action.payload;
        //     const existingVehicle = state.find((vehicle) => vehicle.id === id);
        //     if (existingVehicle) {
        //         return state.filter((vehicle) => vehicle.id !== id);
        //     }
        // },
    },
    extraReducers: {
        // fetch vehicle
        [fetchVehicles.pending]: (state) => {
            state.loading = "pending";
        },
        [fetchVehicles.fulfilled]: (state, action) => {
            vehiclesAdapter.setAll(state, action.payload);
            state.loading = "idle";
        },
        [fetchVehicles.rejected]: (state, action) => {
            state.loading = "idle";
            console.log("ERROR");
        },
        // insert vehicle
        [insertVehicle.pending]: (state) => {
            state.loading = "pending";
        },
        [insertVehicle.fulfilled]: (state, action) => {
            vehiclesAdapter.addOne(state, action.payload);
            state.loading = "idle";
        },
        // update vehicle
        [updateVehicle.pending]: (state) => {
            state.loading = "pending";
        },
        [updateVehicle.fulfilled]: (state, action) => {
            vehiclesAdapter.updateOne(state, {
                id: action.payload.id,
                updates: action.payload,
            });
            state.loading = "idle";
        },
        // update vehicle
        [deleteVehicle.pending]: (state) => {
            state.loading = "pending";
        },
        [deleteVehicle.fulfilled]: (state, action) => {
            vehiclesAdapter.removeOne(state, action.payload);
        },
    },
});

export const vehiclesSelectors = vehiclesAdapter.getSelectors(
    (state) => state.vehicles
);

export default vehiclesSlice.reducer;
