import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { logout, reset } from "../features/auth/authSlice";

const DesktopMenus = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const { user } = useSelector((state) => state.auth);

    // const onLogout = () => {
    //     // dispatch(logout());
    //     // dispatch(reset());
    //     navigate("/");
    // };

    return (
        <>
            <img
                className="h-8 cursor-pointer"
                src={process.env.PUBLIC_URL + "/img/Bicarent.png"}
                alt=""
                onClick={() => {
                    navigate("/");
                }}
            />
            <div className="hidden items-center gap-4 font-semibold dark:text-neutral-300 md:flex">
                <span>Our Services</span>
                <span>Why Us</span>
                <span>Testimonial</span>
                <span>FAQ</span>
                {/* {user ? (
                    <button
                        className="rounded bg-rose-500 py-1 px-3 font-semibold text-white hover:bg-rose-600"
                        onClick={onLogout}
                    >
                        Logout
                    </button>
                ) : ( */}
                <Link
                    to="/login"
                    className="rounded bg-rose-500 py-1 px-3 font-semibold text-white hover:bg-rose-600"
                >
                    Login
                </Link>
                {/* )} */}
            </div>
        </>
    );
};

export default DesktopMenus;
