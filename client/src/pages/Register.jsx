import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { register } from "../features/auth/authSlice";
import { CgSpinner } from "react-icons/cg";

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => ({ ...state.auth }));
    const [formValue, setFormValue] = useState({
        username: "",
        email: "",
        password: "",
        cp: "",
    });
    const { username, email, password, cp } = formValue;

    const onInputChange = (e) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value,
        });
    };

    const onFormSubmit = (e) => {
        e.preventDefault();

        dispatch(register({ formValue, toast, navigate }));
    };

    useEffect(() => {
        error && toast.error(error);
    }, [error]);

    return (
        <div className="space-y-8 p-14">
            <img className="w-24" src="/img/Bicarent.png" alt="" />
            <form onSubmit={onFormSubmit}>
                <div className="mb-4 space-y-2">
                    <label className="dark:text-neutral-300">Username</label>
                    <input
                        className="w-full rounded-xl border-neutral-100 bg-neutral-100 py-2 px-4 focus:border focus:border-neutral-200 focus:ring-0 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-300 dark:focus:border-neutral-600"
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        placeholder="Username"
                        onChange={onInputChange}
                        required
                    />
                </div>
                <div className="mb-4 space-y-2">
                    <label className="dark:text-neutral-300">Email</label>
                    <input
                        className="w-full rounded-xl border-neutral-100 bg-neutral-100 py-2 px-4 focus:border focus:border-neutral-200 focus:ring-0 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-300 dark:focus:border-neutral-600"
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        placeholder="Active email"
                        onChange={onInputChange}
                        required
                    />
                </div>
                <div className="mb-4 space-y-2">
                    <label className="dark:text-neutral-300">Password</label>
                    <input
                        className="w-full rounded-xl border-neutral-100 bg-neutral-100 py-2 px-4 focus:border focus:border-neutral-200 focus:ring-0 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-300 dark:focus:border-neutral-600"
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        placeholder="Strong password"
                        onChange={onInputChange}
                        required
                    />
                </div>
                <div className="mb-8 space-y-2">
                    <label className="dark:text-neutral-300">
                        Confirm Password
                    </label>
                    <input
                        className="w-full rounded-xl border-neutral-100 bg-neutral-100 py-2 px-4 focus:border focus:border-neutral-200 focus:ring-0 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-300 dark:focus:border-neutral-600"
                        type="password"
                        id="cp"
                        name="cp"
                        value={cp}
                        placeholder="Confirm password"
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
                        Register
                    </button>
                )}
            </form>
            <p className="text-sm dark:text-neutral-300">
                Already have an account?{" "}
                <Link
                    to="/login"
                    className="font-semibold text-rose-500 hover:text-rose-600"
                >
                    Login
                </Link>
            </p>
        </div>
    );
};

export default Register;
