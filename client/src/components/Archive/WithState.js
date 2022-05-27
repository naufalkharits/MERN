import React, { useState } from "react";

function WithState() {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("Penggunaan useState");

    const changeCount = (operation) => {
        operation === "add" ? setCount(count + 1) : setCount(count - 1);
    };

    const renderBar = () => {
        const bars = [];
        for (let i = 0; i < count; i++) {
            bars.push(<div className="h-[100px] w-[10%] border bg-red-200"></div>);
        }
        return bars;
    };
    return (
        <div className="WithState flex flex-col items-center">
            <h1>{message}</h1>
            <div className="my-8 flex h-fit w-4/5 flex-wrap border">{renderBar()}</div>
            <div className="space-x-2">
                {/* <button
                    className="rounded bg-red-500 p-2 text-white"
                    onClick={() => {
                        count = setCount(count - 1);
                    }}
                >
                    Subtractbar
                </button> */}
                <button className="rounded bg-red-500 p-2 text-white" onClick={() => changeCount("subtract")}>
                    Subtractbar
                </button>
                {/* <button
                    className="rounded bg-red-500 p-2 text-white"
                    onClick={() => {
                        count = setCount(count + 1);
                    }}
                >
                    Addbar
                </button> */}
                <button className="rounded bg-red-500 p-2 text-white" onClick={() => changeCount("add")}>
                    Addbar
                </button>
            </div>
        </div>
    );
}

export default WithState;
