import { useState } from "react";
import AuthBlock from "@components/AuthBlock";
import Navigation from "@components/Navigation";

export default function SideBar({classes}) {  
    const [isOpen, setIsOpen] = useState(false);
    const sidebarHandler = () => {
        setIsOpen((prev) => !prev)
    }

    return (
        <>
            <button className="sidebar-btn" onClick={sidebarHandler}>Menu</button>     

            <aside className={`${classes} ${isOpen ? "sidebar show" : "sidebar"}`}>
                <header className="sidebar-header">
                    <button className="sidebar-header__close-btn" onClick={sidebarHandler}>Close</button>
                </header>  

                <main className="sidebar-main">
                    <AuthBlock />
                    <Navigation onClick={sidebarHandler} />
                </main>
            </aside>        
        </>
    )
}