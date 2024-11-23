import React, { useState } from "react";

const SellerDashboard = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    stock: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = () => {
    setProducts([...products, newProduct]);
    setNewProduct({ name: "", price: "", stock: "" });
  };

  return (
    <div className="container">
      <h2>Seller Dashboard</h2>
      <div className="card shadow mt-4 p-3">
        <h4>Add New Product</h4>
        <div className="form-group mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Product Name"
            name="name"
            value={newProduct.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group mb-2">
          <input
            type="number"
            className="form-control"
            placeholder="Price"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group mb-2">
          <input
            type="number"
            className="form-control"
            placeholder="Stock"
            name="stock"
            value={newProduct.stock}
            onChange={handleInputChange}
          />
        </div>
        <button className="btn btn-primary" onClick={handleAddProduct}>
          Add Product
        </button>
      </div>

      <h4 className="mt-5">My Products</h4>
      <ul className="list-group">
        {products.map((product, index) => (
          <li key={index} className="list-group-item">
            {product.name} - ${product.price} (Stock: {product.stock})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SellerDashboard;
