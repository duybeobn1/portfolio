import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 text-gray-900 min-h-screen overflow-x-hidden">
      {/* Hero section */}
      <section className="h-screen flex flex-col justify-center items-center px-4 text-center pt-16">
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white text-2xl font-bold">AV</span>
          </div>
        </motion.div>
        
        <motion.h1
          className="text-5xl sm:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 bg-clip-text text-transparent mb-6"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Anh Vu
        </motion.h1>
        
        <motion.h2
          className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-600 mt-4 max-w-4xl leading-relaxed"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Master’s Student in Artificial Intelligent (M2), Full-Stack Developer & AI Enthusiast
        </motion.h2>
        
        <motion.p
          className="text-lg sm:text-xl text-gray-500 mt-6 max-w-3xl leading-relaxed font-normal"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Passionate about leveraging machine learning, computer vision, and web technologies to craft practical, scalable solutions with real-world impact.
        </motion.p>
        
        <motion.div
          className="mt-12 flex gap-6 flex-wrap justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <Link
            to="/projects"
            className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            View My Work
          </Link>
          <Link
            to="/contact"
            className="px-8 py-4 border-2 border-indigo-600 text-indigo-600 font-medium rounded-xl hover:bg-indigo-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Get In Touch
          </Link>
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 px-6 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <motion.h3
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Featured Projects
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "AI Vision Transformer",
                description: "Advanced image restoration using Vision Transformers and deep learning",
                tech: ["Python", "PyTorch", "Computer Vision"]
              },
              {
                title: "CO₂ Impact Tracker",
                description: "Full-stack application for carbon footprint comparison and analysis",
                tech: ["React", "Spring Boot", "PostgreSQL"]
              },
              {
                title: "Crypto Trading Bot",
                description: "Intelligent trading system with technical analysis strategies",
                tech: ["Python", "Machine Learning", "APIs"]
              },
              {
                title: "Smart Culinary Assistant",
                description: "AI-powered cooking helper with OCR and object detection",
                tech: ["React", "YOLO", "OCR"]
              },
            ].map((project, i) => (
              <motion.div
                key={project.title}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-100 hover:scale-105"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h4>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-sm rounded-full border border-indigo-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 text-indigo-600 font-medium border-2 border-indigo-600 rounded-xl hover:bg-indigo-600 hover:text-white transition-all duration-300"
            >
              View All Projects
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Personal Statement */}
      <section className="py-32 bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 text-white flex items-center justify-center px-4 text-center">
        <div className="max-w-4xl">
          <motion.p
            className="text-2xl sm:text-3xl lg:text-4xl font-light leading-relaxed"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            "I believe in the power of technology to transform ideas into reality, 
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent font-semibold">
              {" "}creating solutions that make a difference.
            </span>
            "
          </motion.p>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="text-indigo-300 text-lg">— Anh Vu</span>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 px-6 bg-gradient-to-br from-white to-indigo-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h3
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Let's Build Something Amazing Together
          </motion.h3>
          
          <motion.p
            className="text-lg sm:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to discuss your next project? I'm always excited to collaborate on innovative solutions.
          </motion.p>
          
          <motion.div
            className="flex gap-6 justify-center flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Start a Conversation
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 border-2 border-indigo-600 text-indigo-600 font-medium rounded-xl hover:bg-indigo-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Learn More About Me
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
