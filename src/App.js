import "./App.css";

import { Routes, Route } from "react-router";
import Navbar from "./components/Home/Navbar/Navbar";
import Signin from "./components/SignIn/Signin";
import Signup from "./components/Signup/Signup";
import Home from "./components/Home/Home";
import AddProduct from "./components/AddProduct/AddProduct";
import EditProduct from "./components/EditProduct/EditProduct";
import ProductDetails from "./components/Home/ProductCard/ProductDetails/ProductDetails";
import MyProducts from "./components/MyProducts/MyProducts";
import { useState } from "react";

function App() {
  // const [currentUser, setCurrentUser] = useState("");
  // console.log("hello > ", currentUser);

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/" element={<Signin></Signin>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/add-product" element={<AddProduct></AddProduct>}></Route>
        <Route
          path="/add-product/:pid"
          element={<AddProduct></AddProduct>}
        ></Route>
        <Route path="/my-products" element={<MyProducts></MyProducts>}></Route>
        <Route
          path="/product-details/:pid"
          element={<ProductDetails></ProductDetails>}
        ></Route>
        <Route
          path="/edit-details/:pid"
          element={<EditProduct></EditProduct>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
