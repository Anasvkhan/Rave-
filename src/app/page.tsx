"use client";

import { motion } from "framer-motion";
import { MapPin, Ticket, Compass, Clock } from "lucide-react";
import Link from "next/link";
import React from "react";

const AudioVisualizer = () => {
  return (
    <div className="flex items-center justify-center gap-1.5 h-32 md:h-48 w-full">
      {[...Array(24)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ height: [20, 100, 40, 120, 30][i % 5] + "px" }}
          transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.05, ease: "easeInOut" }}
          className={`w-1.5 md:w-2 rounded-full ${
            i % 3 === 0 ? "bg-neon-cyan" : i % 3 === 1 ? "bg-neon-lime" : "bg-neon-magenta"
          } shadow-[0_0_10px_currentColor]`}
        />
      ))}
    </div>
  );
};

export default function RaveAstra() {
  return (
    <main className="min-h-screen text-white overflow-hidden relative selection:bg-neon-magenta/40 font-sans pb-20">
      
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
         <div className="absolute top-[20%] left-[10%] w-[1px] h-[1px] shadow-[0_0_300px_150px_rgba(255,117,24,0.15)] rounded-full" />
         <div className="absolute bottom-[20%] right-[10%] w-[1px] h-[1px] shadow-[0_0_300px_150px_rgba(107,255,60,0.15)] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        
        {/* Navigation */}
        <nav className="flex justify-between items-center py-8">
           <Link href="/about" className="text-sm font-black uppercase tracking-[0.3em] text-white/50 hover:text-neon-cyan transition-colors border-b-2 border-transparent hover:border-neon-cyan pb-1">
             About Event
           </Link>
        </nav>

        {/* Header: Rave Astra PRESENTS */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center md:items-start mt-10 mb-20"
        >
          <div className="border-4 border-white px-10 py-6 flex flex-col items-center justify-center bg-black/50 backdrop-blur-md">
            <h2 className="text-4xl md:text-6xl font-black tracking-[-0.05em] leading-none flex flex-col items-center md:items-start gap-2">
              <span className="text-neon-cyan">RAVE ASTRA</span>
              <span className="text-white/70 text-2xl md:text-4xl tracking-[0.4em]">PRESENTS</span>
            </h2>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-start justify-between gap-16">
          
          {/* Left Side: Title & DJ Sticker */}
          <div className="w-full md:w-3/5 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <h1 className="text-[18vw] md:text-[13vw] font-black italic leading-[0.75] tracking-tighter uppercase">
                <span className="text-layered-rave block skew-x-[-12deg]">RAVE</span>
                <span className="text-white block skew-x-[-12deg] outline-text drop-shadow-[0_0_40px_rgba(107,255,60,0.6)] relative">
                  ASTRA
                  <motion.span
                    animate={{ rotate: [-8, 8, -8] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-2 -right-2 md:-right-6 text-[5vw] md:text-[3vw] bg-neon-lime text-black px-3 py-1 shadow-[0_0_20px_#9d4edd] not-italic"
                  >
                    2.0
                  </motion.span>
                </span>
              </h1>
            </motion.div>

            {/* DJ Sticker Section - New! */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="relative pt-10"
            >
              {/* Sticker Container */}
              <div className="relative group w-fit">
                <motion.div 
                   animate={{ rotate: [-2, 2, -2] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                   className="relative z-10 w-64 h-80 md:w-80 md:h-[400px] border-[12px] border-white shadow-[20px_20px_0_rgba(0,0,0,0.5)] overflow-hidden"
                >
                  <img
                    src="/team/default-avatar.svg"
                    alt="Upcoming Artist - Identity Hidden"
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                </motion.div>

                {/* Decorative Sticker elements */}
                <div className="absolute -top-6 -left-6 z-20 bg-neon-lime text-black font-black p-3 rotate-[-15deg] shadow-lg text-sm uppercase">
                  Live Sets
                </div>
                <div className="absolute -bottom-4 -right-4 z-20 bg-neon-cyan text-black font-black p-3 rotate-[10deg] shadow-lg text-sm uppercase">
                  Mystery Headliner
                </div>
              </div>

              {/* DJ Name Label */}
              <div className="mt-8">
                <p className="text-neon-magenta text-sm uppercase font-black tracking-[0.5em] mb-2 drop-shadow-[0_0_5px_rgba(107,255,60,0.5)]">Coming Soon</p>
                <h3 className="text-6xl md:text-9xl font-black italic uppercase tracking-tighter text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
                  ???
                </h3>
                <p className="text-neon-cyan text-sm uppercase font-black tracking-[0.4em] mt-3">Guess The Upcoming Artist</p>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Details & Timer */}
          <div className="w-full md:w-2/5 flex flex-col items-center md:items-end space-y-16">
            
            {/* Coming Soon Badge */}
            <div className="flex flex-col items-center md:items-end gap-4">
              <p className="text-xs font-black uppercase tracking-[0.5em] text-white/50 flex items-center gap-2">
                <Clock size={16} className="text-neon-cyan" /> Event Status
              </p>
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="bg-black/40 backdrop-blur-md px-10 py-6 rounded-2xl border border-white/10"
              >
                <span className="text-4xl md:text-6xl font-black italic uppercase text-neon-cyan drop-shadow-[0_0_20px_rgba(255,117,24,0.6)]">
                  Coming Soon
                </span>
              </motion.div>
            </div>

            <div className="w-full py-8 border-y border-white/10">
              <AudioVisualizer />
            </div>

            <div className="flex flex-col items-center md:items-end space-y-10 w-full">
               {/* Red Location Box */}
               <motion.div
                 whileHover={{ scale: 1.02 }}
                 className="bg-location-box p-12 w-full relative group overflow-hidden border-4 border-neon-red/50 shadow-[0_0_40px_rgba(184,0,31,0.4)]"
               >
                 <div className="relative z-10">
                    <h3 className="text-sm font-black uppercase tracking-[0.5em] text-white/70 mb-3 flex items-center gap-2">
                      <MapPin size={18} /> Location:
                    </h3>
                    <p className="text-4xl md:text-6xl font-black uppercase leading-tight italic text-white">
                      ???
                    </p>
                    <p className="text-sm font-black uppercase tracking-[0.4em] text-white/80 mt-3">Guess The Location?</p>
                 </div>
                 <Compass className="absolute -right-4 -bottom-4 w-40 h-40 text-white/10 rotate-12 group-hover:rotate-[372deg] transition-transform duration-[3000ms]" />
               </motion.div>

               <motion.a
                  href="https://forms.gle/4QuwtG2CNxQa9phy6"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="px-12 py-8 bg-white text-black font-black text-3xl uppercase tracking-[0.3em] shadow-[15px_15px_0_#6bff3c] flex items-center gap-4 group"
                >
                  GET TICKETS <Ticket size={32} className="group-hover:rotate-12 transition-transform" />
                </motion.a>
            </div>
          </div>
        </div>
      </div>

      {/* Rave Videos Section - New! */}
      <section className="relative z-10 py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              RAVE ASTRA <span className="text-neon-lime">RECAP</span>
            </h2>
            <p className="text-neon-magenta font-black uppercase tracking-[0.5em] mt-4 text-sm md:text-base">Relive Last Year&apos;s Madness</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { src: "/videos/rave-recap-1.mp4", tag: "Crowd", tilt: -3 },
              { src: "/videos/rave-recap-2.mp4", tag: "Vibes", tilt: 2 },
              { src: "/videos/rave-recap-4.mp4", tag: "Lights", tilt: 3 },
              { src: "/videos/rave-recap-5.mp4", tag: "Bass", tilt: -2 },
              { src: "/videos/rave-recap-6.mp4", tag: "Afterparty", tilt: 2 },
            ].map((clip, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                animate={{ rotate: [clip.tilt, -clip.tilt, clip.tilt] }}
                className="relative group"
                style={{ transformOrigin: "center" }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 0 }}
                  className="relative aspect-[4/5] border-[10px] border-white shadow-2xl overflow-hidden bg-black"
                >
                  <video
                    src={clip.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </motion.div>
                <div className={`absolute -top-5 z-20 font-black p-3 shadow-lg text-sm uppercase ${
                  i % 3 === 0 ? "bg-neon-lime text-black -left-5 rotate-[-10deg]" : i % 3 === 1 ? "bg-neon-magenta text-white -right-5 rotate-[8deg]" : "bg-neon-cyan text-black -left-5 rotate-[10deg]"
                }`}>
                  {clip.tag}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team Section - New! */}
      <section className="relative z-10 py-32 px-6 md:px-12 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              MEET THE <span className="text-neon-magenta">TEAM</span>
            </h2>
            <p className="text-neon-cyan font-black uppercase tracking-[0.5em] mt-4 text-sm md:text-base">Organizing Committee</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
            {[
              { name: "Deerain", role: "Finance", img: "/team/deerain.jpg", tilt: -2 },
              { name: "Wasay", role: "General Secretary", img: "/team/wasay.jpg", tilt: -3 },
              { name: "Anas", role: "Event Management", img: "/team/anas.jpg", tilt: 3 },
              { name: "Ayan", role: "Finance", img: "/team/ayan.jpg", tilt: -4 },
              { name: "Rehmani", role: "Event Management", img: "/team/rehmani.png", tilt: 4 },
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col items-center group max-w-[280px] mx-auto w-full"
              >
                {/* Sticker Frame */}
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: 0 }}
                  style={{ rotate: member.tilt }}
                  className="relative w-full aspect-[4/5] border-[10px] border-white shadow-2xl overflow-hidden bg-white/5"
                >
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>

                {/* Info */}
                <div className="mt-8 text-center">
                  <h3 className="text-3xl font-black italic uppercase tracking-tighter text-white group-hover:text-neon-cyan transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-black uppercase tracking-[0.4em] text-neon-magenta mt-2">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee Footer */}
      <div className="relative z-50 w-full bg-white text-black py-4 overflow-hidden whitespace-nowrap border-y-4 border-black">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="inline-block text-2xl font-black uppercase tracking-tighter"
        >
          LIMITED TICKETS REMAINING • GUESS THE SECRET HEADLINER • COMING SOON • GUESS THE LOCATION • RAVE ASTRA 2.0 • LIMITED TICKETS REMAINING •
        </motion.div>
      </div>

      {/* Premium Footer */}
      <footer className="relative z-10 pt-32 pb-10 px-6 md:px-12 overflow-hidden">
        {/* Decorative Grid for Footer */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-16 text-center"
          >
            <div className="border-2 border-white/20 px-8 py-4 inline-block mb-4">
               <h2 className="text-4xl md:text-6xl font-black tracking-[-0.1em] text-white">RAVE ASTRA</h2>
            </div>
            <p className="text-[10px] font-bold uppercase tracking-[0.6em] text-neon-cyan">Rave Astra</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full text-center md:text-left border-t border-white/10 pt-16">
            <div>
               <h4 className="text-neon-magenta font-black uppercase tracking-widest mb-6">Explore</h4>
               <ul className="space-y-4 text-sm font-bold uppercase tracking-wider text-white/50">
                  <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                  <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                  <li><a href="#" className="hover:text-white transition-colors">Lineup</a></li>
               </ul>
            </div>
            <div className="flex flex-col items-center">
               <h4 className="text-neon-cyan font-black uppercase tracking-widest mb-6">Stay Connected</h4>
               <div className="flex gap-8">
                  {[
                    { icon: 'IG', color: 'hover:text-neon-magenta' },
                    { icon: 'TW', color: 'hover:text-neon-cyan' },
                    { icon: 'FB', color: 'hover:text-neon-lime' },
                  ].map((social, i) => (
                    <a key={i} href="#" className={`text-2xl font-black italic ${social.color} transition-all hover:scale-125`}>
                      {social.icon}
                    </a>
                  ))}
               </div>
            </div>
            <div className="md:text-right">
               <h4 className="text-neon-lime font-black uppercase tracking-widest mb-6">Contact</h4>
               <p className="text-sm font-bold text-white/50 mb-2">INFO@RAVEASTRA.COM</p>
               <p className="text-sm font-bold text-white/50">+92 300 ASTRA-00</p>
            </div>
          </div>

          <div className="mt-32 w-full flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[0.4em] text-white/20 border-t border-white/5 pt-8">
            <p>© 2026 RAVE ASTRA. ALL RIGHTS RESERVED.</p>
            <p>DESIGNED FOR THE COSMOS</p>
          </div>
        </div>
        
        {/* Scanline Effect */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_2px,3px_100%]" />
      </footer>

      <style jsx global>{`
        .outline-text {
          -webkit-text-stroke: 3px white;
          color: transparent;
        }
        .text-layered-rave {
          color: #fff;
          text-shadow:
            0 0 10px #ff7518,
            0 0 20px #ff7518,
            0 0 40px #6bff3c,
            0 0 80px #6bff3c;
        }
      `}</style>
    </main>
  );
}
