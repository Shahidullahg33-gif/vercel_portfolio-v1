'use client'

import { motion } from 'framer-motion'
import { experience, education, certifications } from '@/data/experience'
import { Briefcase, GraduationCap, Award, MapPin, Calendar, ExternalLink } from 'lucide-react'

export default function Experience() {
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
    <section id="experience" className="py-20 bg-gradient-to-br from-arctic-50 via-ice-50 to-frost-50">
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
              Experience & <span className="gradient-text">Education</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-ice-500 to-frost-500 mx-auto mb-6"></div>
            <p className="text-xl text-arctic-600 max-w-3xl mx-auto">
              My professional journey and educational background
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Work Experience */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center mb-8">
                <div className="p-3 bg-gradient-to-r from-ice-500 to-frost-500 rounded-lg mr-4">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-arctic-900">Work Experience</h3>
              </div>

              <div className="space-y-8">
                {experience.map((job, index) => (
                  <motion.div
                    key={job.id}
                    variants={itemVariants}
                    className="relative bg-white rounded-2xl p-6 shadow-lg card-hover"
                  >
                    {/* Timeline connector */}
                    {index !== experience.length - 1 && (
                      <div className="absolute left-6 top-16 w-0.5 h-16 bg-gradient-to-b from-ice-300 to-frost-300"></div>
                    )}
                    
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-3 h-3 bg-gradient-to-r from-ice-500 to-frost-500 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                          <h4 className="text-xl font-semibold text-arctic-900">{job.title}</h4>
                          <span className="text-sm text-ice-600 font-medium">{job.period}</span>
                        </div>
                        
                        <div className="flex items-center text-arctic-600 mb-3">
                          <span className="font-medium">{job.company}</span>
                          <span className="mx-2">•</span>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {job.location}
                          </div>
                        </div>

                        <p className="text-arctic-700 mb-4">{job.description}</p>

                        {/* Responsibilities */}
                        <div className="mb-4">
                          <h5 className="font-medium text-arctic-900 mb-2">Key Responsibilities:</h5>
                          <ul className="space-y-1">
                            {job.responsibilities.slice(0, 3).map((responsibility, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="w-1.5 h-1.5 bg-ice-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm text-arctic-600">{responsibility}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div className="mb-4">
                          <h5 className="font-medium text-arctic-900 mb-2">Technologies:</h5>
                          <div className="flex flex-wrap gap-2">
                            {job.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-arctic-100 text-arctic-700 rounded-full text-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Achievements */}
                        <div>
                          <h5 className="font-medium text-arctic-900 mb-2">Key Achievements:</h5>
                          <ul className="space-y-1">
                            {job.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="w-1.5 h-1.5 bg-frost-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm text-arctic-600">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education & Certifications */}
            <motion.div variants={itemVariants}>
              {/* Education */}
              <div className="mb-12">
                <div className="flex items-center mb-8">
                  <div className="p-3 bg-gradient-to-r from-frost-500 to-ice-500 rounded-lg mr-4">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-arctic-900">Education</h3>
                </div>

                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <motion.div
                      key={edu.id}
                      variants={itemVariants}
                      className="bg-white rounded-2xl p-6 shadow-lg card-hover"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-3 h-3 bg-gradient-to-r from-frost-500 to-ice-500 rounded-full mt-2"></div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                            <h4 className="text-lg font-semibold text-arctic-900">{edu.degree}</h4>
                            <span className="text-sm text-frost-600 font-medium">{edu.period}</span>
                          </div>
                          
                          <div className="flex items-center text-arctic-600 mb-3">
                            <span className="font-medium">{edu.institution}</span>
                            <span className="mx-2">•</span>
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {edu.location}
                            </div>
                          </div>

                          <p className="text-arctic-700 mb-3">{edu.description}</p>

                          {edu.gpa && (
                            <p className="text-sm text-arctic-600 mb-3">
                              <span className="font-medium">GPA:</span> {edu.gpa}
                            </p>
                          )}

                          {edu.coursework && (
                            <div className="mb-3">
                              <h5 className="font-medium text-arctic-900 mb-2">Relevant Coursework:</h5>
                              <div className="flex flex-wrap gap-2">
                                {edu.coursework.slice(0, 4).map((course, idx) => (
                                  <span
                                    key={idx}
                                    className="px-3 py-1 bg-frost-50 text-frost-700 rounded-full text-sm"
                                  >
                                    {course}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {edu.achievements && (
                            <div>
                              <h5 className="font-medium text-arctic-900 mb-2">Achievements:</h5>
                              <ul className="space-y-1">
                                {edu.achievements.map((achievement, idx) => (
                                  <li key={idx} className="flex items-start">
                                    <span className="w-1.5 h-1.5 bg-frost-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span className="text-sm text-arctic-600">{achievement}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <div className="flex items-center mb-8">
                  <div className="p-3 bg-gradient-to-r from-ice-500 to-arctic-500 rounded-lg mr-4">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-arctic-900">Certifications</h3>
                </div>

                <div className="space-y-4">
                  {certifications.map((cert) => (
                    <motion.div
                      key={cert.id}
                      variants={itemVariants}
                      className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-arctic-900">{cert.title}</h4>
                          <p className="text-arctic-600">{cert.issuer}</p>
                          <div className="flex items-center text-sm text-arctic-500 mt-1">
                            <Calendar className="w-4 h-4 mr-1" />
                            {cert.date}
                          </div>
                        </div>
                        <div className="ml-4">
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-ice-600 hover:text-ice-700 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
