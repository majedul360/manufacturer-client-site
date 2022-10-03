import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../customHooks/AdminHook";
import auth from "../../firebase/Firebase.int";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  console.log(user);
  console.log(admin);

  return (
    <div className="drawer drawer-mobile mt-8">
      <input id="dashboard" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content mt-4 px-0 md:px-8">
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 text-base-content">
          {admin ? (
            <>
              <li>
                <Link to="/dashboard/makeAdmin" className="text-lg">
                  Make Admin
                </Link>
              </li>
              <li>
                <Link to="/dashboard/addProduct" className="text-lg">
                  Add A Product
                </Link>
              </li>
              <li>
                <Link to="/dashboard/manageAllOrders" className="text-lg">
                  Manage All Orders
                </Link>
              </li>
              <li>
                <Link to="/dashboard/manageProducts" className="text-lg">
                  Manage Products
                </Link>
              </li>
              <li>
                <Link to="/dashboard/my-profile" className="text-lg">
                  My Profile
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/dashboard/my-orders" className="text-lg">
                  My Orders
                </Link>
              </li>
              <li>
                <Link to="/dashboard/add-review" className="text-lg">
                  Add a Review
                </Link>
              </li>
              <li>
                <Link to="/dashboard/my-profile" className="text-lg">
                  My Profile
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
