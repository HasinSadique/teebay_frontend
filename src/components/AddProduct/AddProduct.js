import Multiselect from "multiselect-react-dropdown";
import React, { useState } from "react";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState([]);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [rent, setRent] = useState("");

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
    console.log("the categories >>>> ", categories);
  };

  const handleAddProductBtn = (e) => {
    e.preventDefault();
    console.log(
      title,
      "\n",
      categories,
      "\n",
      description,
      "\n",
      price,
      "\n",
      rent
    );
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
            <div class="form-control w-full max-w-xs">
              <label class="label ml-5">
                <span class="label-text">Rent</span>
              </label>
              <input
                onBlur={handleRentBlur}
                type="text"
                placeholder="Type here"
                class="input input-bordered w-1/3 ml-5"
              />
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
          {/* <div class="dropdown flex justify-start">
            <label
              tabindex="0"
              class=" flex justify-between border-2 border-gray-400 px-7 py-1"
            >
              Select a category
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 ml-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                />
              </svg>
            </label>
            <h1>[HINT: Can y]</h1>
            <ul
              tabindex="0"
              class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div> */}
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
