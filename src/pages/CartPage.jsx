// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const CartPage = ({ cart, setCart, products }) => {
//   const [cartItems, setCartItems] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const items = cart.map((item) => {
//       const product = products.find((p) => p.id === item.productId);
//       return { ...item, product };
//     });
//     setCartItems(items);
//   }, [cart, products]);

//   const handleIncreaseQuantity = (id) => {
//     setCartItems((prev) =>
//       prev.map((item) =>
//         item.product.id === id ? { ...item, quantity: item.quantity + 1 } : item
//       )
//     );
//   };

//   const handleDecreaseQuantity = (id) => {
//     setCartItems((prev) =>
//       prev.map((item) =>
//         item.product.id === id && item.quantity > 1
//           ? { ...item, quantity: item.quantity - 1 }
//           : item
//       )
//     );
//   };

//   const handleRemoveItem = (id) => {
//     setCartItems((prev) => prev.filter((item) => item.product.id !== id));
//   };

//   const handleCheckout = () => {
//     // Checkout logic (e.g., redirect to checkout page)
//     alert("Proceeding to checkout");
//     navigate("/checkout");
//   };

//   const calculateTotal = () => {
//     return cartItems.reduce(
//       (total, item) => total + item.product.price * item.quantity,
//       0
//     );
//   };

//   return (
//     <div className="container mt-4">
//       <h2>Your Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <>
//           <ul className="list-group">
//             {cartItems.map((item) => (
//               <li
//                 key={item.product.id}
//                 className="list-group-item d-flex justify-content-between align-items-center"
//               >
//                 <div>
//                   <h5>{item.product.name}</h5>
//                   <p>{item.product.description}</p>
//                   <p>₹{item.product.price}</p>
//                 </div>
//                 <div className="d-flex">
//                   <button
//                     className="btn btn-secondary"
//                     onClick={() => handleDecreaseQuantity(item.product.id)}
//                   >
//                     -
//                   </button>
//                   <span className="mx-3">{item.quantity}</span>
//                   <button
//                     className="btn btn-secondary"
//                     onClick={() => handleIncreaseQuantity(item.product.id)}
//                   >
//                     +
//                   </button>
//                 </div>
//                 <button
//                   className="btn btn-danger"
//                   onClick={() => handleRemoveItem(item.product.id)}
//                 >
//                   Remove
//                 </button>
//               </li>
//             ))}
//           </ul>

//           <div className="mt-4">
//             <h4>Total: ₹{calculateTotal()}</h4>
//             <button className="btn btn-primary" onClick={handleCheckout}>
//               Checkout
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default CartPage;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CartPage = ({ cart, setCart, products }) => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!products) {
      console.error("Products data is not available!");
      return;
    }

    const items = cart.map((item) => {
      const product = products.find((p) => p.id === item.productId);
      return product ? { ...item, product } : item; // Safeguard in case the product is not found
    });
    setCartItems(items);
  }, [cart, products]);

  const handleIncreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== id));
  };

  const handleCheckout = () => {
    // Checkout logic (e.g., redirect to checkout page)
    alert("Proceeding to checkout");
    navigate("/payment");
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="list-group">
            {cartItems.map((item) => (
              <li
                key={item.product.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>
                  <h5>{item.product.name}</h5>
                  <p>{item.product.description}</p>
                  <p>₹{item.product.price}</p>
                </div>
                <div className="d-flex">
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleDecreaseQuantity(item.product.id)}
                  >
                    -
                  </button>
                  <span className="mx-3">{item.quantity}</span>
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleIncreaseQuantity(item.product.id)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="btn btn-danger"
                  onClick={() => handleRemoveItem(item.product.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-4">
            <h4>Total: ₹{calculateTotal()}</h4>
            <button className="btn btn-primary" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
