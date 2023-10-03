import { AiFillCloseCircle } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";
import { useCart } from '../context/CartContext';

function PageLayout({ children }) {

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
    <div className="min-h-[90vh]">
      <div className="drawer absolute left-0 z-50 w-[15%]">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer">
            <FiMenu
              onClick={changeWidth}
              size={"32px"}
              className="font-bold m-6 cursor-pointer text-[#8bc34a]"
            />
          </label>
        </div>
        <div className="drawer-side w-0">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 h-[100%] w-[16.5rem] bg-[#ffffff] border-[0.5px] border-[#e4e3e3] text-base-content relative">
            <li className="w-fit absolute right-2 z-50">
              <button onClick={hideDrawer}>
                <AiFillCloseCircle size={"24px"} className="text-[#8bc34a]"/>
              </button>
            </li>
            <li><Link to="/">Home</Link></li>
            <li>
              <div className="dropdown dropdown-hover w-full">
                <div>Category
                  <label tabIndex={0} className="btn-ghost m-1"></label>
                  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                      <li> 
                        <div className="form-control justify-between">
                          <Link to="/category"> <span>electronics</span> </Link>
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

                      <li> 
                        <div className="form-control justify-between">
                          <Link to="/category"><span>jewelery</span></Link>
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

                      <li> 
                        <div className="form-control justify-between">
                          <Link to="/category"><span>men's clothing</span></Link>
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

                      <li> 
                        <div className="form-control justify-between">
                          <Link to="/category"><span>women's clothing</span></Link>
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
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <Header />

      {children}

      <Footer />
    </div>
  );
}

export default PageLayout;
