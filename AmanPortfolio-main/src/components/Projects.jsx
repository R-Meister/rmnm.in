import { WiDirectionUpRight } from "react-icons/wi";
import { Link, useLocation } from "react-router-dom";
const Projects = () => {
  const location = useLocation();
  // console.log(location);
  return (
    <div className="mx-5 pl-6 pr-6 md:pl-12 md:pr-12 mb-10 flex items-center flex-col justify-start w-full ">
      <div className="w-full">
        <h1 className="font-bold text-[40px] md:text-[60px]">
          Projects <span className="text-purple-500">.</span>
        </h1>
      </div>
      <span className="w-full">
        <i>*Some projects can take time to load*</i>
      </span>
      {/* flex justify-between flex-wrap gap-5 flex-col md:flex-row */}
      <div className="flex items-center justify-between flex-wrap gap-5 flex-col md:flex-row ">
        {/* lenny  */}

        <div className="flex md:justify-start items-right  md:h-[60vh] mt-10 ">
          <div className="rounded h-[350px] ">
            <div className=" bg-purple-100 rounded">
              <Link
                to="https://lenny-phi.vercel.app/"
                target="_blank"
                className="flex items-center justify-center"
              >
                <img
                  src="./lenny.png"
                  alt=""
                  className=" rounded-xl  p-2 h-[200px] md:h-[300px] cursor-pointer scale-95  hover:scale-90 transition-all relative z-0 "
                />
              </Link>
            </div>
            <div className="flex gap-6 ">
              <h1 className="font-bold mt-6 text-xl">Amy</h1>
              <Link to="https://lenny-phi.vercel.app/" target="_blank">
                <WiDirectionUpRight className="mt-6 text-3xl p- border border-purple-500 cursor-pointer rounded-[50%] text-purple-500" />
              </Link>
            </div>
            <p className="mt-2">
              "Shop with confidence. Discover exclusive deals, explore
              top-quality products, <br /> and enjoy a seamless shopping
              experience with Amy."
            </p>
          </div>
        </div>

        {/* JerseyNation  */}
        <div className="flex justify-start items-right  md:h-[60vh] mt-10 ">
          <div className="rounded h-[350px] ">
            <div className=" bg-purple-100 rounded ">
              <Link
                to="https://jerseynation.onrender.com/"
                target="_blank"
                className="flex items-center justify-center"
              >
                <img
                  src="./jerseyNation.png"
                  alt=""
                  className=" rounded-xl  p-2 h-[200px] md:h-[300px] cursor-pointer scale-95  hover:scale-90 transition-all relative z-0 "
                />
              </Link>
            </div>
            <div className="flex gap-6 ">
              <h1 className="font-bold mt-6 text-xl">JerseyNation</h1>
              <Link
                to="https://jerseynation.onrender.com/"
                target="_blank"
                className="flex items-center justify-center"
              >
                <WiDirectionUpRight className="mt-6 text-3xl p- border border-purple-500 cursor-pointer rounded-[50%] text-purple-500" />
              </Link>
            </div>
            <p className="mt-2">
              "Gear up your game with style. Discover premium football gear,{" "}
              <br /> explore top brands, and elevate your play with
              JerseyNation."
            </p>
          </div>
        </div>

        {/* Bulletin  */}
        <div className="flex justify-start items-right  md:h-[60vh] mt-10 ">
          <div className="rounded h-[350px] ">
            <div className=" bg-purple-100 rounded">
              <Link
                to="https://bulletin-is7s.onrender.com/"
                target="_blank"
                className="flex items-center justify-center"
              >
                <img
                  src="./bulletin.png"
                  alt=""
                  className=" rounded-xl  p-2 h-[200px] md:h-[300px] cursor-pointer scale-95  hover:scale-90 transition-all relative z-0 "
                />
              </Link>
            </div>
            <div className="flex gap-6 ">
              <h1 className="font-bold mt-6 text-xl">Bulletin</h1>
              <Link to="https://bulletin-is7s.onrender.com/" target="_blank">
                <WiDirectionUpRight className="mt-6 text-3xl p- border border-purple-500 cursor-pointer rounded-[50%] text-purple-500" />
              </Link>
            </div>
            <p className="mt-2">
              "Unlock the power of words. Explore insightful articles, <br />{" "}
              dive into diverse topics, and stay informed with Bulletin."
            </p>
          </div>
        </div>

        {/* Chatty  */}
        <div className="flex justify-start items-right  md:h-[60vh] mt-10 ">
          <div className="rounded h-[350px] ">
            <div className=" bg-purple-100 rounded">
              <Link
                to="https://chattyapp-gy71.onrender.com/"
                target="_blank"
                className="flex items-center justify-center"
              >
                <img
                  src="./image.png"
                  alt=""
                  className=" rounded-xl  p-2 h-[200px] md:h-[300px] cursor-pointer scale-95  hover:scale-90 transition-all relative z-0 "
                />
              </Link>
            </div>
            <div className="flex gap-6 ">
              <h1 className="font-bold mt-6 text-xl">Chatty</h1>
              <Link to="https://chattyapp-gy71.onrender.com/" target="_blank">
                <WiDirectionUpRight className="mt-6 text-3xl p- border border-purple-500 cursor-pointer rounded-[50%] text-purple-500" />
              </Link>
            </div>
            <p className="mt-2">
              "Connect instantly, chat effortlessly. Experience seamless
              communication, <br /> and stay in touch in real-time with Chatty."
            </p>
          </div>
        </div>

        {/* Quizy  */}
        {/* <div className="flex justify-start items-right  md:h-[60vh] mt-10 ">
          <div className="rounded h-[350px] ">
            <div className=" bg-purple-100 rounded">
              <Link to="https://quizy-psi.vercel.app/">
                <img
                  src="./cover.png"
                  alt=""
                  className=" rounded-xl  p-2 h-[200px] md:h-[300px] cursor-pointer scale-95  hover:scale-90 transition-all relative z-0 "
                />
              </Link>
            </div>
            <div className="flex gap-6 ">
              <h1 className="font-bold mt-6 text-xl">Quizy</h1>
              <Link to="https://quizy-psi.vercel.app/">
                <WiDirectionUpRight className="mt-6 text-3xl p- border border-purple-500 cursor-pointer rounded-[50%] text-purple-500" />
              </Link>
            </div>
            <p className="mt-2">
              "Challenge your knowledge with ease. Access expert-crafted
              quizzes, <br /> explore diverse topics, and boost your learning
              with Quizy."
            </p>
          </div>
        </div> */}

        {/* EstateNation  */}

        <div className="flex justify-start items-right  md:h-[60vh] mt-10 ">
          <div className="rounded h-[350px] ">
            <div className=" bg-purple-100 rounded">
              <Link
                to="https://estate-nation.vercel.app/"
                className="flex items-center justify-center"
              >
                <img
                  src="./EstateNation.png"
                  alt=""
                  className=" rounded-xl  p-2 h-[200px] md:h-[300px] cursor-pointer scale-95  hover:scale-90 transition-all relative z-0 "
                />
              </Link>
            </div>
            <div className="flex gap-6 ">
              <h1 className="font-bold mt-6 text-xl">EstateNation</h1>
              <Link to="https://estate-nation.vercel.app/">
                <WiDirectionUpRight className="mt-6 text-3xl p- border border-purple-500 cursor-pointer rounded-[50%] text-purple-500" />
              </Link>
            </div>
            <p className="mt-2">
              "Find your dream home effortlessly. Explore expert advice, uncover
              the best <br /> property deals, and make informed decisions with
              RealEstate."
            </p>
          </div>
        </div>

        {/* JobConnect  */}

        <div className="flex justify-start items-right  md:h-[60vh] mt-10 ">
          <div className="rounded h-[350px] ">
            <div className=" bg-purple-100 rounded">
              <Link
                to="https://job-connect-taupe.vercel.app/"
                className="flex items-center justify-center"
              >
                <img
                  src="./JobConnect.png"
                  alt=""
                  className=" rounded-xl  p-2 h-[200px] md:h-[300px] cursor-pointer scale-95  hover:scale-90 transition-all relative z-0 "
                />
              </Link>
            </div>
            <div className="flex gap-6 ">
              <h1 className="font-bold mt-6 text-xl">EstateNation</h1>
              <Link to="https://job-connect-taupe.vercel.app/">
                <WiDirectionUpRight className="mt-6 text-3xl p- border border-purple-500 cursor-pointer rounded-[50%] text-purple-500" />
              </Link>
            </div>
            <p className="mt-2">
              "Navigate the job market with ease. Get expert tips, discover job
              , <br /> opportunities, and enhance your career with JobPedia.
            </p>
          </div>
        </div>

        {/* Slayyyyyy  */}

        <div className="flex justify-start items-right  md:h-[60vh]  mt-10 ">
          <div className="rounded h-[350px] ">
            <div className=" bg-purple-100 rounded">
              <a
                href="https://sassy-ecom.vercel.app/"
                className="flex items-center justify-center"
              >
                <img
                  src="/Sassy.png"
                  alt=""
                  className=" rounded-xl  p-2 h-[200px] md:h-[300px] cursor-pointer scale-95  hover:scale-90 transition-all relative z-0 "
                />
              </a>
            </div>
            <div className="flex gap-6 ">
              <h1 className="font-bold mt-6 text-xl">Slayyyyyy</h1>
              <Link to="https://sassy-ecom.vercel.app/">
                <WiDirectionUpRight className="mt-6 text-3xl p- border border-purple-500 cursor-pointer rounded-[50%] text-purple-500" />
              </Link>
            </div>
            <p className="mt-2">
              E-commerce platform promoting eco-friendly products.
            </p>
          </div>
        </div>

        {/* Note Taking  */}

        <div className="flex justify-start items-right  md:h-[60vh]  ">
          <div className="rounded h-[350px] ">
            <div className=" bg-purple-100 rounded">
              <Link
                to="https://notify-ochre.vercel.app/"
                className="flex items-center justify-center"
              >
                <img
                  src="./Notify.png"
                  alt=""
                  className=" rounded-xl  p-2 h-[200px] md:h-[300px] cursor-pointer scale-95  hover:scale-90 transition-all relative z-0 "
                />
              </Link>
            </div>
            <div className="flex gap-6 ">
              <h1 className="font-bold mt-6 text-xl">Notify</h1>
              <Link to="https://notify-ochre.vercel.app/">
                <WiDirectionUpRight className="mt-6 text-3xl p- border border-purple-500 cursor-pointer rounded-[50%] text-purple-500" />
              </Link>
            </div>
            <p className="mt-2">
              "keeps your life in order. Manage tasks, set priorities, <br />{" "}
              and achieve more every day.
            </p>
          </div>
        </div>

        {/* <div className="flex justify-start items-right  md:h-[60vh] mt-10 ">
          <div className="rounded h-[350px] ">
            <div className=" bg-purple-100 rounded">
              <Link to="https://job-pedia-ochre.vercel.app/">
                <img
                  src="./JobPedia.png"
                  alt=""
                  className=" rounded-xl  p-2 h-[200px] md:h-[300px] cursor-pointer scale-95  hover:scale-90 transition-all relative z-0 "
                />
              </Link>
            </div>
            <div className="flex gap-6 ">
              <h1 className="font-bold mt-6 text-xl">JobPedia</h1>
              <Link to="https://job-pedia-ochre.vercel.app/">
                <WiDirectionUpRight className="mt-6 text-3xl p- border border-purple-500 cursor-pointer rounded-[50%] text-purple-500" />
              </Link>
            </div>
            <p className="mt-2">
              "Navigate the job market with ease. Get expert tips, discover job
              , <br /> opportunities, and enhance your career with JobPedia.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default Projects;
