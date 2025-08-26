'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { personalInfo } from '@/data/personal'
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

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
    <section id="contact" className="py-20 bg-white">
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
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-ice-500 to-frost-500 mx-auto mb-6"></div>
            <p className="text-xl text-arctic-600 max-w-3xl mx-auto">
              Have a project in mind or just want to chat? I'd love to hear from you. 
              Let's create something amazing together!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-arctic-900 mb-8">
                Let's Connect
              </h3>
              
              <div className="space-y-6 mb-8">
                {/* Email */}
                <div className="flex items-center group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-ice-500 to-frost-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-arctic-900">Email</h4>
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="text-arctic-600 hover:text-ice-600 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-frost-500 to-ice-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-arctic-900">Phone</h4>
                    <a 
                      href={`tel:${personalInfo.phone}`}
                      className="text-arctic-600 hover:text-ice-600 transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-arctic-500 to-frost-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-arctic-900">Location</h4>
                    <p className="text-arctic-600">{personalInfo.location}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mb-8">
                <h4 className="font-medium text-arctic-900 mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a
                    href={personalInfo.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-arctic-100 rounded-lg hover:bg-arctic-200 transition-colors group"
                  >
                    <Github className="w-6 h-6 text-arctic-600 group-hover:text-arctic-900" />
                  </a>
                  <a
                    href={personalInfo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-arctic-100 rounded-lg hover:bg-arctic-200 transition-colors group"
                  >
                    <Linkedin className="w-6 h-6 text-arctic-600 group-hover:text-arctic-900" />
                  </a>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="p-3 bg-arctic-100 rounded-lg hover:bg-arctic-200 transition-colors group"
                  >
                    <Mail className="w-6 h-6 text-arctic-600 group-hover:text-arctic-900" />
                  </a>
                </div>
              </div>

              {/* Availability */}
              <div className="bg-gradient-to-r from-ice-50 to-frost-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="font-medium text-arctic-900">Available for new projects</span>
                </div>
                <p className="text-arctic-600">
                  I'm currently open to new opportunities and interesting projects. 
                  Whether you're a startup looking to build your MVP or an established 
                  company needing additional development resources, let's talk!
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-gradient-to-br from-arctic-50 to-ice-50 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-arctic-900 mb-6">
                  Send me a message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-arctic-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-arctic-200 rounded-lg focus:ring-2 focus:ring-ice-500 focus:border-transparent transition-all bg-white"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-arctic-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-arctic-200 rounded-lg focus:ring-2 focus:ring-ice-500 focus:border-transparent transition-all bg-white"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-arctic-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-arctic-200 rounded-lg focus:ring-2 focus:ring-ice-500 focus:border-transparent transition-all bg-white"
                      placeholder="Project discussion"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-arctic-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-arctic-200 rounded-lg focus:ring-2 focus:ring-ice-500 focus:border-transparent transition-all bg-white resize-none"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center px-8 py-4 rounded-lg font-medium transition-all duration-300 ${
                      isSubmitting
                        ? 'bg-arctic-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-ice-500 to-frost-500 hover:from-ice-600 hover:to-frost-600 hover:scale-105 shadow-lg hover:shadow-xl'
                    } text-white`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-800">
                        Thanks for your message! I'll get back to you soon.
                      </p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-800">
                        Something went wrong. Please try again or email me directly.
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>

          {/* Quick Contact Options */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <h3 className="text-xl font-semibold text-arctic-900 mb-6">
              Prefer a quick chat?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${personalInfo.email}?subject=Quick Chat Request`}
                className="inline-flex items-center px-6 py-3 bg-white border-2 border-ice-500 text-ice-600 font-medium rounded-lg hover:bg-ice-50 transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Me
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white border-2 border-frost-500 text-frost-600 font-medium rounded-lg hover:bg-frost-50 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                LinkedIn Message
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
