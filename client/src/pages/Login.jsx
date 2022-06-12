import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { login } from "../features/auth/authSlice";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { CgSpinner } from "react-icons/cg";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => ({ ...state.auth }));
    const [formValue, setFormValue] = useState({
        email: "",
        password: "",
    });
    const { email, password } = formValue;

    const onInputChange = (e) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value,
        });
    };

    const onFormSubmit = (e) => {
        e.preventDefault();

        email && password && dispatch(login({ formValue, toast, navigate }));
    };

    useEffect(() => {
        error && toast.error(error);
    }, [error]);

    return (
        <div className="space-y-8 p-14">
            <img className="w-24" src="/img/Bicarent.png" alt="" />
            <form onSubmit={onFormSubmit}>
                <div className="mb-4 space-y-2">
                    <label className="dark:text-neutral-300">Email</label>
                    <input
                        className="w-full rounded-xl border-neutral-100 bg-neutral-100 py-2 px-4 focus:border focus:border-neutral-200 focus:ring-0 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-300 dark:focus:border-neutral-600"
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        placeholder="Input active email"
                        onChange={onInputChange}
                        required
                    />
                </div>
                <div className="mb-8 space-y-2">
                    <label className="dark:text-neutral-300">Password</label>
                    <input
                        className="w-full rounded-xl border-neutral-100 bg-neutral-100 py-2 px-4 focus:border focus:border-neutral-200 focus:ring-0 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-300 dark:focus:border-neutral-600"
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        placeholder="Input strong password"
                        onChange={onInputChange}
                        required
                    />
                </div>
                {loading === "pending" ? (
                    <button
                        className="flex w-full items-center justify-center gap-1 rounded-xl bg-rose-500 py-2 px-4 font-bold text-white hover:bg-rose-600"
                        type="submit"
                    >
                        <CgSpinner className="animate-spin" />
                        Processing...
                    </button>
                ) : (
                    <button
                        className="w-full rounded-xl bg-rose-500 py-2 px-4 font-bold text-white hover:bg-rose-600"
                        type="submit"
                    >
                        Login
                    </button>
                )}

                {/* <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-300 after:mt-0.5 after:flex-1 after:border-t after:border-gray-300">
                    <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                        Web3
                    </p>
                </div>

                <button
                    className="w-full rounded bg-rose-500 p-1.5 font-bold text-white hover:bg-rose-600"
                    onClick={() => {
                        getAccount();
                    }}
                >
                    Connect Wallet
                </button>

                <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-300 after:mt-0.5 after:flex-1 after:border-t after:border-gray-300">
                    <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                        Web2
                    </p>
                </div>

                <div className="flex items-center justify-center gap-4">
                    <FcGoogle
                        className="h-10 w-10 cursor-pointer"
                        onClick={google}
                    />
                    <FaGithub
                        className="h-10 w-10 cursor-pointer dark:text-white"
                        onClick={github}
                    />
                </div> */}
            </form>
            <p className="text-sm dark:text-neutral-300">
                Don't have an account?{" "}
                <Link
                    to="/register"
                    className="font-semibold text-rose-500 hover:text-rose-600"
                >
                    Register
                </Link>
            </p>
        </div>
    );
}

export default Login;
