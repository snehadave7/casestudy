import React from "react";

const ProductCatalog = () => {
  const products = [
    { id: 1, name: "Laptop", price: "$1200", image: "laptop.jpg" },
    { id: 2, name: "Phone", price: "$800", image: "phone.jpg" },
    { id: 3, name: "Headphones", price: "$200", image: "headphones.jpg" },
  ];

  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-md-4 mb-3" key={product.id}>
          <div className="card">
            <img
              src={product.image}
              className="card-img-top"
              alt={product.name}
            />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.price}</p>
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCatalog;
