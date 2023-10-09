import { Link } from "react-router-dom";

import { useCart } from '../context/ProductContext';
import PageLayout from "../layouts/PageLayout";

function Category() {

    const { category, addToCart, selectedCategories } = useCart();

    // Filter products based on selected categories
    const filteredProducts = category.filter((product) =>
        selectedCategories.length === 0
        ? true
        : selectedCategories.includes(product.category.toLowerCase())
    );

    return (
        <PageLayout>
            <div className="flex flex-wrap items-center justify-center sm:gap-8 gap-4 py-6 my-6 min-h-[80vh] sm:mx-4">
                {filteredProducts.map((product) => (
                     <div className="sm:w-[230px] sm:h-[330px] w-[125px] h-[235px] sm:m-2 p-3 text-center rounded-lg bg-[#ffffff] shadow-2xl hover:scale-[1.02] hover:border-2 hover:border-[#8bc34a]" key={product.id}>
                     <Link to={`/product/${product.id}`}>
                         <div className="flex items-center justify-center sm:h-[180px] h-[100px]">
                             <img src={product.image} alt={product.title} className="sm:w-[180px] sm:h-[180px] w-[90px] h-[90px] object-contain cursor-pointer" />
                         </div>
                     </Link>
                     <h3 className="whitespace-nowrap overflow-hidden overflow-ellipsis sm:pt-5 pt-1 text-[#000] font-semibold sm:text-base text-sm">{product.title}</h3>
                     <p className="text-[#008000] font-semibold sm:text-base text-[12px] mt-1">Price ${Math.round(product.price)}</p>
                     <div className="sm:flex sm:items-center sm:justify-around sm:flex-row flex flex-col justify-center items-center">
                         
                         <button onClick={() => addToCart(product.id - 1)} className="sm:mt-4 mt-2 bg-[#000] text-[#ffffff] font-semibold border-none py-[5px] text-center w-24 sm:text-base text-[10px] cursor-pointer sm:rounded-lg rounded-md hover:bg-[#8bc34a]">Add to Cart</button>
     
                         <Link to={`/product/${product.id}`}>
                             <button className="sm:mt-4 mt-2 bg-[#000] text-[#ffffff] font-semibold border-none py-[5px] text-center w-24 sm:text-base text-[10px] cursor-pointer sm:rounded-lg rounded-md hover:bg-[#8bc34a]">Buy Now</button>
                         </Link>
                     </div>
                 </div>
                ))}
            </div>
        </PageLayout>
    );
}

export default Category;
