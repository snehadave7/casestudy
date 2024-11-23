import React, { useState, useEffect } from "react";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from the backend API
    fetch("http://localhost:5000/api/orders")
      .then((response) => response.json())
      .then((data) => {
        setOrders(data);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
  }, []);

  const handleUpdateStatus = (id, status) => {
    // Send status update request to backend API
    fetch(`http://localhost:5000/api/orders/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
    })
      .then((response) => response.json())
      .then((data) => {
        setOrders(
          orders.map((order) =>
            order.id === id ? { ...order, status } : order
          )
        );
      })
      .catch((error) => {
        console.error("Error updating order status:", error);
      });
  };

  return (
    <div className="container mt-4">
      <h2>Manage Orders</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Status</th>
            <th>Total Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.status}</td>
              <td>₹{order.totalAmount}</td>
              <td>
                <button
                  onClick={() => handleUpdateStatus(order.id, "Shipped")}
                  className="btn btn-primary"
                >
                  Mark as Shipped
                </button>
                <button
                  onClick={() => handleUpdateStatus(order.id, "Delivered")}
                  className="btn btn-success ms-2"
                >
                  Mark as Delivered
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageOrders;
