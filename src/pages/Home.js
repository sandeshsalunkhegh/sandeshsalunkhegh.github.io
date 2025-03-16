// Home.js
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Hi, I'm <span className="text-yellow-400">Sandesh Salunkhe</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-200 mb-8">
          🚀 Building Scalable Systems | Backend Engineer | Cloud Enthusiast
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
          With 5 years of experience in software engineering, I specialize in building robust backend systems, optimizing performance, and enhancing cloud infrastructure. From designing scalable CI/CD pipelines to leading automation initiatives, I thrive on solving complex engineering challenges.
          </p>
          I believe in continuous learning and am always excited about tackling new challenges.<br /> Whether you're looking for collaboration, technical guidance, or exciting projects — feel free to reach out!<br />
          Let's connect and build something amazing together!
          <div className="button-container">
            <button 
            className="btn-primary bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 px-6 rounded-full" 
            onClick={() => navigate("/contact")}
            >
            Contact Me
            </button>

            <button 
            className="btn-secondary bg-white hover:bg-gray-100 text-blue-600 font-bold py-2 px-6 rounded-full" 
            onClick={() => navigate("/about")}
            >
            Learn More
            </button>
          </div>
        </motion.div>
      </div>
  </section>
  );
}
