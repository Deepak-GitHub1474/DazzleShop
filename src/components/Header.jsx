import { BsCart, BsSearch } from "react-icons/bs";

import userProfile from "../assets/Images/user-profile.png";

function Navbar() {
  return (
    <header className="lg:h-[14vh] h-[20vh] p-4" style={{ boxShadow: "0 0 2px #808080" }}>

      <div className="flex items-center justify-between">

        <div className="text-2xl font-bold pl-20">
          <h1>Dazzle<span className="text-[#8bc34a] font-bold">Shop</span></h1>
        </div>

        <div className="flex items-center justify-center lg:relative lg:top-0 absolute top-20 left-0 right-0 mx-auto">
          <div className="flex text-2xl">
            <BsSearch className="relative left-10 cursor-pointer" />
          </div>
          <input
            className="lg:w-[40vw] w-[80vw] border-2 border-[#808080] rounded p-2 pl-14 outline-none"
            type="text"
            placeholder="Search product ..."
            name="search"
          />
        </div>
        
        <section className="flex items-center justify-between gap-5">
          
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <BsCart className="h-5 w-5"/>
                <span className="badge badge-sm indicator-item bg-[#8bc34a]">8</span>
              </div>
            </label>
          </div>

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar hover:border-2 hover:border-[#8bc34a]">
              <div className="w-10 rounded-full">
                <img src={userProfile} />
              </div>
            </label>
            <ul tabIndex={0} className="mt-1 z-[1] p-2 menu menu-sm dropdown-content w-52 bg-base-100 shadow rounded-box">
              <li><a className="justify-between">Profile</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>

        </section>

      </div>
      
    </header>
  );
}
export default Navbar;