import React from "react";
import AllCar from "../components/AllCar";

function Car() {
    return (
        <div className="mb-14 grid w-fit gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <AllCar />
        </div>
    );
}

export default Car;
