"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

    return (
      
    <nav className="w-full justify-center bg-white dark:bg-black font-sans shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white">
            chamith.me<span className="text-white"></span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-white">
            {/* <Link href="/publications" className="hover:text-gray-500 transition">Publications</Link> */}
            {/*  <Link href="#skills" className="hover:text-gray-500 transition">Skills</Link>
            <Link href="#projects" className="hover:text-gray-500 transition">Projects</Link>
            <Link href="#contact" className="hover:text-gray-500 transition">Contact</Link> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center"
            onClick={() => setOpen(!open)}
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div className="md:hidden flex flex-col space-y-4 pb-4 text-gray-700">
            {/* <Link href="/publications" className="hover:text-blue-600">Publications</Link> */}
            {/* <Link href="#skills" className="hover:text-blue-600">Skills</Link>
            <Link href="#projects" className="hover:text-blue-600">Projects</Link>
            <Link href="#contact" className="hover:text-blue-600">Contact</Link> */}
          </div>
        )}
      </div>
    </nav>
  );
}
