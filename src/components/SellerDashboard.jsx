import React from "react";
import { Link } from "react-router-dom";

const SellerDashboard = () => {
  return (
    <div className="container mt-4">
      <h2>Seller Dashboard</h2>
      <nav>
        <ul>
          <li>
            <Link to="/seller-dashboard/products">Manage Products</Link>
          </li>
          <li>
            <Link to="/seller-dashboard/orders">Manage Orders</Link>
          </li>
          <li>
            <Link to="/seller-dashboard/account">Account Settings</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SellerDashboard;
