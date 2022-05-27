import React from "react";
import { Outlet } from "react-router-dom";
import CarFilter from "../components/CarFilter";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function Main() {
    return (
        <>
            <Navbar />
            <Hero />
            <div className="container mx-auto px-4">
                <CarFilter />
                <Outlet />
                <Footer />
            </div>
        </>
    );
}

export default Main;
