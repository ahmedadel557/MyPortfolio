import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const timeline = [
    {
      type: 'work',
      title: 'Senior Frontend Developer',
      organization: 'Tech Company Inc.',
      period: '2024 - Present',
      description: 'Leading frontend development projects, mentoring junior developers, and implementing modern web solutions using React and Next.js.',
    },
    {
      type: 'work',
      title: 'Frontend Developer',
      organization: 'Digital Agency',
      period: '2022 - 2024',
      description: 'Developed responsive web applications, collaborated with design teams, and optimized website performance for multiple clients.',
    },
    {
      type: 'education',
      title: 'Bachelor of Computer Science',
      organization: 'University Name',
      period: '2018 - 2022',
      description: 'Studied software engineering, web development, algorithms, and data structures. Graduated with honors.',
    },
    {
      type: 'work',
      title: 'Junior Frontend Developer',
      organization: 'Startup Company',
      period: '2021 - 2022',
      description: 'Built user interfaces, worked with REST APIs, and contributed to the company\'s main product development.',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                } md:w-1/2`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-auto md:right-0 md:transform md:translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 ring-4 ring-white dark:ring-gray-800 z-10"></div>

                {/* Content Card */}
                <div className="ml-20 md:ml-0 md:mr-8 md:last:mr-0 p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <div className={`p-2 rounded-lg ${
                      item.type === 'work'
                        ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                        : 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
                    }`}>
                      {item.type === 'work' ? <Briefcase className="w-5 h-5" /> : <GraduationCap className="w-5 h-5" />}
                    </div>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {item.period}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                    {item.organization}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
