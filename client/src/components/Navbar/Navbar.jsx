import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../../store/auth";


export const Navbar = () => {
    const { isLoggedIn } = useAuth();
    return (
        <>
            <header>
                <div className="container-1">
                    <div className="logo">
                        <a href="/">militarysaga</a>
                    </div>

                    <nav>
                        {/* <ul className="sidebar">
                            <li className="nav-links"><a href="/">Home</a></li>
                            <li className="nav-links"><a href="/about">About</a></li>
                            <li className="nav-links"><a href="/contact">Contact</a></li>
                            <li className="nav-links"><a href="/service">Services</a></li>
                            <li className="btn-3"><a href="/register">Signup</a></li>
                            <li className="btn-3"><a href="/login">Log In</a></li>
                        </ul> */}
                        <ul>
                            <li className="nav-links"><NavLink to="/">Home</NavLink></li>
                            <li className="nav-links"><NavLink to="/about">About</NavLink></li>
                            <li className="nav-links"><NavLink to="/contact">Contact</NavLink></li>
                            <li className="nav-links"><NavLink to="/service">Services</NavLink></li>
                            {isLoggedIn ?
                                <li className="btn-3"><NavLink to="/logout">Logout</NavLink></li>
                                : <>
                                    <li className="btn-3"><NavLink to="/login">Log in</NavLink></li>
                                </>}
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};