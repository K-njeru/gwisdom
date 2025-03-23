"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const navigation = [
  { name: "Home", href: "/#Hero" },
  { name: "About", href: "/about" },
  { name: "Compass", href: "/compass" },
  { name: "Programs", href: "/#Programs" },
  { name: "Conference", href: "/conference" },
  { name: "Partners", href: "/#Partners" },
];


export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50">
      <nav 
        className="mx-auto max-w-5xl mt-4 bg-[#ffffff12] backdrop-blur-md rounded-full border border-transparent shadow-lg"
        aria-label="Global"
      >
        <div className="flex items-center justify-between px-8 py-4">
          <div className="flex">
            {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="-m-1.5 p-1.5">
              <Image className="h-full w-auto" src="/globe.svg" alt="Godly wisdom" width={64} height={64} />
            </Link>
            <span className="ml-2 text-lg font-bold"></span>
          </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-white hover:text-[#1e40af] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              href="/donate"
              className="text-sm font-semibold leading-6 text-white bg-transparent px-6 py-2 rounded-full hadow-lg ring-1 ring-white hover:bg-white/10 transition-colors"
            >
              Donate
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-50"
        >
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-x-4 top-8 bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-center justify-between">
              {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="-m-1.5 p-1.5">
              <Image className="h-full w-auto" src="/globe.svg" alt="Godly wisdom" width={64} height={64} />
            </Link>
            <span className="ml-2 text-lg font-bold"></span>
          </div>
              <button
                type="button"
                className="rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50 rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="block text-center mt-4 text-sm font-semibold text-white bg-[#1e40af] px-6 py-3 rounded-full hover:bg-[#1e3a8a] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}