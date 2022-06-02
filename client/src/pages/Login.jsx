import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { MdOutlineCarRental } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

function Login() {
    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const google = () => {
        window.open("http://localhost:5000/auth/google");
    };

    const github = () => {
        window.open("http://localhost:5000/auth/github");
    };

    // const facebook = () => {
    //     window.open("http://localhost:5000/auth/facebook", "_self");
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // api request
            const res = await axios.post("/login", { username, password });
            setUser(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="Login">
            <img className="w-24" src="/images/Bicarent.png" alt="" />
            <h1 className="text-2xl font-bold dark:text-white">
                Welcome, Admin BCR
            </h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4 space-y-2">
                    <label
                        htmlFor=""
                        className="text-sm font-light dark:text-white"
                        onChange={(e) => setUsername(e.target.value)}
                    >
                        Email
                    </label>
                    <input
                        type="text"
                        placeholder="Input active email"
                        className="w-full rounded border border-slate-300 p-1.5 focus:outline-blue-700"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="mb-8 space-y-2">
                    <label
                        htmlFor=""
                        className="text-sm font-light dark:text-white"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        placeholder="Input strong password"
                        className="w-full rounded border border-slate-300 p-1.5 focus:outline-blue-700"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full rounded bg-blue-600 p-1.5 font-bold text-white hover:bg-blue-700"
                    onClick={() => {
                        navigate("../");
                    }}
                >
                    Sign In
                </button>
                <h1 className="my-4 justify-center text-center dark:text-white">
                    or
                </h1>
                <div className="flex cursor-pointer items-center justify-center gap-8">
                    <FcGoogle
                        className="h-10 w-10 cursor-pointer"
                        onClick={google}
                    />
                    <FaGithub
                        className="h-10 w-10 dark:text-white"
                        onClick={github}
                    />
                </div>
            </form>
        </div>
    );
}

export default Login;
