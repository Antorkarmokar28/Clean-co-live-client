import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <span className="text-primary flex justify-center items-center font-bold text-xl h-screen">Loading....</span>
    }

    if (!user?.email) {
        return <Navigate to='/login' />
    }

    return children;
};

export default PrivateRoute;