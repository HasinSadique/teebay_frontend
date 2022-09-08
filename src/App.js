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

import SoldParts from "./components/MyProducts/SoldParts/SoldParts";
import BoughtParts from "./components/MyProducts/BoughtParts/BoughtParts";
import BorrowedParts from "./components/MyProducts/BorrowedParts/BorrowedParts";
import RentedParts from "./components/MyProducts/RentedParts/RentedParts";
import AddedProducts from "./components/MyProducts/AddedProducts/AddedProducts";
import NotFound from "./components/NotFound/NotFound";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Footer from "./components/Footer/Footer";

function App() {
  // const [currentUser, setCurrentUser] = useState("");
  // console.log("hello > ", currentUser);

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/*" element={<NotFound></NotFound>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/" element={<Signin></Signin>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/add-product" element={<AddProduct></AddProduct>}></Route>
        <Route
          path="/add-product/:pid"
          element={<AddProduct></AddProduct>}
        ></Route>

        <Route
          path="/my-products"
          element={
            <RequireAuth>
              <MyProducts></MyProducts>
            </RequireAuth>
          }
        >
          <Route
            path="added-products"
            element={<AddedProducts></AddedProducts>}
          ></Route>
          <Route path="sold-products" element={<SoldParts></SoldParts>}></Route>
          <Route
            path="bought-products"
            element={<BoughtParts></BoughtParts>}
          ></Route>
          <Route
            path="rented-products"
            element={<RentedParts></RentedParts>}
          ></Route>
          <Route
            path="borrowed-products"
            element={<BorrowedParts></BorrowedParts>}
          ></Route>
        </Route>

        <Route
          path="/product-details/:pid"
          element={<ProductDetails></ProductDetails>}
        ></Route>
        <Route
          path="/edit-details/:pid"
          element={<EditProduct></EditProduct>}
        ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
