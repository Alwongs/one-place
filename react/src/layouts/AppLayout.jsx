import { Outlet, Navigate } from "react-router-dom";
import {  useSelector } from "react-redux";
import TopPanel from "@layouts/TopPanel";
import SideBar from "@layouts/SideBar";


export default function AppLayout() {
    const token = useSelector((state) => state.auth.token);

    if (!token) {
        return <Navigate to="/login" />
    }

    return (
        <div className="app-layout">
            <SideBar classes="app-layout__sidebar" />

            <div className="app-layout__content">
                <TopPanel />
                <Outlet />
            </div>
        </div>
    )
}
