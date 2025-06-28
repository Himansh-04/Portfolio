import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import profilepic from "../assets/images/profilepic.png";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden min-h-screen text-white bg-gradient-to-b from-[#0D1117] via-[#222244] to-[#0F0C29] font-sans">
      {/* Background Ellipse */}
      <div
        className="absolute bg-[#0D1117] w-[2400px] h-[1000px] rounded-[50%] left-1/2 -translate-x-1/2 
                   bg-[radial-gradient(closest-side,#0D1117_85%,#FF6EC7)] top-[450px]
                   border border-[#FF6EC7]/20 z-0"
      />

      {/* Main Content */}
      <div className="container relative mx-auto px-4 pt-12 pb-24 z-10">
        <div className="flex flex-col items-center justify-center text-center relative z-20">
          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mb-8 mt-24"
          >
            <img
              src={profilepic}
              alt="Himanshu Daksh Profile Picture"
              onError={(e) => (e.target.src = "https://via.placeholder.com/250")}
              className="w-[250px] relative z-10 rounded-full shadow-lg"
            />
          </motion.div>

          {/* Name & Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl z-20"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
              Hi, I'm <br />
              Himanshu <span className="text-[#FF6EC7]">Daksh</span>
            </h1>

            <h2 className="text-lg text-[#FF6EC7] font-medium mb-6" aria-live="polite">
              <Typewriter
                words={[
                  "Aspiring Frontend Developer",
                  "Learning Full Stack Development",
                  "Exploring React & JavaScript",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h2>

            {/* Buttons */}
            <div className="flex gap-4 justify-center flex-wrap z-20">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-6 py-3 bg-[#FF6EC7] text-white rounded-full font-medium hover:bg-[#FF8ACF] transition-all duration-200"
              >
                Contact Me
              </motion.a>

              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-6 py-3 bg-white text-[#0D1117] rounded-full font-medium shadow-md hover:bg-gray-100 transition-all duration-200"
              >
                View Resume
              </motion.a>

              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-6 py-3 border border-white/20 rounded-full font-medium hover:bg-white/10 transition-all duration-200"
              >
                View Work
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Floating Glow */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-16 right-1/3 w-96 h-96 bg-[#FF6EC7]/10 rounded-full blur-xl z-0"
        />
      </div>
    </div>
  );
};
