import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function GuestLayout() {
    
    if (useSelector((state) => state.auth.token)) {
        return <Navigate to="/" />
    }

    return (
        <div className="guest-layout">
            <Outlet />
        </div>
    )
}
