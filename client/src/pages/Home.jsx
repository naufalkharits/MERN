import React from "react";
import ListCar from "../components/ListCar";
import ListOrder from "../components/ListOrder";
import Topbar from "../components/Topbar";

const Home = () => {
    return (
        <div className="h-screen border-x border-neutral-200 dark:border-neutral-700">
            <Topbar />
            <ListOrder />
            <ListCar />
        </div>
    );
};

export default Home;
