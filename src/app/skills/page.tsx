'use client';

import { motion } from 'framer-motion';

const SkillCard = ({ title, skills }: { title: string; skills: string[] }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-gray-800 p-6 rounded-lg"
  >
    <h3 className="text-xl font-semibold text-purple-400 mb-4">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Django", "Java", "C", "C++", "HTML", "CSS", "JavaScript"]
    },
    {
      title: "Web Technologies",
      skills: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"]
    },
    {
      title: "Backend & Databases",
      skills: ["Django", "SQL", "RESTful APIs", "Database Design"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "Linux", "VS Code", "PyCharm", "Postman"]
    },
    {
      title: "Soft Skills",
      skills: ["Team Leadership", "Communication", "Problem Solving", "Fast Learning"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-8">
            Skills & Expertise
          </h1>

          <p className="text-xl text-gray-300 mb-12">
            Here's a comprehensive overview of my technical skills and areas of expertise.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SkillCard title={category.title} skills={category.skills} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-semibold text-gray-200 mb-4">Continuous Learning</h2>
            <p className="text-gray-300">
              I'm constantly expanding my skill set through online courses, practical projects, and
              community involvement. Currently exploring advanced concepts in web development and
              cloud technologies.
            </p>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
