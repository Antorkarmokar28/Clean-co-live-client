import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const Navbar = () => {
    const { logOut, user } = useAuth();
    console.log(user);
    return (
        <div className="navbar bg-base-300 w-full">
            <div className="w-[1140px] px-[25px] mx-auto">
                <div className="flex-none lg:hidden">
                    <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-6 w-6 stroke-current">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </label>
                </div>
                <div className="mx-2 flex-1 px-2 text-lg font-bold">Cleanco <span className="text-primary">Live Client</span></div>
                <div className="hidden flex-none lg:block">
                    <ul className="menu menu-horizontal gap-6">
                        {/* Navbar menu content here */}
                        <NavLink
                            to='/about'
                            className={({ isActive }) =>
                                isActive ? 'btn-primary btn btn-sm' : 'btn-ghost btn btn-sm'
                            }
                        >About</NavLink>
                        <NavLink
                            to='/contact'
                            className={({ isActive }) =>
                                isActive ? 'btn-primary btn btn-sm' : 'btn-ghost btn btn-sm'
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
                </div>
            </div>
        </div>
    );
};

export default Navbar;