import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";

const ProductDetails = () => {
  const [details, setDetails] = useState({});

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const { pid } = useParams();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/my-products";

  useEffect(() => {
    fetch(`http://localhost:3302/get-product/${pid}`)
      .then((res) => res.json())
      .then((data) => setDetails(data[0]));
  }, []);

  // buying Product
  const handleBuyProduct = (event) => {
    event.preventDefault();
    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        PID: pid,
        Title: details.Title,
        CurrentUserID: localStorage.getItem("currentUserID"),
        ProductOwnerID: details.ProductOwnerID,
        Price: details.Price,
      }),
    };

    fetch("http://localhost:3302/buy-product", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        if (data.Success) {
          alert(`Message: ${data.msg}`);
          navigate(from, { replace: true });
        } else {
          alert(`Error message: ${data.msg}`);
        }
      });
  };

  //   Renting Product
  const handleRentProduct = (event) => {
    event.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        PID: pid,
        CurrentUserID: localStorage.getItem("currentUserID"),
        ProductOwnerID: details.ProductOwnerID,
        from: fromDate,
        to: toDate,
        Rent_Amount: details.Rent,
        Rent_Option: details.Rent_Option,
      }),
    };

    fetch("http://localhost:3302/rent-product", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        if (data.Success) {
          alert(`Message: ${data.msg}`);
          navigate(from, { replace: true });
        } else {
          alert(`Error message: ${data.msg}`);
        }
      });
  };

  const handleFromDateBlur = (event) => {
    setFromDate(event.target.value);
  };

  const handleToDateBlur = (event) => {
    setToDate(event.target.value);
  };

  console.log("OwnerID: ", details.ProductOwnerID);
  console.log("From Date: ", fromDate);
  console.log("From Date: ", toDate);

  return (
    <div className="">
      <h1 className="text-2xl font-bold font-mono mt-10">Product Details</h1>
      <div className="p-10 mt-10 mb-20 rounded-xl shadow-2xl border-2 w-3/4 mx-auto text-left grid grid-cols-1">
        <div className="flex justify-between items-center mb-3">
          <h1 className="card-title text-2xl mb-3">{details.Title}</h1>
          <small>Product ID: {details.PID}</small>
        </div>
        <small>
          <span className=" font-bold text-sm">Categories:</span>{" "}
          {details.Categories}
        </small>
        <small>
          <span className=" font-bold text-sm">Price:</span> {details.Price}
        </small>
        <small>
          <span className=" font-bold text-sm">Rent:</span> {details.Rent}{" "}
          {details.Rent_Option}
        </small>
        <p class="mt-5 text-justify">{details.Description}</p>
        {details.Rent_Status ? (
          <h1 className="mt-5 text-3xl ml-auto px-5 py-1 rounded-xl border border-5 border-green-600 text-green-600">
            Rented
          </h1>
        ) : (
          <div className="text-right p-5 mt-10">
            {/* For Rent Modal */}
            <label
              for="rent-modal"
              class="btn mr-3 bg-red-700 hover:bg-red-600 modal-button"
            >
              Rent
            </label>

            {/* For Buy Button modal */}
            <label
              for="buy-modal"
              class="btn bg-red-700 hover:bg-red-600 modal-button"
            >
              Buy
            </label>
          </div>
        )}
      </div>
      {/* Buy Modal */}
      <input type="checkbox" id="buy-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            Are you sure you want to buy this product?
          </h3>

          <div class="modal-action">
            <label for="buy-modal" class="btn bg-red-700 hover:bg-red-600">
              No
            </label>
            <label
              onClick={handleBuyProduct}
              for="buy-modal"
              class="btn bg-green-700 hover:bg-green-600"
            >
              Yes
            </label>
          </div>
        </div>
      </div>
      {/* Rent Modal */}
      <input type="checkbox" id="rent-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          <h3 class=" font-bold text-2xl text-left ">Rental period</h3>

          <form onSubmit={handleRentProduct}>
            <div className="flex my-10" action="">
              <div class="form-control w-full max-w-xs mr-10">
                <label class="label">
                  <span class="label-text">From</span>
                </label>
                <input
                  onBlur={handleFromDateBlur}
                  type="date"
                  class="input input-bordered w-full max-w-xs"
                />
              </div>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">To</span>
                </label>
                <input
                  onBlur={handleToDateBlur}
                  //   type="date"
                  type="date"
                  class="input input-bordered w-full max-w-xs"
                />
              </div>
            </div>
            <div class="modal-action">
              <label for="rent-modal" class="btn bg-red-700 hover:bg-red-600">
                Go Back
              </label>
              <input
                className="btn bg-green-700 hover:bg-green-600"
                for="rent-modal"
                type="submit"
                value="Confirm rent"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
