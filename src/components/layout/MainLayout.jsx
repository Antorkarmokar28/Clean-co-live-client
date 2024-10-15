import Navbar from "../navbar/Navbar";
import SideNavbar from "../navbar/SideNavbar";

const MainLayout = ({ children }) => {
    return (
        <div>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <Navbar />
                    {/* Page content here */}
                    {children}
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    {/* Sidebar content here */}
                    <SideNavbar />
                </div>
            </div>
        </div>
    );
};

export default MainLayout;