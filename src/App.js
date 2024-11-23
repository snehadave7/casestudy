// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import ProductCatalog from "./pages/ProductCatalog";
// import CartPage from "./pages/CartPage";
// import CheckoutPage from "./pages/CheckoutPage";
// import SellerDashboard from "./pages/SellerDashboard";
// import AdminDashboard from "./pages/AdminDashboard";
// import Footer from "./components/Footer";
// import HomePage from "./pages/HomePage";
// import Registration from "./pages/Registration";
// import Login from "./pages/Login";
// import AddAddressForm from "./pages/AddAddressForm";
// const App = () => {
//   return (
//     <Router>
//       {/* <Navbar /> */}
//       <main className="container py-4">
//         {<HomePage />}
//         <Routes>
//           <Route path="/" element={<ProductCatalog />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Registration />} />
//           <Route path="/cart" element={<CartPage />} />
//           <Route path= "/address" element={<AddAddressForm/>}/>
//           <Route path="/checkout" element={<CheckoutPage />} />
//           <Route path="/seller-dashboard" element={<SellerDashboard />} />
//           <Route path="/admin-dashboard" element={<AdminDashboard />} />
//         </Routes>
//       </main>
//       {/* <Footer /> */}
//     </Router>
//   );
// };

// export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PaymentPage from "./pages/PaymentPage";

function App() {
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addToCart = (product, quantity) => {
   
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.productId === product.id
      );
      if (existingItem) {
        // Update quantity if product already exists in cart
        return prevCart.map((item) =>
          item.productId === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // Add new product to the cart
        return [
          ...prevCart,
          { productId: product.id, quantity: quantity, product: product },
          
        ];
      }
    });
  };
  // Dummy data for demonstration
  const products = [
    {
      id: 1,
      name: "T-shirt",
      description: "Comfortable cotton T-shirt",
      price: 500,
      stock: 10,
      imageUrl: "tshirt.jpg",
      reviews: [
        { userName: "John", comment: "Great product!", rating: 4 },
        { userName: "Alice", comment: "Loved it!", rating: 5 },
      ],
    },
    {
      id: 2,
      name: "Smartphone",
      description: "Latest 5G smartphone",
      price: 20000,
      stock: 0,
      imageUrl: "smartphone.jpg",
      reviews: [],
    },
    {
      id: 3,
      name: "Rice",
      description: "High-quality basmati rice",
      price: 2000,
      stock: 5,
      category: "Grocery",
      imageUrl: "rice.jpg",
    },
  ];

  return (
    <Router>
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        
        <Route
          path="/cart"
          element={<CartPage cart={cart} products={products}setCart={setCart} />}
        />
        <Route
          path="/fashion"
          element={<ProductsPage products={products} category="Fashion" />}
        />
        <Route
          path="/electronics"
          element={<ProductsPage products={products} category="Electronics" />}
        />
        <Route
          path="/grocery"
          element={<ProductsPage products={products} category="Grocery" />}
        />
        <Route
          path="/product/:id"
          element={<ProductDetailsPage addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={
            <CartPage cart={cart} setCart={setCart} products={products} />
          }
        />
        <Route
          path="/payment"
          element={
            <PaymentPage
              cart={cart}
              totalAmount={totalAmount}
              setCart={setCart}
            />
          }
        />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
