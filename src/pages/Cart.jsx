import emptyCartCover from "../assets/Images/empty-cart.webp"
import saveProduct1 from "../assets/Images/save-product1.webp"
import shieldSafe from "../assets/Images/shield_safe.svg"

function Cart() {
  return (
    <div className="flex xl:justify-between xs:justify-center  flex-wrap gap-8 my-10 p-5 min-h-[90vh] lg:mx-10 mx-2">
      <section className="flex flex-col gap-3">
        
        <div className="xl:w-[53vw] sm:w-[100%] xs:w-[450px]  bg-[#ffffff] rounded-md shadow p-4 flex justify-between relative pb-28">
          
          <div className="flex flex-col gap-16 text-[#212121]"> 
          {/* Cart Items */}
            <div id="cart-items">
              <div className="stock-out-container flex gap-8 mt-4">
                <div className="cart-qunatity flex flex-col items-center">
                  <div>
                    <img src={saveProduct1} className="w-24"/>
                  </div>
                  <div className="add-quantity flex items-center gap-4 mt-4">
                    <div className="minus w-8 h-8 text-center line-h-8 border border-gray-300  rounded-full cursor-pointer">
                      -
                    </div>
                    <h4 className="quantity w-12 h-8 line-h-8 text-center border border-gray-300 ">
                      1
                    </h4>
                    <div className="plus w-8 h-8 text-center line-h-8 border border-gray-300  rounded-full cursor-pointer">
                      +
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className=" sm:text-xl text-lg font-semibold">
                    Solid styles Full Sleeve Washed Men Denim Jacket
                  </h3>
                  <h4 className=" text-[#878787] sm:text-md text-sm font-semibold">Size: M</h4>
                  <h4  className="sm:text-lg text-md block mt-2 font-semibold">
                    Price : $ 99.00
                  </h4>
                  <h4 className="max-w-max mt-2 hover:text-[#388e3c] cursor-pointer sm:text-lg text-md font-normal">REMOVE</h4>
                </div>
              </div>

            </div>
            <div className=" hidden">
              <div className=" flex items-center justify-center flex-col gap-4 ml-60">
                <img src={emptyCartCover} alt="" className="h-64"/>
                <p>Your cart is empty!</p>
                <span>Explore our wide selection and find something you like</span>
              </div>
            </div>
          </div>
          <div >
            <button className="bg-[#388e3c] text-white hover:bg-[#fb641b] min-w-1/6 p-[10px] absolute bottom-4 right-6 font-semibold rounded cursor-pointer">
              PLACE ORDER
            </button>
          </div>
        </div>

      </section>
      
      <div className="flex flex-col gap-8">
        <section className="w-[450px] bg-white rounded-md p-5 shadow xl:fixed xl:right-16 relative">
          <h3 className="text-[#5e5e5e] text-md font-bold mb-4">PRICE DETAILS</h3>
          <hr className=" mb-4"/>
          <div className="flex flex-col justify-between gap-5 text-[#212121]">
            <div className="flex items-center justify-between">
              <h4>Price (<span id="cart-count-placeholder">0</span>) item</h4>
              <h4 >₹0</h4>
            </div>
            <div className="flex items-center justify-between">
              <h4>Discount</h4>
              <h4 id="total-discount" className="text-green-500">-</h4>
            </div>
            <div className="flex items-center justify-between">
              <h4 className="text-base ">Delivery Charges</h4>
              <h4>₹40</h4>
            </div>
          </div>
          <hr className=" mt-4"/>
          <div className="flex items-center justify-between mt-2 text-[#000]">
            <h2 className="text-lg font-bold">Total Amount</h2>
            <h2 className="text-lg font-bold"> ₹0</h2>
          </div>
          </section>
        
        <section className="xl:fixed xl:right-36 xl:top-[22rem] relative max-w-[365px] flex items-center justify-center gap-2">
            <img src={shieldSafe} alt="shieldSafe-Icon" />
            <span>Safe and Secure Payments. Easy return. 100% Authenticating Project</span>
        </section>
      </div>
    </div>
  );
}

export default Cart;
