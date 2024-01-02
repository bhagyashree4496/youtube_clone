import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Context } from "../context/apiContext";
import Loading from "./Loading";
import logo from "../images/yt-logo.png";
import mobileLogo from "../images/yt-logo-mobile.png";

import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { loading, mobileMenu, setMobileMenu } = useContext(Context);
  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/searchResult/${searchQuery}`);
    }
  };
  return (
    <>
      <div className="h-16 w-screen sticky top-0 flex items-center justify-between px-4 md:px-6 bg-white dark:bg-black z-10">
        {/* {loading && <Loading></Loading>} */}
        <div className="flex items-center justify-center gap-3">
          <div
            className="flex cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6] "
            onClick={() => {
              setMobileMenu(!mobileMenu);
              console.log(mobileMenu);
            }}
          >
            <SlMenu className="text-white text-xl" />
          </div>
          <Link className="h-7 flex items-center">
            <img
              src={logo}
              alt="youtube"
              className="h-full hidden md:block "
            ></img>
            <img
              src={mobileLogo}
              alt="youtube"
              className="md:hidden h-full"
            ></img>
          </Link>
        </div>

        <div className="group flex items-center">
          <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#8c8a8a] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
            <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
              <IoIosSearch className="text-white text-xl" />
            </div>
            <input
              type="text"
              className="bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
              placeholder="Search"
              value={searchQuery}
            />
          </div>
          <button
            className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#8c8a8a] rounded-r-3xl bg-white/[0.1]"
            onClick={() => searchQueryHandler("searchButton")}
          >
            <IoIosSearch className="text-white text-xl" />
          </button>
        </div>
        <div className="flex items-center">
          <div className="hidden md:flex">
            <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
              <RiVideoAddLine className="text-white text-xl cursor-pointer" />
            </div>
            <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
              <FiBell className="text-white text-xl cursor-pointer" />
            </div>
          </div>
          <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4">
            <img src="https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
