import { motion, useInView } from "motion/react";
import { useRef } from "react";

import html from "../../Assets/icons/html5-512px.png";
import css from "../../Assets/icons/css-512px.png";
import js from "../../Assets/icons/javascript-512px.png";
import react from "../../Assets/icons/react-512px.png";
import next from "../../Assets/icons/nextdotjs-512px.png";
import tailwind from "../../Assets/icons/tailwind-css-512px.png";
import git from "../../Assets/icons/git-512px.png";
import github from "../../Assets/icons/github-512px.png";
import api from "../../Assets/icons/k8s-api-server-512px.png";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: "HTML", color: "from-orange-400 to-orange-600", icon: html },
    { name: "CSS", color: "from-blue-400 to-blue-600", icon: css },
    { name: "JavaScript", color: "from-yellow-400 to-yellow-600", icon: js },
    { name: "React", color: "from-cyan-400 to-cyan-600", icon: react },
    { name: "Next.js", color: "from-gray-700 to-gray-900", icon: next },
    {
      name: "Tailwind CSS",
      color: "from-teal-400 to-teal-600",
      icon: tailwind,
    },
    { name: "Git", color: "from-red-400 to-red-600", icon: git },
    { name: "GitHub", color: "from-purple-400 to-purple-600", icon: github },
    { name: "REST APIs", color: "from-green-400 to-green-600", icon: api },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-800"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />

          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <div className="relative p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div
                  className={`absolute inset-0  opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <div className="relative z-10 text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-3 rounded-xl  flex items-center justify-center shadow-lg`}
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-10 h-10 object-contain"
                    />
                  </div>

                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400">
            Always learning and exploring new technologies to improve my craft
          </p>
        </motion.div>
      </div>
    </section>
  );
}
