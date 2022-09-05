import Multiselect from "multiselect-react-dropdown";
import React, { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate, useParams } from "react-router";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState([]);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [rent, setRent] = useState("");

  const [rentOption, setRentOption] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || `/my-products`;

  const handleTitleBlur = (event) => {
    setTitle(event.target.value);
  };
  const handleDescritionBlur = (event) => {
    setDescription(event.target.value);
  };
  const handlePriceBlur = (event) => {
    setPrice(event.target.value);
  };
  const handleRentBlur = (event) => {
    setRent(event.target.value);
  };

  const categoriesArray = [];
  const handleSelect = (e) => {
    // console.log(e.toString());
    setCategories(e);
    // console.log("the categories >>>> ", categories);
  };

  const handleAddProductBtn = (e) => {
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        UID: localStorage.getItem("currentUserID"),
        Title: title,
        Categories: categories,
        Description: description,
        Price: price,
        Rent: rent,
        RentOption: rentOption,
      }),
    };
    console.log("rent option: ", rentOption);

    fetch("http://localhost:3302/add-product", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        if (data.success == true) {
          alert("Product Added");
          navigate(from, { replace: true });
        } else {
          alert("Kuch to Garbar hain.");
        }
      });
  };

  const handleRentOptionChange = (event) => {
    event.preventDefault();
    setRentOption(event.target.value);
  };

  return (
    <div className="p-10">
      <h1 className="mb-5 text-xl font-bold">Create a new Product</h1>
      <form className="w-3/4 mx-auto">
        <div class="form-control w-full ">
          <label class="label">
            <span class="label-text">Title</span>
          </label>
          <input
            onBlur={handleTitleBlur}
            type="text"
            class="input input-bordered w-full"
          />
          {/* category */}
          <label class="label mt-8">
            <span class="label-text">Categories</span>
          </label>

          <Multiselect
            className=""
            showArrow
            placeholder="Select a category"
            isObject={false}
            onKeyPressFn={function noRefCheck() {}}
            onRemove={handleSelect}
            onSearch={function noRefCheck() {}}
            onSelect={handleSelect}
            options={[
              "ELECTRONICS",
              "FURNITURE",
              "HOME APPLIANCES",
              "SPORTING GOODS",
              "OUTDOOR",
              "TOYS",
            ]}
          />

          <div class="form-control">
            <label class="label">
              <span class="label-text mt-8">Description</span>
            </label>
            <textarea
              onBlur={handleDescritionBlur}
              class="textarea textarea-bordered h-40"
            ></textarea>
          </div>

          <div className="flex mt-8">
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Price</span>
              </label>
              <input
                onBlur={handlePriceBlur}
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs"
              />
            </div>
            <div class=" form-control ">
              <label class="label ml-10">
                <span class="label-text">Rent</span>
              </label>
              <div className="flex justify-between ">
                <input
                  onBlur={handleRentBlur}
                  type="text"
                  class="input input-bordered w-1/3 ml-10"
                />
                <select
                  onChange={handleRentOptionChange}
                  class="select select-bordered"
                >
                  <option disabled selected>
                    Rent Type
                  </option>
                  <option>Per hour</option>
                  <option>Per day</option>
                  <option>Per month</option>
                  <option>Per Year</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              onClick={handleAddProductBtn}
              className="btn bg-red-700 hover:bg-red-600 mt-8 "
            >
              Add Product{" "}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
