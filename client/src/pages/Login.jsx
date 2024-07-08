import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const URL = "http://localhost:4000/api/auth/login/";

export const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();
    const { storeTokenInLS } = useAuth();

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/JSON",
                },
                body: JSON.stringify(user),
            });

            console.log("login form", response);

            const res_data = await response.json();

            if (response.ok) {
                toast.success("Login successful");
                // Stored the token in localhost
                storeTokenInLS(res_data.token);
                setUser({ email: "", password: "" });
                navigate("/");
            } else {
                toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
                console.log("Invalid credential");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <section>
                <main>
                    <div className="section-registration">
                        <div className="container grid grid-two-cols">
                            <div className="registration-image">
                                <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1708527600&semt=sph" alt="login-form"
                                    width="450"
                                    height="500"
                                />
                            </div>
                            {/* Lets tackle registration form */}
                            <div className="registration-form">
                                <h1 className="main-heading mb-3">login form</h1>
                                <br />
                                <form onSubmit={handleSubmit}>

                                    <div>
                                        <label htmlFor="email">email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Enter your email"
                                            id="email"
                                            required
                                            autoComplete="off"
                                            value={user.email}
                                            onChange={handleInput}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="password">password</label>
                                        <input
                                            type="text"
                                            name="password"
                                            placeholder="Enter password"
                                            id="password"
                                            required
                                            autoComplete="off"
                                            value={user.password}
                                            onChange={handleInput}
                                        />
                                    </div>

                                    <br />
                                    <button type="submit" className="btn btn-submit">Login</button>

                                    <h3 className="sign-in">Don't have an account?<NavLink className="under-link" to="/register"> Create a new account.</NavLink></h3>

                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    );
};

