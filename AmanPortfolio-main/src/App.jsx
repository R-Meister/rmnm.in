import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Story from "./components/Story";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import { useContext } from "react";
import { ColorContext } from "./context/ColorContext";
import { useRef } from "react";
import Education from "./components/Education";
import RippleText from "./components/RippleText";
import GodlyText from "./GodlyText";

function App() {
  const mode = useContext(ColorContext);
  const myref = useRef(null);
  const [scrolling, setscrolling] = useState(0);
  const [loading, setLoading] = useState(false);
  const [languageIndex, setLanguageIndex] = useState(0);

  const greetings = [
    "Hello", // English
    "Hola", // Spanish
    "Bonjour", // French
    "Hallo", // German
    "你好", // Chinese
    "こんにちは", // Japanese
    "Ciao", // Italian
    "Здравствуйте", // Russian
    "مرحبا", // Arabic
    "Olá", // Portuguese
    "안녕하세요", // Korean
    "नमस्ते", // Hindi
  ];
  // console.log(languageIndex);
  const handleScroll = () => {
    setscrolling(
      (window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)) *
        100
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setLoading(true);
    const subscribe = setTimeout(() => {
      setLoading(false);
    }, 3800);

    return () => clearTimeout(subscribe);
  }, []);
  useEffect(() => {
    let subscribe = setInterval(() => {
      setLanguageIndex((prev) => {
        if (prev < greetings.length - 1) {
          return prev + 1;
        } else {
          clearInterval(subscribe);
          return 0;
        }
      });
    }, 320);

    return () => clearInterval(subscribe);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-[100vh] font-bold bg-white text-black text-2xl">
          {greetings[languageIndex]}
        </div>
      ) : (
        <div
          ref={myref}
          className={`pb-10 select-none ${
            mode.clr ? "bg-white text-black" : "bg-black text-white"
          } flex flex-col items-center`}
        >
          <Header value={scrolling} />
          <Hero />
          <Story />

          {/* Education  */}
          <div className="w-[100%] md:w-[100%] mt-4   px-5 md:px-12 mb-10">
            <div className="flex items-end gap-1">
              <h1 className="font-bold text-[40px] md:text-[60px]">
                Education <span className="text-purple-500">.</span>
              </h1>
            </div>
            <div className="">
              <Education
                imgUrl={"./bits-removebg-preview.png"}
                title="BITS Ghaziabad"
                stream="Computer Science Engineering"
                period="2022 - Appearing"
              />
              <Education
                imgUrl={"./gbpit-removebg-preview.png"}
                title="GB Pant Institute of Technology"
                stream="Mechanical Engineering"
                period="2018 - 2021"
              />
              <Education
                imgUrl={"./rsbv-removebg-preview.png"}
                title="RSBV Surajmal Vihar"
                stream="Science, Maths, English"
                period="2013 - 2018"
              />
            </div>
          </div>
          <Skills />
          <Projects />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
