// import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./layouts/Main";
import Sign from "./layouts/Sign";
import CMS from "./layouts/CMS";
import Login from "./pages/Login";
import Car from "./pages/Car";
import DetailCar from "./pages/DetailCar";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import AddCar from "./pages/AddCar";

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
                <Route path="/" element={<Main />}>
                    <Route path="car">
                        <Route index element={<Car />} />
                        <Route path=":carId" element={<DetailCar />} />
                    </Route>
                </Route>
                <Route element={<Sign />}>
                    <Route path="/login" element={<Login />} />
                    {/* <Route path="/register" element={<Register />} /> */}
                </Route>
                <Route element={<CMS />}>
                    <Route path="/dashboard" element={<Home />} />
                    <Route path="/explore">
                        <Route index element={<Explore />} />
                        <Route path=":add" element={<AddCar />} />
                        <Route path=":edit/:vehicleId" element={<AddCar />} />
                    </Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
