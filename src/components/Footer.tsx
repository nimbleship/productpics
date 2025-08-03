'use client'

import { motion } from 'framer-motion'
import { Sparkles, Heart, Star, Mail, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold">
                  Arya's 3D Creations
                </h3>
                <p className="text-sm text-gray-400">Young Maker, Big Dreams</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Hi! I'm Arya, a 10-year-old entrepreneur who loves creating amazing 3D printed toys and fidgets. 
              Every purchase helps me learn about business and save for my future!
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-gray-400">5.0 Customer Rating</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Products', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300 text-sm">arya.3dcreations@email.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-pink-400" />
                <span className="text-gray-300 text-sm">(555) 123-ARYA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <span className="text-gray-400">Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span className="text-gray-400">by Arya, Age 10</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 Arya's 3D Creations. All rights reserved.
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-gray-500 text-xs">
              All communications are supervised by parents. Business operations comply with child labor laws.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}