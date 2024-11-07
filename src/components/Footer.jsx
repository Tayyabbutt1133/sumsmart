import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiSubstack } from "react-icons/si";
import { FaProductHunt } from "react-icons/fa";

const Link = ({ href, className, children, ...props }) => (
  <a href={href} className={className} {...props}>
    {children}
  </a>
);

const Footer = ({ border }) => {
  return (
    <footer>
      <div className="mt-32">
        {/* Top area: Flex container */}
        <div
          className={`flex gap-24 justify-between items-center py-8 ${
            border ? "border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.200),transparent)1]" : ""
          }`}
        >
          {/* Logo/Brand */}
          <div className="text-xl font-bold font-lexend">
            SumSmart AI
          </div>

          {/* Copyright */}
          <div className="text-sm font-lexend text-gray-600">
            &copy; SumSmart.com - All rights reserved.
          </div>

          {/* Social Icons */}
          <div className="flex flex-col gap-1">
            <div>
              <h1 className='font-lexend'>Follow us on Socials !</h1>
            </div>
            <div className='flex justify-center gap-4'>
              <Link
                className="flex items-center justify-center text-[#0A66C2] transition hover:text-[#084d91]"
                href="https://www.linkedin.com/in/tayyebbutt/"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={28} />
              </Link>
              <Link
                className="flex items-center justify-center text-[#FF6719] transition hover:text-[#d95614]"
                href="https://www.linkedin.com/company/techdeck/"
                aria-label="Substack"
              >
                <SiSubstack size={28} />
              </Link>
              <Link
                className="flex items-center justify-center text-[#333333] transition hover:text-[#242424]"
                href="https://github.com/Tayyabbutt1133/sumsmart"
                aria-label="Github"
              >
                <FaGithub size={28} />
              </Link>
              <Link
                className="flex items-center justify-center text-[#DA552F] transition hover:text-[#b54626]"
                href="#0"
                aria-label="Product Hunt"
              >
                <FaProductHunt size={28} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Big text */}
      <div className="relative -mt-16 w-full" aria-hidden="true">
        <div className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center text-[250px] font-bold leading-none before:bg-gradient-to-b before:from-gray-200 before:to-gray-100/30 before:to-80% before:bg-clip-text before:text-transparent before:content-['SumSmart'] after:absolute after:inset-0 after:bg-gray-300/70 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['SumSmart'] after:[text-shadow:0_1px_0_white]"></div>
        {/* Glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3"
          aria-hidden="true"
        >
          <div className="h-56 w-56 rounded-full border-[20px] border-blue-700 blur-[80px]"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;