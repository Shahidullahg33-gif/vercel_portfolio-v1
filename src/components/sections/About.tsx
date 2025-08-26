'use client'

import { motion } from 'framer-motion'
import { personalInfo } from '@/data/personal'
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-arctic-900 mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-ice-500 to-frost-500 mx-auto mb-6"></div>
            <p className="text-xl text-arctic-600 max-w-3xl mx-auto">
              {personalInfo.subtitle}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio Section */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-arctic-900 mb-6">
                Get to know me!
              </h3>
              <div className="space-y-4 text-arctic-700 leading-relaxed">
                <p>
                  {personalInfo.bio}
                </p>
                <p>
                  I'm passionate about creating digital experiences that make a difference. 
                  Whether it's building responsive web applications, optimizing performance, 
                  or collaborating with teams to solve complex problems, I bring enthusiasm 
                  and expertise to every project.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, 
                  contributing to open-source projects, or sharing knowledge with the 
                  developer community. I believe in continuous learning and staying 
                  up-to-date with industry trends.
                </p>
              </div>

              {/* Contact Info */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center text-arctic-600">
                  <MapPin className="w-5 h-5 mr-3 text-ice-500" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center text-arctic-600">
                  <Mail className="w-5 h-5 mr-3 text-ice-500" />
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="hover:text-ice-600 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <div className="flex items-center text-arctic-600">
                  <Phone className="w-5 h-5 mr-3 text-ice-500" />
                  <a 
                    href={`tel:${personalInfo.phone}`}
                    className="hover:text-ice-600 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Stats/Highlights Section */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-arctic-900 mb-6">
                Quick Facts
              </h3>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-6 bg-gradient-to-br from-ice-50 to-frost-50 rounded-xl">
                  <div className="text-3xl font-bold text-ice-600 mb-2">3+</div>
                  <div className="text-arctic-600">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-frost-50 to-ice-50 rounded-xl">
                  <div className="text-3xl font-bold text-frost-600 mb-2">50+</div>
                  <div className="text-arctic-600">Projects Completed</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-arctic-50 to-ice-50 rounded-xl">
                  <div className="text-3xl font-bold text-arctic-600 mb-2">15+</div>
                  <div className="text-arctic-600">Technologies</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-ice-50 to-arctic-50 rounded-xl">
                  <div className="text-3xl font-bold text-ice-600 mb-2">100%</div>
                  <div className="text-arctic-600">Client Satisfaction</div>
                </div>
              </div>

              {/* Interests */}
              <div>
                <h4 className="text-lg font-semibold text-arctic-900 mb-4">
                  Interests & Hobbies
                </h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Open Source",
                    "AI/ML",
                    "Web3",
                    "Photography",
                    "Travel",
                    "Music",
                    "Gaming",
                    "Reading"
                  ].map((interest, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-ice-100 to-frost-100 text-arctic-700 rounded-full text-sm font-medium hover:from-ice-200 hover:to-frost-200 transition-all duration-300"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-16"
          >
            <p className="text-lg text-arctic-600 mb-6">
              Interested in working together? Let's have a conversation!
            </p>
            <button
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-ice-500 to-frost-500 text-white font-medium rounded-full hover:from-ice-600 hover:to-frost-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Let's Connect
              <ExternalLink className="w-5 h-5 ml-2" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
