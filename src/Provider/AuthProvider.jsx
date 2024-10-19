import { signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../config/firebase.config";

export const AuthContext = createContext();
const AuthProvider = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    // user login
    const createUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const values = {
        createUser,
    }
    return (
        <AuthContext.Provider value={values}>

        </AuthContext.Provider>
    );
};

export default AuthProvider;