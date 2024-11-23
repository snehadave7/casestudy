import React from "react";

const Categories = () => {
  return (
    <div className="container mt-4">
      <h3>Shop by Category</h3>
      <div className="row">
        {["Fashion", "Grocery", "Electronics"].map((category, index) => (
          <div className="col-md-4" key={index}>
            <div className="card">
              <img
                src={`https://via.placeholder.com/150?text=${category}`}
                className="card-img-top"
                alt={category}
              />
              <div className="card-body">
                <h5 className="card-title">{category}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
