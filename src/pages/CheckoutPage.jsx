import React, { useState } from "react";

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    paymentMethod: "credit-card",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Checkout Data: ", formData);
    alert("Order placed successfully!");
  };

  return (
    <div className="container">
      <div className="card shadow mt-5 p-4">
        <h2 className="text-center">Checkout</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label>Shipping Address</label>
            <textarea
              className="form-control"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              rows="3"
              required
            ></textarea>
          </div>
          <div className="form-group mb-3">
            <label>Payment Method</label>
            <select
              className="form-control"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleInputChange}
            >
              <option value="credit-card">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="cod">Cash on Delivery</option>
            </select>
          </div>
          <button type="submit" className="btn btn-success w-100">
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
