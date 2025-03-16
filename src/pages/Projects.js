// Projects.js
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      title: "Github APIs - Implementation code for Github APIs",
      description:
        <div>Implementation code for Github APIs<br />1. Go - contains github API HTTP call implementations in GoLang.<br />2. Python - contains github API HTTP call implementations in Python.</div>,
      image: "/images/ecommerce-platform.png",
      tags: ["GoLang", "Python"],
      githubUrl: "https://github.com/sandeshsalunkhegh/github_apis",
    },
    {
      title: "ai_bot_wit_ai - Chat Bot using Wit.ai",
      description:
        <div>ai_bot_wit_ai - Chat Bot using Wit.ai<br />Bot using Wit.ai</div>,
      image: "/images/task-management-app.png",
      tags: ["GoLang"],
      githubUrl: "https://github.com/sandeshsalunkhegh/ai_bot_wit_ai",
    },
    {
      title: "LeetCode Solutions",
      description:
        "Solutions to coding problems on http://www.leetcode.com.",
      image: "/images/social-media-dashboard.png",
      tags: ["C++"],
      githubUrl: "https://github.com/sandeshsalunkhegh/LeetCode",
    },
    {
        title: "StudentGuide - A guide to college / university students - (WIP)",
        description:
          "A comprehensive dashboard for social media analytics with data visualization and reporting features.",
        image: "/images/social-media-dashboard.png",
        tags: ["JavaScript", "React", "HTML", "CSS"],
        githubUrl: "https://github.com/sandeshsalunkhegh/StudentGuide",
      },
  ];

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-gray-200 max-w-2xl mx-auto">
            A showcase of my recent projects that demonstrate my technical skills and development expertise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white text-black p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="px-2 py-1 bg-yellow-400 text-xs rounded-md font-medium">
                    <li>{tag}</li>
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-primary flex-1"> <Github className="h-4 w-4 mr-2" /> Code</a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <br /><a href="https://github.com/sandeshsalunkhegh?tab=repositories" target="_blank" rel="noopener noreferrer" className="btn-primary"> <Github className="h-4 w-4 mr-2" /> View More on GitHub</a>
        </motion.div>
      </div>
    </section>
  );
}
