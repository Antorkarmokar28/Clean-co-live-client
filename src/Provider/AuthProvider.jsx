import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../config/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    // create user function
    const createUser = (email, password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // user signIn function
    const logIn = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // user sign out
    const logOut = () => {
        return signOut(auth);
    }
    // user persistency
    useEffect(() => {
        const subscribe = onAuthStateChanged(auth, (currentuser) => {
            setUser(currentuser);
            setIsLoading(false);
        });
        return () => {
            return subscribe()
        }
    }, [])
    // pass user data in another component with values object
    const values = {
        createUser,
        logIn,
        user,
        logOut,
        isLoading
    }
    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    );

};

export default AuthProvider;