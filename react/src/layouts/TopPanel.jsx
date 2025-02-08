// import { Link, NavLink } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { useLogoutMutation } from "@api/authApi";
// import { removeAuth } from "@reducers/authSlice";

export default function TopPanel() {

    // const dispatch = useDispatch();
    // const auth = useSelector((state) => state.auth);
    // const [logout, { isSuccess, isError }] = useLogoutMutation();
    // const handleLogout = async () => {
    //     await logout().unwrap();
    //     dispatch(removeAuth());
    // }; 

    return (
        <div className="top-panel">
            {/* <div className="top-panel__auth">
                <Link to={"/user"}>{auth.user.name}</Link>
                <button className="btn-link btn-link-white" onClick={handleLogout}>Logout</button>              
            </div> */}
        </div>
    );
}
