import React from 'react';
import { motion } from 'motion/react';
import { Camera, Video, Globe, Scissors } from 'lucide-react';

const services = [
  {
    title: "Photography",
    description: "High-end visual storytelling through still images. Specializing in concerts, weddings, and street photography with a cinematic edge.",
    icon: <Camera className="w-8 h-8" />,
    tags: ["Portrait", "Event", "Commercial"]
  },
  {
    title: "Videography",
    description: "Cinematic video production from concept to delivery. Capturing the energy of live events and the precision of commercial ad films.",
    icon: <Video className="w-8 h-8" />,
    tags: ["Ad Films", "Motorsport", "Concerts"]
  },
  {
    title: "Web Development",
    description: "Crafting modern, responsive, and high-performance digital experiences. Building landing pages that convert and portfolios that stand out.",
    icon: <Globe className="w-8 h-8" />,
    tags: ["React", "Tailwind", "Next.js"]
  },
  {
    title: "Video Editing",
    description: "Professional post-production services. Color grading, sound design, and rhythmic editing to bring your footage to life.",
    icon: <Scissors className="w-8 h-8" />,
    tags: ["Color Grading", "Sound Design", "VFX"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-4 md:px-[10vw] bg-zinc-950">
      <div className="mb-20">
        <h2 className="text-5xl md:text-7xl font-serif italic mb-6">Services</h2>
        <p className="text-white/40 max-w-xl text-lg">
          A multidisciplinary approach to visual and digital creation. Bringing your vision to life through precision and artistic intuition.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group p-10 glass rounded-5xl border border-white/5 hover:border-white/20 transition-all duration-500"
          >
            <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white group-hover:text-black transition-all duration-500">
              {service.icon}
            </div>
            <h3 className="text-3xl font-serif italic mb-4">{service.title}</h3>
            <p className="text-white/40 mb-8 leading-relaxed">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {service.tags.map((tag, i) => (
                <span key={i} className="px-4 py-1 rounded-full border border-white/10 text-[10px] uppercase tracking-widest text-white/60">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
