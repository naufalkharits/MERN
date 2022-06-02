import React from "react";

import {
    TiSocialFacebook,
    TiSocialTwitter,
    TiSocialInstagram,
    TiSocialYoutube,
} from "react-icons/ti";
import { HiMail } from "react-icons/hi";

function Footer() {
    return (
        <>
            <footer className="grid grid-cols-1 gap-8 py-16 md:grid-cols-2 lg:grid-cols-4">
                <div className="space-y-4 dark:text-neutral-300">
                    <img className="w-24" src="images/Bicarent.png" alt="" />
                    <div className="">Copyright © 2022 Bicarent</div>
                </div>
                <div className="space-y-4 dark:text-neutral-300">
                    <div className="">
                        Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
                    </div>
                    <div className="">binarcarrental@gmail.com</div>
                    <div className="">081-233-334-808</div>
                </div>
                <div className="space-y-4 dark:text-neutral-300">
                    <div className="">Our services</div>
                    <div className="">Why Us</div>
                    <div className="">Testimonial</div>
                    <div className="">FAQ</div>
                </div>
                <div className="space-y-4">
                    <div className="dark:text-neutral-300">Connect with us</div>
                    <div className="flex flex-wrap gap-2">
                        <TiSocialFacebook className="h-8 w-8 text-white hover:text-rose-600" />
                        <TiSocialInstagram className="h-8 w-8 text-white hover:text-rose-600" />
                        <TiSocialTwitter className="h-8 w-8 text-white hover:text-rose-600" />
                        <TiSocialYoutube className="h-8 w-8 text-white hover:text-rose-600" />
                        <HiMail className="h-8 w-8 text-white hover:text-rose-600" />
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
