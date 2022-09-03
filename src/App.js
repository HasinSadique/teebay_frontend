import "./App.css";

import { Routes, Route } from "react-router";
import Navbar from "./components/Home/Navbar/Navbar";
import Signin from "./components/SignIn/Signin";
import Signup from "./components/Signup/Signup";
import Home from "./components/Home/Home";
import AddProduct from "./components/AddProduct/AddProduct";
import EditProduct from "./components/EditProduct/EditProduct";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/" element={<Signin></Signin>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/add-product" element={<AddProduct></AddProduct>}></Route>
        <Route
          path="/edit-details"
          element={<EditProduct></EditProduct>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
