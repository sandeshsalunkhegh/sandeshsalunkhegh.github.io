import { useState } from "react";
import { motion } from "framer-motion";
import { View, Briefcase, Award } from "lucide-react";
import "./About.css";

export default function About() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDetails = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const achievements = [
    {
      icon: <Award className="h-10 w-10 mb-4 text-yellow-400" />,
      title: "Achievements",
      description:
        "Recipient of 'Employee of the Week' and SPOT awards for exceptional performance in project delivery and innovation.",
    },
    {
        description:
          "APMs - Monitoring Interviewing Platform reduced debugging time by 50% - optimize Software Applications.",
    },
    {
        description:
          "Upgraded Language Servers - almost 90% of upcoming traffic to upgraded versions of programming languages.",
    },
    {
        description:
          "Email Segregation System - reduced troubleshooting time by 65%.",
    },
    {
        description:
          "Language Server Upgrades: Migrated 90% of traffic to optimized versions, increasing system efficiency.",
    },
    {
        description:
          "Robust Exception Handling - reduced debugging time by 85%.",
    }
  ];

  const experiences = [
    {
      icon: <Briefcase className="h-10 w-10 mb-4 text-yellow-400" />,
      title: "Experience",
      description:
        "Over 5 years of experience in software development with expertise in backend engineering, cloud technologies, and scalable systems.",
    },
  ];

  const companies = [
    {
      name: "D. E. Shaw & Co. - Senior Member, Tech.",
      link: "https://www.deshawindia.com/",
      details: <div>
                    <li>GoLang, Python Developer(SQL, BigQuery).</li>
                    <li>Automation scripts for processes & Job scheduling.</li>
                    <li>Optimized database queries & indexing strategies - reduced latency by 40%.</li>
                    <li>Job scheduling algorithm optimizations - rectified logic for redundant priority calculation for previous queued job(s).</li>
                    <li>Automation, job scheduling, system performance optimization & monitoring.</li>
                    <li>Python-based monitoring tools: Identify performance bottlenecks in large-scale job execution.</li>
                </div>,
    },
    {
      name: "Harness.io - Senior Software Engineer",
      link: "https://www.harness.io/",
      details: <div>
                    <li>GoLang, Python & Java Developer - MongoDB, PostgreSQL, BigQuery.</li>
                    <li>Pipeline Engg. - Infra. & Back-end Dev - Java, GoLang, MongoDB, PostgreSQL.</li>
                    <li>Major responsibilities in developing & working with CI/CD Pipelines.</li>
                    <li>Pipeline-chaining feature - pipeline as a stage in another pipeline.</li>
                    <li>Cloud Cost Management - Infra. & Back-end Dev - GoLang, Python, Kubernetes, AWS, GCP, BigQuery, MongoDB, PostgreSQL.</li>
                    <li>Identifying, categorizing & classifying cloud expense savings.</li>
                    <li>Worked on Feature flags & pipeline engineering - tackled pipeline related customerrequests on-call.</li>
                </div>,
    },
    {
      name: "HackerRank - Software Development Engineer 2",
      link: "https://www.hackerrank.com/",
      details: <div>
                    <li>GoLang, Python & Java Developer (BigQuery, MySQL) - Language Servers, IDE.</li>
                    <li>Developed high-performance CI/CD pipelines, optimizing execution times and reducing failures by 30%.</li>
                    <li>IDE Infrastructure & Platform Development & Maintenance.</li>
                    <li>Application Performance Monitoring (APM)- Interviewing Platform & Infra.</li>
                    <li>Docker scripts to containerise back-end servers - GCP Virtual Machines.</li>
                    <li>Enhanced Interviewing Platform performance: API response time reduced by 50%.</li>
                    <li>APM monitoring dashboards: improved debugging efficiency.</li>
                    <li>Improved BigQuery processing pipelines, reducing data ingestion time from 15 min to 5 min.</li>
                </div>,
    },
    {
      name: "BrowserStack - Software Engineer",
      link: "https://www.browserstack.com/",
      details: <div>
                    <li>Ruby on Rails, Java (MySQL, MongoDB) Developer & Cloud (AWS).</li>
                    <li>Email Alert System, Invoice Generation, Alert Mechanism for Errorreporting.</li>
                    <li>Email alerting, logging systems: reduced incidentresolution time by 65%.</li>
                </div>,
    },
    {
      name: "Avalara Technologies - Software Engineer",
      link: "https://www.avalara.com/in/en/index.html",
      details: <div>
                    <li>Web Automation & Invoice Generation (C#), Data Scraping (Python) - C# - .NET & Java - M.V.C. Architecture with MySQL database.</li>
                    <li>C#-based exception handling framework: improves debugging speed by 85%.</li>
                    <li>Caching in Core Project reduced API & DB calls by more than 50%.</li>
                    <li>SQL query optimizations: 50% faster transaction processing time.</li>
                </div>,
    },
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4" align="center">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </motion.div>

        {/* Split Layout */}
        <div className="about-grid">
          {/* Achievements Section */}
          <div className="achievements-container">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="achievement-card"
              >
                <div>{achievement.icon}</div>
                <h3>{achievement.title}</h3>
                <p className="achievement-description" color="black">{achievement.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Experience Section */}
          <div className="experiences-container">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="experience-card"
              >
                <div>{exp.icon}</div>
                <h3>{exp.title}</h3>
                <p className="experience-description" color="black">{exp.description}</p>
              </motion.div>
            ))}

            {/* Companies Section */}
            {companies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="experience-card"
              >
                <div className="flex items-center justify-between">
                <pre underline="never" className="text-lg font-medium">
                        <b>
                            {company.name}
                        </b>
                    <a
                        href={company.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl font-bold text-yellow-400"
                    >
                    -   link
                    </a>
                </pre>
                <button
                        className="text-sm text-primary cursor-pointer"
                        onClick={() => toggleDetails(index)}
                    >
                    {expandedIndex === index ? "-" : "+"}
                </button>
                </div>

                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="mt-2 text-gray-600"
                  >
                    {company.details}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="contact-grid">
          <div>
            <p className="font-medium">Name:</p>
            <p className="text-muted-foreground"><b>Sandesh Salunkhe</b></p>
          </div>
          <div>
            <p className="font-medium">Email:</p>
            <p className="text-muted-foreground" ><a href="mailto:sandy.decoder@gmail.com">sandy.decoder@gmail.com</a></p>
          </div>
          <div>
            <p className="font-medium">Location:</p>
            <p className="text-muted-foreground"><b>Hyderabad, India</b></p>
          </div>
          <div>
            <p className="font-medium">Availability:</p>
            <p className="text-muted-foreground"><b>Open to opportunities</b></p>
          </div>
        </div>

        {/* Download Button */}
        <a
          href="https://drive.google.com/file/d/1Sj17FMAvnCm_aU8isxQi74yiBKyIIBTo/view"
          target="__blank"
          className="about_section_resume_field"
        >
          <View className="about_section_resume_field_view_field" /> View Resume
        </a>
      </div>
    </section>
  );
}
