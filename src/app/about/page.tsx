"use client";

import { motion } from "framer-motion";
import { Info, Users, Music, Zap, Heart, ArrowLeft, Star } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden relative selection:bg-neon-magenta/40 font-sans p-6 md:p-12">
      
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,242,255,0.1),transparent_70%)]" />
      </div>

      <nav className="relative z-10 mb-16">
        <Link href="/" className="group flex items-center gap-2 text-neon-cyan font-black uppercase tracking-widest hover:text-white transition-colors">
          <ArrowLeft className="group-hover:-translate-x-2 transition-transform" /> Back to Home
        </Link>
      </nav>

      <div className="relative z-10 max-w-4xl mx-auto space-y-20">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="inline-block border-2 border-neon-magenta px-4 py-1 mb-6 text-xs font-black uppercase tracking-[0.5em] text-neon-magenta">
            The Astra Story
          </div>
          <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-none mb-8">
            ABOUT <br/> <span className="text-neon-cyan">RAVE ASTRA</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 font-medium leading-relaxed italic">
            "More than just a party—it's a cosmic vibration where technology meets the soul."
          </p>
        </motion.div>

        {/* Content Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 p-10 border-l-4 border-neon-magenta"
          >
            <div className="flex items-center gap-4 mb-6 text-neon-magenta">
              <Zap size={32} />
              <h2 className="text-2xl font-black uppercase tracking-widest">Our Vision</h2>
            </div>
            <p className="text-white/60 leading-loose">
              Rave Astra was born from the desire to push the boundaries of the local electronic scene. We blend cutting-edge visual production with world-class soundscapes to create an environment where you can lose yourself and find your rhythm.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 p-10 border-l-4 border-neon-cyan"
          >
            <div className="flex items-center gap-4 mb-6 text-neon-cyan">
              <Users size={32} />
              <h2 className="text-2xl font-black uppercase tracking-widest">The Society</h2>
            </div>
            <p className="text-white/60 leading-loose">
              Performing Arts Society (PAS) is a collective of creators, dreamers, and audiophiles. We believe that art is better when it's shared on a dancefloor. Our mission is to provide a platform for electronic talent and immersive experiences.
            </p>
          </motion.div>
        </div>

        {/* Experience Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-location-box p-12 text-center"
        >
          <h2 className="text-4xl font-black uppercase italic mb-8">What to Expect</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Music, text: "Top Tier Sound" },
              { icon: Star, text: "Neon Visuals" },
              { icon: Zap, text: "High Energy" },
              { icon: Heart, text: "Astra Tribe" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <item.icon size={40} className="text-white/80" />
                <span className="text-[10px] font-black uppercase tracking-widest">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <div className="text-center py-20">
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-16 py-8 bg-white text-black font-black text-2xl uppercase tracking-[0.3em] shadow-[10px_10px_0_#ff00ff]"
            >
              Get Your Tickets
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Footer Decoration */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-lime" />
    </main>
  );
}
