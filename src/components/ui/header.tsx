'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import React from 'react'
import Modal from './modal/modal'

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const close = () => setModalOpen(false)
  const open = () => setModalOpen(true)

  const content_display = {
    menueitem: (
      <nav className="flex-grow">
        <ul className="space-y-2 w-[80vw]">
          <li>
            <Link onClick={close} href="./" className="flex items-center space-x-3 p-3 rounded-lg bg-white shadow-sm hover:bg-gray-50 transition-colors duration-200">
              <span className="font-medium">Home</span>
            </Link>
          </li>
          <li>
            <Link onClick={close} href="./services" className="flex items-center space-x-3 p-3 rounded-lg bg-white shadow-sm hover:bg-gray-50 transition-colors duration-200">
              <span className="font-medium">Services</span>
            </Link>
          </li>
          <li>
            <Link onClick={close} href="./contacts" className="flex items-center space-x-3 p-3 rounded-lg bg-white shadow-sm hover:bg-gray-50 transition-colors duration-200">
              <span className="font-medium">Contact Us</span>
            </Link>
          </li>
        </ul>
      </nav>
    )
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background shadow-sm w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">

          {/* Logo and Title */}
          <Link href="/" className="flex items-center space-x-2 h-10 lg:w-0 lg:flex-1">
            <Image
  src="/duncan_transparent.png"
  alt="Duncan logo"
  width={50}
  height={50}
  priority
/>

            <span className="text-xl font-bold text-primary">Duncan Services</span>
          </Link>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <div
              onClick={open}
              aria-label="Toggle menu"
              className="inline-flex items-center justify-center rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 18L20 18" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
                <path d="M4 12L20 12" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
                <path d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-base font-medium text-foreground hover:text-primary">
              <motion.button whileHover={{ scale: 1.2 }}>
                <div className='flex'>Home</div>
              </motion.button>
            </Link>
            <Link href="/services" className="text-base font-medium text-foreground hover:text-primary">
              <motion.button whileHover={{ scale: 1.2 }}>
                <div className='flex'>Services</div>
              </motion.button>
            </Link>
            <Link href="/contacts" className="text-base font-medium text-foreground hover:text-primary">
              <motion.button whileHover={{ scale: 1.2 }}>
                <div className='flex'>Contact Us</div>
              </motion.button>
            </Link>
          </nav>

          {/* Placeholder for right-aligned buttons */}
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            {/* Example: Login/Signup buttons here */}
          </div>
        </div>
      </div>

      {/* Mobile Menu Modal */}
      {modalOpen && <Modal modalOpen={modalOpen} contentdiv={content_display.menueitem} handleClose={close} />}
    </header>
  )
}

export default Header
