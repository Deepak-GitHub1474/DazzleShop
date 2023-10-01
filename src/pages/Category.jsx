import PageLayout from "../layouts/PageLayout";

import { Link } from "react-router-dom";

import { useCart } from '../context/CartContext';

function Category() {

    const { products, addToCart, selectedCategories } = useCart();

    // Filter products based on selected categories
    const filteredProducts = products.filter((product) =>
        selectedCategories.length === 0
        ? true
        : selectedCategories.includes(product.category.toLowerCase())
    );

    return (
        <PageLayout>
            <div className="flex flex-wrap items-center justify-center gap-8 py-6 my-6 min-h-[80vh]">
                {filteredProducts.map((product) => (
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

export default Category;
