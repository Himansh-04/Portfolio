import React from "react";
import project1 from "../assets/images/proj5.png";
import project2 from "../assets/images/proj6.png";

export const About = () => {
  return (
    <section id="about" className="text-white p-8">
      <h2 className="text-6xl font-bold mb-8">
        About <span className="bg-gradient-to-r from-[#FF6EC7] to-[#FFD6EC] text-transparent bg-clip-text">Me</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Background */}
        <div className="border border-white/20 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-2 text-[#FFD6EC]">01. Background</h3>
          <p className="text-white/50 mb-6">
            I'm a dedicated full-stack developer with a strong foundation in computer science.
            My passion lies in transforming ideas into interactive and functional digital experiences.
            I enjoy solving complex problems and constantly learning to stay on top of industry trends.
          </p>
          <div className="rounded-lg p-4 mb-4 border border-white/20 bg-black/20">
            <code className="text-sm font-mono text-[#FFCBF2]">
              const skills = [<br />
              &nbsp;&nbsp;'JavaScript',<br />
              &nbsp;&nbsp;'React',<br />
              &nbsp;&nbsp;'Node.js',<br />
              &nbsp;&nbsp;'Java',<br />
              &nbsp;&nbsp;'SQL',<br />
              &nbsp;&nbsp;'C'<br />
              ];
            </code>
          </div>
        </div>

        {/* Expertise */}
        <div className="border border-white/20 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-2 text-[#FFD6EC]">02. Expertise</h3>
          <p className="text-white/50">
            I specialize in crafting responsive and scalable web applications with modern tech stacks.
            My development process involves a balance of design thinking and performance optimization.
          </p>
          <div className="mt-4 relative border border-white/20 rounded-lg p-4 h-[220px] overflow-hidden">
            <img
              src={project1}
              alt="Project 1"
              className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Skills */}
        <div className="border border-white/20 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-2 text-[#FFD6EC]">03. Skills</h3>
          <p className="text-white/50 mb-4">
            My stack blends design sensibility with functional robustness, built on modern tools and best practices.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="border border-white/20 rounded-lg p-3 text-center">
              <h4 className="bg-gradient-to-r from-[#FF6EC7] to-[#FFD6EC] text-transparent bg-clip-text font-medium mb-2">Frontend</h4>
              <ul className="text-white/50 space-y-1 text-sm">
                <li>ReactJs</li>
                <li>JavaScript</li>
                <li>Tailwind CSS</li>
                <li>Framer Motion</li>
              </ul>
            </div>
            <div className="border border-white/20 rounded-lg p-3 text-center">
              <h4 className="bg-gradient-to-r from-[#FF6EC7] to-[#FFD6EC] text-transparent bg-clip-text font-medium mb-2">Backend</h4>
              <ul className="text-white/50 space-y-1 text-sm">
                <li>NodeJs</li>
                <li></li>
                <li>ExpressJs</li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="border border-white/20 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-4 text-[#FFD6EC]">04. Approach</h3>
          <p className="text-white/50 mb-6">
            My development ethos revolves around clarity, efficiency, and empathy for the end user.
            I favor agile workflows, iterative testing, and meaningful feedback loops.
          </p>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Front-end</label>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-[#FF6EC7] to-[#FFD6EC] h-2 rounded-full"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Back-end</label>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-[#FF6EC7] to-[#FFD6EC] h-2 rounded-full"
                  style={{ width: "55%" }}
                ></div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Problem Solving</label>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-[#FF6EC7] to-[#FFD6EC] h-2 rounded-full"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Goals Section */}
        <div className="border border-white/20 rounded-lg p-6 flex flex-col justify-between">
          <div className="relative border border-white/20 rounded-lg p-4 h-[200px] overflow-hidden">
            <img
              src={project2}
              alt="Project 2"
              className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2 text-[#FFD6EC]">05. Goals</h3>
            <p className="text-white/50">
              My aim is to grow as a problem solver and creator.
              I'm committed to contributing meaningfully to every team I'm part of and building solutions that have a lasting impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
