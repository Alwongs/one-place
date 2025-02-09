import { NavLink } from "react-router-dom"

export default function NavigationLink({ title, path, onClick, show }) {

    if (!show) return false;

    return (
        <NavLink
            className={({ isActive }) => (isActive ? "sidebar-main-nav-item active" : "sidebar-main-nav-item")}
            to={path}
            onClick={onClick}
        >
            {title}
        </NavLink> 
    )
}