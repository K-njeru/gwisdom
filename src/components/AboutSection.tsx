"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { MoveUpRight } from 'lucide-react';

export default function AboutSection() {
  return (
    <div className="relative h-[80vh] overflow-hidden ">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/true.avif?uid=R117210320&ga=GA1.1.680694033.1740332770&semt=ais_hybrid?q=80&w=2070&auto=format&fit=crop"
          alt="About Us background"
          fill
          className="object-cover "
        />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center md:justify-start px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-2xl shadow-lg md:ml-32 lg:w-1/3 text-center md:text-left"
        >
          <h2 className="text-5xl font-bold mb-8 text-gray-800">What does a real disciple of Jesus Christ look like? </h2>
          <p className="text-gray-700 mb-8 leading-relaxed">He is poor in spirit; he mourns over sin; he is gentle;
             he hungers and thirsts for righteousness; he is merciful; he is pure in heart;
             he is a peacemaker; and he is marked by persecution</p>
          <Link
            href="/about"
            className="inline-flex items-center rounded-full ring-1 ring-blue-100 bg-white px-8 py-3 text-center text-sm font-semibold text-[#1e40af] shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            About Us
            <MoveUpRight className="h-4 w-4 ml-2" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}