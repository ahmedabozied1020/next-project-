import React from "react";

const Products = ({ products }) => {
  // Add a check for products
  if (!products || !Array.isArray(products)) {
    return <div>No products available</div>;
  }

  return (
    <div className="w-full my-10">
      <div className="container mx-auto flex flex-wrap w-4/5 justify-between">
        {products.map((product) => (
          <div key={product.id} className="card bg-base-100 w-96 shadow-xl mb-4">
            <figure>
              <img src={product.thumbnail} alt={product.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.title}</h2>
              <p>{product.description}</p>
              <p className="font-bold">Price: ${product.price}</p>

              <div className="card-actions justify-end">
                <button className="btn bg-slate-700 text-base-100">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
