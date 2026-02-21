import { GrContactInfo } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { useContext, useEffect, useState } from "react";
import { ColorContext } from "../context/ColorContext";
import { NavLink } from "react-router-dom";
import { CgMenuRight } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Header = ({ value }) => {
  const mode = useContext(ColorContext);
  const [menu, setmenu] = useState(false);
  let scroller = value + "%;";
  useEffect(() => {
    localStorage.setItem("colorMode", JSON.stringify(mode.clr));
  }, [mode.clr]);
  return (
    <div
      className={` ${
        mode.clr ? "bg-white" : "bg-black"
      } flex items-center justify-between font-bold  z-50 pl-8 py-6 pr-8 md:pl-14 md:pr-14 fixed w-[100%] ${
        scroller ? "border-t-6 border-purple-100" : ""
      } `}
    >
      <div
        className={` absolute h-1 w-[${scroller}] bg-purple-500 top-[0%] left-0 transition-all`}
      ></div>
      <div className="flex ">
        <img
          src={`${
            mode.clr
              ? "/image__2_-removebg-preview.png"
              : "/Aman_logo-removebg-preview.png"
          }`}
          className="h-10 "
        />
      </div>

      {/* important features  */}

      <div className="  flex  items-center ">
        {/* vertical rule  */}
        {/* <div className="p-4 text-black flex items-center justify-between  text-md gap-4">
          <a href="">
            <FaLinkedin />
          </a>
          /
          <a href="https://github.com/beingbadguy" target="_black">
            <FaGithub className="  " />
          </a>
          /
          <a href="https://www.instagram.com/beingbadguy/ " target="_blank">
            <FaInstagram />
          </a> /
        </div> */}

        {mode.clr ? (
          <div
            onClick={() => {
              mode.setclr(false);
            }}
          >
            <CiDark className=" text-2xl cursor-pointer" />
          </div>
        ) : (
          <div
            onClick={() => {
              mode.setclr(true);
            }}
          >
            <CiLight className=" text-2xl cursor-pointer" />
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;
