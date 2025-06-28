import React from "react";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="py-12" id="contact">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex items-start justify-between flex-col md:flex-row gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white/60">
              Get in <span className="text-gray-300">touch</span>
            </h2>
            <a
              href="mailto:himanshdaksh04@gmail.com"
              className="text-xl sm:text-2xl md:text-4xl font-semibold text-white underline decoration-gray-400 underline-offset-4 hover:decoration-white transition duration-300 break-all"
            >
              himanshdaksh04@gmail.com
            </a>
          </div>

          {/* Phone and Address */}
          <div className="text-white/60">
            <div className="mb-6">
              <p className="text-lg mb-1">Phone</p>
              <a
                href="tel:+919368095959"
                className="text-xl font-medium underline decoration-gray-400 underline-offset-4 hover:decoration-white transition duration-300"
              >
                +91 9368095959
              </a>
            </div>

            <div className="text-lg">
              <p className="font-bold mb-1">Address</p>
              <p>Agra, India</p>
            </div>
          </div>
        </div>

        {/* Background Name Display */}
        <div className="relative z-0 text-center mt-16">
          <h1 className="text-[3rem] sm:text-[5rem] md:text-[8rem] lg:text-[10rem] font-bold text-white opacity-10 leading-none break-words">
            HIMANSHU
            <br className="md:hidden" />
            <span className="md:inline hidden"> DAKSH</span>
          </h1>
        </div>

        {/* Footer Bottom */}
        <div className="relative mt-12 flex flex-col sm:flex-row justify-between items-center gap-6 text-gray-300 text-sm">
          <p>© 2025. All rights reserved.</p>
          <ul className="flex gap-4 flex-wrap">
            <a
              href="https://github.com"
              aria-label="GitHub"
              className="hover:text-white transition"
            >
              <AiFillGithub size={24} />
            </a>
            <a
              href="https://x.com"
              aria-label="X (Twitter)"
              className="hover:text-white transition"
            >
              <AiOutlineTwitter size={24} />
            </a>
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="hover:text-white transition"
            >
              <AiFillFacebook size={24} />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="hover:text-white transition"
            >
              <AiFillInstagram size={24} />
            </a>
            <a
              href="https://telegram.org"
              aria-label="Telegram"
              className="hover:text-white transition"
            >
              <FaTelegramPlane size={24} />
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
};
