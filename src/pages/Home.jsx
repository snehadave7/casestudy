// import React from "react";
// import { Link } from "react-router-dom";
// import "./HomePage.css"; // Optional custom styling
// import "bootstrap/dist/css/bootstrap.min.css";
// import LoginPage from "./Login.jsx";
// import AddAddressForm from "./AddAddressForm.jsx";
// const HomePage = () => {
//   // Sample bestsellers and categories
//   const bestSellers = [
//     { id: 1, name: "Laptop", price: "$1200", image: "laptop.jpg" },
//     { id: 2, name: "Smartphone", price: "$800", image: "phone.jpg" },
//     { id: 3, name: "Headphones", price: "$150", image: "headphones.jpg" },
//   ];

//   const categories = [
//     "Electronics",
//     "Fashion",
//     "Home & Furniture",
//     "Beauty & Personal Care",
//     "Books",
//   ];

//   return (
//     <div>
//       {/* Navbar */}
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container-fluid">
//           <Link className="navbar-brand" to="/">
//             QuitQ
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav ms-auto">
//               <li className="nav-item">
//                 <Link className="nav-link" to="/login">
//                   Login
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/register">
//                   Register
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/address">
//                   AddAddress
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section (Optional: Banner or Large Image) */}
//       <section className="hero bg-primary text-white text-center py-5">
//         <h1>Welcome to QuitQ!</h1>
//         <p>Your one-stop shop for all your needs</p>
//       </section>

//       {/* Bestseller Products */}
//       <section className="container my-5">
//         <h2>Bestseller Products</h2>
//         <div className="row">
//           {bestSellers.map((product) => (
//             <div className="col-md-4 mb-4" key={product.id}>
//               <div className="card">
//                 <img
//                   src={product.image}
//                   className="card-img-top"
//                   alt={product.name}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">{product.name}</h5>
//                   <p className="card-text">{product.price}</p>
//                   <button className="btn btn-primary">Add to Cart</button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Product Categories */}
//       <section className="container my-5">
//         <h2>Shop by Categories</h2>
//         <div className="row">
//           {categories.map((category, index) => (
//             <div className="col-md-2 mb-4" key={index}>
//               <div className="card">
//                 <div className="card-body text-center">
//                   <h5 className="card-title">{category}</h5>
//                   <Link
//                     to={`/${category.toLowerCase()}`}
//                     className="btn btn-outline-primary"
//                   >
//                     Shop Now
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-dark text-white text-center py-3">
//         <p>&copy; 2024 QuitQ. All Rights Reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;

import React from "react";
import Carousel from "./Carousel";
import Bestsellers from "./Bestsellers";
import Categories from "./Categories";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Bestsellers />
      <Categories />
      <Footer />
    </div>
  );
};

export default Home;
