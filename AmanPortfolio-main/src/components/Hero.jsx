import { useContext } from "react";
import { ColorContext } from "../context/ColorContext";
import { Link } from "react-router-dom";

const Hero = () => {
  const mode = useContext(ColorContext);

  return (
    <div className="flex justify-between items-start pt-[14vh] md:pt-[20vh] px-10 py-14 h-[100vh] flex-col md:flex-row">
      <div className="w-[100%] md:w-[50%] flex flex-col items-start gap-2">
        <div className="flex items-center gap-1">
          <p className="text-lg">Hey, I'm Aman Kumar!</p>
          <img src="/hello.svg" alt="hello" className="h-5" />
        </div>
        <div className="text-[40px] md:text-[70px] font-bold leading-[40px] md:leading-[70px]">
          <span className="text-purple-500">Full</span> Stack <br />
          Developer
        </div>
        <p className="md:text-2xl mt-8">
          I'm a Full Stack Developer based in India, I'll help you build
          beautiful websites your users will love.
        </p>
        <div className="flex gap-10 mt-1 md:mt-10 font-bold text-sm md:text-md">
          <div className="text-white flex justify-center items-center bg-purple-500 rounded p-2 transition-all hover:bg-white hover:text-black hover:border cursor-pointer md:w-[150px]">
            <a href="mailto:authorisedaman@gmail.com">Get In Touch</a>
          </div>

          <Link
            to="https://drive.google.com/file/d/1C1yapNjaK0HpL4OfR0nc3nm6O9vY8ap6/view?usp=sharing"
            target="_blank"
          >
            <div
              className={`flex justify-center items-center rounded border ${
                mode.clr ? "border-black" : "border-white"
              } p-2 w-[100px] md:w-[150px] hover:text-purple-500 transition-all cursor-pointer`}
            >
              Resume
            </div>
          </Link>
        </div>
      </div>
      <div className="w-[100%] md:w-[40%] rounded-[50%] border-purple-500 p-6 flex justify-center items-center">
        <img
          src="/photo-removebg-preview.png"
          alt="Aman Kumar"
          className="rounded-xl h-[280px] md:h-[400px]"
        />
      </div>
    </div>
  );
};

export default Hero;
