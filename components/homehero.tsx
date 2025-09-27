"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function HomeHero() {
  const [dark, setDark] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDark = localStorage.getItem("theme") === "dark";
    setDark(isDark);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark, mounted]);

  if (!mounted) {
    return (
      <div className="fixed top-4 right-4 z-50">
        <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
      </div>
    );
  }

  return (
    <>
     

      {/* Optimized Animated Background Elements for Mobile */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="fixed left-2 bottom-2 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-tr from-blue-400/20 to-purple-500/20 rounded-full blur-xl sm:blur-3xl"
      />
      
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="fixed right-4 top-16 sm:right-8 sm:top-20 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-green-400/15 to-blue-500/15 rounded-full blur-lg sm:blur-2xl"
      />

      {/* Mobile-optimized Floating Coupon Elements */}
      <motion.div
        aria-hidden="true"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: [50, -50, 50], opacity: [0, 0.7, 0] }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0
        }}
        className="fixed left-4 top-1/4 text-xl sm:text-2xl"
      >
        🏷️
      </motion.div>

      <motion.div
        aria-hidden="true"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: [-30, 30, -30], opacity: [0, 0.7, 0] }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="fixed right-6 top-1/3 text-2xl sm:text-3xl"
      >
        💰
      </motion.div>

      {/* Additional mobile-only decorative elements */}
      <motion.div
        aria-hidden="true"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: [-20, 20, -20], opacity: [0, 0.5, 0] }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
        className="fixed left-8 bottom-1/3 text-lg sm:text-xl sm:hidden"
      >
        🛍️
      </motion.div>
    </>
  );
}
