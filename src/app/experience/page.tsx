'use client';

import { motion } from 'framer-motion';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    title: "Backend Developer",
    company: "Sargam CUSAT",
    period: "March 2025",
    description: [
      "Developed backend services for the Sargam CUSAT platform.",
      "Sargam is the official cultural fest of Cochin University of Science and Technology.",
      "Managed user data and event registrations, profile management, and results.",
      "visit live: https://sargam.cusat.ac.in/"
    ]
  },
  {
    title: "Organizer",
    company: "Make-A-Ton 7.0",
    period: "October 2024",
    description: [
      "Organized South India&apos;s largest MLH-powered hackathon.",
      "Coordinated with multiple teams and stakeholders.",
      "Managed event logistics and participant experience."
    ]
  },
  {
    title: "Intern",
    company: "Dockode Solutions",
    period: "April 2024",
    description: [
      "Assisted backend development in Python Django.",
      "Built web applications as part of assignments.",
      "Gained hands-on experience with industry-standard development practices."
    ]
  },
  {
    title: "Squad Member",
    company: "Talrop",
    period: "April 2024 - Present",
    description: [
      "Contributing to building hybrid ecosystems for different industries.",
      "Working with cutting-edge technologies and frameworks.",
      "Collaborating with cross-functional teams to deliver high-quality solutions."
    ]
  }
];

const ExperienceCard = ({ experience, index }: { experience: Experience; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-gray-800 p-6 rounded-lg"
  >
    <h3 className="text-xl font-semibold text-purple-400">{experience.title}</h3>
    <p className="text-gray-400 mt-1">{experience.company}</p>
    <p className="text-sm text-gray-500 mt-1">{experience.period}</p>
    <ul className="mt-4 space-y-2">
      {experience.description.map((item, i) => (
        <li key={i} className="text-gray-300 flex items-start">
          <span className="text-purple-400 mr-2">•</span>
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

export default function Experience() {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Professional Experience
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-6 text-xl text-gray-300"
          >
            A timeline of my professional journey and contributions.
          </motion.p>

          <div className="mt-12 grid gap-8">
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} index={index} />
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
