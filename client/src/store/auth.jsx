import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [services, setServices] = useState([]);
    const authorizationToken = `Bearer ${token}`;

    const storeTokenInLS = (serverToken) => {
        setToken(serverToken);
        return localStorage.setItem("token", serverToken);
    };

    let isLoggedIn = !!token;
    console.log("isLoggedIN", isLoggedIn);

    // LOGOUT FUNCTIONALITY

    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem("token");
    };

    // JWT AUTHENTICATION / To get currently logged in  user data

    const userAuthentication = async () => {
        try {
            setIsLoading(true);
            const response = await fetch("http://localhost:4000/api/auth/user", {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            });

            if(response.ok) {
                const data = await response.json();
                console.log("user data", data.userData);
                setUser(data.userData);
                setIsLoading(false);
            }
        } catch (error) {
            console.error("Error fetching user data");
        }
    };

    // To fetch services data from database
    const getServices = async () => {
        try {
            const response = await fetch("http://localhost:4000/api/data/service", {
                method: "GET",
            });

            if(response.ok){
                const data = await response.json();
                console.log(data.msg);
                setServices(data.msg);
            }
        } catch (error) {
            console.log(`services frontend error: ${error}`);
        }
    };

    useEffect(() => {
        getServices();
        userAuthentication();
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser, user, services, authorizationToken, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const AuthContextValue = useContext(AuthContext);
    if (!AuthContextValue) {
        throw new Error("useAuth used outside of the Provider");
    };
    return AuthContextValue;
};