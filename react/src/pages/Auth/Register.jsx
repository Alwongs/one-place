import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useRegisterMutation } from "@api/authApi";
import { setAuth } from "@reducers/authSlice";
import Loading from "@components/Loading";
import Header from "@components/Header";

export default function Register() {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPasswordConfirmation] = useState("");
    const [register, { isLoading, error }] = useRegisterMutation();
    const [err, setErr] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await register({ name, email, password, password_confirmation }).unwrap();
            dispatch(setAuth(result));
        } catch (err) {
            console.error("Ошибка регистрации:", err);
            setErr(err);
        }
    };

    return (
        <div className="container">
            <Header title="Register" />

            { isLoading && <Loading /> }                 

            { !isLoading && (
                <main className="main">
                    <div className="section">
                        <div className="section__col col-3">
                            <form className="form" onSubmit={handleSubmit}>

                                <div className="form__element">
                                    <label>Name</label>
                                    <input
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="form__element">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="form__element">
                                    <label>Password</label>
                                    <input
                                        // type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="form__element">
                                    <label>Password confirm</label>
                                    <input
                                        // type="password"
                                        value={password_confirmation}
                                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                                        required
                                    />
                                </div>   

                                <div className="btn-block flex-between">
                                    <Link to={"/login"}>Already registered?</Link>
                                    <button type="submit" className="btn btn-green">
                                        Войти
                                    </button>
                                </div>
                                                        
                                {error && <p>Application Error: {error.message}</p>}
                                {err && <p>Registration error: {err.data.message}</p>}
                            </form>
                        </div>
                    </div>
                </main>
            )}
        </div>
    );
};
