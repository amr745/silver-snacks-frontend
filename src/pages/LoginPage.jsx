import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/signup";


function LoginPage({ handleSignupOrLogin, updateMessage }) {
    const [formState, setFormState] = useState({
        email: "",
        password: "",
    });

    let navigate = useNavigate();

    function handleChange(e) {
        setFormState((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await login(formState);
            // Let <App> know a user has signed up!
            handleSignupOrLogin();
            navigate("/", { replace: true });
        } catch (err) {
            // Change this to a modal or toast in deployed apps
            alert(err.message);
        }
    }

    return (
        <div className="auth-form">
            <form onSubmit={handleSubmit}>
                <h3>Login</h3>
                <div className="mb-3">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        value={formState.email}
                        name="email"
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        value={formState.password}
                        name="password"
                        onChange={handleChange}
                    />
                </div>

                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Login
                    </button>
                </div>
                <p className="forgot-password text-right">
                    Register? <a href="/signup">Sign-up</a>
                </p>
            </form>

        </div>
    );
}

export default LoginPage;
