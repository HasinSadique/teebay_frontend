import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductCard from "../Home/ProductCard/ProductCard";
import RentedProductCard from "./RentedProductCard/RentedProductCard";
import { Link, Outlet } from "react-router-dom";
import AddedProducts from "./AddedProducts/AddedProducts";

const MyProducts = () => {
  const [myAddedProducts, setMyAddedProducts] = useState([]);

  const [productID, setProductID] = useState("");

  const currentUserEmail = localStorage.getItem("user");
  const currentUserID = localStorage.getItem("currentUserID");
  console.log("CurrentUserId >> ", currentUserID);

  // For added products
  useEffect(() => {
    fetch(`http://localhost:3302/getmy-products/${currentUserEmail}`)
      .then((res) => res.json())
      .then((data) => setMyAddedProducts(data));
  }, []);

  return (
    <div>
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex ">
          {/* <!-- Page content here --> */}
          <label
            for="my-drawer-2"
            className="border-r-2 bg-red-800 flex pt-3 bg-base-100 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" h-6 w-6 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="White"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          {window.location.pathname.endsWith("/my-products") ? (
            <AddedProducts></AddedProducts>
          ) : (
            <></>
          )}

          <Outlet></Outlet>
        </div>

        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 border-r-2 border-t-2 rounded-tr-2xl border-red-500 overflow-y-auto w-56 bg-white text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <a href="/my-products/added-products">Added products</a>
            </li>
            <li>
              <a href="/my-products/sold-products">Sold products</a>
            </li>
            <li>
              <a href="/my-products/bought-products">Bought products</a>
            </li>
            <li>
              <a href="/my-products/rented-products">Products on rents</a>
            </li>
            <li>
              <a href="/my-products/borrowed-products">Bought Products</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyProducts;
