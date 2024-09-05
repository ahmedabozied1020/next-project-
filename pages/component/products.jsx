import Link from "next/link";
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
                <Link href="/product/id">
                  {" "}
                  <button class="overflow-hidden relative w-24 p-2 h-10 bg-slate-700 text-white border-none rounded-md text-sm font-bold cursor-pointer  z-10 group">
                    Buy Now
                    <span class="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
                    <span class="absolute w-36 h-32 -top-8 -left-2 bg-slate-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
                    <span class="absolute w-36 h-32 -top-8 -left-2 bg-slate-600 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
                    <span class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
                      Details!
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
