"use client";

import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Heart, GraduationCap, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const programs = [
  {
    name: 'Biblical Teaching',
    description: 'Deep, transformative biblical education',
    icon: BookOpen,
    color: 'bg-[#1e40af] text-white',
  },
  {
    name: 'Economic Empowerment',
    description: 'Financial wisdom and business skills',
    icon: GraduationCap,
    color: 'bg-[#1e40af] text-white',
  },
  {
    name: 'Discipleship',
    description: 'Growing together in Christ',
    icon: Heart,
    color: 'bg-[#1e40af] text-white',
  },
  {
    name: 'Community Outreach',
    description: 'Serving and transforming communities',
    icon: Users,
    color: 'bg-[#1e40af] text-white',
  },
];

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background with Gradient and Wavy Lines */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#164d98] to-[#1e40af]">
        {/* Wavy Lines SVG */}
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          

          {/* Line 1: Bottom-Left to Top-Right */}
          <path
            d="M0,900 Q360,750 720,900 T1440,900 T2160,900"
            fill="none"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="2"
            className="animate-wave-2"
          />

          {/* Line 2: Left to Right (Middle) */}
          <path
            d="M0,450 Q360,300 720,450 T1440,450 T2160,450"
            fill="none"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="2"
            className="animate-wave-3"
          />

          {/* Line 3: Right to Left (Upper Middle) */}
          <path
            d="M0,150 Q360,0 720,150 T1440,150 T2160,150"
            fill="none"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="2"
            className="animate-wave-4"
          />

          {/* Line 4: Left to Right (Lower Middle) */}
          <path
            d="M0,700 Q360,550 720,700 T1440,700 T2160,700"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="2"
            className="animate-wave-5"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white mb-8">
                <span className="text-sm font-medium"><Sparkles className='inline mr-2'/>Transforming Lives Through Christ</span>
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Empowering Your
                <span className="block text-white">Spiritual Journey</span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-white/80">
                Join us in discovering God&apos;s wisdom through comprehensive biblical education,
                fostering spiritual growth, and building a strong foundation in Christ.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/programs"
                  className="rounded-full bg-white px-8 py-3 text-center ring-1 ring-blue-100 text-sm font-semibold text-[#1e40af] shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  Explore Programs
                  <ArrowRight className="ml-2 inline-block h-4 w-4" />
                </Link>
                <Link
                  href="/about"
                  className="rounded-full bg-transparent px-8 py-3 text-center text-sm font-semibold text-white shadow-lg ring-1 ring-white hover:bg-white/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  Donate
                </Link>
              </div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[600px] w-full overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=2070&auto=format&fit=crop&q=80"
                  alt="Christian education and community"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>

          {/* Programs Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-24"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {programs.map((program, index) => (
                <motion.div
                  key={program.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="relative group"
                >
                  <Link href={`/programs/${program.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    <div className="relative h-[200px] overflow-hidden rounded-2xl p-6 bg-[#ffffff12] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className={`inline-flex p-3 rounded-xl ${program.color}`}>
                        <program.icon className="h-6 w-6" />
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-white">
                        {program.name}
                      </h3>
                      <p className="mt-2 text-sm text-white/80">
                        {program.description}
                      </p>
                      <ArrowRight className="absolute bottom-4 right-4 h-5 w-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}