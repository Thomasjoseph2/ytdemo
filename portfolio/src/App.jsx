import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Card from './components/ui/Card';
import Badge from './components/ui/Badge';
import Timeline from './components/Timeline';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  // --- Data ---
  const profileImage = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80";

  const skills = [
    "React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "GraphQL", "PostgreSQL", "AWS", "Docker", "Figma", "Redux", "Jest"
  ];

  const experience = [
    {
      date: "2023 - Present",
      title: "Senior Frontend Engineer",
      company: "TechNova Solutions",
      description: "Leading the frontend team in re-architecting the core product using Next.js and Micro-frontends. Improved performance by 40%."
    },
    {
      date: "2021 - 2023",
      title: "Frontend Developer",
      company: "Creative Pulse Agency",
      description: "Developed award-winning interactive websites for high-profile clients. specialized in WebGL and animation integration."
    },
    {
      date: "2019 - 2021",
      title: "Junior Web Developer",
      company: "StartUp Inc.",
      description: "Collaborated with designers to implement responsive UI components. Maintained legacy codebases and improved accessibility."
    }
  ];

  const projects = [
    {
      title: "E-Commerce Dashboard",
      description: "A comprehensive analytics dashboard for online retailers with real-time data visualization.",
      tags: ["React", "D3.js", "Firebase"],
      link: "#",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with drag-and-drop kanban boards and team chat.",
      tags: ["Vue.js", "Socket.io", "Express"],
      link: "#",
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "AI Image Generator",
      description: "Web interface for generating images using Stable Diffusion API with custom fine-tuning controls.",
      tags: ["Next.js", "Python", "FastAPI"],
      link: "#",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Finance Tracker",
      description: "Personal finance application with budget planning, expense tracking and investment portfolio analysis.",
      tags: ["TypeScript", "Supabase", "ChartJS"],
      link: "#",
      image: "https://images.unsplash.com/photo-1554224155-984bb429348f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "CTO at TechNova",
      text: "John is one of those rare developers who truly cares about the user experience. His attention to detail is unmatched."
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      text: "Working with John was a breeze. He transforms complex requirements into elegant, functional interfaces effortlessly."
    },
    {
      name: "Emily Rodriguez",
      role: "Lead Designer",
      text: "John brings designs to life with incredible pixel precision. He pushes back when needed to ensure the best UX."
    },
    {
      name: "David Kim",
      role: "Engineering Manager",
      text: "A true mentorship figure. John leveled up our entire frontend team's code quality in just a few months."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200 bg-mesh">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />

      <main className="w-full px-6 md:px-12 lg:px-24">

        {/* Hero Section */}
        <section id="about" className="min-h-screen flex flex-col justify-center items-center text-center pt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mb-8 relative"
          >
            <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full"></div>
            <img
              src={profileImage}
              alt="John Doe"
              className="relative h-32 w-32 md:h-40 md:w-40 rounded-full border-4 border-slate-800 shadow-2xl object-cover"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-6"
          >
            Building the <br className="md:hidden" />
            <span className="text-gradient">Digital Future.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-10"
          >
            I'm a <span className="text-slate-100 font-semibold">Senior Frontend Engineer</span> specializing in building pixel-perfect, accessible, and high-performance web experiences. Currently architecting at <span className="text-cyan-400">TechNova</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex gap-4"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-cyan-500 text-white font-bold rounded-full hover:bg-cyan-400 transition-colors shadow-[0_0_20px_rgba(34,211,238,0.3)]"
            >
              View Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors"
            >
              Contact Me
            </button>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Selected Works</h2>
            <p className="text-slate-400 text-lg">A collection of projects exploring performance, design, and interactivity.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full group hover:border-cyan-500/50 transition-all duration-300 flex flex-col">
                  <div className="h-64 overflow-hidden rounded-lg bg-slate-800 mb-6 relative">
                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-2xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      <ExternalLink className="text-slate-500 group-hover:text-cyan-400 transition-colors" size={20} />
                    </div>
                    <p className="text-slate-400 leading-relaxed mb-6 flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <Badge key={tag} variant="default">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 border-t border-slate-800/50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Experience</h2>
              <p className="text-slate-400 text-lg">My professional journey through the tech landscape.</p>
            </div>

            <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800/50 backdrop-blur-sm">
              <Timeline items={experience} />
              <div className="mt-8 text-center">
                <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-500 text-white hover:bg-cyan-400 font-bold transition-colors shadow-lg shadow-cyan-500/20">
                  Download Full Resume <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 border-t border-slate-800/50">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Arsenal</h2>
            <p className="text-slate-400 text-lg">Tools and technologies I use to bring ideas to life.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-4 rounded-xl border border-slate-800 bg-slate-900/50 text-center hover:border-cyan-500/30 hover:bg-slate-800 transition-all font-medium text-slate-300 cursor-default"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-24 border-t border-slate-800/50 mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What People Say</h2>
            <p className="text-slate-400 text-lg">Feedback from colleagues and clients.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-8">
                <Quote className="h-10 w-10 text-cyan-500/20 mb-6" />
                <p className="text-lg text-slate-300 italic mb-8 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-cyan-900/20 flex items-center justify-center text-cyan-400 font-bold border border-cyan-500/20 text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-100 text-lg">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-500 border-t border-slate-800 bg-slate-950">
        <p className="mb-4">© 2026 John Doe. Built with <span className="text-slate-400">Antigravity UI</span>.</p>
        <div className="flex justify-center gap-6">
          <Github size={20} className="hover:text-cyan-400 cursor-pointer transition-colors" />
          <Linkedin size={20} className="hover:text-cyan-400 cursor-pointer transition-colors" />
          <Mail size={20} className="hover:text-cyan-400 cursor-pointer transition-colors" />
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
