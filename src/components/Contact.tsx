import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Instagram,
  Linkedin,
  Mail,
  Send,
  CheckCircle2,
  Phone,
} from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    const name = formData.get('name');
    const contact = formData.get('contact');
    const enquiry = formData.get('enquiry');

    const message = `
New Enquiry from Website:

Name: ${name}
Contact: ${contact}

Message:
${enquiry}
    `;

    const phoneNumber = "917030698497"; // Your WhatsApp number (no +)

    const whatsappURL =
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    try {
      window.open(whatsappURL, "_blank");

      // Reset form
      e.currentTarget.reset();

      // Show success message
      setIsSubmitted(true);
    } catch (error) {
      console.error("WhatsApp redirect failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-4 md:px-[10vw] bg-black">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-6xl font-serif italic mb-6">
          Let's Create
          <br />
          Something Iconic
        </h2>
        <p className="text-white/40">
          Available for global projects and creative collaborations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass p-12 rounded-5xl border border-white/10 flex flex-col items-center justify-center text-center h-full"
            >
              <CheckCircle2 className="w-16 h-16 text-emerald-500 mb-6" />
              <h3 className="text-2xl font-serif italic mb-2">
                Message Sent to WhatsApp
              </h3>
              <p className="text-white/40">
                I'll get back to you shortly.
              </p>

              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-8 text-xs uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 ml-4">
                    Name
                  </label>

                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-8 py-4 glass rounded-full border border-white/5 focus:border-white/20 outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 ml-4">
                    Contact Number
                  </label>

                  <input
                    required
                    name="contact"
                    type="tel"
                    placeholder="+91 00000 00000"
                    className="w-full px-8 py-4 glass rounded-full border border-white/5 focus:border-white/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40 ml-4">
                  Enquiry
                </label>

                <textarea
                  required
                  name="enquiry"
                  placeholder="Tell me about your project or enquiry..."
                  rows={5}
                  className="w-full px-8 py-6 glass rounded-[2rem] border border-white/5 focus:border-white/20 outline-none transition-all resize-none"
                />
              </div>

              <button
                disabled={isSubmitting}
                className="w-full md:w-auto px-12 py-4 bg-white text-black rounded-full font-medium flex items-center justify-center gap-2 hover:bg-white/90 transition-all disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

        <div className="space-y-12">
          <div className="glass p-10 rounded-5xl border border-white/5">
            <h3 className="text-xl font-serif italic mb-6">
              Connect
            </h3>

            <div className="space-y-6">
              <a
                href="https://www.instagram.com/nachiiiket.d"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white/60 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 glass rounded-full flex items-center justify-center group-hover:bg-pink-500/20 transition-colors">
                  <Instagram className="w-5 h-5 text-pink-500" />
                </div>

                <span>@nachiiiket.d</span>
              </a>

              <a
                href="https://www.linkedin.com/in/nachiket-deodikar-aaa70920b"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white/60 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 glass rounded-full flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-blue-500" />
                </div>

                <span>Nachiket Deodikar</span>
              </a>

              <a
                href="mailto:deodikarnachiket@gmail.com"
                className="flex items-center gap-4 text-white/60 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 glass rounded-full flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                  <Mail className="w-5 h-5 text-red-500" />
                </div>

                <span>deodikarnachiket@gmail.com</span>
              </a>

              <a
                href="tel:+917030698497"
                className="flex items-center gap-4 text-white/60 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 glass rounded-full flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                  <Phone className="w-5 h-5 text-emerald-500" />
                </div>

                <span>+91 70306 98497</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}