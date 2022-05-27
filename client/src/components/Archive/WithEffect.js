import React, { useEffect, useState } from "react";

import axios from "axios";

function WithEffect() {
    // const [count, setCount] = useState(0);
    // const [counts, setCounts] = useState(0);

    const [showStatment, setShowStatment] = useState(false);
    const [boxPicked, setBoxPicked] = useState(0);
    const [image, setImage] = useState("");

    console.log(boxPicked);

    // useEffect(() => {
    //     console.log("Ini penggunaan useEffect yaa");
    // });
    useEffect(() => {
        setTimeout(() => {
            setShowStatment(true);
        }, 2000);
    }, []);

    useEffect(() => {
        if (boxPicked === 0) {
            setImage("");
        } else {
            fetchImage(boxPicked);
        }
    }, [boxPicked]);

    const fetchImage = async (boxId) => {
        if (boxId === 1) {
            const response = await axios.get("https:://randomfox.ca/floof/?ref=apilist.fun");
            setImage(response.data.image);
        } else if (boxId === 2) {
            const response = await axios.get("https://aws.random.cat/meow?ref=apilist.fun");
            setImage(response.data.file);
        } else if (boxId === 3) {
            const response = await axios.get("https://dog.ceo/api/breeds/image/random");

            setImage(response.data.message);
        }
    };

    return (
        <div className="WithEffect">
            {/* <div className="flex flex-col items-center">
                <h1 className="text-xl font-bold">{count}</h1>
                <button className="rounded bg-blue-500 py-1 px-2 text-white" onClick={() => setCount(count + 1)}>
                    Add
                </button>
                <button className="rounded bg-blue-500 py-1 px-2 text-white" onClick={() => setCount(count + 2)}>
                    Adds
                </button>
            </div> */}

            <div className="flex flex-col items-center">
                {showStatment && (
                    <>
                        <h1 className="text-red-700">Pick a box</h1>
                        <div className="flex justify-center gap-2">
                            <div
                                id="1"
                                className="flex cursor-pointer justify-center bg-slate-300 p-[100px]"
                                onClick={(e) => setBoxPicked(parseInt(e.target.id))}
                            >
                                Satu
                            </div>
                            <div
                                id="2"
                                className="flex cursor-pointer justify-center bg-slate-300 p-[100px]"
                                onClick={(e) => setBoxPicked(parseInt(e.target.id))}
                            >
                                Dua
                            </div>
                            <div
                                id="3"
                                className="flex cursor-pointer justify-center bg-slate-300 p-[100px]"
                                onClick={(e) => setBoxPicked(parseInt(e.target.id))}
                            >
                                Tiga
                            </div>
                        </div>
                    </>
                )}
                {image && <img src={image} alt="" className="mt-4 h-[150px] w-[150px]" />}
            </div>
        </div>
    );
}

export default WithEffect;
