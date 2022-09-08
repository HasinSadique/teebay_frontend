import React from "react";

const NotFound = () => {
  return (
    <div className="">
      <h1 className="text-center text-4xl mt-10">
        Opps, Page Not Found <br /> Error 404
      </h1>
      <small className="text-center block my-3">
        We are sorry, but requested page cannot be found.
      </small>
      <img
        className="rounded mx-auto my-10"
        src="https://memegenerator.net/img/instances/400x/71427330.jpg"
        alt=""
      />
    </div>
  );
};

export default NotFound;
