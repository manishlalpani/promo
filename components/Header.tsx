"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Load theme preference once on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
        setIsDark(true);
      }
    }
  }, []);

  // Close mobile menu when clicking outside & disable background scroll when open
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden"; // prevent scroll behind
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Toggle dark mode with localStorage persistence
  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Stores", href: "/discount-codes" },
    { name: "About ", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="select-none text-2xl font-extrabold text-primary dark:text-white"
          aria-label="Homepage"
          tabIndex={0}
        >
          PromoCoupon.AE
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className="font-medium text-gray-700 transition hover:text-primary dark:text-gray-300 dark:hover:text-white"
              tabIndex={0}
            >
              {name}
            </Link>
          ))}
          <Link href={"/subscription"}> 
           <Button className="ml-4 whitespace-nowrap" tabIndex={0}>
            Subscribe Email
          </Button>
          </Link>
         
          <Button
            variant="outline"
            size="icon"
            aria-label="Toggle dark mode"
            onClick={toggleTheme}
            className="ml-2"
            tabIndex={0}
          >
            {isDark ? "☀️" : "🌙"}
          </Button>
        </nav>

        {/* Mobile menu toggle button */}
        <button
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden rounded-lg p-3 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
          tabIndex={0}
          type="button"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        aria-hidden={!isOpen}
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile menu panel */}
      <aside
        ref={mobileMenuRef}
        className={`fixed top-0 left-0 z-50 h-full w-72 transform flex flex-col bg-white dark:bg-gray-900 shadow-xl transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Mobile navigation menu"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200 dark:border-gray-700">
          <Link
            href="/"
            className="text-2xl font-bold text-primary dark:text-white"
            onClick={() => setIsOpen(false)}
            tabIndex={0}
          >
            CouponAE
          </Link>
          <button
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
            className="rounded-lg p-2 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
            tabIndex={0}
          >
            <X size={28} />
          </button>
        </div>

        <nav className="flex flex-col gap-8 px-6 py-8 overflow-y-auto flex-grow">
          {navItems.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className="block rounded-lg py-4 px-3 text-lg font-semibold text-gray-800 transition hover:bg-primary hover:text-white dark:text-gray-200 dark:hover:bg-primary dark:hover:text-white"
              onClick={() => setIsOpen(false)}
              tabIndex={0}
            >
              {name}
            </Link>
          ))}

          <Button
            className="mt-auto w-full py-4 text-lg font-semibold"
            onClick={() => setIsOpen(false)}
            tabIndex={0}
          >
            Submit Coupon
          </Button>

          <Button
            variant="outline"
            className="w-full mt-4 py-4 text-lg font-semibold"
            onClick={toggleTheme}
            tabIndex={0}
          >
            {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </Button>
        </nav>
      </aside>
    </header>
  );
}
