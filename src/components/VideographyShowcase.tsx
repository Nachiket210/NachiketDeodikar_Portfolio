import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X } from 'lucide-react';
import v1 from "../assets/videos/v1.mp4";
import t1 from "../assets/thumbnail/t1.jpg";
import v2 from "../assets/videos/v2.mp4";
import t2 from "../assets/thumbnail/t2.jpg";
import v3 from "../assets/videos/v3.mp4";
import t3 from "../assets/thumbnail/t3.jpg";
import v5 from "../assets/videos/v5.mp4";
import t5 from "../assets/thumbnail/t7.jpg";
import v7 from "../assets/videos/v7.mp4";
import t9 from "../assets/thumbnail/t9.jpg";
import v9 from "../assets/videos/v9.mp4";
import v4 from "../assets/videos/v4.mp4";
import t4 from "../assets/thumbnail/t4.jpg";
import t6 from "../assets/thumbnail/t6.jpg";
import v6 from "../assets/videos/v6.mp4";
import v10 from "../assets/videos/v10.mp4";
import t10 from "../assets/thumbnail/t10.jpg";
import v11 from "../assets/videos/v11.mp4";
import t11 from "../assets/thumbnail/t11.jpg";
const categories = ["All", "Ad Films", "Motorsport", "Concerts", "FnB", "Product", "Sports"];

const videos = [
  {
    id: 1,
    title: "Lamborghini",
    category: "Motorsport",
    thumbnail: t1,
    videoUrl: v1,
  },
  {
    id: 2,
    title: "Max Protein",
    category: "Ad Films",
    thumbnail: t2,
    videoUrl: v2,
  },
  {
    id: 3,
    title: "JioMart",
    category: "Ad Films",
    thumbnail: t3,
    videoUrl: v3,
  },
  {
    id: 4,
    title: "Max Protein",
    category: "Sports",
    thumbnail: t5,
    videoUrl: v7,
  },
  {
    id: 5,
    title: "3Sisters",
    category: "Product",
    thumbnail: t9,
    videoUrl: v9,
  },
  {
    id: 6,
    title: "Max Protein",
    category: "Sports",
    thumbnail: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=1000",
    videoUrl: v5,
  },
  {
    id: 7,
    title: "Vroom",
    category: "Motorsport",
    thumbnail:t4,
    videoUrl: v4,
  },
  {
    id: 8,
    title: "Max Protein",
    category: "Ad Films",
    thumbnail: t6,
    videoUrl:v6,
  },
  {
    id: 9,
    title: "Sonu Nigam",
    category: "Concerts",
    thumbnail: t10,
    videoUrl: v10,
  },
  {
    id: 10,
    title: "Bikers Brewing Cafe",
    category: "FnB",
    thumbnail: t11,
    videoUrl: v11,
  },
];

export default function VideographyShowcase() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [filter, setFilter] = useState("All");

  const filteredVideos = filter === "All" ? videos : videos.filter(v => v.category === filter);

  return (
    <section id="videography" className="py-32 bg-zinc-950">
      <div className="px-4 md:px-[10vw] mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <h2 className="text-5xl font-serif italic mb-4">Cinematography</h2>
          <p className="text-white/40 max-w-md">Moving images that evoke emotion. From short cinematic loops to full-scale visual storytelling.</p>
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

      <div className="flex gap-6 overflow-x-auto px-4 md:px-[10vw] pb-12 no-scrollbar">
        <AnimatePresence mode="popLayout">
          {filteredVideos.map((video) => (
            <motion.div
              key={video.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ y: -10 }}
              className="relative min-w-[280px] md:min-w-[350px] aspect-[9/16] rounded-4xl overflow-hidden group cursor-pointer"
              onClick={() => setActiveVideo(video.videoUrl)}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black">
                  <Play className="w-6 h-6 fill-current" />
                </div>
              </div>
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-[10px] uppercase tracking-widest text-white/60 mb-2 block">{video.category}</span>
                <h3 className="text-2xl font-serif italic">{video.title}</h3>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Video Player Overlay */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-8 right-8 p-4 glass rounded-full hover:bg-white/10 transition-colors z-[110]"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="w-full max-w-[450px] aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl bg-black"
            >
              <video
                src={activeVideo}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
