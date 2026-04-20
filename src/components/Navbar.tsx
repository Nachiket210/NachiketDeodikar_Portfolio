import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-8 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="glass px-8 py-4 rounded-full flex items-center gap-8 shadow-2xl">
        <a href="#services" className="text-sm font-medium hover:text-white/60 transition-colors">Services</a>
        <a href="#photography" className="text-sm font-medium hover:text-white/60 transition-colors">Photography</a>
        <a href="#videography" className="text-sm font-medium hover:text-white/60 transition-colors">Videography</a>
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black font-bold text-lg">
          ND
        </div>
        <a href="#about" className="text-sm font-medium hover:text-white/60 transition-colors">About</a>
        <a href="#contact" className="text-sm font-medium hover:text-white/60 transition-colors">Contact</a>
      </div>
    </motion.nav>
  );
}
