"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Play, Plus, Search, Bell, Star, Clock, Flame, Film, Disc } from "lucide-react";

// --- MOCK DATA ---
const HERO_MOVIE = {
  title: "AURA: The Last Signal",
  description:
    "When the final interstellar relay goes dark, an elite crew must navigate the treacherous silence of deep space. What they find at the edge of the galaxy will rewrite the history of humanity.",
  year: "2026",
  duration: "2h 15m",
  match: "98% Match",
  rating: "PG-13",
  image:
    "https://picsum.photos/seed/hero/2000/1000",
  category: "Sci-Fi Thriller",
};

const TRENDING_MOVIES = [
  {
    id: 1,
    title: "Neon City",
    year: "2025",
    rating: "8.4",
    image:
      "https://picsum.photos/seed/neon/800/1200",
  },
  {
    id: 2,
    title: "Silent Echo",
    year: "2024",
    rating: "7.9",
    image:
      "https://picsum.photos/seed/echo/800/1200",
  },
  {
    id: 3,
    title: "Velocity",
    year: "2026",
    rating: "9.1",
    image:
      "https://picsum.photos/seed/velocity/800/1200",
  },
  {
    id: 4,
    title: "The Deep End",
    year: "2023",
    rating: "6.8",
    image:
      "https://picsum.photos/seed/deep/800/1200",
  },
  {
    id: 5,
    title: "Wasteland Kings",
    year: "2025",
    rating: "8.2",
    image:
      "https://picsum.photos/seed/kings/800/1200",
  },
  {
    id: 6,
    title: "Aurora Phase",
    year: "2026",
    rating: "8.8",
    image:
      "https://picsum.photos/seed/aurora/800/1200",
  },
];

const CATEGORIES = [
  { name: "Action", icon: Flame, color: "bg-red-500/10 text-red-500" },
  { name: "Sci-Fi", icon: Disc, color: "bg-blue-500/10 text-blue-500" },
  { name: "Drama", icon: Film, color: "bg-purple-500/10 text-purple-500" },
  { name: "Thrillers", icon: Clock, color: "bg-emerald-500/10 text-emerald-500" },
];

