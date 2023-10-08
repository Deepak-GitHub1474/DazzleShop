import { AiFillCloseCircle } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

import userProfile from "../assets/Images/user-profile.png";
import { useCart } from '../context/ProductContext';

function Sidebar() {

  const { selectedCategories, toggleCategory } = useCart();

  function changeWidth() {
    const drawerSide = document.getElementsByClassName("drawer-side");
    drawerSide[0].style.width = "auto";
  }

  function hideDrawer() {
    const element = document.getElementsByClassName("drawer-toggle");
    element[0].checked = false;

    const drawerSide = document.getElementsByClassName("drawer-side");
    drawerSide[0].style.width = "0";
  }

  return (
      <div className="drawer absolute left-0 z-50 w-[15%]">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer">
            <FiMenu
              onClick={changeWidth}
              size={32}
              className="font-bold m-6 cursor-pointer text-[#8bc34a]"
            />
          </label>
        </div>
        <div className="drawer-side w-0">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 h-[100%] w-[16.5rem] bg-[#ffffff] border-[0.5px] border-[#e4e3e3] text-base-content relative">
            <li className="w-fit xs:absolute xs:right-2 xs:top-4 absolute right-2 top-7 z-50">
              <button onClick={hideDrawer}>
                <AiFillCloseCircle size={24} className="text-[#8bc34a]"/>
              </button>
            </li>
            <li>
              <div className="dropdown dropdown-bottom xs:hidden block">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar hover:border-2 hover:border-[#8bc34a]">
                  <div className="w-10 rounded-full">
                    <img src={userProfile} />
                  </div>
                </label>
                <ul tabIndex={0} className="z-[1] p-2 menu menu-sm dropdown-content w-48 bg-[#f1f3f6] shadow rounded-box">
                  <li><a className="justify-between font-semibold">Profile</a></li>
                  <li><a className="font-semibold">Logout</a></li>
                </ul>
              </div>
            </li>
            <li className="w-[230px]"><Link to="/">Home</Link></li>
            <hr />
            <li>
              <div className="dropdown dropdown-hover w-full">
                <div tabIndex={0} className="w-[230px]">Category
                  <label tabIndex={0} className="btn-ghost m-1"></label>
                  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                      <li> 
                        <div className="form-control justify-between">
                          <Link to="/category" className="w-[125px]"> <span>electronics</span> </Link>
                          <label className="cursor-pointer label">
                              <input
                                className="checkbox checkbox-success" 
                                type="checkbox"
                                checked={selectedCategories.includes("electronics")}
                                onChange={() => toggleCategory("electronics")}
                              />
                          </label>
                        </div>
                      </li>
                      <hr />
                      <li> 
                        <div className="form-control justify-between">
                          <Link to="/category" className="w-[125px]"><span>jewelery</span></Link>
                          <label className="cursor-pointer label">
                              <input
                                className="checkbox checkbox-success" 
                                type="checkbox"
                                checked={selectedCategories.includes("jewelery")}
                                onChange={() => toggleCategory("jewelery")}
                              />
                          </label>
                        </div>
                      </li>
                      <hr />
                      <li> 
                        <div className="form-control justify-between">
                          <Link to="/category" className="w-[125px]"><span>men's clothing</span></Link>
                          <label className="cursor-pointer label">
                              <input 
                                className="checkbox checkbox-success" 
                                type="checkbox"
                                checked={selectedCategories.includes("men's clothing")}
                                onChange={() => toggleCategory("men's clothing")}
                              />
                          </label>
                        </div>
                      </li>
                      <hr />
                      <li> 
                        <div className="form-control justify-between">
                          <Link to="/category" className="w-[125px]"><span>women's clothing</span></Link>
                          <label className="cursor-pointer label">
                              <input 
                                type="checkbox" 
                                className="checkbox checkbox-success"
                                checked={selectedCategories.includes("women's clothing")}
                                onChange={() => toggleCategory("women's clothing")}
                              />
                          </label>
                        </div>
                      </li>
                      <hr />
                  </ul>
                </div>
              </div>
            </li>
            <hr />
          </ul>
        </div>
      </div>
  );
}

export default Sidebar;
