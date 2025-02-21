'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            About Me
          </h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-8 prose prose-invert max-w-none"
          >
            <p className="text-xl text-gray-300">
              Enthusiastic and motivated CSE 2nd-year student at SOE, CUSAT, seeking internship opportunities 
              to develop expertise in software development, data analysis, and problem-solving within a 
              collaborative team environment.
            </p>

            <div className="mt-12">
              <h2 className="text-2xl font-semibold text-gray-200 mb-6">Education</h2>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-purple-400">B.Tech in Computer Science and Engineering</h3>
                <p className="text-gray-400">School of Engineering, CUSAT, Kochi</p>
                <p className="text-sm text-gray-500 mt-2">2022 - Present</p>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-semibold text-gray-200 mb-6">Certifications</h2>
              <div className="grid gap-6">
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-purple-400">Linux and SQL</h3>
                  <p className="text-gray-400">Google, Coursera</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-purple-400">Foundations of Cybersecurity</h3>
                  <p className="text-gray-400">Google, Coursera</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-purple-400">Responsive Web Design</h3>
                  <p className="text-gray-400">freeCodeCamp</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-semibold text-gray-200 mb-6">Memberships & Activities</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  'Google Developer Student Clubs (GDSC CUSAT)',
                  'TinkerHub Kochi',
                  'IGBC CUSAT',
                  'ACES Executive',
                  'Make-A-Ton, CUSAT'
                ].map((activity, index) => (
                  <div key={index} className="bg-gray-800 p-6 rounded-lg">
                    <p className="text-gray-300">{activity}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
