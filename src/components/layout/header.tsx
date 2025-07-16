"use client";
import { useState } from "react";
import { Menu, X, RocketIcon } from "lucide-react";
import { Link, Button } from "@heroui/react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { navItems } from "@/config/route";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm px-3 py-2 sticky top-0 z-50 font-sans text-sm font-poppins">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src={logo} alt="HealthPulse logo" width={28} height={28} />
          <p className="text-sm font-semibold text-gray-800">HealthPulse</p>
        </div>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-4">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-gray-700 text-xs lg:text-sm"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA Button on desktop */}
        <div className="hidden sm:flex items-center">
          <Button
            as={Link}
            href="/signup"
            className="bg-secondary text-white px-3 py-1.5 rounded-md text-xs font-medium flex items-center gap-1"
          >
            <RocketIcon className="w-3.5 h-3.5" />
            Get Started
          </Button>
        </div>

        {/* Mobile hamburger */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 p-1"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 bg-white border-t border-gray-100 shadow-sm">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block text-gray-700 text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button
              as={Link}
              href="/signup"
              className="w-full bg-secondary text-white py-2 text-sm rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
