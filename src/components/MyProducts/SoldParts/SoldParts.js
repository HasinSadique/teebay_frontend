import React, { useEffect, useState } from "react";
import ProductCard from "../../Home/ProductCard/ProductCard";

const SoldParts = () => {
  const [mySoldProducts, setMySoldProducts] = useState([]);
  const currentUserEmail = localStorage.getItem("user");
  const currentUserID = localStorage.getItem("currentUserID");
  //   For sold products
  useEffect(() => {
    fetch(`http://localhost:3302/sold-products/${currentUserID}`)
      .then((res) => res.json())
      .then((data) => setMySoldProducts(data));
  }, []);

  return (
    <div className="w-full">
      {/*For Sold Products  */}
      <div>
        <h1 className=" text-2xl text-black font-bold">
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
    </div>
  );
};

export default SoldParts;
