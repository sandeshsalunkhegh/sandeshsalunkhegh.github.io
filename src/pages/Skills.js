// Skills.js
import { motion } from "framer-motion";
import { Code2, Database, Globe, Layers, PenTool, Server } from "lucide-react";
import "./Skills.css";

export default function Skills() {
  const skills = [
    {
      icon: <Server className="h-10 w-10 mb-4 text-yellow-400" />,
      title: "Backend Development",
      description: <div>
                        <li>Developed scalable backend services using GoLang, Python, and Java for high-performance applications.</li>
                        <li>Designed RESTful APIs for seamless integration across microservices-based architectures.</li>
                        <li>Implemented data pipelines for large-scale data ingestion using BigQuery, PostgreSQL, and MongoDB.</li>
                        <li>Built an efficient C# Exception Handling Framework that improved debugging efficiency by 85% at Avalara Technologies.</li>
                        <li>Enhanced platform performance at HackerRank, reducing API response time by 50%.</li>
                    </div>,
    },
    {
      icon: <Layers className="h-10 w-10 mb-4 text-yellow-400" />,
      title: "Platform Development & Engineering",
      description: <div>
                        <li>Developed and maintained IDE infrastructure at HackerRank, improving system stability and enhancing the user experience during high-traffic interview sessions.</li>
                        <li>Upgraded Language Servers, ensuring optimized handling of multiple programming languages with 90% of the traffic routed to enhanced servers.</li>
                    </div>,
    },
    {
      icon: <Globe className="h-10 w-10 mb-4 text-yellow-400" />,
      title: "API Development",
      description: <div>
                        <li>Developed high-performance REST APIs using GoLang, Python, and Java.</li>
                        <li>Integrated secure endpoints with efficient authentication mechanisms, enhancing data privacy and system protection.</li>
                        <li>Optimized API response times at HackerRank, reducing latency by 50%.</li>
                    </div>,
    },
    {
      icon: <Code2 className="h-10 w-10 mb-4 text-yellow-400" />,
      title: "Infrastructure Development",
      description: <div>
                        <li>Designed and implemented CI/CD pipelines using Jenkins, Kubernetes, and Docker, streamlining deployment processes.</li>
                        <li>Developed cloud cost monitoring tools leveraging Python and BigQuery, reducing cloud infrastructure costs by 25% at Harness.io.</li>
                        <li>Created automation frameworks for process automation and job scheduling at D. E. Shaw & Co.</li>
                    </div>,
    },
    {
      icon: <PenTool className="h-10 w-10 mb-4 text-yellow-400" />,
      title: "Cloud Engineering",
      description: <div>
                        <li>Managed cloud environments across AWS and GCP, ensuring robust infrastructure and cost-effective deployment strategies.</li>
                        <li>Optimized Kubernetes cluster configurations, reducing cloud infrastructure costs by 25%.</li>
                        <li>Implemented scalable architectures using cloud-native services, improving system resilience and scalability.</li>
                    </div>,
    },
    {
        icon: <Database className="h-10 w-10 mb-4 text-yellow-400" />,
        title: "Monitoring and Observability",
        description: <div>
                        <li>Integrated tools like OpenTelemetry, Prometheus, and Grafana to track application performance and infrastructure health.</li>
                        <li>Improved system monitoring at HackerRank, reducing debugging time by 50%.</li>
                        <li>Developed comprehensive dashboards for real-time insights into system metrics and performance trends.</li>
                    </div>,
      },
      {
        icon: <Server className="h-10 w-10 mb-4 text-yellow-400" />,
        title: "System Design & Architecture",
        description: <div>
                        <li>Designed scalable microservices architectures using GoLang, Python, and Java to ensure high availability and minimal latency.</li>
                        <li>Led design discussions to implement robust data flow strategies in distributed systems.</li>
                        <li>Developed modular, decoupled architectures that improve maintainability and enhance scalability.</li>
                    </div>,
      },
      {
        icon: <Database className="h-10 w-10 mb-4 text-yellow-400" />,
        title: "Automation and Job Scheduling",
        description: <div>
                        <li>Developed automated frameworks for scheduling and executing jobs, reducing manual intervention and improving system efficiency.</li>
                        <li>Automated data ingestion and processing pipelines, reducing data handling time by over 65%.</li>
                        <li>Implemented Python-based monitoring tools to identify performance bottlenecks in large-scale job executions at D. E. Shaw & Co.</li>
                    </div>,
      },
      {
        icon: <Database className="h-10 w-10 mb-4 text-yellow-400" />,
        title: "Data Engineering",
        description: <div>
                        <li>Built efficient ETL pipelines leveraging BigQuery, PostgreSQL, and MongoDB for seamless data flow across systems.</li>
                        <li>Improved data processing performance at HackerRank, reducing ingestion time from 15 minutes to 5 minutes.</li>
                        <li>Optimized database query structures, reducing latency by 40% at D. E. Shaw & Co.</li>
                    </div>,
      }
  ];

  return (
    <section id="skills" className="section-padding bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-gray-200 max-w-2xl mx-auto">
            I've worked with a variety of technologies and frameworks to create modern web applications. Here are some key areas I specialize in.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white text-black p-6 rounded-lg shadow-md border border-yellow-400 hover:shadow-lg transition-shadow"
            >
              <div>{skill.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-yellow-400">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16"
        >
            <h3 className="technologies-list-beginning" font-size="large">
                Technologies I Work With
            </h3>
            
            <div className="tech-container">
                <ul>
                    <p className="tech-container-domain">Programming Languages</p>
                    <div className="tech-container">
                        {["GoLang", "Python", "Java", "C#", "Ruby on Rails", "C", "C++"].map((language, index) => (
                            <span key={language} className="technologies">
                                <a href={`https://www.google.com/search?q=${language}`} className="technology_name">
                                    {language}
                                </a>
                            </span>
                        ))}
                    </div>
                </ul>
                <ul>
                    <p className="tech-container-domain">Cloud Platforms</p>
                    <div className="tech-container">
                        {["AWS", "GCP"].map((cloud_pl, index) => (
                            <span key={cloud_pl} className="technologies">
                                <a href={`https://www.google.com/search?q=${cloud_pl}`} className="technology_name">
                                    {cloud_pl}
                                </a>
                            </span>
                        ))}
                    </div>
                </ul>
                <ul>
                    <p className="tech-container-domain">Databases</p>
                    <div className="tech-container">
                        {["MongoDB", "PostgreSQL", "SQL", "BigQuery"].map((database, index) => (
                            <span key={database} className="technologies">
                                <a href={`https://www.google.com/search?q=${database}`} className="technology_name">
                                    {database}
                                </a>
                            </span>
                        ))}
                    </div>
                </ul>
                <ul>
                    <p className="tech-container-domain">CI/CD & Automation</p>
                    <div className="tech-container">
                        {["Docker", "Kubernetes", "Jenkins"].map((devops, index) => (
                            <span key={devops} className="technologies">
                                <a href={`https://www.google.com/search?q=${devops}`} className="technology_name">
                                    {devops}
                                </a>
                            </span>
                        ))}
                    </div>
                </ul>
                <ul>
                    <p className="tech-container-domain">Monitoring Tools</p>
                    <div className="tech-container">
                        {["Prometheus", "Grafana", "New Relic", "OpenTelemetry"].map((monitoring, index) => (
                            <span key={monitoring} className="technologies">
                                <a href={`https://www.google.com/search?q=${monitoring}`} className="technology_name">
                                    {monitoring}
                                </a>
                            </span>
                        ))}
                    </div>
                </ul>
                <ul>
                    <p className="tech-container-domain">Software Development Concepts</p>
                    <div className="tech-container">
                        {["System Design", "Agile Methodologies", "Object-Oriented Programming"].map((tech, index) => (
                            <span key={index} className="technologies">
                                <a href={`https://www.google.com/search?q=${tech}`} className="technology_name">
                                    {tech}
                                </a>
                            </span>
                        ))}
                    </div>
                </ul>
            </div>
        </motion.div>

      </div>
    </section>
  );
}
