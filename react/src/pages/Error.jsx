import { Link, useRouteError } from "react-router-dom";
import Header from "@components/Header";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="not-found-page">
            <section className="section">
                <div className="section__col col-6">
                    <h1 className="not-found-page__title">404 Not found =P</h1>
            
                    <div className="not-found-page__content">
                        <span className="not-found-page__content-text">Go</span>
                        <Link className="not-found-page__content-link" to={"/"}>Home</Link>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default ErrorPage;