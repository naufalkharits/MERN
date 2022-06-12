import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import User from "./layouts/User";
import Sign from "./layouts/Sign";
import Admin from "./layouts/Admin";
import Login from "./pages/Login";
import Car from "./pages/Car";
import RentDetail from "./pages/RentDetail";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import AddCar from "./pages/AddCar";
import Register from "./pages/Register";

function App() {
    // const [user, setUser] = useState(null);

    // useEffect(() => {
    //     const getUser = () => {
    //         fetch("http://localhost:5000/auth/login/success", {
    //             method: "GET",
    //             credentials: "include",
    //             headers: {
    //                 Accept: "application/json",
    //                 "Content-Type": "application/json",
    //                 "Access-Control-Allow-Credentials": true,
    //             },
    //         })
    //             .then((response) => {
    //                 if (response.status === 200) return response.json();
    //                 throw new Error("authentication has been failed!");
    //             })
    //             .then((resObject) => {
    //                 setUser(resObject.user);
    //             })
    //             .catch((err) => {
    //                 console.log(err);
    //             });
    //     };
    //     getUser();
    // }, []);

    return (
        <>
            <Routes>
                <Route path="/" element={<User />}>
                    <Route path="car">
                        <Route index element={<Car />} />
                        <Route path=":carId" element={<RentDetail />} />
                    </Route>
                </Route>
                <Route element={<Sign />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>
                <Route element={<Admin />}>
                    <Route path="/dashboard" element={<Home />} />
                    <Route path="/explore">
                        <Route index element={<Explore />} />
                        <Route path=":add" element={<AddCar />} />
                        <Route path=":edit/:vehicleId" element={<AddCar />} />
                    </Route>
                </Route>
            </Routes>
            <ToastContainer />
        </>
    );
}

export default App;
