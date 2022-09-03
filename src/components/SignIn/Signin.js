import React from "react";
import { useLocation, useNavigate } from "react-router";

const Signin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/home";

  const handleLoginBtn = (event) => {
    navigate(from, { replace: true });
  };

  return (
    <div className=" grid grid-cols-1 items-center md:my-40 my-20">
      <div>
        <h1 className="text-2xl mb-8 font-semibold"> SIGN IN </h1>{" "}
        <form className="lg:mx-auto mx-14 p-14 border-2 lg:w-1/3 grid grid-cols-1">
          <div>
            <input
              type="email"
              placeholder="Email"
              class="input input-bordered w-full mb-7"
            />
            <input
              type="password"
              placeholder="Password"
              class="input input-bordered w-full"
            />
            <button
              onClick={handleLoginBtn}
              class=" mt-10 btn bg-red-700 hover:bg-red-600"
            >
              LOGIN{" "}
            </button>{" "}
          </div>{" "}
          <h1 className="mt-12">
            Dont 't have an account?{" "}
            <span className="text-red-700 font-semibold ml-2">
              <a href="/signup"> Signup </a>{" "}
            </span>{" "}
          </h1>{" "}
        </form>{" "}
      </div>{" "}
    </div>
  );
};

export default Signin;
