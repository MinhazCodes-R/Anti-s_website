import React from 'react';
import ServicesGrid from '@/components/pages/home/servicegrid';
import Header from '@/components/ui/header';

export default function Page() {
  return (
    <>
      <Header />
      <div className='h-[80px]'></div>

      {/* Main content */}
      <main className="p-6 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-neutral-700 mb-4">
            Duncan Information Services Inc.
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Canada’s premier information search company. We are a trusted provider of
            Corporate Record Searches and Filings, Due Diligence searches, PPSA Registry
            Services and more — catered to the legal, corporate and financial industries.
          </p>
        </section>

        {/* Company Background */}
        <section className="text-center mb-16">
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            The Duncan Info team is based out of downtown Toronto, and has over 12 years of
            experience servicing clients across Canada, the United States and parts of
            Europe. Our clients range from sole practitioners, accountants, private
            investigators, financial companies to several of Canada's largest law firms.
          </p>
        </section>
      </main>

      {/* Satisfaction Section - full width outside of main */}
      <section className="mb-8 bg-gradient-to-br from-slate-900 to-slate-600 text-gray-100 py-12 px-4 w-full shadow-xl">
        <h2 className="text-3xl font-semibold text-amber-400 mb-6 text-center">
          Satisfaction Guaranteed
        </h2>
        <p className="text-lg max-w-4xl mx-auto text-center">
          Our goal is to exceed your expectations with every service request. We have an
          extensive track record of delivering reliable and accurate results. Our focus
          in public record searches, registrations and filings has allowed us to achieve
          an excellent level of service and expertise.
        </p>
        <p className="mt-4 text-lg max-w-4xl mx-auto text-center">
          We are committed to offering competitive rates and exceptional turnaround times.
        </p>
      </section>



      {/* Services Grid wrapped in its own main */}
      <main className="p-6 max-w-7xl mx-auto">
        <ServicesGrid />
      </main>
    </>
  );
}
