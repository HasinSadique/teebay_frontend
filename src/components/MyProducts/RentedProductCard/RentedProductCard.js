import React, { useEffect, useState } from "react";

const RentedProductCard = (props) => {
  //   console.log(props.props);
  const { OwnerID, PID, Rent_Amount, Rent_Option, From, To } = props.props;

  const [productInfo, setProductInfo] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3302/get-product/${PID}`)
      .then((res) => res.json())
      .then((data) => setProductInfo(data[0]));
  }, []);
  return (
    <div className="p-5 hover:scale-105 ease-in-out duration-300">
      <div className="card bg-base-100 shadow-2xl">
        <div className=" card-body p-5 text-left">
          <div className="flex justify-between items-center">
            <h1 className="card-title text-left"> {productInfo.Title}</h1>
            <h1 className=" text-xs text-sm">PID: {PID}</h1>
          </div>
          <small className="text-xs">Owner ID: {OwnerID}</small>
          <small className="font-semi text-sm">
            <span className="">Price:</span> ${productInfo.Price}
          </small>
          <h1 className="font-semi text-sm">
            <span className="">Rent:</span> ${Rent_Amount} {Rent_Option}
          </h1>
          <h4 className=" text-text-center items-center font-semibold">
            From: {From}
          </h4>
          <h4 className=" text-text-center items-center font-semibold">
            To: {To}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default RentedProductCard;
