'use client';

import React from 'react';
import Link from 'next/link'
import Header from '@/components/ui/header';
import Image from 'next/image';
import { motion } from 'framer-motion';

const services = [
  { title: 'NUANS Name Reservations', image: '/services/nuans.png' },
  { title: 'Corporate Filings', image: '/services/corporate-filings.png' },
  { title: 'Corporate Profile/Trade Name Searches', image: '/services/profile-search.png' },
  { title: 'Litigation Searches (Civil & Family)', image: '/services/litigation-search.png' },
  { title: 'Litigation Filings', image: '/services/litigation-filings.png' },
  { title: 'Small Claim', image: '/services/small-claim.png' },
  { title: 'Criminal Searches', image: '/services/criminal-search.png' },
  { title: 'Bankruptcy Searches', image: '/services/bankruptcy.png' },
  { title: 'Certificate of Status / Good Standing', image: '/services/certificate.png' },
  { title: 'Bank Act Searches', image: '/services/bank-act.png' },
  { title: 'Writ of Execution / Judgment Searches', image: '/services/judgment.png' },
  { title: 'PPSA / UCC Registration & Searches', image: '/services/ppsa.png' },
  { title: 'Property Searches', image: '/services/property.png' },
  { title: 'Incorporation', image: '/services/incorporation.png' },
  { title: 'Trade Name Registration', image: '/services/trade-name.png' },
  { title: 'Agent for Service', image: '/services/agent-service.png' },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <div className='h-[70px]'></div>

      {/* --- Hootsuite Styled Hero Section --- */}
      <section className="bg-[#0c2233] text-white flex flex-col items-center py-20 px-6">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left: Image and Button */}
          <div className="relative flex flex-col items-center">
            <div className="relative w-[600px] h-[350px] rounded-lg overflow-hidden">
              <Image
                src="/services/services.png" // Replace with your actual image path
                alt="People working"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <Link href='./contacts'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="mt-6 bg-yellow-400 text-black font-bold py-2 px-6 rounded-lg cursor-pointer"
            >
              Schedule
            </motion.button>
            </Link>
          </div>

          {/* Right: Text Content */}
          <div className="max-w-xl text-left">
            <h2 className="text-4xl font-bold mb-6">Professional Services</h2>
            <p className="text-lg mb-6 text-gray-300">
              Duncan Information Services specializes in fast, reliable corporate and legal searches and filings.
              We are dedicated to supporting your success by offering experienced service at every step.
            </p>
            <p className="text-lg mb-8 text-gray-300">
              Since 2001, we've been a trusted partner for businesses across Canada. Come work with us today.
            </p>
            <Link href="/contacts">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-400 text-black font-bold py-2 px-6 rounded-lg"
              >
                Request a demo
              </motion.button>
            </Link>

          </div>
        </div>
      </section>

      {/* Bottom Mini Tagline */}
      <div className="w-full bg-white text-center py-10 mt-16">
          <h3 className="text-2xl font-bold text-[#0c2233] mb-4">
            The trusted extension of your legal and corporate team
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We simplify complex filings and search processes, saving you valuable time and effort.
          </p>
        </div>

      {/* --- Services Grid --- */}
      <main className="py-12 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-neutral-100 rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col items-center text-center"
            >
              <div className="w-36 h-36 mb-4 relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <section className="mt-16 text-center">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We aim to exceed your expectations with every service request. Our commitment is
            to enable your business to make quick, informed and reliable decisions.
          </p>
        </section>
      </main>

      {/* --- Footer --- */}
      <footer className="bg-gray-100 py-6 text-center text-sm text-gray-600">
        ©2021 Duncan Information Services Inc. All Rights Reserved.
      </footer>
    </>
  );
}
