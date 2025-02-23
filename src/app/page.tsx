'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-24 sm:pb-20">
        <div className="relative flex flex-col items-center sm:items-start sm:flex-row sm:justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center sm:text-left max-w-2xl order-2 sm:order-1"
          >
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hi, I&apos;m Afnash Ali P
            </h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-6 text-xl sm:text-2xl text-gray-300 max-w-3xl"
            >
              A Computer Science student passionate about technology and programming.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center sm:justify-start"
            >
              <Link
                href="/resume.pdf"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors"
              >
                View Resume
                <svg
                  className="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-300 hover:bg-gray-800 transition-colors"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-1 sm:order-2"
          >
            <div className="relative w-40 h-40 sm:w-56 sm:h-56">
              <Image
                src="/profile.jpg"
                alt="Afnash Ali P"
                fill
                className="rounded-full object-cover border-4 border-purple-500"
                priority
                sizes="(max-width: 640px) 160px, 224px"
                style={{ objectPosition: '50% 30%' }}
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20"
        >
          <h2 className="text-2xl font-semibold text-gray-200 mb-6">Latest Experience</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-purple-400">Squad Member</h3>
              <p className="text-gray-400">Talrop</p>
              <p className="text-sm text-gray-500 mt-2">April 2024 - Present</p>
              <p className="mt-4 text-gray-300">Contributing to building hybrid ecosystems for different industries.</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-purple-400">Intern</h3>
              <p className="text-gray-400">Dockode Solutions</p>
              <p className="text-sm text-gray-500 mt-2">April 2024</p>
              <p className="mt-4 text-gray-300">Assisted backend development in Python Django and built web applications.</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-purple-400">Organizer</h3>
              <p className="text-gray-400">Make-A-Ton 7.0</p>
              <p className="text-sm text-gray-500 mt-2">October 2024</p>
              <p className="mt-4 text-gray-300">Organized South India&apos;s largest MLH-powered hackathon.</p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
