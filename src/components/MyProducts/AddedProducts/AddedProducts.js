import React, { useEffect, useState } from "react";
import ProductCard from "../../Home/ProductCard/ProductCard";

const AddedProducts = () => {
  const [myAddedProducts, setMyAddedProducts] = useState([]);

  const currentUserEmail = localStorage.getItem("user");
  const currentUserID = localStorage.getItem("currentUserID");

  // For added products
  useEffect(() => {
    fetch(`http://localhost:3302/getmy-products/${currentUserEmail}`)
      .then((res) => res.json())
      .then((data) => setMyAddedProducts(data));
  }, []);

  return (
    <div className="w-full">
      <div className="w-full">
        <h1 className=" w-full text-2xl text-black font-bold">
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
    </div>
  );
};

export default AddedProducts;
