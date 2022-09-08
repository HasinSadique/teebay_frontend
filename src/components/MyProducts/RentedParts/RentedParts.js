import React, { useEffect, useState } from "react";
import RentedProductCard from "../RentedProductCard/RentedProductCard";

const RentedParts = () => {
  const [myProductsOnRent, setMyProductsOnRent] = useState([]);
  const currentUserEmail = localStorage.getItem("user");
  const currentUserID = localStorage.getItem("currentUserID");
  // For products on Rent
  useEffect(() => {
    fetch(`http://localhost:3302/products-on-rent/${currentUserID}`)
      .then((res) => res.json())
      .then((data) => setMyProductsOnRent(data));
  }, []);

  return (
    <div className="w-full mt-10">
      {/*Products on rent  */}
      <div>
        <h1 className=" text-2xl text-black font-bold">
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
    </div>
  );
};

export default RentedParts;
