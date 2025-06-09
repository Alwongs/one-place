import NavigationLink from "./NavigationLink";

export default function Navigation({ onClick, isRoot }) {

    const navLinks = [
        { title: "Dashboard", path: "/", show: true },
        { title: "Users", path: "/users", show: isRoot },
        { title: "Events", path: "/events", show: true },
        { title: "Tasks", path: "/tasks", show: true },
        { title: "Tools", path: "/tools", show: true },
        { title: "Schedule", path: "/schedule", show: true },
        { title: "Mother", path: "/mother-schedule", show: isRoot },
        { title: "Mother-vizits", path: "/mother-vizits", show: isRoot },
    ]

    return (
        <nav className="sidebar-main-nav">
            {navLinks.map((link) => (
                <NavigationLink
                    key={link.title}
                    title={link.title}
                    path={link.path}
                    onClick={onClick}
                    show={link.show}
                />                
            ))}
        </nav>        
    )
}