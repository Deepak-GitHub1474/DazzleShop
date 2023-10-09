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
            <div className="flex flex-wrap items-center justify-center gap-8 py-6 my-6 min-h-[80vh] mx-4">
                {filteredProducts.map((product) => (
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

export default Category;
