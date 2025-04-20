import React from 'react';
import Header from '@/components/ui/header';
import { MessageCircle, LifeBuoy, Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="py-24 text-center bg-white">
        <p className="uppercase tracking-widest text-sm text-slate-500 mb-2">Contact Us</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-800 mb-4">
          We're here to help you!
        </h1>
        <p className="text-lg text-slate-600 max-w-xl mx-auto">
          Reach out by live chat, browse our help center, or send us an email—whatever works best
          for you.
        </p>
      </section>

      {/* Contact Options */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto px-6 mb-24">
        {/* Live Chat */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-indigo-50 rounded-full p-6 mb-4 shadow-inner">
            <MessageCircle className="w-10 h-10 text-indigo-600" />
          </div>
          <h3 className="text-xl font-semibold text-slate-800 mb-1">Live Chat</h3>
          <p className="text-sm text-slate-600 mb-2">Chat with us<br />Mon – Fri 9 AM – 5 PM EST</p>
          <a
            href="#chat"
            className="inline-block px-5 py-2 text-sm font-medium rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition"
          >
            Start Chat
          </a>
        </div>

        {/* Help Center */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-yellow-50 rounded-full p-6 mb-4 shadow-inner">
            <LifeBuoy className="w-10 h-10 text-yellow-600" />
          </div>
          <h3 className="text-xl font-semibold text-slate-800 mb-1">Help Center</h3>
          <p className="text-sm text-slate-600 mb-2 max-w-[14ch]">
            Find answers to our most commonly asked questions.
          </p>
          <a
            href="/help-center"
            className="inline-block px-5 py-2 text-sm font-medium rounded-md bg-yellow-600 text-white hover:bg-yellow-700 transition"
          >
            Browse Articles
          </a>
        </div>

        {/* Email */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-rose-50 rounded-full p-6 mb-4 shadow-inner">
            <Mail className="w-10 h-10 text-rose-600" />
          </div>
          <h3 className="text-xl font-semibold text-slate-800 mb-1">Email</h3>
          <p className="text-sm text-slate-600 mb-2">Send us an email at</p>
          <a
            href="mailto:orders@duncaninfo.com"
            className="text-sm font-medium text-rose-600 hover:underline"
          >
            orders@duncaninfo.com
          </a>
        </div>
      </section>

      {/* Map & Address */}
      <section className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto px-6 mb-24 items-start">
        {/* Map */}
        <div className="w-full lg:w-1/2 shadow-lg rounded-2xl overflow-hidden">
          <iframe
            title="Duncan Information Services Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.646252440574!2d-79.37898768449644!3d43.6426711791211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d6b54f1c6d%3A0xfa54dd51c7729a3!2s20%20Bay%20St%2C%20Toronto%2C%20ON%20M5J%202N8!5e0!3m2!1sen!2sca!4v1713547200000!5m2!1sen!2sca"
            width="100%"
            height="400"
            style={{ border: 0 }}

            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Address */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Contact Us</h2>
          <p className="text-lg font-semibold text-slate-700">Duncan Information Services Inc.</p>

          <address className="not-italic text-slate-600 leading-relaxed">
            20 Bay Street, 17th Floor<br />
            Toronto, ON M5J 2N8<br />
            Canada
          </address>

          <p className="mt-6 text-slate-600">
            <span className="font-semibold text-slate-700">Mobile:</span>{' '}
            <a href="tel:+14162667445" className="hover:underline">+1 416 266 7445</a>
          </p>
          <p className="text-slate-600">
            <span className="font-semibold text-slate-700">Email:</span>{' '}
            <a href="mailto:orders@duncaninfo.com" className="hover:underline">orders@duncaninfo.com</a>
          </p>

          <p className="mt-6 text-slate-600">
            <span className="font-semibold text-slate-700">Hours of Operation:</span><br />
            Monday – Friday<br />
            8:30 AM – 5:00 PM
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-100 py-6 text-center text-sm text-slate-600">
        ©2021 Duncan Information Services Inc. All Rights Reserved.
      </footer>
    </>
  );
}