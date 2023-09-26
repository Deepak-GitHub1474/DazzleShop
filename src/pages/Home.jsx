import React, { useEffect, useState } from "react";

import HomeLayout from "../layouts/PageLayout";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const products = await response.json();
      setProducts(products);
    } catch (error) {
      console.log("Error:", error);
    }
  }

  return (
    <HomeLayout>
      <div className="min-h-[90vh] flex flex-wrap items-center justify-center gap-8 bg-[#f1f3f6] w-[98%] py-16">
        {products.map((product) => (
          <div className="w-[250px] h-[350px] m-2 p-2 text-center rounded-lg bg-white shadow-2xl" key={product.id}>
            <div className="flex items-center justify-center h-[180px]">
                <img src={product.image} alt={product.title} className="w-[180px] h-[180px] object-contain cursor-pointer" />
            </div>
            <h3 className="whitespace-nowrap overflow-hidden overflow-ellipsis pt-5">{product.title}</h3>
            <p className="text-[#008000]">Price ${product.price}</p>
            <div className="flex items-center justify-around">
                <button className="mt-8 bg-black text-white border-none py-1 w-24 cursor-pointer rounded-lg">Add to Cart</button>
                <button className="mt-8 bg-black text-white border-none py-1 w-24 cursor-pointer rounded-lg">Buy Now</button>
            </div>
         </div>
        
        ))}
      </div>
    </HomeLayout>
  );
}

export default Home;
