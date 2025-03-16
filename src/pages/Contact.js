import { useState } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, MapPin, Phone, Instagram } from "lucide-react"
import "./Contact.css"

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
    
        await new Promise((resolve) => setTimeout(resolve, 1000));
    
        setIsSubmitting(false);
        e.currentTarget.reset();
    };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
          I'm always excited to connect with like-minded professionals, collaborate on innovative projects, or discuss exciting opportunities.<br />
          Have a project in mind or want to discuss potential opportunities? Feel free to reach out to me using the form below or through my contact information.<br />
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            <div className="contact-info">
                <MapPin className="contact_icon_text_container" />
                <h4 className="font-medium">Location</h4>
                <p className="contact-info">
                    <a href="https://www.google.com/maps/place/Hyderabad,+India" target="__blank" className="contact_info_section">
                        Hyderabad, India
                    </a>
                </p>
            </div>

            <div className="contact-info">
                <Mail className="contact_icon_text_container" />
                <h4 className="font-medium">Email</h4>
                <p className="contact-info">
                    <a href="mailto:sandy.decoder@gmail.com" className="contact_info_section">
                        sandy.decoder@gmail.com
                    </a>
                </p>
            </div>

            <div className="contact-info">
                <Phone className="contact_icon_text_container" />
                <h4 className="font-medium">Phone</h4>
                <p className="contact-info">
                    <a href="tel:+91-8446290949" className="contact_info_section">
                        +91-8446290949
                    </a>
                </p>
            </div>


            <h3 className="text-xl font-bold mt-10 mb-6">Follow Me</h3>
            <div className="social-links">
                <button variant="outline" size="icon" asChild>
                    <a 
                    href="https://github.com/sandeshsalunkhegh" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="GitHub"
                    >
                    <Github className="h-5 w-5" />
                    </a>
                </button>
                <button variant="outline" size="icon" asChild>
                    <a
                    href="https://linkedin.com/in/sandydecoder"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    >
                    <Linkedin className="h-5 w-5" />
                    </a>
                </button>
                <button variant="outline" size="icon" asChild>
                    <a
                    href="https://www.instagram.com/gour_se_suno"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    >
                    <Instagram className="h-5 w-5" />
                    </a>
                </button>
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="form-container" /* Add this class for improved layout */
          >
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                        Name
                    </label>
                    <input id="name" name="from_name" placeholder="Your name" required />
                    </div>
                    <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                        Email
                    </label>
                    <input id="email" name="from_email" type="email" placeholder="Your email" required />
                    </div>
                    <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                    </label>
                    <input id="subject" name="subject" placeholder="Subject" required />
                    </div>
                    <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                        Message
                    </label>
                    <textarea id="message" name="message" placeholder="Your message" rows={5} required />
                    </div>
                </div>
                <button type="submit" className="submit_button" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

