import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const URL = "http://localhost:4000/api/auth/register/";

export const Register = () => {

    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
    });

    const navigate = useNavigate();
    const { storeTokenInLS } = useAuth();

    // Handling the input values
    const handleInput = (e) => {
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value,
        });
    };

    // Handling the form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);
        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });

            const res_data = await response.json();
                console.log("res from server", res_data.extraDetails);

            if (response.ok) {
                // Stored the token in localhost
                storeTokenInLS(res_data.token);
                toast.success("Signup successful");
                setUser({ username: "", email: "", phone: "", password: "" });
                navigate("/");
            } else {
                toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
                console.log("Fill the credentails properly");
            }
        } catch (error) {
            console.log("registration error", error);
        }
    };

    return (

        <>
            <section>
                <main>
                    <div className="section-registration">
                        <div className="container grid grid-two-cols">
                            <div className="registration-image">
                                <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1708527600&semt=sph" alt="registration-form"
                                    width="450"
                                    height="500"
                                />
                            </div>
                            {/* Lets tackle registration form */}
                            <div className="registration-form">
                                <h1 className="main-heading mb-3">registration form</h1>
                                <br />
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="username">username</label>
                                        <input
                                            type="text"
                                            name="username"
                                            placeholder="Enter username"
                                            id="username"
                                            required
                                            autoComplete="off"
                                            value={user.username}
                                            onChange={handleInput}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email">email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Enter email"
                                            id="email"
                                            required
                                            autoComplete="off"
                                            value={user.email}
                                            onChange={handleInput}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone">phone</label>
                                        <input
                                            type="number"
                                            name="phone"
                                            placeholder="Enter phone no."
                                            id="phone"
                                            required
                                            autoComplete="off"
                                            value={user.phone}
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
                                    <button type="submit" className="btn btn-submit">Register</button>

                                    <h3 className="sign-in">Already have an account?<NavLink className="under-link" to="/login"> Log in.</NavLink></h3>

                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="section-why-register">
                        <div className="container why-register">
                            <h2 className="register-para">Why Register with us?</h2>
                            <p>Registering with Military Saga offers numerous benefits, including regular updates, insightful blogs, and up-to-date information tailored to your interests. Stay informed and engaged with the latest developments in the military landscape, enriching your understanding while becoming part of a passionate community.</p>
                        </div>

                    </div>
                </main>
            </section>
        </>
    );
};