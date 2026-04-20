import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import p1 from "../assets/photos/1.jpg";
import p2 from "../assets/photos/2.png";
import p3 from "../assets/photos/3.jpg";
import p4 from "../assets/photos/4.JPG";
import p5 from "../assets/photos/5.jpg";
import p6 from "../assets/photos/6.jpg";
import p7 from "../assets/photos/7.jpg";
import p8 from "../assets/photos/8.jpg";
import p9 from "../assets/photos/9.jpg";
import p10 from "../assets/photos/10.jpg";
const categories = ["All", "Wedding", "Concert", "Product","Motorsport"];

const photos = [
  { id: 1, category: "Concert", url: p1, ratio: "portrait" },
  { id: 2, category: "Motorsport", url: p3, ratio: "landscape" },
  { id: 3, category: "Product", url: p9, ratio: "portrait" },
  { id: 4, category: "Wedding", url: p7, ratio: "portrait" },
  { id: 5, category: "Product", url: p5, ratio: "landscape" },
  { id: 6, category: "Concert", url: p2, ratio: "landscape" },
  { id: 7, category: "Product", url: p10, ratio: "portrait" },
  { id: 8, category: "Concert", url: p4, ratio: "landscape" },
  { id: 9, category: "Wedding", url: p6, ratio: "portrait" },
];

export default function PhotographyGallery() {
  const [filter, setFilter] = useState("All");
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const filteredPhotos = filter === "All" ? photos : photos.filter(p => p.category === filter);

  return (
    <section id="photography" className="py-32 px-4 md:px-[10vw] bg-black">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div>
          <h2 className="text-5xl font-serif italic mb-4">Photography</h2>
          <p className="text-white/40 max-w-md">Capturing moments that tell a story beyond words. Each frame is a deliberate choice of light and shadow.</p>
        </div>
        
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm transition-all ${
                filter === cat ? "bg-white text-black" : "glass hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        <AnimatePresence mode="popLayout">
          {filteredPhotos.map((photo) => (
            <motion.div
              key={photo.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedPhoto(photo.url)}
              className={`relative group overflow-hidden rounded-4xl cursor-pointer break-inside-avoid ${
                photo.ratio === "portrait" ? "aspect-[4/5]" : "aspect-[16/9]"
              }`}
            >
              <img
                src={photo.url}
                alt={photo.category}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-6 py-2 glass rounded-full text-xs uppercase tracking-widest">View Full</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedPhoto(null)}
          >
            <button className="absolute top-8 right-8 p-4 glass rounded-full hover:bg-white/10 transition-colors">
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              src={selectedPhoto}
              className="max-w-full max-h-full rounded-3xl object-contain"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
