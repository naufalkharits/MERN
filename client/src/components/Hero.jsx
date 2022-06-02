import React from "react";
import { useLocation } from "react-router-dom";

function Hero() {
    let location = useLocation();

    return (
        <>
            {location.pathname === "/" ? (
                <div className="bg-neutral-300 dark:bg-neutral-800">
                    <div className="container mx-auto grid gap-8 px-4 pt-8 md:px-8 lg:grid-cols-2">
                        <div className="dark:text-white xl:pt-16">
                            <h1 className="text-4xl font-bold">
                                Sewa & Rental Mobil Terbaik di Kawasan Indonesia
                            </h1>
                            <p className="w-4/5 font-light">
                                Selamat datang di Binar Car Rental. Kami
                                menyediakan mobil kualitas terbaik dengan harga
                                terjangkau. Selalu siap melayani kebutuhanmu
                                untuk sewa mobil selama 24 jam.
                            </p>
                        </div>
                        <div className="z-10">
                            <img
                                src="/images/car.png"
                                alt=""
                                className="w-full"
                            />
                        </div>
                    </div>
                    <div className="absolute right-0 h-1/5 w-11/12 -translate-y-full rounded-tl-full bg-rose-800 lg:h-1/4 lg:w-1/2"></div>
                </div>
            ) : (
                <div className="h-64 bg-neutral-300 dark:bg-neutral-800"></div>
            )}
        </>
    );
}

export default Hero;
