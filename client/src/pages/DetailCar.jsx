import React from "react";
import SingleCar from "../components/SingleCar";
import AboutCar from "../components/AboutCar";

function DetailCar() {
    return (
        <div className="mb-14 flex justify-center gap-8 ">
            <AboutCar />
            <SingleCar />
        </div>
    );
}

export default DetailCar;
