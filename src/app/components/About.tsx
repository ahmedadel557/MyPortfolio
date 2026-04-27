import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Code2, Palette, Zap } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Modern Design",
      description: "Creating beautiful and intuitive user interfaces",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance",
      description: "Building fast and optimized web applications",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-400 to-purple-600 p-1">
                <div className="w-full h-full rounded-2xl bg-gray-200 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                  <img
                    className="h-full hover:scale-105 transition  duration-1000"
                    src="/src/Assets/images/linkidin.jpeg"
                    alt=""
                  
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Frontend Developer passionate about creating exceptional digital
              experiences
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm a dedicated frontend developer with a passion for building
              clean, responsive, and user-friendly web applications. I
              specialize in modern web technologies and frameworks, transforming
              ideas into beautiful and functional digital products.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              With a strong foundation in web development and a keen eye for
              design, I strive to create seamless user experiences that not only
              look great but also perform exceptionally well. I'm always eager
              to learn new technologies and best practices to stay at the
              forefront of web development.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-2 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white">
                    {feature.icon}
                  </div>
                  <h4 className="font-semibold mb-1 text-gray-900 dark:text-white">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
