import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Login from "../pages/login/Login";
import Register from "../pages/Register/Register";
import AdminLayout from "../components/layout/AdminLayout";
import Addservice from "../pages/addService/Addservice";
import Home from "../pages/Home/Home"

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'contact',
                element: <Contact />
            },
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                path: 'addservice',
                element: <Addservice />
            }
        ]
    }
])
export default routes;