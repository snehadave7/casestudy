import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./ProductDetailsPage.css";
import { useNavigate } from "react-router-dom";

const ProductDetailsPage = ({ addToCart }) => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const product = state?.product || {};
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (quantity > product.stock) {
      alert("Quantity exceeds available stock!");
      return;
    }
    addToCart(product, quantity);
    
    alert(`${quantity} ${product.name}(s) added to cart.`);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h4>Price: ₹{product.price}</h4>
          <p>
            <strong>Stock:</strong>{" "}
            {product.stock > 0 ? product.stock : "Out of Stock"}
          </p>
          {product.stock > 0 ? (
            <>
              <div className="d-flex align-items-center">
                <label className="me-2">Quantity:</label>
                <input
                  type="number"
                  className="form-control w-25"
                  value={quantity}
                  min="1"
                  max={product.stock}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              <button
                className="btn btn-success mt-3"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </>
          ) : (
            <button className="btn btn-secondary mt-3" disabled>
              Out of Stock
            </button>
          )}
          <hr />
          <h5>Reviews</h5>
          {product.reviews?.length > 0 ? (
            product.reviews.map((review, index) => (
              <div key={index} className="review">
                <p>
                  <strong>{review.userName}</strong>: {review.comment}
                </p>
                <p>Rating: {review.rating}/5</p>
              </div>
            ))
          ) : (
            <p>No reviews yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
