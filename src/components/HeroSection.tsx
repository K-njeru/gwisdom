"use client";

import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Heart, GraduationCap } from 'lucide-react';
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
    <div className="relative min-h-screen overflow-hidden bg-[#164d98]">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
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
                <span className="text-sm font-medium">Transforming Lives Through Christ</span>
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
                  className="rounded-full bg-white px-8 py-3 text-center text-sm font-semibold text-[#1e40af] shadow-lg hover:bg-gray-100 transition-colors"
                >
                  Explore Programs
                  <ArrowRight className="ml-2 inline-block h-4 w-4" />
                </Link>
                <Link
                  href="/about"
                  className="rounded-full bg-transparent px-8 py-3 text-center text-sm font-semibold text-white shadow-lg ring-1 ring-white hover:bg-white/10 transition-colors"
                >
                  Learn More
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
                  className=""
                  priority
                />
              </div>
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
                    <div className="relative overflow-hidden rounded-2xl p-6 bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className={`inline-flex p-3 rounded-xl ${program.color}`}>
                        <program.icon className="h-6 w-6" />
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-gray-900">
                        {program.name}
                      </h3>
                      <p className="mt-2 text-sm text-gray-600">
                        {program.description}
                      </p>
                      <ArrowRight className="absolute bottom-4 right-4 h-5 w-5 text-[#1e40af] opacity-0 group-hover:opacity-100 transition-opacity" />
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