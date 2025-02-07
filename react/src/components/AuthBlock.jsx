import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useLogoutMutation } from "@api/authApi";
import { removeAuth } from "@reducers/authSlice";

export default function Auth() {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const [logout, { isSuccess, isError }] = useLogoutMutation();

    const handleLogout = async () => {
        await logout().unwrap();
        dispatch(removeAuth());
        window.location.reload();
    };  

    return (
        <div className="sidebar-main-auth">
            <Link className="sidebar-main-auth__name" to={"/user"}>{auth.user.name}</Link>
            <button className="sidebar-main-auth__logout-link" onClick={handleLogout}>Exit</button>              
        </div>          
    )
}