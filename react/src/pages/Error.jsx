import { Link, useRouteError } from "react-router-dom";
import Header from "@components/Header";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <>
            <Header title="Error page 404" />

            <Link to={"/"}>Home</Link>
        </>
    )
}

export default ErrorPage;