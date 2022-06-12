import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Button from "./Button";

function Filtered() {
    const { carId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="-translate-y-1/2 rounded-xl border border-neutral-100 bg-white p-6 shadow dark:border-neutral-700 dark:bg-neutral-800">
            {location.pathname !== "/" ? (
                <h1 className="mb-8 text-center text-sm font-bold dark:text-white lg:text-left">
                    Pencarianmu
                </h1>
            ) : (
                <></>
            )}

            <div
                className={`grid grid-cols-2 gap-4 md:grid-cols-4 ${
                    location.pathname !== `/car/${carId}` && "xl:grid-cols-5"
                }`}
            >
                <div>
                    <label className="mb-1 block text-xs font-light dark:text-white">
                        Tipe Driver
                    </label>
                    {location.pathname === `/car/${carId}` ? (
                        <select
                            name=""
                            id=""
                            disabled
                            className="w-full rounded border-slate-300 focus:border-rose-500 focus:ring focus:ring-rose-500 focus:ring-opacity-5 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none dark:bg-slate-50"
                        >
                            <option value=""></option>
                            <option value="">Dengan Sopir</option>
                            <option value="">Tanpa Sopir (Lepas Kunci)</option>
                        </select>
                    ) : (
                        <select
                            name=""
                            id=""
                            className="w-full rounded border-neutral-700 bg-neutral-100 py-2 px-4 focus:border focus:border-neutral-200 focus:ring-0 dark:bg-neutral-700 dark:text-neutral-300 dark:focus:border-neutral-600"
                        >
                            <option value=""></option>
                            <option value="">Dengan Sopir</option>
                            <option value="">Tanpa Sopir (Lepas Kunci)</option>
                        </select>
                    )}
                </div>
                <div>
                    <label className="mb-1 block text-xs font-light dark:text-white">
                        Tanggal
                    </label>
                    {location.pathname === `/car/${carId}` ? (
                        <input
                            type="date"
                            name=""
                            id=""
                            disabled
                            className="w-full rounded border-slate-300 focus:border-rose-500 focus:ring focus:ring-rose-500 focus:ring-opacity-5 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none dark:bg-neutral-700"
                        />
                    ) : (
                        <input
                            type="date"
                            name=""
                            id=""
                            className="w-full rounded border-neutral-700 bg-neutral-100 py-2 px-4 focus:border focus:border-neutral-200 focus:ring-0 dark:bg-neutral-700 dark:text-neutral-300 dark:focus:border-neutral-600"
                        />
                    )}
                </div>

                <div>
                    <label className="mb-1 block text-xs font-light dark:text-white">
                        Waktu Jemput/Ambil
                    </label>
                    {location.pathname === `/car/${carId}` ? (
                        <select
                            name=""
                            id=""
                            disabled
                            className="w-full rounded border-slate-300 focus:border-rose-500 focus:ring focus:ring-rose-500 focus:ring-opacity-5 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none dark:bg-slate-50"
                        >
                            <option value=""></option>
                            <option value="">08.00</option>
                            <option value="">09.00</option>
                            <option value="">10.00</option>
                            <option value="">11.00</option>
                            <option value="">12.00</option>
                        </select>
                    ) : (
                        <select
                            name=""
                            id=""
                            className="w-full rounded border-neutral-700 bg-neutral-100 py-2 px-4 focus:border focus:border-neutral-200 focus:ring-0 dark:bg-neutral-700 dark:text-neutral-300 dark:focus:border-neutral-600"
                        >
                            <option value=""></option>
                            <option value="">08.00</option>
                            <option value="">09.00</option>
                            <option value="">10.00</option>
                            <option value="">11.00</option>
                            <option value="">12.00</option>
                        </select>
                    )}
                </div>
                <div>
                    <label className="mb-1 block text-xs font-light dark:text-white">
                        Jumlah Penumpang (optional)
                    </label>
                    {location.pathname === `/car/${carId}` ? (
                        <input
                            type="number"
                            name=""
                            id=""
                            disabled
                            className="w-full rounded border-slate-300 focus:border-rose-600 focus:ring focus:ring-rose-600 focus:ring-opacity-5 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none dark:bg-slate-50"
                        />
                    ) : (
                        <input
                            type="number"
                            name=""
                            id=""
                            className="w-full rounded border-neutral-700 bg-neutral-100 py-2 px-4 focus:border focus:border-neutral-200 focus:ring-0 dark:bg-neutral-700 dark:text-neutral-300 dark:focus:border-neutral-600"
                        />
                    )}
                </div>

                {location.pathname === "/" ? (
                    <Button
                        className={
                            "col-span-2 h-[42px] self-end rounded bg-rose-500 font-bold text-white hover:bg-rose-600 md:col-span-4 xl:col-span-1"
                        }
                        onClick={() => {
                            navigate("/car");
                        }}
                    >
                        Cari Mobil
                    </Button>
                ) : (
                    location.pathname !== `/car/${carId}` && (
                        <Button
                            className={
                                "col-span-2 h-[42px] self-end rounded border border-rose-500 bg-white font-bold text-rose-500 hover:border-none hover:bg-rose-600 hover:text-white md:col-span-4 xl:col-span-1"
                            }
                            onClick={() => {
                                navigate("/car");
                            }}
                        >
                            Edit
                        </Button>
                    )
                )}
            </div>
        </div>
    );
}

export default Filtered;
