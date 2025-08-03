'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Sparkles, 
  Star, 
  Mail, 
  Phone, 
  MessageCircle, 
  Printer, 
  Palette, 
  Zap,
  Heart,
  Award,
  Users,
  Clock
} from 'lucide-react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      <Header />
      <Hero />
      <About />
      <Products />
      <Contact />
      <Footer />
    </main>
  )
}