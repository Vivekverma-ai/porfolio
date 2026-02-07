'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download, Mail, Phone, MapPin, Calendar, Award, BookOpen, Beaker, Cpu, Users, Target, TrendingUp, CheckCircle } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionWrapper from '@/components/SectionWrapper'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white pt-16">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-secondary-900 mb-6"
            >
              Hi, I'm <span className="gradient-text">Vivek Verma</span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl md:text-3xl text-secondary-700 mb-6"
            >
              Biotechnology Student | Research Enthusiast
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-secondary-600 mb-8 max-w-2xl mx-auto"
            >
              Passionate about molecular biology, bioinformatics, and innovative biotechnology research. 
              Dedicated to advancing scientific knowledge and developing solutions for real-world challenges.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a href="#projects" className="btn-primary inline-flex items-center justify-center">
                View Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#contact" className="btn-secondary inline-flex items-center justify-center">
                Contact Me
                <Mail className="ml-2 h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <SectionWrapper
        id="about"
        title="About Me"
        subtitle="Learn more about my academic journey and research interests"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-secondary-900 mb-4">
                Academic Background
              </h3>
              <p className="text-secondary-600 mb-4">
                I am currently pursuing my Bachelor's degree in Biotechnology with a strong foundation in 
                molecular biology, genetics, and biochemistry. My academic journey has equipped me with 
                both theoretical knowledge and practical laboratory skills.
              </p>
              <p className="text-secondary-600">
                I am particularly fascinated by the intersection of biotechnology and computational biology, 
                seeking to leverage data analysis and bioinformatics tools to solve complex biological problems.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Beaker className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-secondary-900">Research Focus</h4>
                  <p className="text-secondary-600">Molecular biology, genetic engineering, and protein analysis</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Cpu className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-secondary-900">Technical Interests</h4>
                  <p className="text-secondary-600">Bioinformatics, data analysis, and computational modeling</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Target className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-secondary-900">Career Goals</h4>
                  <p className="text-secondary-600">Research scientist in biotech industry or pursue higher studies</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </SectionWrapper>

      {/* Skills Section */}
      <SectionWrapper
        id="skills"
        title="Skills & Expertise"
        subtitle="Technical and soft skills that define my professional profile"
      >
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-lg card-hover"
          >
            <div className="flex items-center mb-4">
              <Beaker className="h-8 w-8 text-primary-600 mr-3" />
              <h3 className="text-xl font-semibold text-secondary-900">Lab Skills</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-secondary-700">PCR and DNA sequencing</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-secondary-700">Cell culture techniques</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-secondary-700">Microscopy and imaging</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-secondary-700">Protein purification</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-lg card-hover"
          >
            <div className="flex items-center mb-4">
              <Cpu className="h-8 w-8 text-primary-600 mr-3" />
              <h3 className="text-xl font-semibold text-secondary-900">Technical Skills</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-secondary-700">Python for data analysis</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-secondary-700">Advanced Excel & statistical analysis</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-secondary-700">Bioinformatics tools (BLAST, Clustal)</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-secondary-700">Laboratory information systems</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-lg card-hover"
          >
            <div className="flex items-center mb-4">
              <Users className="h-8 w-8 text-primary-600 mr-3" />
              <h3 className="text-xl font-semibold text-secondary-900">Soft Skills</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-secondary-700">Analytical thinking</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-secondary-700">Team collaboration</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-secondary-700">Scientific communication</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-secondary-700">Problem-solving</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Projects Section */}
      <SectionWrapper
        id="projects"
        title="Projects & Research"
        subtitle="Explore my academic projects and research work"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Gene Expression Analysis",
              description: "Analyzed differential gene expression in cancer cells using RNA-seq data and identified potential biomarkers.",
              tools: ["Python", "R", "DESeq2", "Bioconductor"],
              status: "Completed"
            },
            {
              title: "Protein Structure Prediction",
              description: "Utilized machine learning algorithms to predict 3D protein structures from amino acid sequences.",
              tools: ["Python", "TensorFlow", "AlphaFold", "Molecular Dynamics"],
              status: "In Progress"
            },
            {
              title: "Microbial Bioremediation",
              description: "Isolated and characterized bacterial strains capable of degrading environmental pollutants.",
              tools: ["Microbiology", "PCR", "Gel Electrophoresis", "HPLC"],
              status: "Completed"
            },
            {
              title: "CRISPR-Cas9 Gene Editing",
              description: "Designed and implemented CRISPR-Cas9 system for targeted gene knockout in model organisms.",
              tools: ["CRISPR", "Cell Culture", "Western Blot", "qPCR"],
              status: "In Progress"
            },
            {
              title: "Bioinformatics Pipeline",
              description: "Developed automated pipeline for processing and analyzing next-generation sequencing data.",
              tools: ["Python", "Bash", "Docker", "AWS"],
              status: "Completed"
            },
            {
              title: "Enzyme Kinetics Study",
              description: "Investigated kinetic parameters of industrially important enzymes under various conditions.",
              tools: ["Spectrophotometry", "Michaelis-Menten", "Statistical Analysis"],
              status: "Completed"
            }
          ].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg card-hover"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-secondary-900">{project.title}</h3>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  project.status === 'Completed' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {project.status}
                </span>
              </div>
              <p className="text-secondary-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, toolIndex) => (
                  <span
                    key={toolIndex}
                    className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Education Section */}
      <SectionWrapper
        id="education"
        title="Education"
        subtitle="My academic journey and qualifications"
      >
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200"></div>
            {[
              {
                degree: "Bachelor of Technology in Biotechnology",
                institution: "Institute of Technology, University Name",
                period: "2021 - 2025 (Expected)",
                details: "CGPA: 8.5/10 | Relevant coursework: Molecular Biology, Genetic Engineering, Bioinformatics"
              },
              {
                degree: "Higher Secondary Education",
                institution: "Senior Secondary School, City Name",
                period: "2019 - 2021",
                details: "Percentage: 92% | Science Stream with Biology"
              },
              {
                degree: "Secondary Education",
                institution: "High School, City Name",
                period: "2018 - 2019",
                details: "Percentage: 89% | Comprehensive Science Education"
              }
            ].map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex items-center mb-8"
              >
                <div className="absolute left-6 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow"></div>
                <div className="ml-16 bg-white p-6 rounded-lg shadow-lg flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-secondary-900">{edu.degree}</h3>
                    <div className="flex items-center text-secondary-600 mt-1 sm:mt-0">
                      <Calendar className="h-4 w-4 mr-1" />
                      {edu.period}
                    </div>
                  </div>
                  <p className="text-primary-600 font-medium mb-2">{edu.institution}</p>
                  <p className="text-secondary-600">{edu.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Certifications Section */}
      <SectionWrapper
        id="certifications"
        title="Certifications & Achievements"
        subtitle="Professional certifications and academic achievements"
      >
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Certificate in Bioinformatics",
              issuer: "Coursera - Johns Hopkins University",
              date: "2024",
              description: "Completed comprehensive course on bioinformatics tools and techniques"
            },
            {
              title: "Research Methodology Workshop",
              issuer: "National Institute of Biotechnology",
              date: "2023",
              description: "Intensive workshop on advanced research methodologies and data analysis"
            },
            {
              title: "Python for Data Science",
              issuer: "edX - Harvard University",
              date: "2023",
              description: "Mastered Python programming for scientific data analysis and visualization"
            },
            {
              title: "Laboratory Safety Certification",
              issuer: "OSHA Approved Training Center",
              date: "2022",
              description: "Certified in biosafety and laboratory best practices"
            },
            {
              title: "Academic Excellence Award",
              issuer: "University Department of Biotechnology",
              date: "2023",
              description: "Awarded for outstanding academic performance and research contributions"
            },
            {
              title: "Best Poster Presentation",
              issuer: "National Biotechnology Symposium",
              date: "2024",
              description: "Recognized for excellence in presenting research on microbial bioremediation"
            }
          ].map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg card-hover"
            >
              <div className="flex items-start space-x-3">
                <Award className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-secondary-900 mb-1">{cert.title}</h3>
                  <p className="text-primary-600 font-medium mb-1">{cert.issuer}</p>
                  <p className="text-sm text-secondary-500 mb-2">{cert.date}</p>
                  <p className="text-secondary-600">{cert.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Contact Section */}
      <SectionWrapper
        id="contact"
        title="Get In Touch"
        subtitle="Let's connect and explore opportunities in biotechnology"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-secondary-900 mb-6">Let's Connect</h3>
              <p className="text-secondary-600 mb-6">
                I'm always interested in connecting with fellow researchers, industry professionals, 
                and anyone passionate about biotechnology. Whether you have a project in mind, 
                want to discuss research opportunities, or just want to chat about the latest 
                developments in the field, feel free to reach out!
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-primary-600 mr-3" />
                  <span className="text-secondary-700">vivek.verma@example.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-primary-600 mr-3" />
                  <span className="text-secondary-700">+91 98765 43210</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-primary-600 mr-3" />
                  <span className="text-secondary-700">City, State, India</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-none"
                    placeholder="Your message here..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center"
                >
                  Send Message
                  <Mail className="ml-2 h-5 w-5" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  )
}
