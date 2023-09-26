import React, { useEffect, useState } from "react";

import carouselImg1 from "../assets/Images/carouselImg1.webp";
import carouselImg2 from "../assets/Images/carouselImg2.jpg";
import carouselImg3 from "../assets/Images/carouselImg3.png";
import carouselImg4 from "../assets/Images/carouselImg4.jpg";
import homePageMainImage from "../assets/Images/home-main.gif";
import homeLeaf from "../assets/Images/home-leaf.png";
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
        <div className="flex flex-col w-full">
            <div className="carousel w-1/2 mx-auto">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                        <img src={carouselImg1} className="w-[600px] h-[300px]" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                        <img src={carouselImg2} className="w-[600px] h-[300px]" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                        <img src={carouselImg3} className="w-[600px] h-[300px]" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                        <img src={carouselImg4} className="w-[600px] h-[300px]" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className=" flex items-center justify-center gap-10 bg-[#f1f3f6] py-10 mt-6">
            <div className="w-[50%] flex items-center justify-center ">
                <img src={homePageMainImage} alt="home page" className="w-[88%] rounded-[100px]" />
            </div>

            <div className="w-[50%] space-y-6">
                <img src={homeLeaf} alt="homeLeaf-Img" />
                <h3 className="text-2xl font-semibold">Best Quality Products</h3>
                <div className="text-5xl font-bold max-w-lg">
                    <h1>Join The Online Dazzle</h1>
                    <span className="text-[#8bc34a] font-bold">Shop Movement!</span>
                </div>
                <p className="text-lg text-gray-600  max-w-xl">
                Discover the Best Quality Products and Join the Dazzling Online Shopping Movement! Shop with us for top-notch items that bring style and quality to your life.
                </p>
            </div>
        </div>
      <div className="flex flex-wrap items-center justify-center gap-8 bg-[#f1f3f6] py-6 my-6 ">
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
