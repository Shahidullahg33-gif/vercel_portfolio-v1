'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { projects, projectCategories } from '@/data/projects'
import { Github, ExternalLink, Eye, Calendar, Tag } from 'lucide-react'

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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

  const projectVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <section id="projects" className="py-20 bg-white">
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
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-ice-500 to-frost-500 mx-auto mb-6"></div>
            <p className="text-xl text-arctic-600 max-w-3xl mx-auto">
              Here are some of the projects I've worked on. Each one represents a unique challenge and solution.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {projectCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-ice-500 to-frost-500 text-white shadow-lg'
                      : 'bg-arctic-100 text-arctic-700 hover:bg-arctic-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={projectVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover group"
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Project Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'completed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {project.status === 'completed' ? 'Completed' : 'In Progress'}
                      </span>
                    </div>

                    {/* Overlay buttons */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-4">
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white rounded-full hover:bg-arctic-50 transition-colors"
                        >
                          <Github className="w-5 h-5 text-arctic-700" />
                        </Link>
                        <Link
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white rounded-full hover:bg-arctic-50 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5 text-arctic-700" />
                        </Link>
                        <button
                          onClick={() => setSelectedProject(project.id)}
                          className="p-3 bg-white rounded-full hover:bg-arctic-50 transition-colors"
                        >
                          <Eye className="w-5 h-5 text-arctic-700" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-ice-600 font-medium">
                        {project.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-arctic-900 mb-3 group-hover:text-ice-600 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-arctic-600 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-arctic-100 text-arctic-700 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-arctic-100 text-arctic-700 rounded-full text-sm">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Project Links */}
                    <div className="flex space-x-4">
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-arctic-600 hover:text-ice-600 transition-colors"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Link>
                      <Link
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-arctic-600 hover:text-ice-600 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-16"
          >
            <p className="text-lg text-arctic-600 mb-6">
              Want to see more of my work?
            </p>
            <Link
              href={projects[0]?.github.replace(/\/[^\/]*$/, '') || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-ice-500 to-frost-500 text-white font-medium rounded-full hover:from-ice-600 hover:to-frost-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Github className="w-5 h-5 mr-2" />
              View All on GitHub
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const project = projects.find(p => p.id === selectedProject)
                if (!project) return null

                return (
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-arctic-900 mb-2">
                          {project.title}
                        </h3>
                        <span className="text-ice-600 font-medium">
                          {project.category}
                        </span>
                      </div>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="text-arctic-400 hover:text-arctic-600 text-2xl"
                      >
                        ×
                      </button>
                    </div>

                    <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <p className="text-arctic-700 mb-6 leading-relaxed">
                      {project.longDescription}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-arctic-900 mb-3">Key Features</h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <span className="w-2 h-2 bg-ice-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                              <span className="text-arctic-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-arctic-900 mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-arctic-100 text-arctic-700 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-6 py-3 bg-arctic-900 text-white rounded-lg hover:bg-arctic-800 transition-colors"
                      >
                        <Github className="w-5 h-5 mr-2" />
                        View Code
                      </Link>
                      <Link
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-6 py-3 bg-gradient-to-r from-ice-500 to-frost-500 text-white rounded-lg hover:from-ice-600 hover:to-frost-600 transition-all"
                      >
                        <ExternalLink className="w-5 h-5 mr-2" />
                        Live Demo
                      </Link>
                    </div>
                  </div>
                )
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
