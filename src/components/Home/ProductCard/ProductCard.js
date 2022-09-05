import React from "react";
import { useLocation, useNavigate } from "react-router";

const ProductCard = (props) => {
  const {
    BuyingID,
    ProductTitle,
    SellerID,
    BuyerID,
    Total_Amount,
    PID,
    ProductOwnerID,
    Title,
    Description,
    Price,
    Rent,
    Categories,
    Rent_Option,
  } = props.props;
  //   props.setProductID(PID);

  const navigate = useNavigate();

  const handleProductClick = (event) => {
    console.log("kk>> ", PID);
    if (localStorage.getItem("user") != null) {
      navigate(`/product-details/${PID}`);
    } else {
      navigate(`/`);
    }
  };
  const handleEditProductDetails = (event) => {
    console.log("kk>> ", PID);
    if (window.location.pathname.startsWith("/my-products")) {
      console.log("khela hocche");
      navigate(`/edit-details/${PID}`);
    }
  };

  return (
    <div>
      {!BuyingID ? (
        <div class=" hover:scale-105 ease-in-out duration-300 mx-auto my-10 card lg:w-1/2 w-3/4 bg-base-100 shadow-2xl">
          <div class="card-body ">
            <div className="flex justify-between items-center">
              <h2 class="card-title text-left ">{Title}</h2>
              <small className="text-gray-500">Product ID: {PID}</small>
            </div>
            <div className="grid grid-cols-1 text-left">
              <small>Categories: {Categories}</small>
              <small>Price: $ {Price}</small>
              <small>
                Rent: $ {Rent} {Rent_Option}
              </small>
              <p className="mt-5">{Description}</p>
            </div>
          </div>
          {/* Buttons */}
          <div>
            {window.location.pathname.startsWith("/my-products") ? (
              <div className="flex justify-end items-center">
                <button
                  className=" mx-10 my-3 text-red-600 hover:font-bold rounded-full w-full border-2 border-red-500 hover:bg-red-600 hover:text-white hover:font-bold"
                  onClick={handleEditProductDetails}
                >
                  Edit Details
                </button>
              </div>
            ) : (
              <button
                className={`${
                  ProductOwnerID == localStorage.getItem("currentUserID")
                    ? "hidden"
                    : ""
                } my-5 text-red-600 hover:font-bold rounded-full w-1/3 border-2 border-red-500 hover:bg-red-600 hover:text-white hover:font-bold`}
                onClick={handleProductClick}
              >
                Details
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="hover:scale-105 ease-in-out duration-300 card w-3/4 mx-auto bg-base-50 shadow-2xl">
          <div class="card-body">
            <div className="flex justify-between items-center">
              <h2 class="card-title text-left ">{ProductTitle}</h2>
              {}
              <small className="text-gray-500">Buying ID: {BuyingID}</small>
            </div>
            <div className="grid grid-cols-1 text-left">
              <small>Sold To User ID: {SellerID}</small>
              <small>Price: $ {Total_Amount}</small>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
