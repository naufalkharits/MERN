import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";
import { HiMenuAlt4, HiX } from "react-icons/hi";

const MobileMenus = () => {
    const navigate = useNavigate();

    return (
        <>
            <Popover.Button className="rounded-md p-2 hover:bg-neutral-400 dark:hover:bg-neutral-700 md:hidden">
                <HiMenuAlt4 className="h-6 w-6 dark:text-neutral-300" />
            </Popover.Button>
            <Transition
                as={Fragment}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >
                <Popover.Panel className="absolute inset-x-0 top-0 z-10 p-2 md:hidden">
                    <div className="overflow-hidden rounded-md bg-neutral-300 shadow ring-1 ring-black ring-opacity-5 dark:bg-neutral-800">
                        <div className="p-2">
                            <div className="mb-4 flex items-center justify-between">
                                <img
                                    className="h-8 cursor-pointer pl-2 pt-2"
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/img/Bicarent.png"
                                    }
                                    alt=""
                                    onClick={() => {
                                        navigate("/");
                                    }}
                                />
                                <Popover.Button className="rounded-md p-2 hover:bg-neutral-400 dark:hover:bg-neutral-700">
                                    <HiX className="h-6 w-6 dark:text-neutral-300" />
                                </Popover.Button>
                            </div>
                            <div className="space-y-1 font-semibold dark:text-neutral-300">
                                <a
                                    className="block rounded-md p-2 hover:bg-neutral-400 dark:hover:bg-neutral-700"
                                    href="#"
                                >
                                    Our Services
                                </a>
                                <a
                                    className="block rounded-md p-2 hover:bg-neutral-400 dark:hover:bg-neutral-700"
                                    href="#"
                                >
                                    Why Us
                                </a>
                                <a
                                    className="block rounded-md p-2 hover:bg-neutral-400 dark:hover:bg-neutral-700"
                                    href="#"
                                >
                                    Testimonial
                                </a>
                                <a
                                    className="block rounded-md p-2 hover:bg-neutral-400 dark:hover:bg-neutral-700"
                                    href="#"
                                >
                                    FAQ
                                </a>
                            </div>
                        </div>
                        <button className="w-full bg-neutral-400 p-2 font-semibold text-rose-500 hover:bg-neutral-500 hover:text-rose-600 dark:bg-neutral-700 dark:hover:bg-neutral-600">
                            Login
                        </button>
                    </div>
                </Popover.Panel>
            </Transition>
        </>
    );
};

export default MobileMenus;
