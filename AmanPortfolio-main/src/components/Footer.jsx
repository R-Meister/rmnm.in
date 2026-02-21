import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { ColorContext } from "../context/ColorContext";
import { Link } from "react-router-dom";

const Footer = () => {
  const mode = useContext(ColorContext);
  return (
    <div className="px-5 md:px-12  flex justify-between items-start flex-wrap gap-10 ">
      <div>
        <p className="font-bold text-xl">Interested in working together?</p>
        <div>
          <div className="flex gap-10 mt-10  font-bold text-sm md:text-md">
            <div className="text-white flex justify-center items-center bg-purple-500 rounded p-2 transition-all hover:bg-white hover:text-black hover:border cursor-pointer md:w-[150px]">
              <a href="mailto:authorisedaman@gmail.com">Get In Touch</a>
            </div>
            <div
              className={` flex justify-center items-center rounded border ${
                mode.clr ? "border-black" : "border-white "
              }  p-2 md:w-[150px]`}
            >
              <Link to="/projects">Browse Projects</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-14">
        <div>
          <ul className="flex gap-10">
            <li>
              <a href="https://www.instagram.com/beingbadguy/" target="_blank">
                <CiInstagram className="text-3xl hover:text-purple-500 cursor-pointer transition-all" />
              </a>
            </li>
            <li>
              <a
                href="https://in.linkedin.com/in/aman-kumar-028a33217?trk=public_profile_browsemap-profile"
                target="_blank"
              >
                <CiLinkedin className="text-3xl hover:text-purple-500 cursor-pointer transition-all" />
              </a>
            </li>
            <li>
              <a href="https://github.com/beingbadguy" target="_blank">
                <FaGithub className="text-3xl hover:text-purple-500 cursor-pointer transition-all" />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p>@2024 Created by Aman Kumar</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
