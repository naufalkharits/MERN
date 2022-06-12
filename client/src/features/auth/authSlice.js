import {
    createAsyncThunk,
    createEntityAdapter,
    createSlice,
} from "@reduxjs/toolkit";
import { server } from "../../app/api";
// import authService from "./authService";

// register
export const register = createAsyncThunk(
    "auth/register",
    async ({ formValue, toast, navigate }, thunkAPI) => {
        try {
            const respone = await server.post("/register", formValue);
            toast.success("Register Successfully");
            navigate("/login");
            return respone.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

// login
export const login = createAsyncThunk(
    "auth/login",
    async ({ formValue, toast, navigate }, thunkAPI) => {
        try {
            const respone = await server.post("/login", formValue);
            toast.success("Login Successfully");
            navigate("/");
            return respone.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        loading: "idle",
        error: "",
    },
    // reducers: {},
    extraReducers: {
        // login
        [login.pending]: (state) => {
            state.loading = "pending";
        },
        [login.fulfilled]: (state, action) => {
            state.loading = "idle";
            localStorage.setItem(
                "profile",
                JSON.stringify({ ...action.payload })
            );
            state.user = action.payload;
        },
        [login.rejected]: (state, action) => {
            state.loading = "idle";
            state.error = action.payload.message;
        },
        // register
        [register.pending]: (state) => {
            state.loading = "pending";
        },
        [register.fulfilled]: (state, action) => {
            state.loading = "idle";
            localStorage.setItem(
                "profile",
                JSON.stringify({ ...action.payload })
            );
            state.user = action.payload;
        },
        [register.rejected]: (state, action) => {
            state.loading = "idle";
            state.error = action.payload.message;
        },
    },
});

export default authSlice.reducer;
