import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../services/signup";

function SignupForm({ updateMessage, handleSignupOrLogin }) {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        password: "",
        passwordConf: "",
    });

    let navigate = useNavigate();

    function handleChange(e) {
        updateMessage("");
        setFormState((prevState) => ({
            // Using ES2015 Computed Property Names
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await signup(formState);
            // Let <App> know a user has signed up!
            handleSignupOrLogin();
            navigate("/", { replace: true });
        } catch (err) {
            // Invalid user data (probably duplicate email)
            updateMessage(err.message);
        }
    }

    function validForm() {
        return (
            formState.name &&
            formState.email &&
            formState.password === formState.passwordConf
        );
    }

    return (
        <div className="auth-form">
            <form onSubmit={handleSubmit}>
                <h3>Sign Up</h3>
                <div className="mb-3">
                    <label>Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Name"
                        value={formState.name}
                        name="name"
                        onChange={handleChange}
                    />
                </div>
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
                <div className="mb-3">
                    {/* <label>Password</label> */}
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm password"
                        value={formState.passwordConf}
                        name="passwordConf"
                        onChange={handleChange}
                    />
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary" disabled={!validForm()}>
                        Sign Up
                    </button>
                </div>
                <p className="forgot-password text-right">
                    Already registered <a href="/login">Sign in?</a>
                </p>
            </form>
            {/* <form onSubmit={handleSubmit}>
                <legend>Sign Up</legend>
                <input
                    type="text"
                    placeholder="Name"
                    value={formState.name}
                    name="name"
                    onChange={handleChange}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={formState.email}
                    name="email"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={formState.password}
                    name="password"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={formState.passwordConf}
                    name="passwordConf"
                    onChange={handleChange}
                />
                <div className="form-controls">
                    <button disabled={!validForm()}>Sign Up</button>
                    <Link to="/">Cancel</Link>
                </div>
            </form> */}
        </div>
    );
}

export default SignupForm;
