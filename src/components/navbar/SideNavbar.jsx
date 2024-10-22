import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const SideNavbar = () => {
    const { user, logOut } = useAuth();
    return (
        <ul className="menu bg-base-200 min-h-full w-72 p-4">
            <NavLink
                to='/about'
                className={({ isActive }) =>
                    isActive ? 'btn-primary btn' : 'btn-ghost btn'
                }
            >About</NavLink>
            <NavLink
                to='/contact'
                className={({ isActive }) =>
                    isActive ? 'btn-primary btn' : 'btn-ghost btn btn-sm'
                }
            >Contact</NavLink>
            {
                user?.email ? <button onClick={logOut} className="btn btn-sm">Sign Out</button> :
                    <NavLink to='/login'
                        className={({ isActive }) =>
                            isActive ? 'btn-primary btn btn-sm' : 'btn-ghost btn btn-sm'
                        }
                    >Login</NavLink>
            }
        </ul>

    );
};

export default SideNavbar;