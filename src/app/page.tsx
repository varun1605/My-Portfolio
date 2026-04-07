"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  ChevronDown, Download, Layers, Code2, Terminal, 
  Database, FolderGit2, Cpu, Globe 
} from "lucide-react";

// --- Framer Motion Variants for Smoothness ---
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease:[0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function Portfolio() {
  const [loading, setLoading] = useState(true);

  // Splash Screen Hook
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  },[]);

  return (
    <main className="relative w-full overflow-hidden text-slate-200">
      
      {/* --- SPLASH SCREEN --- */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-zinc-950 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-7xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 mb-8"
            >
              VM.
            </motion.div>
            <div className="w-56 h-1 overflow-hidden bg-white/10 rounded-full">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 shadow-[0_0_15px_rgba(56,189,248,0.5)]"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- HERO SECTION --- */}
      <section className="relative flex flex-col justify-center min-h-screen px-6 max-w-7xl mx-auto pt-20">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-8">
          
          {/* Left Text */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate={!loading ? "visible" : "hidden"}
            className="flex-1 text-center lg:text-left z-10"
          >
            <motion.div variants={fadeUp} className="inline-block mb-4 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md">
              <span className="text-sm font-medium text-cyan-400 tracking-wide flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                Available for New Opportunities
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4 text-white drop-shadow-2xl">
              Varun <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">M</span>
            </motion.h1>
            
            <motion.h2 variants={fadeUp} className="text-xl md:text-2xl text-slate-300 mb-6 font-light">
              Frontend Developer @ NexcellSolutions <br className="hidden md:block"/>
              <span className="font-medium text-cyan-400/80">Full Stack Engineer</span>
            </motion.h2>
            
            <motion.p variants={fadeUp} className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Full stack developer with 3+ years of experience focusing on React-based applications. 
              Proficient in modern web tech including Node.js, AWS, and MongoDB. I build scalable, high-performance solutions with a creative mindset.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button 
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 w-full sm:w-auto rounded-full bg-white text-black font-bold hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.15)]"
              >
                View Experience
              </button>
              <button className="px-8 py-4 w-full sm:w-auto rounded-full border border-white/20 bg-white/5 backdrop-blur-md font-semibold hover:bg-white/10 transition-colors flex items-center justify-center gap-2 group">
                <Download size={18} className="group-hover:-translate-y-1 transition-transform" /> 
                Download Resume
              </button>
            </motion.div>
          </motion.div>

          {/* Right Image (Futuristic Portrait Frame) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={!loading ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="relative w-64 h-80 md:w-80 md:h-[28rem] lg:w-[22rem] lg:h-[30rem] z-10 shrink-0"
          >
            {/* Animated Glow Behind Image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-full blur-[80px] opacity-30 animate-pulse"></div>
            
            {/* Floating Image Container */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }} 
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full h-full rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-white/5 backdrop-blur-sm p-2"
            >
              <div className="relative w-full h-full rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden bg-zinc-900">
                <Image 
                  src="/profile.jpg" 
                  alt="Varun M" 
                  fill
                  sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 352px"
                  className="object-cover object-[center_15%] scale-105 hover:scale-110 transition-transform duration-700"
                  priority
                />
                {/* Overlay gradient for blending */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
              </div>
            </motion.div>
            
            {/* Floating Tech Badges */}
            <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute -bottom-4 -left-8 bg-zinc-900/80 backdrop-blur-xl border border-white/10 p-3 rounded-2xl shadow-xl flex items-center gap-2">
              <Code2 className="text-cyan-400" size={20} /> <span className="font-semibold text-sm">React.js</span>
            </motion.div>
            <motion.div animate={{ y:[5, -5, 5] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute -top-4 -right-4 bg-zinc-900/80 backdrop-blur-xl border border-white/10 p-3 rounded-2xl shadow-xl flex items-center gap-2">
              <Database className="text-blue-400" size={20} /> <span className="font-semibold text-sm">Node.js</span>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={!loading ? { opacity: 1 } : {}}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/30 hover:text-white transition-colors cursor-pointer"
          onClick={() => document.getElementById('impact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* --- IMPACT HIGHLIGHTS --- */}
      <section id="impact" className="py-20 px-6 border-y border-white/5 bg-white/[0.01]">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { metric: "40%", label: "Dev Time Saved", sub: "via Tailwind CSS" },
            { metric: "~30%", label: "Bug Reduction", sub: "via Redux Toolkit" },
            { metric: "25%", label: "Lower Bounce", sub: "via Shimmer UI" },
            { metric: "35%", label: "Fewer Reflows", sub: "via API Optimization" },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              variants={fadeUp}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group flex flex-col items-center text-center space-y-2 p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 backdrop-blur-sm hover:border-cyan-500/50 transition-all shadow-lg"
            >
              <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-md group-hover:scale-110 transition-transform">
                {stat.metric}
              </span>
              <span className="text-sm font-bold text-white tracking-wide uppercase mt-2">{stat.label}</span>
              <span className="text-xs text-slate-400 font-medium">{stat.sub}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- PROJECTS PORTFOLIO --- */}
      <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-20">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h3>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">Real-world applications built during my tenure, demonstrating backend architecture, responsive design, and live integrations.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative flex flex-col h-full p-8 rounded-3xl bg-zinc-900/50 border border-white/10 backdrop-blur-md overflow-hidden hover:border-cyan-500/50 transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <FolderGit2 className="text-cyan-400 mb-6" size={40} />
            <h4 className="text-2xl font-bold text-white mb-3">Dynamic Web App</h4>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
              Engineered a comprehensive ReactJS application, seamlessly integrating live APIs from swiggy.com. Implemented Shimmer UI to elevate engagement.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {["ReactJS", "Redux Toolkit", "Tailwind CSS"].map(t => (
                <span key={t} className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">{t}</span>
              ))}
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative flex flex-col h-full p-8 rounded-3xl bg-zinc-900/50 border border-white/10 backdrop-blur-md overflow-hidden hover:border-blue-500/50 transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Globe className="text-blue-400 mb-6" size={40} />
            <h4 className="text-2xl font-bold text-white mb-3">Food Ordering App</h4>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
              Played a pivotal role in developing a mobile app backend similar to Zomato. Designed RESTful APIs and implemented JWT token authentication for high security.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {["Node.js", "MongoDB", "JWT Auth"].map(t => (
                <span key={t} className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">{t}</span>
              ))}
            </div>
          </motion.div>

          {/* Project 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative flex flex-col h-full p-8 rounded-3xl bg-zinc-900/50 border border-white/10 backdrop-blur-md overflow-hidden hover:border-indigo-500/50 transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Cpu className="text-indigo-400 mb-6" size={40} />
            <h4 className="text-2xl font-bold text-white mb-3">Cricket Booking App</h4>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
              Led the development of a web application for streamlining box cricket ground bookings. Created seamless backend communication with real-time updates.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {["Node.js", "MySQL", "Real-time"].map(t => (
                <span key={t} className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">{t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- EXPERIENCE TIMELINE --- */}
      <section id="experience" className="py-20 px-6 max-w-5xl mx-auto">
        <motion.h3 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-4xl font-bold mb-20 text-center text-white"
        >
          Professional Journey
        </motion.h3>
        
        <div className="space-y-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-cyan-500/50 before:via-blue-500/30 before:to-transparent">
          
          {/* NexCell */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-zinc-950 bg-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.4)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10">
              <Layers size={20} className="text-black" />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl hover:bg-white/10 transition-colors">
              <div className="flex justify-between items-center mb-3">
                <span className="text-cyan-400 font-bold tracking-wide text-sm">Jan 2026 - Present</span>
                <span className="text-xs bg-cyan-500/10 text-cyan-300 px-3 py-1 rounded-full border border-cyan-500/20">London</span>
              </div>
              <h4 className="text-2xl font-bold text-white mb-1">AI Development Intern</h4>
              <p className="text-slate-400 text-sm mb-5 font-medium">NexCell Solutions</p>
              <ul className="text-slate-300 text-sm space-y-3">
                <li className="flex gap-2"><span className="text-cyan-400">▹</span> Contributing to an AI-powered Real Estate CRM lifecycle platform.</li>
                <li className="flex gap-2"><span className="text-cyan-400">▹</span> Built scalable architecture using React.js + Redux Toolkit.</li>
                <li className="flex gap-2"><span className="text-cyan-400">▹</span> Designed responsive interfaces with Tailwind CSS.</li>
              </ul>
            </div>
          </motion.div>

          {/* Infosys */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-zinc-950 bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.4)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10">
              <Code2 size={20} className="text-black" />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl hover:bg-white/10 transition-colors">
              <div className="flex justify-between items-center mb-3">
                <span className="text-blue-400 font-bold tracking-wide text-sm">May 2022 - Nov 2024</span>
                <span className="text-xs bg-blue-500/10 text-blue-300 px-3 py-1 rounded-full border border-blue-500/20">Pune, India</span>
              </div>
              <h4 className="text-2xl font-bold text-white mb-1">System Engineer</h4>
              <p className="text-slate-400 text-sm mb-5 font-medium">Infosys</p>
              <ul className="text-slate-300 text-sm space-y-3">
                <li className="flex gap-2"><span className="text-blue-400">▹</span> Delivered dynamic ReactJS applications & RESTful APIs.</li>
                <li className="flex gap-2"><span className="text-blue-400">▹</span> Engineered multi-platform apps using Node.js & MongoDB.</li>
                <li className="flex gap-2"><span className="text-blue-400">▹</span> Implemented JWT auth and real-time backend structures.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SKILLS & BEYOND --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/10 mt-20">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-3xl font-bold mb-8 text-white flex items-center gap-3"><Terminal size={28} className="text-cyan-400"/> Technical Arsenal</h3>
            <div className="flex flex-wrap gap-3">
              {["React.js", "Node.js", "Express.js", "MongoDB", "AWS", "Docker", "Kubernetes", "AI Integration", "Java", "JavaScript", "DevOps", "Git"].map((skill, i) => (
                <motion.span 
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(34,211,238,0.1)" }}
                  key={skill} 
                  className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-slate-300 backdrop-blur-md transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
            
            <h3 className="text-3xl font-bold mb-6 mt-16 text-white flex items-center gap-3"><Database size={28} className="text-blue-400"/> Certifications</h3>
            <div className="space-y-4">
              {[
                "Infosys Certified Front End Web Developer", 
                "AWS Certified Cloud Practitioner", 
                "Infosys Certified React Professional"
              ].map((cert, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-white/20 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                  <span className="text-slate-300 text-sm font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="p-10 rounded-[2.5rem] bg-gradient-to-br from-zinc-900/80 to-transparent border border-white/10 backdrop-blur-xl relative overflow-hidden shadow-2xl"
          >
            <div className="absolute -right-32 -top-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none"></div>
            
            <h3 className="text-3xl font-bold mb-6 text-white relative z-10">Beyond Code</h3>
            <p className="text-slate-300 leading-relaxed mb-10 text-lg relative z-10">
              I am a passionate wildlife photographer and a Guitarist cum singer. I strongly believe in learning by doing, viewing education as a lifelong, continuous process.
            </p>
            
            <h4 className="text-xl font-bold text-white mb-6 relative z-10">Education Highlights</h4>
            <div className="space-y-6 relative z-10">
              <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-cyan-400 before:rounded-full before:shadow-[0_0_10px_rgba(34,211,238,0.8)]">
                <p className="font-bold text-white text-lg">MSc Computer Science</p>
                <p className="text-sm text-cyan-400/80 font-medium mb-1">Northumbria University</p>
                <p className="text-xs text-slate-500">Sep 2024 - Sep 2025</p>
              </div>
              <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-slate-500 before:rounded-full">
                <p className="font-bold text-white text-lg">B.Tech Mechanical Engineering</p>
                <p className="text-sm text-slate-400 font-medium">Bajaj Institute of Technology</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
    </main>
  );
}