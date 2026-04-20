import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const projects = [
  {
    title: "Ethereal Landscapes",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=2070",
  },
  {
    title: "Urban Symphony",
    category: "Cinematography",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=2070",
  },
  {
    title: "The Silent Peak",
    category: "Visual Story",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2070",
  },
  {
    title: "Midnight Echoes",
    category: "Short Film",
    image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&q=80&w=2070",
  },
];

export default function WorkShowcase() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section ref={targetRef} id="work" className="relative h-[300vh] bg-black">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-12 px-[10vw]">
          <div className="flex flex-col justify-center min-w-[400px]">
            <h2 className="text-6xl font-serif italic mb-6">Selected<br />Works</h2>
            <p className="text-white/40 max-w-xs leading-relaxed">
              A collection of visual narratives captured through the lens of emotion and precision.
            </p>
          </div>
          
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative group min-w-[70vw] md:min-w-[45vw] aspect-[16/10] overflow-hidden rounded-5xl bg-zinc-900"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-12">
                <span className="text-xs uppercase tracking-widest text-white/60 mb-2">{project.category}</span>
                <h3 className="text-4xl font-serif italic">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
