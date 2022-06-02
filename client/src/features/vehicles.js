import {
    createAsyncThunk,
    createEntityAdapter,
    createSlice,
} from "@reduxjs/toolkit";
import vehicles from "../APIs";

export const uploadImage = createAsyncThunk(
    "vehicles/fetchVehicles",
    async () => {
        try {
            const respone = await vehicles.get("/vehicles");
            return respone.data;
        } catch (error) {
            return error;
        }
    }
);

export const fetchVehicles = createAsyncThunk(
    "vehicles/fetchVehicles",
    async () => {
        const respone = await vehicles.get("/vehicles");
        return respone.data;
    }
);

export const insertVehicle = createAsyncThunk(
    "vehicles/saveVehicle",
    async ({ name, price, image }) => {
        const respone = await vehicles.post("/vehicles", {
            name,
            price,
            image,
        });
        return respone.data;
    }
);

export const updateVehicle = createAsyncThunk(
    "vehicles/updateVehicle",
    async ({ id, name, price }) => {
        const respone = await vehicles.put(`/vehicles/${id}`, {
            name,
            price,
        });
        return respone.data;
    }
);

export const deleteVehicle = createAsyncThunk(
    "vehicles/deleteVehicle",
    async (id) => {
        await vehicles.delete(`/vehicles/${id}`);
        return id;
    }
);

const vehiclesAdapter = createEntityAdapter();

const vehiclesSlice = createSlice({
    name: "vehicles",
    initialState: vehiclesAdapter.getInitialState(),
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
        [fetchVehicles.fulfilled]: (state, action) => {
            vehiclesAdapter.setAll(state, action.payload);
        },
        [insertVehicle.fulfilled]: (state, action) => {
            vehiclesAdapter.addOne(state, action.payload);
        },
        [updateVehicle.fulfilled]: (state, action) => {
            vehiclesAdapter.updateOne(state, {
                id: action.payload.id,
                updates: action.payload,
            });
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
