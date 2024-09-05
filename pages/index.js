import React from "react";
import Navbar from "./component/navbar";
import Products from "./component/products";

export default function Home({ products }) {
  return (
    <>
      <Navbar />
      <Products products={products} />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return {
    props: {
      products: data.products,
    },
  };
}
