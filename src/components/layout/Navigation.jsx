import React, { useState } from "react";
import { AiOutlineAppstore } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { GoPerson } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const [show, setShow] = useState(false);
  const [sideBar, setSidebar] = useState(false);
  const userData = useSelector((state) => state.user.user);
  const cartData = useSelector((state) => state.cart.cart)
  console.log(userData);
  return (
    <header className="relative shadow-lg">
      {/*Header Top Part*/}
      <div className="container">
        <div className="flex justify-between items-center py-8">
          <button
            onClick={() => setSidebar(true)}
            className="md:hidden text-2xl text-secondary"
          >
            <FaBarsStaggered />
          </button>
          <Link to="/" className="w-36 lg:w-44">
            <img src="/logo.png" alt="logo" />
          </Link>
          <div className="border-2 border-brand m-2 p-2 lg:p-5 rounded md:w-100 xl:w-full lg:max-w-[700px] hidden md:flex items-center">
            <select
              name=""
              id=""
              className="border-r-1 border-slate-400 pr-1 text-primary font-bold cursor-pointer outline-0 hidden lg:block"
            >
              <option value="">All Categories</option>
              <option value="">Wines & Drinks</option>
              <option value="">Clothing & beauty</option>
              <option value="">Fresh Fruit</option>
              <option value="">Fresh Seafood</option>
              <option value="">Vegetables</option>
            </select>
            <input
              type="text"
              placeholder="search for items.."
              className="px-4 w-full lg:w-2/3 outline-0 "
            />
            <IoIosSearch className="ml-auto text-2xl cursor-pointer" />
          </div>
          <div>
            <ul className="flex gap-4">
              <li>
                <Link
                  to="/cart"
                  className="flex gap-1 items-end relative text-secondary"
                >
                  <span className="w-4 h-4 lg:w-5 lg:h-5 rounded-full text-xs lg:text-sm bg-brand text-white flex items-center justify-center absolute -top-1 -right-2 lg:-top-2 lg:right-6">
                    {cartData.length}
                  </span>
                  <IoCartOutline className="text-2xl md:text-3xl text-primary" />{" "}
                  <span className="hidden lg:block">Cart</span>
                </Link>
              </li>
              <li>
                {userData ? (
                  <>
                    <div className="userImage overflow-hidden w-[25px] h-[25px] rounded-full bg-gray-200">
                      {userData.avatar?.url && (
                        <img src={userData?.avatar?.url} alt="user profile" />
                      )}
                    </div>
                    <h2 className="text-xl font-medium text-black">
                      {userData?.username}
                    </h2>
                  </>
                ) : (
                  <Link to="/login" className="text-secondary font-semibold">
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
        {/*Main manu mobile view*/}
        <nav
          className={`h-screen bg-[#00000075] w-full absolute top-0 left-0 fixed ${
            sideBar ? "translate-x-0" : "-translate-x-full "
          } transition-all z-50`}
        >
          <div className="w-5/6 h-screen bg-white overflow-y-auto ">
            <div className="flex justify-between items-center p-5 border-b ">
              <Link to="/" className="w-32 inline-block">
                <img src="/logo.png" alt="logo" />
              </Link>
              <button
                onClick={() => setSidebar(false)}
                className="text-2xl text-brand"
              >
                <MdCancel />
              </button>
            </div>
            <div className="p-4 items-center">
              <div className="border-2 border-brand m-2 p-2 rounded w-full flex items-center ">
                <input
                  type="text"
                  placeholder="search for items.."
                  className="px-4 w-full lg:w-2/3 outline-0 "
                />
                <IoIosSearch className="ml-auto text-2xl cursor-pointer" />
              </div>
              <div>
                <ul className="p-2 font-bold text-primary text-sm">
                  <li className="w-full">
                    <Link
                      to="/"
                      className="block py-3 border-b border-[#ececec]"
                    >
                      {" "}
                      Home{" "}
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link
                      to="/about"
                      className="block py-3 border-b border-[#ececec]"
                    >
                      {" "}
                      About{" "}
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link
                      to="/shop"
                      className="block py-3 border-b border-[#ececec]"
                    >
                      {" "}
                      Shop{" "}
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link
                      to="/"
                      className="block py-3 border-b border-[#ececec]"
                    >
                      {" "}
                      Vendors{" "}
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link
                      to="/"
                      className="block py-3 border-b border-[#ececec]"
                    >
                      {" "}
                      Mega menu{" "}
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link
                      to="/"
                      className="block py-3 border-b border-[#ececec]"
                    >
                      {" "}
                      Blog{" "}
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link to="/contact" className="block py-3">
                      {" "}
                      Contact{" "}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="border border-[#ececec] p-5 mt-2">
                <Link className="flex gap-2 items-center p-2">
                  <GoPerson className="text-brand" /> Log In/Sign Up{" "}
                </Link>
                <Link className="flex gap-2 items-center p-2">
                  <CiLocationOn className="text-brand" /> Our location
                </Link>
                <Link className="flex gap-2 items-center p-2">
                  <TfiHeadphoneAlt className="text-brand" /> (+01)-2345-6789{" "}
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/*Main manu desktop view*/}
      <nav className="hidden md:block py-6 border-t-2 border-[#ececec]">
        <div className="container flex items-center gap-6 lg:gap-9">
          <div className="relative">
            <h3
              onClick={() => setShow(!show)}
              className="p-2 xl:py-3 xl:px-6 bg-brand rounded-md text-white text-xs xl:text-base font-bold hidden md:block md:flex items-center gap-2 cursor-pointer"
            >
              <AiOutlineAppstore />
              <span className="hidden xl:inline">Browse All</span> Categories
              <FaChevronDown />
            </h3>
            {show && (
              <div className="absolute top-15 xl:top-20 rounded-lg left-0 p-7 border-1 border-brand bg-white w-md grid grid-cols-2 gap-4 z-50">
                <div className="flex items-center gap-2 cursor-pointer shadow py-2 px-3">
                  <img src="/category-1.svg" alt="category-1" className="w-6" />
                  <p className="font-bold text-sm text-primary ">
                    Milks and Dairies
                  </p>
                </div>
                <div className="flex items-center gap-2 cursor-pointer shadow py-2 px-3">
                  <img src="/category-2.svg" alt="category-2" className="w-6" />
                  <p className="font-bold text-sm text-primary ">
                    Wines & Drinks
                  </p>
                </div>
                <div className="flex items-center gap-2 cursor-pointer shadow py-2 px-3">
                  <img src="/category-3.svg" alt="category-3" className="w-6" />
                  <p className="font-bold text-sm text-primary ">
                    Clothing & beauty
                  </p>
                </div>
                <div className="flex items-center gap-2 cursor-pointer shadow py-2 px-3">
                  <img src="/category-6.svg" alt="category-4" className="w-6" />
                  <p className="font-bold text-sm text-primary ">
                    Fresh Seafood
                  </p>
                </div>
                <div className="flex items-center gap-2 cursor-pointer shadow py-2 px-3">
                  <img src="/category-7.svg" alt="category-5" className="w-6" />
                  <p className="font-bold text-sm text-primary ">Fresh Fruit</p>
                </div>
                <div className="flex items-center gap-2 cursor-pointer shadow py-2 px-3">
                  <img src="/category-8.svg" alt="category-6" className="w-6" />
                  <p className="font-bold text-sm text-primary ">Vegetables</p>
                </div>
              </div>
            )}
          </div>
          <ul className="flex gap-3 lg:gap-8 font-bold text-primary text-base xl:text-lg">
            <li>
              <Link to="/" className="hover:text-brand translation">
                {" "}
                Home{" "}
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-brand translation">
                {" "}
                About{" "}
              </Link>
            </li>
            <li>
              <Link to="./shop" className="hover:text-brand translation">
                {" "}
                Shop{" "}
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-brand translation">
                {" "}
                Vendors{" "}
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-brand translation">
                {" "}
                Mega menu{" "}
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-brand translation">
                {" "}
                Blog{" "}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-brand translation">
                {" "}
                Contact{" "}
              </Link>
            </li>
          </ul>
          <Link to="1900 - 888" className="ml-auto flex items-center gap-2">
            <TfiHeadphoneAlt className=" text-3xl xl:text-4xl" />
            <div>
              <p className="text-brand font-bold text-sm xl:text-2xl">
                {" "}
                1900 - 888{" "}
              </p>
              <p className="text-secondary font-medium text-xs xl:text-sm">
                {" "}
                24/7 Support Center{" "}
              </p>
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
};
