import {
    FiTwitch,
    FiFacebook,
    FiTwitter,
    FiInstagram,
    FiMail,
} from "react-icons/fi";

import React from "react";

function Footer() {
    return (
        <>
            <div className="flex flex-wrap justify-between gap-8 pb-8">
                <div className="space-y-4 dark:text-white">
                    <div className="text-sm font-light">
                        Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
                    </div>
                    <div className="text-sm font-light">
                        binarcarrental@gmail.com
                    </div>
                    <div className="text-sm font-light">081-233-334-808</div>
                </div>
                <div className="space-y-4 dark:text-white">
                    <div className="text-sm">Our services</div>
                    <div className="text-sm">Why Us</div>
                    <div className="text-sm">Testimonial</div>
                    <div className="text-sm">FAQ</div>
                </div>
                <div className="space-y-4 dark:text-white">
                    <div className="text-sm font-light">Connect with us</div>
                    <div className="flex flex-wrap gap-2">
                        <div className="group w-fit rounded-full bg-cyan-500 p-1.5 hover:rounded hover:transition-all">
                            <FiFacebook className="stroke-1 text-white group-hover:stroke-2 group-hover:delay-150 lg:h-6 lg:w-6" />
                        </div>
                        <div className="group w-fit rounded-full bg-cyan-500 p-1.5 hover:rounded hover:transition-all">
                            <FiInstagram className="stroke-1 text-white group-hover:stroke-2 group-hover:delay-150 lg:h-6 lg:w-6" />
                        </div>
                        <div className="group w-fit rounded-full bg-cyan-500 p-1.5 hover:rounded hover:transition-all">
                            <FiTwitter className="stroke-1 text-white group-hover:stroke-2 group-hover:delay-150 lg:h-6 lg:w-6" />
                        </div>
                        <div className="group w-fit rounded-full bg-cyan-500 p-1.5 hover:rounded hover:transition-all">
                            <FiMail className="stroke-1 text-white group-hover:stroke-2 group-hover:delay-150 lg:h-6 lg:w-6" />
                        </div>
                        <div className="group w-fit rounded-full bg-cyan-500 p-1.5 hover:rounded hover:transition-all">
                            <FiTwitch className="stroke-1 text-white group-hover:stroke-2 group-hover:delay-150 lg:h-6 lg:w-6" />
                        </div>
                    </div>
                </div>
                <div className="space-y-4 dark:text-white">
                    <div className="">Copyright Binar 2022</div>
                    <img className="w-24" src="images/logo.png" alt="" />
                </div>
            </div>
        </>
    );
}

export default Footer;
