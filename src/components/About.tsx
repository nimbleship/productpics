'use client'

import { motion } from 'framer-motion'
import { Heart, Printer, Palette, Users, Clock, Award } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every piece is crafted with passion and attention to detail'
    },
    {
      icon: Printer,
      title: 'Quality Printing',
      description: 'Using high-quality PLA filament for durable, safe toys'
    },
    {
      icon: Palette,
      title: 'Custom Colors',
      description: 'Choose from rainbow colors to match your style'
    },
    {
      icon: Users,
      title: 'Kid-Tested',
      description: 'Designed and tested by kids, for kids of all ages'
    },
    {
      icon: Clock,
      title: 'Quick Turnaround',
      description: 'Most orders completed within 3-5 days'
    },
    {
      icon: Award,
      title: 'Satisfaction Guaranteed',
      description: 'If you\'re not happy, I\'ll make it right!'
    }
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold gradient-text mb-6">
            About My 3D Printing Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I started 3D printing when I was 9 years old, and it quickly became my biggest passion! 
            I love designing toys that bring joy to other kids and adults too. Every creation tells a story, 
            and I can't wait to create something special just for you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl card-hover"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display text-xl font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-center text-white"
        >
          <h3 className="font-display text-2xl font-bold mb-4">
            Why Choose Arya's 3D Creations?
          </h3>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            As a young entrepreneur, I bring fresh ideas, unlimited creativity, and genuine excitement 
            to every project. Plus, all profits help me save for college and buy more cool filament colors!
          </p>
        </motion.div>
      </div>
    </section>
  )
}