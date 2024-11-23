import React from "react";

const Bestsellers = () => {
  return (
    <div className="container mt-4">
      <h3>Bestsellers</h3>
      <div className="row">
        {/* Replace with dynamic product cards */}
        {[1, 2, 3, 4].map((_, index) => (
          <div className="col-md-3" key={index}>
            <div className="card">
              <img
                src="https://via.placeholder.com/150"
                className="card-img-top"
                alt="Product"
              />
              <div className="card-body">
                <h5 className="card-title">Product Name</h5>
                <p className="card-text">Price: $50</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bestsellers;
