import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillHeartFill } from 'react-icons/bs';
import { useParams } from "react-router-dom";

import ratingStar from "../assets/Images/star.svg"
import HomeLayout from "../layouts/PageLayout";

function Product() {

  const [productDetails, setProductDetails] = useState([]);
  const [wishList, setWishList] = useState(false)

  const { id } = useParams();
  const PRODUCT_URL = `https://fakestoreapi.com/products/${id}`;

  useEffect(() => {
    async function fetchProductDetails(){
      try {
        const response = await axios.get(PRODUCT_URL);
        setProductDetails(response.data);
      } catch (error) {
        console.error("Error while fetching product details: ", error);
      }
    }
  
    fetchProductDetails();
  }, []);

  function wishListHandle(){
    setWishList(!wishList)
  }

  return (
    <HomeLayout>
        <div className="flex items-center justify-around flex-wrap gap-8 my-10 mx-8 min-h-[65vh]">
            <div className="border-[0.5px] border-[#e4e3e3] rounded-lg  p-2 bg-[#ffffff]">
            {wishList ? 
            <div onClick={wishListHandle} className="w-10 h-10 rounded-full border-[0.5px] border-[#e4e3e3] shadow flex items-center justify-center">
                <BsFillHeartFill size={"24px"} className=" absolute cursor-pointer text-[#ff0000]"/>
            </div> :
            <div onClick={wishListHandle} className="w-10 h-10 rounded-full border-[0.5px] border-[#e4e3e3] shadow flex items-center justify-center">
                <AiOutlineHeart size={"24px"} className=" absolute cursor-pointer text-[#388e3c]"/>
            </div>}

            <img
                src={productDetails.image}
                alt={productDetails.title}
                className="xl:w-[350px] xl:h-[350px] sm:w-[300px] sm:h-[300px] w-[250px] h-[250px] object-contain cursor-pointer"
            />
            </div>

            <div className="flex flex-col justify-center gap-3 ">
                <h3 className="xl:text-3xl sm:text-2xl text-xl font-semibold sm:max-w-[350px] max-w-[265px]">{productDetails.title}</h3>
                <div className="flex items-center gap-3">
                    <div className="w-[45px] h-[24px] bg-[#388e3c] text-[#ffffff] rounded-sm flex items-center justify-center gap-1 p-1">
                        
                        {/* TODO: set rating */}

                        {/* <span className="text-base">{productDetails.rating.rate}</span>  */}
                        <img src={ratingStar} alt="star-svg" />
                    </div>
                    {/* <span className="text-[#878787] font-semibold">{productDetails.rating.count} Ratings</span> */}
                </div>
                <p className=" sm:text-2xl text-xl font-semibold">$ {productDetails.price}</p>
                <p className=" sm:text-lg text-md text-[#515050] sm:max-w-[600px] w-[265px] whitespace-nowrap overflow-hidden overflow-ellipsis">{productDetails.description}</p>
                
                <div className="flex items-center gap-6">
                    <button className="bg-[#388e3c] text-white w-[120px] py-2 px-2 rounded-[2px] text-base font-semibold cursor-pointer hover:bg-[#fb641b]">BUY NOW</button>
                    <button className="bg-[#8bc34a] text-white w-[120px] py-2 px-2 rounded-[2px] text-base font-semibold cursor-pointer hover:bg-[#fb641b]">ADD TO CART</button>
                </div>
            </div>
        </div>
    </HomeLayout>
  );
}
export default Product;
