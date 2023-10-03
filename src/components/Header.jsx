import { BsCart, BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

import userProfile from "../assets/Images/user-profile.png";
import { useCart } from '../context/ProductContext';

function Header() {

  const { cart, searchInput, setSearchInput, searchProduct} = useCart();

  // Handle search input change
  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <header className="lg:h-[90px] h-[140px] p-4 bg-[#ffffff] w-full" style={{ boxShadow: "0 0 2px #808080" }}>

      <div className="flex items-center justify-between">

       <Link to="/">
          <div className="text-2xl font-bold pl-20 sm:pl-56 xs:pl-24 cursor-pointer ">
            <h1>Dazzle<span className="text-[#8bc34a] font-bold">Shop</span></h1>
          </div>
       </Link>

        <div className="flex items-center justify-center lg:relative lg:top-0 absolute top-20 left-0 right-0 mx-auto">
          <Link to="/">
            <div className="flex text-2xl">
              <BsSearch onClick={searchProduct} className="relative left-10 cursor-pointer" />
            </div>
          </Link>
          <input
            className="lg:w-[40vw] w-[80vw] border-2 border-[#808080] rounded p-2 pl-14 outline-none"
            type="text"
            placeholder="Search product ..."
            name="search"
            value={searchInput}
            onChange={handleSearchInputChange}
          />
        </div>
        
        <section className="flex items-center justify-between gap-5">
          
          <Link to="/cart">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <BsCart className="h-5 w-5"/>
                  <span className="badge badge-sm indicator-item bg-[#8bc34a]">{cart.length}</span>
                </div>
              </label>
            </div>
          </Link>

          <div className="dropdown dropdown-end xs:block hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar hover:border-2 hover:border-[#8bc34a]">
              <div className="w-10 rounded-full">
                <img src={userProfile} />
              </div>
            </label>
            <ul tabIndex={0} className="mt-1 z-[1] p-2 menu menu-sm dropdown-content w-48 bg-[#f1f3f6] shadow rounded-box">
              <li><a className="justify-between font-semibold">Profile</a></li>
              <li><a className="font-semibold">Logout</a></li>
            </ul>
          </div>

        </section>

      </div>
      
    </header>
  );
}
export default Header;
