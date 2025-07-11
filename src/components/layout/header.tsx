"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, Button } from "@heroui/react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { navItems } from "@/config/route";
import { RocketIcon } from "lucide-react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm px-4 py-3 sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand - Always on the left */}
        <div className="flex items-center flex-shrink-0">
          <Image
            src={logo}
            alt="HealthPulse logo"
            width={32}
            height={32}
            className="sm:w-10 sm:h-10"
          />
          <p className="font-bold text-lg sm:text-xl ml-2 text-secondary">
            HealthPulse
          </p>
        </div>

        {/* Desktop: Center navigation links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-primary hover:text-secondary hover:underline hover:font-medium hover:tracking-wide hover:scale-105 transition-all duration-200 ease-in-out text-sm lg:text-base"

            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop: Right actions */}
        <div className="hidden sm:flex items-center gap-4">
          {/* <Link
            href="/login"
            className="hidden md:block text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200 text-sm lg:text-base"
          >
            Login
          </Link> */}
          <Button
  as={Link}
  href="/signup"
  className="bg-secondary text-white px-4 py-2 lg:px-6 rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm font-medium flex items-center gap-2"
>
  <RocketIcon className="w-4 h-4" />
  Get Started
</Button>

        </div>

        {/* Mobile: Hamburger menu toggle - Always on the right */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-blue-600 p-2 rounded-md transition-colors duration-200"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block text-gray-700 hover:text-blue-600 font-medium py-2 text-lg transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="border-t border-gray-200 pt-4 mt-4 space-y-4">
              {/* <Link
                href="/login"
                className="block text-gray-700 hover:text-blue-600 font-medium py-2 text-lg transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link> */}

              <Button
                as={Link}
                href="/signup"
                className="w-full bg-secondary text-white py-3 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