export default function MovieApp() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 pb-20 overflow-x-hidden selection:bg-rose-500/30 selection:text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-neutral-950/80 backdrop-blur-md border-b border-white/10"
            : "bg-gradient-to-b from-neutral-950/80 to-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Left side */}
            <div className="flex items-center space-x-8">
              <span className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-amber-500">
                CINEVISTA
              </span>
              <div className="hidden md:flex space-x-6 text-sm font-medium">
                <a href="#" className="text-white">
                  Home
                </a>
                <a
                  href="#"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  Movies
                </a>
                <a
                  href="#"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  Series
                </a>
                <a
                  href="#"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  My List
                </a>
              </div>
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-6">
              <button className="text-neutral-400 hover:text-white transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="text-neutral-400 hover:text-white transition-colors">
                <Bell className="w-5 h-5" />
              </button>
              <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center border border-white/20 cursor-pointer overflow-hidden relative">
                <Image
                  src="https://picsum.photos/seed/avatar/100/100"
                  alt="Avatar"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full h-[85vh] min-h-[600px] flex items-center">
        {/* Background Image Setup */}
        <div className="absolute inset-0 z-0">
          <Image
            src={HERO_MOVIE.image}
            alt={HERO_MOVIE.title}
            fill
            className="object-cover object-top"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-transparent w-full md:w-3/4" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl space-y-6"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold tracking-wide uppercase">
              <Star className="w-3 h-3 fill-rose-500" />
              <span>#1 Movie Today</span>
            </div>

            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white leading-tight">
              {HERO_MOVIE.title}
            </h1>

            <div className="flex flex-wrap items-center gap-3 sm:space-x-4 space-y-2 sm:space-y-0 text-sm font-medium text-neutral-300">
              <span className="text-emerald-400 font-semibold">
                {HERO_MOVIE.match}
              </span>
              <span>{HERO_MOVIE.year}</span>
              <span className="px-2 py-0.5 rounded border border-neutral-700 bg-neutral-800/50">
                {HERO_MOVIE.rating}
              </span>
              <span>{HERO_MOVIE.duration}</span>
              <span className="flex items-center">
                <Film className="w-4 h-4 mr-1.5 opacity-70" /> {HERO_MOVIE.category}
              </span>
            </div>

            <p className="text-lg text-neutral-300 leading-relaxed max-w-lg">
              {HERO_MOVIE.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <button className="w-full sm:w-auto flex items-center justify-center px-8 py-3.5 bg-white text-neutral-950 rounded-full font-semibold hover:bg-neutral-200 transition-colors">
                <Play className="w-5 h-5 mr-2 fill-neutral-950" />
                Play Trailer
              </button>
              <button className="w-full sm:w-auto flex items-center justify-center px-8 py-3.5 bg-neutral-800/80 text-white rounded-full font-semibold border border-neutral-700 hover:bg-neutral-700 transition-colors backdrop-blur-sm">
                <Plus className="w-5 h-5 mr-2" />
                Add to List
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-24 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="flex items-center space-x-4 p-4 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800/80 transition-colors cursor-pointer group"
            >
              <div
                className={`p-3 rounded-xl ${cat.color} group-hover:scale-110 transition-transform`}
              >
                <cat.icon className="w-5 h-5" />
              </div>
              <span className="font-semibold text-sm sm:text-base">{cat.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trending Now */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold tracking-tight">Trending Now</h2>
          <a
            href="#"
            className="text-sm font-medium text-amber-500 hover:text-amber-400 transition-colors"
          >
            View All
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {TRENDING_MOVIES.map((movie, i) => (
            <motion.div
              key={movie.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              className="relative group cursor-pointer"
            >
              <div className="relative aspect-[2/3] rounded-xl overflow-hidden mb-3 bg-neutral-900">
                <Image
                  src={movie.image}
                  alt={movie.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 hover:bg-white hover:text-black transition-colors scale-90 group-hover:scale-100 duration-300">
                    <Play className="w-5 h-5 pl-1" />
                  </button>
                </div>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-sm line-clamp-1 group-hover:text-amber-500 transition-colors">
                    {movie.title}
                  </h3>
                  <span className="text-xs text-neutral-500">{movie.year}</span>
                </div>
                <div className="flex items-center space-x-1 bg-neutral-900 px-1.5 py-0.5 rounded text-xs font-medium text-amber-500 border border-neutral-800">
                  <Star className="w-3 h-3 fill-amber-500" />
                  <span>{movie.rating}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Banner / Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="relative rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 p-8 sm:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between">
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src="https://picsum.photos/seed/cinema/2000/1000"
              alt="Cinematic background"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 to-transparent" />
          </div>

          <div className="relative z-10 max-w-xl md:pr-12 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
              Experience cinema without limits.
            </h2>
            <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
              Join Premium today to watch new releases in dazzling 4K, absolutely
              ad-free. Download for offline viewing anytime, anywhere.
            </p>
            <button className="px-8 py-3.5 bg-rose-600 hover:bg-rose-500 text-white rounded-full font-semibold transition-colors w-full sm:w-auto shadow-[0_0_20px_rgba(225,29,72,0.3)]">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <span className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-neutral-600 to-neutral-400 mb-6 drop-shadow-sm">
            CINEVISTA
          </span>
          <div className="flex space-x-6 text-sm font-medium text-neutral-500 mb-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Help Center</a>
            <a href="#" className="hover:text-white transition-colors">Contact Us</a>
          </div>
          <p className="text-neutral-600 text-sm">
            &copy; {new Date().getFullYear()} Cinevista. All rights reserved. Made by AI Studio.
          </p>
        </div>
      </footer>
    </div>
  );
}
