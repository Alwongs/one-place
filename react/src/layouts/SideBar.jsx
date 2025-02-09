import { useState } from "react";
import { useSelector } from "react-redux";
import AuthBlock from "@components/AuthBlock";
import Navigation from "@components/Navigation";
import DevelopmentBlock from "../components/DevelopmentBlock";

export default function SideBar({classes}) {
    const isRoot = useSelector((state) => state.auth.user.is_root);
    const [isOpen, setIsOpen] = useState(false);
    const sidebarHandler = () => {
        setIsOpen((prev) => !prev)
    }

    return (
        <>
            <button className="sidebar-btn" onClick={sidebarHandler}>Menu</button>     

            <aside className={`${classes} ${isOpen ? "sidebar show" : "sidebar"}`}>
                <header className="sidebar-header">
                    <button
                        className="sidebar-header__close-btn"
                        onClick={sidebarHandler}
                    >
                        Close
                    </button>
                </header>  

                <main className="sidebar-main">
                    <AuthBlock />
                    <Navigation
                        isRoot={isRoot}
                        onClick={sidebarHandler}
                    />
                </main>
                
                <footer className="sidebar-footer">
                    <DevelopmentBlock />
                </footer>
            </aside>        
        </>
    )
}