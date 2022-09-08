import React, { useEffect, useState } from "react";
import ProductCard from "../../Home/ProductCard/ProductCard";

const BoughtParts = () => {
  const [myBoughtProducts, setMyBoughtProducts] = useState([]);
  const currentUserEmail = localStorage.getItem("user");
  const currentUserID = localStorage.getItem("currentUserID");
  // For bought products
  useEffect(() => {
    fetch(`http://localhost:3302/bought-products/${currentUserID}`)
      .then((res) => res.json())
      .then((data) => setMyBoughtProducts(data));
  }, []);

  return (
    <div className="w-full mt-10">
      {/*For Bought Products  */}
      <div>
        <h1 className="text-2xl text-black font-bold">
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
    </div>
  );
};

export default BoughtParts;
