import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-t from-neutral-950 to-neutral-900 text-gray-400 text-xs border-t border-neutral-800 mt-10 shadow-inner">
      <div className="max-w-6xl mx-auto px-4 pb-10">
        <div className="border-t border-neutral-800 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="mb-2 md:mb-0 text-gray-500">
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-semibold text-gray-100">Apple Inc.</span> All rights
            reserved.
          </p>
          <div className="flex flex-wrap gap-4 mt-2 md:mt-0">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="hover:underline hover:text-white transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
