'use client'

import { motion } from 'framer-motion'
import { skills } from '@/data/skills'

export default function Skills() {
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

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5
      }
    })
  }

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-arctic-50 via-ice-50 to-frost-50">
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
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-ice-500 to-frost-500 mx-auto mb-6"></div>
            <p className="text-xl text-arctic-600 max-w-3xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life
            </p>
          </motion.div>

          {/* Technical Skills */}
          <div className="space-y-12">
            {skills.technical.map((skillCategory, categoryIndex) => (
              <motion.div 
                key={skillCategory.category}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg p-8 card-hover"
              >
                <h3 className="text-2xl font-semibold text-arctic-900 mb-8 text-center">
                  {skillCategory.category}
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {skillCategory.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      variants={itemVariants}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-arctic-700">{tech.name}</span>
                        <span className="text-sm text-arctic-500">{tech.level}%</span>
                      </div>
                      
                      <div className="h-3 bg-arctic-100 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ backgroundColor: tech.color }}
                          variants={skillBarVariants}
                          custom={tech.level}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Soft Skills */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 bg-white rounded-2xl shadow-lg p-8 card-hover"
          >
            <h3 className="text-2xl font-semibold text-arctic-900 mb-8 text-center">
              Soft Skills
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.soft.map((skill, index) => (
                <motion.div
                  key={skill}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-ice-50 to-frost-50 rounded-xl p-4 text-center hover:from-ice-100 hover:to-frost-100 transition-all duration-300 group"
                >
                  <span className="text-arctic-700 font-medium group-hover:text-arctic-900 transition-colors">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Learning Path */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <h3 className="text-2xl font-semibold text-arctic-900 mb-6">
              Currently Learning
            </h3>
            
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Next.js 14",
                "TypeScript",
                "AI/ML Integration",
                "Web3 Development",
                "GraphQL",
                "Rust"
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  variants={itemVariants}
                  className="px-6 py-3 bg-gradient-to-r from-ice-100 to-frost-100 text-arctic-700 rounded-full font-medium hover:from-ice-200 hover:to-frost-200 transition-all duration-300 border-2 border-transparent hover:border-ice-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
            
            <p className="mt-6 text-arctic-600 max-w-2xl mx-auto">
              I'm always eager to learn new technologies and expand my skill set. 
              The world of web development is constantly evolving, and I love staying on the cutting edge.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
