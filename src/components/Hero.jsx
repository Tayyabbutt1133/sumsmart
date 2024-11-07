import React from "react";
import { FaGithub } from "react-icons/fa";
import Avatar01 from "../../public/images/avatar-01.jpg";
import Avatar02 from "../../public/images/avatar-02.jpg";
import Avatar03 from "../../public/images/avatar-03.jpg";
import Avatar04 from "../../public/images/avatar-04.jpg";
import Avatar05 from "../../public/images/avatar-05.jpg";
import Avatar06 from "../../public/images/avatar-06.jpg";

const Hero = () => {
  return (
      <header className="w-full flex justify-center items-center flex-col">
          <nav className="flex justify-between items-center w-full mb-10 pt-3">
              <h1 className="font-lexend font-bold text-3xl object-contain w-28">Sum<span className="orange_gradient">Smart</span></h1>
              <button
              type="button"
                  onClick={() => window.open('https://github.com/Tayyabbutt1133/sumsmart')}
              className="font-lexend flex items-center justify-center gap-2 black_btn ease-in-out transition duration-300">
                  <FaGithub/>
                  Github
              </button>
          </nav>
          <div className="-mx-0.5 flex justify-center -space-x-3">
                <img
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar01}
                  width={32}
                  height={32}
                  alt="Avatar 01"
                />
                <img
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar02}
                  width={32}
                  height={32}
                  alt="Avatar 01"
                />
                <img
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar03}
                  width={32}
                  height={32}
                  alt="Avatar 02"
                />
                <img
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar04}
                  width={32}
                  height={32}
                  alt="Avatar 03"
                />
                <img
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar05}
                  width={32}
                  height={32}
                  alt="Avatar 04"
                />
                <img
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar06}
                  width={32}
                  height={32}
                  alt="Avatar 05"
                />
              </div>
          <h1 className="head_text font-lexend">
              Summarize Articles with <br className="max-md:hidden"/>
              <span className="orange_gradient">SumSmart AI</span>
          </h1>
          <h2 className="desc font-lexend">
          Your AI-powered article summarizer for instant insights. Simply drop a link, and SumSmart AI will extract the key points, giving you a quick, clear summary so you can stay informed effortlessly. Perfect for busy readers and knowledge seekers!
          </h2>
    </header>
  );
};

export default Hero;
