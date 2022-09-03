import React, { useState } from "react";
import Multiselect from "multiselect-react-dropdown";

const EditProduct = () => {
  const [categories, setCategories] = useState([]);

  const categoriesArray = [];

  const handleSelect = (e) => {
    setCategories(e);
    console.log("the categories >>>> ", categories);
  };

  const handleEditProductDetailsBtn = (e) => {};
  return (
    <div>
      <div className="p-10">
        <h1 className="mb-5 text-xl font-bold">Edit details</h1>
        <form className="w-3/4 mx-auto">
          <div class="form-control w-full ">
            <label class="label">
              <span class="label-text">Title</span>
            </label>
            <input type="text" class="input input-bordered w-full" />
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
              <textarea class="textarea textarea-bordered h-40"></textarea>
            </div>

            <div className="flex mt-8">
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Price</span>
                </label>
                <input
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
                  type="text"
                  placeholder="Type here"
                  class="input input-bordered w-1/3 ml-5"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleEditProductDetailsBtn}
                className="btn bg-red-700 hover:bg-red-600 mt-8 "
              >
                Add Product{" "}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
