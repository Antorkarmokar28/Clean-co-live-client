import { NavLink } from "react-router-dom";
const SideNavbar = () => {
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
            <NavLink to='/login'
                className={({ isActive }) =>
                    isActive ? 'btn-primary btn' : 'btn-ghost btn'
                }
            >Login</NavLink>
        </ul>

    );
};

export default SideNavbar;