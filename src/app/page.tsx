"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Music, Ticket, Zap, Waves, Glasses, Sparkles, Compass, Star, Clock } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("May 16, 2026 18:30:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-4 md:gap-8 bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/10">
      {[
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: timeLeft.hours },
        { label: "Mins", value: timeLeft.minutes },
        { label: "Secs", value: timeLeft.seconds },
      ].map((item, index) => (
        <div key={index} className="flex flex-col items-center min-w-[60px]">
          <span className="text-3xl md:text-5xl font-black text-neon-cyan italic drop-shadow-[0_0_10px_rgba(0,242,255,0.5)]">
            {item.value.toString().padStart(2, '0')}
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/50">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

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
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden relative selection:bg-neon-magenta/40 font-sans pb-20">
      
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
         <div className="absolute top-[20%] left-[10%] w-[1px] h-[1px] shadow-[0_0_300px_150px_rgba(0,242,255,0.15)] rounded-full" />
         <div className="absolute bottom-[20%] right-[10%] w-[1px] h-[1px] shadow-[0_0_300px_150px_rgba(255,0,255,0.15)] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        
        {/* Navigation */}
        <nav className="flex justify-between items-center py-8">
           <Link href="/about" className="text-sm font-black uppercase tracking-[0.3em] text-white/50 hover:text-neon-cyan transition-colors border-b-2 border-transparent hover:border-neon-cyan pb-1">
             About Event
           </Link>
           <motion.div 
             animate={{ scale: [1, 1.1, 1] }}
             transition={{ duration: 2, repeat: Infinity }}
             className="bg-neon-magenta px-4 py-1 text-[10px] font-black uppercase tracking-widest text-white shadow-[0_0_15px_#ff00ff]"
           >
             Registrations Are Live
           </motion.div>
        </nav>

        {/* Header: Performing Arts Society PRESENTS */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center md:items-start mt-10 mb-20"
        >
          <div className="border-4 border-white px-10 py-6 flex flex-col items-center justify-center bg-black/50 backdrop-blur-md">
            <h2 className="text-4xl md:text-6xl font-black tracking-[-0.05em] leading-none flex flex-col items-center md:items-start gap-2">
              <span className="text-neon-cyan">PERFORMING ARTS SOCIETY</span>
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
                <span className="text-white block skew-x-[-12deg] outline-text drop-shadow-[0_0_40px_rgba(255,0,255,0.6)]">ASTRA</span>
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
                    src="/jason.png" 
                    alt="Jason Thomas" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                </motion.div>
                
                {/* Decorative Sticker elements */}
                <div className="absolute -top-6 -left-6 z-20 bg-neon-lime text-black font-black p-3 rotate-[-15deg] shadow-lg text-sm uppercase">
                  Live Sets
                </div>
                <div className="absolute -bottom-4 -right-4 z-20 bg-neon-cyan text-black font-black p-3 rotate-[10deg] shadow-lg text-sm uppercase">
                  Astra Headliner
                </div>
              </div>

              {/* DJ Name Label */}
              <div className="mt-8">
                <p className="text-neon-magenta text-sm uppercase font-black tracking-[0.5em] mb-2 drop-shadow-[0_0_5px_rgba(255,0,255,0.5)]">Starring</p>
                <h3 className="text-6xl md:text-9xl font-black italic uppercase tracking-tighter text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
                  JASON THOMAS
                </h3>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Details & Timer */}
          <div className="w-full md:w-2/5 flex flex-col items-center md:items-end space-y-16">
            
            {/* Timer - Now functional and prominent */}
            <div className="flex flex-col items-center md:items-end gap-4">
              <p className="text-xs font-black uppercase tracking-[0.5em] text-white/50 flex items-center gap-2">
                <Clock size={16} className="text-neon-cyan" /> Event Countdown
              </p>
              <CountdownTimer />
            </div>

            <div className="w-full py-8 border-y border-white/10">
              <AudioVisualizer />
            </div>

            <div className="flex flex-col items-center md:items-end space-y-10 w-full">
               <div className="text-center md:text-right">
                 <h4 className="text-6xl md:text-8xl font-black text-neon-yellow italic tracking-tighter uppercase leading-none drop-shadow-[0_0_20px_rgba(248,255,0,0.8)]">
                   MAY 16
                 </h4>
                 <p className="text-2xl md:text-3xl font-bold text-white/80 mt-2 tracking-widest uppercase italic">6:30 PM ONWARDS</p>
               </div>

               {/* Red Location Box */}
               <motion.div 
                 whileHover={{ scale: 1.02 }}
                 className="bg-location-box p-12 w-full relative group overflow-hidden border-4 border-neon-red/50 shadow-[0_0_40px_rgba(255,51,102,0.4)]"
               >
                 <div className="relative z-10">
                    <h3 className="text-sm font-black uppercase tracking-[0.5em] text-white/70 mb-3 flex items-center gap-2">
                      <MapPin size={18} /> Location:
                    </h3>
                    <p className="text-4xl md:text-6xl font-black uppercase leading-tight italic text-white">
                      MEDIA STUDIO <br/> 154 CAMPUS
                    </p>
                 </div>
                 <Compass className="absolute -right-4 -bottom-4 w-40 h-40 text-white/10 rotate-12 group-hover:rotate-[372deg] transition-transform duration-[3000ms]" />
               </motion.div>

               <motion.button
                  whileHover={{ scale: 1.1, rotate: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="px-12 py-8 bg-white text-black font-black text-3xl uppercase tracking-[0.3em] shadow-[15px_15px_0_#ff00ff] flex items-center gap-4 group"
                >
                  GET TICKETS <Ticket size={32} className="group-hover:rotate-12 transition-transform" />
                </motion.button>
            </div>
          </div>
        </div>
      </div>

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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
            {[
              { name: "Deerain", role: "Finance", img: "/team/deerain.jpg", tilt: -2 },
              { name: "Aneeqa", role: "Marketing", img: "/team/aneeqa.jpg", tilt: 2 },
              { name: "Wasay", role: "General Secretary", img: "/team/wasay.jpg", tilt: -3 },
              { name: "Anas", role: "Event Management", img: "/team/anas.jpg", tilt: 3 },
              { name: "Ayan", role: "Finance", img: "/team/ayan.jpg", tilt: -4 },
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center group"
              >
                {/* Sticker Frame */}
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: 0 }}
                  style={{ rotate: member.tilt }}
                  className="relative w-full aspect-[4/5] border-[8px] border-white shadow-xl overflow-hidden bg-white/5"
                >
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>

                {/* Info */}
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-black italic uppercase tracking-tighter text-white group-hover:text-neon-cyan transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-neon-magenta mt-1">
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
          REGISTRATIONS ARE LIVE NOW • LIMITED TICKETS REMAINING • JASON THOMAS LIVE • MAY 16TH • MEDIA STUDIO 154 CAMPUS • RAVE ASTRA • REGISTRATIONS ARE LIVE NOW • LIMITED TICKETS REMAINING • 
        </motion.div>
      </div>

      {/* Premium Footer */}
      <footer className="relative z-10 pt-32 pb-10 px-6 md:px-12 bg-[#050505] overflow-hidden">
        {/* Decorative Grid for Footer */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-16 text-center"
          >
            <div className="border-2 border-white/20 px-8 py-4 inline-block mb-4">
               <h2 className="text-4xl md:text-6xl font-black tracking-[-0.1em] text-white">PAS</h2>
            </div>
            <p className="text-[10px] font-bold uppercase tracking-[0.6em] text-neon-cyan">Performing Arts Society</p>
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
               <p className="text-sm font-bold text-white/50 mb-2">INFO@PAS-RAVE.COM</p>
               <p className="text-sm font-bold text-white/50">+92 300 ASTRA-00</p>
            </div>
          </div>

          <div className="mt-32 w-full flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[0.4em] text-white/20 border-t border-white/5 pt-8">
            <p>© 2026 PERFORMING ARTS SOCIETY. ALL RIGHTS RESERVED.</p>
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
            0 0 10px #00f2ff,
            0 0 20px #00f2ff,
            0 0 40px #ff00ff,
            0 0 80px #ff00ff;
        }
      `}</style>
    </main>
  );
}
