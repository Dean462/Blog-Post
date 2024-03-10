import axios from "axios";
import { createContext } from "react";


export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const handleLogin = async (email, password) => {
        try {
            const { data } = await axios.post('http://localhost:5000/api/users/login', { email, password });

            window.localStorage.setItem("token", data?.token)

            return data
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <AuthContext.Provider value={{  handleLogin }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
