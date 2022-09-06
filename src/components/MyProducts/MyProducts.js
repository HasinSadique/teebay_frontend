import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductCard from "../Home/ProductCard/ProductCard";
import RentedProductCard from "./RentedProductCard/RentedProductCard";

const MyProducts = () => {
  const [myAddedProducts, setMyAddedProducts] = useState([]);
  const [mySoldProducts, setMySoldProducts] = useState([]);
  const [myBoughtProducts, setMyBoughtProducts] = useState([]);
  const [myProductsOnRent, setMyProductsOnRent] = useState([]);
  const [myBorrowedProducts, setMyBorrowedProducts] = useState([]);

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

  // For sold products
  useEffect(() => {
    fetch(`http://localhost:3302/sold-products/${currentUserID}`)
      .then((res) => res.json())
      .then((data) => setMySoldProducts(data));
  }, []);

  // For bought products
  useEffect(() => {
    fetch(`http://localhost:3302/bought-products/${currentUserID}`)
      .then((res) => res.json())
      .then((data) => setMyBoughtProducts(data));
  }, []);
  // For products on Rent
  useEffect(() => {
    fetch(`http://localhost:3302/products-on-rent/${currentUserID}`)
      .then((res) => res.json())
      .then((data) => setMyProductsOnRent(data));
  }, []);
  // For borrowed products
  useEffect(() => {
    fetch(`http://localhost:3302/products-borrowed/${currentUserID}`)
      .then((res) => res.json())
      .then((data) => setMyBorrowedProducts(data));
  }, []);

  const deleteProduct = () => {};

  return (
    <div>
      <div>
        <h1 className="bg-red-700 text-2xl text-white font-bold">
          My added products: ({myAddedProducts.length})
        </h1>
        {myAddedProducts.length == 0 ? (
          <h1 className="mt-5">You did not add any new products.</h1>
        ) : (
          <div>
            {myAddedProducts.map((product) => (
              <div>
                <ProductCard key={product.PID} props={product}></ProductCard>
              </div>
            ))}
          </div>
        )}
        <a className="btn normal-case my-10" href="/add-product">
          Add a product
        </a>
      </div>

      {/*For Sold Products  */}
      <div>
        <h1 className="bg-red-700 text-2xl text-white font-bold">
          My Sold products: ({mySoldProducts.length})
        </h1>
        {mySoldProducts.length == 0 ? (
          <h1 className="my-16">You did not sell any products.</h1>
        ) : (
          <div className="p-5 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {mySoldProducts.map((product) => (
              <ProductCard key={product.BuyingID} props={product}></ProductCard>
            ))}
          </div>
        )}
      </div>

      {/*For Bought Products  */}
      <div>
        <h1 className="bg-red-700 text-2xl text-white font-bold">
          My bought products: ({myBoughtProducts.length})
        </h1>
        {myBoughtProducts.length == 0 ? (
          <h1 className="my-16">You did not buy any products.</h1>
        ) : (
          <div className="p-5 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-y-5">
            {myBoughtProducts.map((product) => (
              <ProductCard key={product.BuyingID} props={product}></ProductCard>
            ))}
          </div>
        )}
      </div>
      {/*Products on rent  */}
      <div>
        <h1 className="bg-red-700 text-2xl text-white font-bold">
          My products on rent: ({myProductsOnRent.length})
        </h1>
        {myProductsOnRent.length == 0 ? (
          <h1 className="my-16">No products on rent</h1>
        ) : (
          <div className="p-5 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-y-5">
            {myProductsOnRent.map((product) => (
              <RentedProductCard
                key={product.BuyingID}
                props={product}
              ></RentedProductCard>
            ))}
          </div>
        )}
      </div>
      {/*For Bought Products  */}
      <div>
        <h1 className="bg-red-700 text-2xl text-white font-bold">
          My borrowed products: ({myBorrowedProducts.length})
        </h1>
        {myBorrowedProducts.length == 0 ? (
          <h1 className="my-16">No products borrowed</h1>
        ) : (
          <div className="p-5 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-y-5">
            {myBorrowedProducts.map((product) => (
              <RentedProductCard
                key={product.BuyingID}
                props={product}
              ></RentedProductCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProducts;
