import React from "react";
import { FaGithub } from "react-icons/fa";

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
