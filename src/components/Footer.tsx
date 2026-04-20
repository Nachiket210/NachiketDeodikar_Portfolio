import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-4 md:px-[10vw] bg-black border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-bold text-sm">
            ND
          </div>
          <span className="text-sm font-medium tracking-widest uppercase opacity-60">Nachiket Deodikar</span>
        </div>
        
        <div className="flex gap-6">
          <a 
            href="https://www.instagram.com/nachiiiket.d?igsh=aTV2aDV2MHgyem1w&utm_source=qr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/40 hover:text-white transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a 
            href="https://www.linkedin.com/in/nachiket-deodikar-aaa70920b" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/40 hover:text-white transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        <div className="text-[10px] uppercase tracking-[0.3em] opacity-40">
          © 2026 Nachiket Deodikar. All rights reserved.
        </div>
      </div>
      
      <div className="mt-12 flex justify-center">
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
    </footer>
  );
}
