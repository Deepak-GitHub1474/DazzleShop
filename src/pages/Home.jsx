import { Link } from "react-router-dom";

import homeLeaf from "../assets/Images/home-leaf.png";
import homePageMainImage from "../assets/Images/home-main.gif";
import { useCart } from '../context/ProductContext';
import PageLayout from "../layouts/PageLayout";
import Carousel from "../components/Carousel";

function Home() {
    
  const { products, addToCart } = useCart();

  return (
    <PageLayout>
        
        <Carousel/>

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

        <div className="flex flex-wrap items-center justify-center gap-8 py-6 my-6 mx-4">
          {products.map((product) => (
            <div className="sm:w-[250px] sm:h-[320px] w-[100px] h-[170px] sm:m-2 p-2 text-center rounded-lg bg-[#ffffff] shadow-2xl hover:scale-[1.02] hover:border-2 hover:border-[#8bc34a]" key={product.id}>
                <Link to={`/product/${product.id}`}>
                    <div className="flex items-center justify-center sm:h-[180px] h-[70px]">
                        <img src={product.image} alt={product.title} className="sm:w-[180px] sm:h-[180px] w-[50px] h-[50px] object-contain cursor-pointer" />
                    </div>
                </Link>
                <h3 className="whitespace-nowrap overflow-hidden overflow-ellipsis sm:pt-5  text-[#000] sm:font-semibold sm:text-base text-[10px]">{product.title}</h3>
                <p className="text-[#008000] sm:font-semibold sm:text-base text-[10px]">Price ${Math.round(product.price)}</p>
                <div className="sm:flex sm:items-center sm:justify-around sm:flex-row flex flex-col justify-center items-center">
                    
                    <button onClick={() => addToCart(product.id - 1)} className="sm:mt-4 mt-2 bg-[#000] text-[#ffffff] sm:font-semibold border-none sm:py-1 py-[2px] text-center sm:w-24 w-[85px] sm:text-base text-[10px] cursor-pointer sm:rounded-lg rounded-md">Add to Cart</button>

                    <Link to={`/product/${product.id}`}>
                        <button className="sm:mt-4 mt-2 bg-[#000] text-[#ffffff] sm:font-semibold border-none sm:py-1 py-[2px] text-center sm:w-24 w-[85px] sm:text-base text-[10px] cursor-pointer sm:rounded-lg rounded-md">Buy Now</button>
                    </Link>
                </div>
            </div>
        
            ))}
        </div>
    </PageLayout>
  );
}

export default Home;
