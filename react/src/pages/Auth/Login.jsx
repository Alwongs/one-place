import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useLoginMutation } from "@api/authApi";
import { setAuth } from "@reducers/authSlice";
import Loading from "@components/Loading";
import Header from "@components/Header";


export default function Login() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, { isLoading, error }] = useLoginMutation();
    const [err, setErr] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await login({ email, password }).unwrap();
            console.log(result)
            dispatch(setAuth(result));
        } catch (err) {
            console.error("Ошибка авторизации:", err);
            setErr(err);
        }
    };

    return (
        <>
            <Header classes="auth-header" title="Login" />

            { isLoading && <Loading /> }

            { !isLoading && (
                <div className="main">
                    <div className="section">
                        <div className="section__col col-3">
                            <form className="form" onSubmit={handleSubmit}>
                                <div className="form__element">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}                    
                                    />
                                </div>
        
                                <div className="form__element">
                                    <label>Password</label>
                                    <input
                                        type="text"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>

                                <div className="btn-block flex-between">
                                    <Link className="auth-link" to={"/register"}>Create an account</Link>
                                    <button className="btn btn-green">Login</button>                        
                                </div>

                                {error && <p>Application Error: {error.message}</p>}
                                {err && <p>Registration error: {err.data.message}</p>}
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
