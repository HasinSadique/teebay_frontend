import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard/ProductCard.js";
// import { useQuery } from "react-query";

const Home = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3302/all-products`)
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);

  return (
    <div>
      <div>
        <h1 className="mt-10 text-2xl font-semibold">HomePage</h1>
        {/* product display */}
        <h1>Showing all products ({allProducts.length})</h1>
        <div className="">
          {allProducts.map((product) => (
            <ProductCard key={product.PID} props={product}></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
