import React, { useContext } from "react";
import { categories } from "../utils/constants";
import { Context } from "../context/apiContext";
import LeftBarItem from "./LeftBarItem";
import { useNavigate } from "react-router-dom";

function LeftBar() {
  const navigate = useNavigate();
  const { selectCategory, setSelectCategory, mobileMenu } = useContext(Context);
  console.log(mobileMenu);
  return (
    <div
      className={`absolute top-[64px]  ${
        mobileMenu ? "w-[240px]" : "w-0"
      }  overflow-y-auto h-[calc(100vh-64px)] py-4 bg-black   md:sticky  z-10  transition-all ${
        mobileMenu ? "translate-x-0" : "translate-x-[-240px] "
      }`}
    >
      <div className="flex px-5 flex-col">
        {categories.map((item) => {
          return (
            <React.Fragment key={item.name}>
              <LeftBarItem
                text={item.type === "home" ? "Home" : item.name}
                icon={item.icon}
                action={() => {
                  setSelectCategory(item.name);
                  navigate("/");
                }}
                className={`${
                  selectCategory === item.name ? "bg-white/[0.15]" : ""
                }`}
              />
              {item.divider && <hr className="my-5 border-white/[0.2]" />}
            </React.Fragment>
          );
        })}
        <hr className="my-5 border-white/[0.2]" />
        <div className="text-white/[0.5] text-[12px]">By Bhagyashree Patil</div>
      </div>
    </div>
  );
}

export default LeftBar;
