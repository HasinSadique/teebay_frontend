import React, { useEffect, useState } from "react";
import RentedProductCard from "../RentedProductCard/RentedProductCard";

const BorrowedParts = () => {
  const [myBorrowedProducts, setMyBorrowedProducts] = useState([]);
  const currentUserEmail = localStorage.getItem("user");
  const currentUserID = localStorage.getItem("currentUserID");
  //   // For borrowed products
  useEffect(() => {
    fetch(`http://localhost:3302/products-borrowed/${currentUserID}`)
      .then((res) => res.json())
      .then((data) => setMyBorrowedProducts(data));
  }, []);

  return (
    <div className="w-full">
      {/*For Bought Products  */}
      <div>
        <h1 className=" text-2xl text-black font-bold">
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

export default BorrowedParts;
