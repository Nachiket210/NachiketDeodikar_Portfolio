import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import pfp from "../assets/photos/pfp.JPEG";

const skills = ["Photography", "Cinematography", "Color Grading", "Visual Storytelling", "Creative Direction"];

export default function About() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="about" className="py-32 px-4 md:px-[10vw] bg-zinc-950">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative aspect-[4/5] rounded-5xl overflow-hidden bg-zinc-900 group"
        >
          <img
            src={pfp}
            alt="Nachiket Deodikar"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </motion.div>

        <div>
          <h2 className="text-5xl font-serif italic mb-8">The Artist Behind<br />The Lens</h2>
          <div className="space-y-6 text-white/60 leading-relaxed text-lg">
            <p>
              I am Nachiket Deodikar, a creative professional specializing in photography, videography, and digital media production, with a strong focus on visual storytelling and high-quality content creation. I bring hands-on leadership experience.
            </p>
            <p>
             I have served as Creative Head at RV Networking from December 2023 to December 2024, where I managed creative projects and guided content strategy. Currently, I am working as Creative Head at Kreative Keeda Entertainment since September 2025, leading creative direction and production initiatives.
            </p>
            <p>
             I combine creativity with technical skills in modern web technologies to deliver impactful visual and digital experiences, while continuously striving to grow and innovate in the media industry.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-2 glass rounded-full text-sm font-medium border border-white/5"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
