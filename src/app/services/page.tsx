'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/ui/header';
import Image from 'next/image';

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
  { title: 'Property Searches', image: '/services/icon_0_0.png' },
  { title: 'Incorporation', image: '/services/icon_0_1.png' },
  { title: 'Trade Name Registration', image: '/services/icon_1_0.png' },
  { title: 'Agent for Service', image: '/services/icon_1_1.png' },
];

// 👇 Customize per image using Tailwind classes
const styleOverrides: Record<string, string> = {
  'Property Searches': 'scale-180 translate-y-4',
  'Incorporation': 'scale-180 -translate-y-2 translate-x-13',
  'Trade Name Registration': 'scale-200 translate-y-2',
  'Agent for Service': 'scale-180 translate-y-5  translate-x-13',
  // others will default to no overrides
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <div className="h-[70px]"></div>

      {/* Hero Section */}
      <section className="bg-[#0c2233] text-white flex flex-col items-center py-20 px-6">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="relative flex flex-col items-center">
            <div className="relative w-[600px] h-[350px] rounded-lg overflow-hidden">
              <Image
                src="/services/services.png"
                alt="People working"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <Link href="./contacts" />
          </div>

          <div className="max-w-xl text-left">
            <h2 className="text-4xl font-bold mb-6">Professional Services</h2>
            <p className="text-lg mb-6 text-gray-300">
              Duncan Information Services specializes in fast, reliable corporate and legal searches and filings.
              We are dedicated to supporting your success by offering experienced service at every step.
            </p>
            <p className="text-lg mb-8 text-gray-300">
              Since 2001, we've been a trusted partner for businesses across Canada. Come work with us today.
            </p>
          </div>
        </div>
      </section>

      {/* Tagline */}
      <div className="w-full bg-white text-center py-10 mt-16">
        <h3 className="text-2xl font-bold text-[#0c2233] mb-4">
          The trusted extension of your legal and corporate team
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We simplify complex filings and search processes, saving you valuable time and effort.
        </p>
      </div>

      {/* Services Grid */}
      <main className="py-12 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const override = styleOverrides[service.title] || ''; // fallback = no custom style

            return (
              <div
                key={service.title}
                className="bg-neutral-100 rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col items-center text-center"
              >
                <div className="w-36 h-36 mb-4 rounded-full border border-gray-300 relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className={`object-cover ${override}`}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mt-2">{service.title}</h3>
              </div>
            );
          })}
        </div>

        {/* Bottom Tagline */}
        <section className="mt-16 text-center">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We aim to exceed your expectations with every service request. Our commitment is
            to enable your business to make quick, informed and reliable decisions.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 text-center text-sm text-gray-600">
        ©2021 Duncan Information Services Inc. All Rights Reserved.
      </footer>
    </>
  );
}
