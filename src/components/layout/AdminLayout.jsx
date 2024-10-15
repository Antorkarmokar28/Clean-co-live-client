import { Outlet } from "react-router-dom";
import Addservice from "../../pages/addService/Addservice";

const AdminLayout = () => {
    return (
        <div className="flex h-screen">
            <div className="bg-red-300 flex-[1]">
                <h1>Sidebar</h1>
            </div>
            <div className="bg-green-300 flex-[3]">
                <Addservice />
                <Outlet />
            </div>
        </div>
    );
};

export default AdminLayout;