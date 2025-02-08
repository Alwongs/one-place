import Header from "@components/Header";
import Reminder from "./Reminder/Reminder";

export default function Dashboard() {

    return (
        <>
            <Header title="Dashboard" />

            <main className="main">
                <div className="section">
                    <div className="section__col col-4">
                        <Reminder />
                    </div>
                </div>
            </main>             
        </>    
    )
}