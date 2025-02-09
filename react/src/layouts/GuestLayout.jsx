import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useGetAuthQuery } from "@api/authApi";

export default function GuestLayout() {
    // const { data = {}, isLoading } = useGetAuthQuery();

    // if (data?.id) {
    //     return <Navigate to="/login" />        
    // }
    
    if (useSelector((state) => state.auth.token)) {
        return <Navigate to="/" />
    }

    return (
        <div className="guest-layout">
            <Outlet />
        </div>
    )
}
