import React from "react";
import Products from "../component/products";

const Index = ({ products }) => {
  return (
    <div>
      <Products products={products} />
    </div>
  );
};

export default Index;
