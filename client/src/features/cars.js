import {
    createAsyncThunk,
    createEntityAdapter,
    createSlice,
} from "@reduxjs/toolkit";
import cars from "../APIs";

export const fetchCars = createAsyncThunk("cars/fetchCars", async () => {
    const res = await cars.get("/cars");
    return res.data;
});

const carsAdapter = createEntityAdapter();

const carsSlice = createSlice({
    name: "cars",
    initialState: carsAdapter.getInitialState(),
    // reducers: {},
    extraReducers: {
        [fetchCars.fulfilled]: (state, action) => {
            carsAdapter.setAll(state, action.payload);
        },
    },
});

export const carsSelectors = carsAdapter.getSelectors((state) => state.cars);

export default carsSlice.reducer;
