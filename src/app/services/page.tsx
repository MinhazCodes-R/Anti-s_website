import React from 'react';
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
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-br from-slate-800 to-slate-600 flex items-center justify-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-white z-10">Our Services</h1>
        {/* Decorative graphic */}
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/services/services.png"
            alt="Services background"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section>

      {/* Services Grid */}
      <main className="py-12 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col items-center text-center"
            >
              <div className="w-36 h-36 mb-4 relative"> {/* Increased from w-32 h-32 */}
                <Image
                    src={service.image}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
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

      {/* Footer */}
      <footer className="bg-gray-100 py-6 text-center text-sm text-gray-600">
        ©2021 Duncan Information Services Inc. All Rights Reserved.
      </footer>
    </>
  );
}
