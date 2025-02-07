import NavigationLink from "./NavigationLink";

const navLinks = [
    { title: "Dashboard", path: "/"},
    { title: "Users", path: "/users"},
    { title: "Events", path: "/events"},
    { title: "Tasks", path: "/tasks"},
    { title: "Schedule", path: "/schedule"},
]


export default function Navigation({onClick}) {
    return (
        <nav className="sidebar-main-nav">

            {navLinks.map((link) => (
                <NavigationLink
                    key={link.title}
                    title={link.title}
                    path={link.path}
                    onClick={onClick}
                />                
            ))}
        </nav>        
    )
}