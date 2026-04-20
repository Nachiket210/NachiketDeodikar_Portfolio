import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import p1 from "../assets/photos/1.jpg";
import p5 from "../assets/photos/5.jpg";
import p7 from "../assets/photos/7.jpg";
import p9 from "../assets/photos/9.jpg";
import p10 from "../assets/photos/10.jpg";
const items = [
  { type: 'photo', url: p1 },
  { type: 'video', url: p5 },
  { type: 'photo', url: p7 },
  { type: 'photo', url: p9 },
  { type: 'video', url: p10 },
];

export default function MixedMediaCarousel() {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;
    const cards = slider.querySelectorAll('.media-card');
    const cardWidth = 320 + 24; // width + gap
    const totalWidth = (items.length) * cardWidth;

    gsap.set(cards, {
      x: (i) => i * cardWidth
    });

    gsap.to(cards, {
      x: `-=${totalWidth}`,
      duration: 30,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => {
          const val = parseFloat(x);
          return ((val + cardWidth) % (totalWidth * 2)) - cardWidth;
        })
      }
    });
  }, []);

  return (
    <section className="py-32 overflow-hidden bg-black">
      <div className="px-4 md:px-[10vw] mb-16 text-center">
        <h2 className="text-4xl font-serif italic mb-4">Visual Rhythm</h2>
        <p className="text-white/40">An infinite loop of creative exploration.</p>
      </div>

      <div ref={sliderRef} className="flex gap-6">
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="media-card min-w-[320px] aspect-[3/4] rounded-4xl overflow-hidden relative group"
          >
            <img
              src={item.url}
              alt=""
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-6 right-6">
              <span className="px-3 py-1 glass rounded-full text-[10px] uppercase tracking-widest">
                {item.type}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
