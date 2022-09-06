import React, { useEffect, useState } from "react";
import Multiselect from "multiselect-react-dropdown";
import { Navigate, useLocation, useNavigate, useParams } from "react-router";

const EditProduct = () => {
  // For Editing details by user logged in
  const { pid } = useParams();
  const [details, setDetails] = useState({});

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [rent, setRent] = useState("");
  const [rentOption, setRentOption] = useState("");

  const handleTitleBlur = (event) => {
    event.preventDefault();
    setTitle(event.target.value);
  };
  // const handleCategoriesBlur = (event) => {
  //   event.preventDefault();
  //   setTitle(event.target.value);
  // };
  const handleDescriptionBlur = (event) => {
    event.preventDefault();
    setDescription(event.target.value);
  };
  const handlePriceBlur = (event) => {
    event.preventDefault();
    setPrice(event.target.value);
  };
  const handleRentBlur = (event) => {
    event.preventDefault();
    setRent(event.target.value);
  };

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || `/my-products`;

  useEffect(() => {
    fetch(`http://localhost:3302/get-product/${pid}`)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data[0]);
      });
  }, []);

  const [categories, setCategories] = useState([]);

  const handleSelect = (e) => {
    setCategories(e);
    console.log("the categories >>>> ", categories);
  };

  const handleEditProductDetailsBtn = (e) => {
    e.preventDefault();
    let newDetails = {
      PID: details.PID,
      Categories: categories,
      Title: title,
      Description: description,
      Price: price,
      Rent: rent,
      Rent_Option: rentOption,
    };
    if (newDetails.Categories.length == 0) {
      newDetails.Categories = details.Categories;
    }
    if (newDetails.Title.length == 0) {
      newDetails.Title = details.Title;
    }
    if (newDetails.Description.length == 0) {
      newDetails.Description = details.Description;
    }
    if (newDetails.Price.length == 0) {
      newDetails.Price = details.Price;
    }
    if (newDetails.Rent.length == 0) {
      newDetails.Rent = details.Rent;
    }
    if (newDetails.Rent_Option.length == 0) {
      newDetails.Rent_Option = details.Rent_Option;
    }

    // console.log(
    //   "Prev Details: >>> \n",
    //   details,
    //   "/n/n/n New Details: >>> \n",
    //   newDetails
    // );

    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newDetails),
    };

    fetch(`http://localhost:3302/edit-product`, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        if (data.success == true) {
          alert(`Message: ${data.msg}`);
          navigate("/my-products");
        } else {
          alert(`Message: ${data.msg}`);
        }
      });
  };

  const deleteProduct = (event) => {
    event.preventDefault();

    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        pid: pid,
      }),
    };

    fetch(`http://localhost:3302/delete-product/${pid}`, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deleted == true) {
          alert(data.msg);
          navigate(from, { replace: true });
        } else {
          alert("Cannot Delete Item!");
        }
      });
    // if (response?.deleted == true) {
    //   alert(response?.msg);
    //   // Change UI to signin page
    //   Navigate("/my-products");
    // } else {
    //   alert("Kuch to Garbar hain.", response);
    // }
  };

  const handleRentOptionChange = (event) => {
    event.preventDefault();
    setRentOption(event.target.value);
  };

  return (
    <div>
      <div className="lg:p-10 py-10">
        <h1 className="mb-5 text-xl font-bold"> Edit details </h1>
        <form className="w-3/4 mx-auto">
          <div class="form-control w-full ">
            <label class="label">
              <span class="label-text"> Title </span>
            </label>
            <input
              defaultValue={details.Title}
              onBlur={handleTitleBlur}
              // placeholder={}
              type="text"
              class="input input-bordered w-full placeholder-black"
            />
            {/* category */}
            <label class="label mt-8">
              <span class="label-text"> Categories </span>
            </label>
            <Multiselect
              selectedValues={details?.Categories?.split(",")}
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
                <span class="label-text mt-8"> Description </span>
              </label>
              {/* <input type="text" /> */}
              <textarea
                onBlur={handleDescriptionBlur}
                defaultValue={details.Description}
                class="textarea textarea-bordered h-40"
              >
                {/* {description} */}
              </textarea>
            </div>
            <div className="grid lg:grid-cols-2 lg:gap-5 lg:my-8 my-5">
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text"> Price </span>
                </label>
                <input
                  onBlur={handlePriceBlur}
                  defaultValue={details?.Price}
                  type="text"
                  class="input input-bordered w-full"
                />
              </div>
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text"> Rent </span>
                </label>
                <div className="grid grid-cols-2 gap-5 ">
                  <input
                    onBlur={handleRentBlur}
                    defaultValue={details?.Rent}
                    type="text"
                    class="input input-bordered"
                  />
                  <select
                    onChange={handleRentOptionChange}
                    class="select select-bordered"
                  >
                    <option disabled value="Rent Type">
                      Rent Type
                    </option>
                    <option
                      selected={
                        details.Rent_Option == "Per hour" ? true : false
                      }
                    >
                      Per hour
                    </option>
                    <option
                      selected={details.Rent_Option == "Per day" ? true : false}
                    >
                      Per day
                    </option>
                    <option
                      selected={
                        details.Rent_Option == "Per month" ? true : false
                      }
                    >
                      Per month
                    </option>
                    <option
                      selected={
                        details.Rent_Option == "Per Year" ? true : false
                      }
                    >
                      Per Year
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex  justify-end mt-8">
              <label
                for="delete-modal"
                class="bg-red-700 hover:bg-red-600 btn mr-5"
              >
                <h1 className="mt-0.5">Delete item</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6 ml-1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                    clip-rule="evenodd"
                  />
                </svg>
              </label>
              <button
                onClick={handleEditProductDetailsBtn}
                className="btn bg-red-700 hover:bg-red-600  "
              >
                Edit Details
              </button>
            </div>
          </div>
        </form>
      </div>
      <input type="checkbox" id="delete-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          <h3 class="font-semibold text-lg">
            Are you sure you want to delete this product {pid}?
          </h3>

          <div class="modal-action">
            <label
              for="delete-modal"
              class="btn bg-green-700 hover:bg-green-600"
            >
              No
            </label>
            <label
              onClick={deleteProduct}
              for="delete-modal"
              class="btn bg-red-700 hover:bg-red-600"
            >
              Yes
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
