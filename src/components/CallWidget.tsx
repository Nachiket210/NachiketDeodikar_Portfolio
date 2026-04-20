import React from 'react';
import { motion } from 'motion/react';
import { Phone } from 'lucide-react';

export default function CallWidget() {
  const phoneNumber = "+917030698497";
  const callUrl = `tel:${phoneNumber}`;

  return (
    <motion.a
      href={callUrl}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-28 right-8 z-[90] w-16 h-16 bg-white text-black rounded-full flex items-center justify-center shadow-2xl hover:shadow-white/20 transition-all group"
      title="Call me"
    >
      <Phone className="w-8 h-8 fill-current" />
      <span className="absolute right-full mr-4 px-4 py-2 bg-white text-black text-xs font-bold rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
        Call me
      </span>
    </motion.a>
  );
}
