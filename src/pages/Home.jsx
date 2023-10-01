import { Link } from "react-router-dom";

import carouselImg1 from "../assets/Images/carouselImg1.webp";
import carouselImg2 from "../assets/Images/carouselImg2.jpg";
import carouselImg3 from "../assets/Images/carouselImg3.png";
import carouselImg4 from "../assets/Images/carouselImg4.jpg";
import homeLeaf from "../assets/Images/home-leaf.png";
import homePageMainImage from "../assets/Images/home-main.gif";

import PageLayout from "../layouts/PageLayout";

import { useCart } from '../context/CartContext';

function Home() {
    
  const { products, addToCart } = useCart();

  return (
    <PageLayout>
        <div className="flex flex-col w-full bg-[#ffffff] mt-6">
            <div className="carousel w-full lg:w-1/2 mx-auto">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="flex flex-col items-center justify-center gap-4 px-4 lg:px-[15%]">
                        <img src={carouselImg1} className="w-full lg:w-[600px] h-[300px]" alt="Slide 1" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-3 mx-auto top-1/2">
                            {/* Todo fix next btn */}
                            <a href="#slide4" className="btn btn-circle bg-[#8bc34a] shadow-lg shadow-gray-600/50">❮</a>
                            <a href="#slide2" className="btn btn-circle bg-[#8bc34a] shadow-lg shadow-gray-600/50">❯</a> 
                        </div>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="flex flex-col items-center justify-center gap-4 px-4 lg:px-[15%]">
                        <img src={carouselImg2} className="w-full lg:w-[600px] h-[300px]" alt="Slide 2" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-3 mx-auto top-1/2">
                            <a href="#slide1" className="btn btn-circle bg-[#8bc34a] shadow-lg shadow-gray-600/50">❮</a>
                            <a href="#slide3" className="btn btn-circle bg-[#8bc34a] shadow-lg shadow-gray-600/50">❯</a>
                        </div>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="flex flex-col items-center justify-center gap-4 px-4 lg:px-[15%]">
                        <img src={carouselImg3} className="w-full lg:w-[600px] h-[300px]" alt="Slide 3" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-3 mx-auto top-1/2">
                            <a href="#slide2" className="btn btn-circle bg-[#8bc34a] shadow-lg shadow-gray-600/50">❮</a>
                            <a href="#slide4" className="btn btn-circle bg-[#8bc34a] shadow-lg shadow-gray-600/50">❯</a>
                        </div>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div className="flex flex-col items-center justify-center gap-4 px-4 lg:px-[15%]">
                        <img src={carouselImg4} className="w-full lg:w-[600px] h-[300px]" alt="Slide 4" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-3 mx-auto top-1/2">
                            <a href="#slide3" className="btn btn-circle bg-[#8bc34a] shadow-lg shadow-gray-600/50">❮</a>
                            <a href="#slide1" className="btn btn-circle bg-[#8bc34a] shadow-lg shadow-gray-600/50">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 bg-[#ffffff] py-10 mt-6">
            <div className=" flex items-center justify-center">
                <img src={homePageMainImage} alt="home page" className="w-[90%] lg:w-[70%] md:w-[55%] sm:w-[70%] rounded-[100px]" />
            </div>

            <div className="sm:w-1/2 space-y-6 mx-5">
                <img src={homeLeaf} alt="homeLeaf-Img" />
                <h3 className="text-xl sm:text-2xl font-semibold">Best Quality Products</h3>
                <div className="text-2xl sm:text-4xl xl:text-4xl 2xl:text-5xl font-bold">
                    <h1>Join The Online Dazzle</h1>
                    <span className="text-[#8bc34a] font-bold">Shop Movement!</span>
                </div>
                <p className="text-base lg:text-lg text-gray-600 max-w-xl">
                    Discover the Best Quality Products and Join the Dazzling Online Shopping Movement! Shop with us for top-notch items that bring style and quality to your life.
                </p>
            </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 py-6 my-6 ">
          {products.map((product) => (
            <div className="sm:w-[250px] w-[200px] h-[330px] m-2 p-2 text-center rounded-lg bg-[#ffffff] shadow-2xl hover:scale-[1.02] hover:border-2 hover:border-[#8bc34a]" key={product.id}>
                <Link to={`/product/${product.id}`}>
                    <div className="flex items-center justify-center h-[180px]">
                        <img src={product.image} alt={product.title} className="w-[180px] h-[180px] object-contain cursor-pointer" />
                    </div>
                </Link>
                <h3 className="whitespace-nowrap overflow-hidden overflow-ellipsis pt-5 text-[#000] font-semibold">{product.title}</h3>
                <p className="text-[#008000] font-semibold">Price ${product.price}</p>
                <div className="flex items-center justify-around">
                    <button onClick={() => addToCart(product.id - 1)} className="mt-6 bg-[#000] text-[#ffffff] font-semibold border-none py-1 sm:w-24 w-[85px] sm:text-base text-sm cursor-pointer rounded-lg">Add to Cart</button>

                    <Link to={`/product/${product.id}`}>
                        <button className="mt-6 bg-[#000] text-[#ffffff] font-semibold border-none py-1 sm:w-24 w-[85px] sm:text-base text-sm cursor-pointer rounded-lg">Buy Now</button>
                    </Link>
                </div>
            </div>
        
            ))}
        </div>
    </PageLayout>
  );
}

export default Home;
