import React from "react";
import { SiFramer, SiReact, SiNodedotjs, SiMongodb, SiExpress } from "react-icons/si";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stackItems = [
  { id: 1, name: "Framer", icon: <SiFramer size={100} />, color: "text-[rgb(255,110,199)]" },
  { id: 2, name: "React", icon: <SiReact size={100} />, color: "text-[rgb(255,110,199)]" },
  { id: 3, name: "Node.js", icon: <SiNodedotjs size={100} />, color: "text-[rgb(255,110,199)]" },
  { id: 4, name: "Express", icon: <SiExpress size={100} />, color: "text-[rgb(255,110,199)]" },
  { id: 5, name: "MongoDB", icon: <SiMongodb size={100} />, color: "text-[rgb(255,110,199)]" },
];

export const Stack = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-24 md:py-64 max-w-[1200px] mx-auto text-center" id="stack">
      <h2 className="text-7xl text-gray-100 font-bold mb-20">My Stack</h2>
      <div className="flex flex-wrap justify-center gap-8" ref={ref}>
        {stackItems.map((item, index) => (
          <motion.div
            key={item.id}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            initial={{ opacity: 0, y: 50, scale: 0.8, rotate: -10 }}
            transition={{
              duration: 0.8,
              delay: index * 0.15,
              type: "spring",
              stiffness: 100,
            }}
            className="bg-white/10 flex flex-col items-center justify-center w-[200px] h-[200px] rounded-xl p-4 shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className={`mb-4 ${item.color}`}>{item.icon}</div>
            <p className="text-white/20 text-xl">{item.name}</p>
          </motion.div>
        ))}
      </div>
     
    </section>
  );
};
