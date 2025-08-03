'use client'

import { motion } from 'framer-motion'
import { Mail, MessageCircle, Clock, MapPin, Phone, Send, Heart } from 'lucide-react'

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Me',
      description: 'Best for detailed custom orders',
      contact: 'arya.3dcreations@email.com',
      action: 'Send Email'
    },
    {
      icon: MessageCircle,
      title: 'Text Message',
      description: 'Quick questions and updates',
      contact: '(555) 123-ARYA',
      action: 'Send Text'
    },
    {
      icon: Phone,
      title: 'Call (with parents)',
      description: 'For complex custom projects',
      contact: '(555) 123-ARYA',
      action: 'Call Now'
    }
  ]

  const orderProcess = [
    {
      step: 1,
      title: 'Contact Me',
      description: 'Tell me what you want to order or your custom idea'
    },
    {
      step: 2,
      title: 'Design & Quote',
      description: 'I\'ll create a design and give you a fair price'
    },
    {
      step: 3,
      title: 'Print & Ship',
      description: 'I\'ll 3D print your order and ship it safely'
    },
    {
      step: 4,
      title: 'Enjoy!',
      description: 'Play with your awesome new 3D printed creation!'
    }
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold gradient-text mb-6">
            Let's Create Something Amazing!
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to order or have questions? I'd love to hear from you! 
            My parents help me with all communications, so don't worry - you're in good hands.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl text-center card-hover"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <method.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-xl font-semibold text-gray-800 mb-2">
                {method.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {method.description}
              </p>
              <p className="font-semibold text-purple-600 mb-4">
                {method.contact}
              </p>
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105">
                {method.action}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Order Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="font-display text-2xl font-bold text-center text-gray-800 mb-12">
            How Ordering Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {orderProcess.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  {step.step}
                </div>
                <h4 className="font-display text-lg font-semibold text-gray-800 mb-2">
                  {step.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quick Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl text-center">
            <Clock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <h4 className="font-display text-lg font-semibold text-gray-800 mb-2">
              Response Time
            </h4>
            <p className="text-gray-600">
              I check messages after school and on weekends!
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-2xl text-center">
            <MapPin className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <h4 className="font-display text-lg font-semibold text-gray-800 mb-2">
              Shipping
            </h4>
            <p className="text-gray-600">
              I ship anywhere in the US with careful packaging!
            </p>
          </div>
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-2xl text-center">
            <Heart className="w-8 h-8 text-pink-600 mx-auto mb-3" />
            <h4 className="font-display text-lg font-semibold text-gray-800 mb-2">
              Satisfaction
            </h4>
            <p className="text-gray-600">
              If you're not happy, I'll make it right!
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-center text-white"
        >
          <Send className="w-12 h-12 mx-auto mb-4" />
          <h3 className="font-display text-2xl font-bold mb-4">
            Ready to Start Your Order?
          </h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            I can't wait to create something special just for you! Every order helps me learn more 
            about business and saves money for my future. Thank you for supporting a young entrepreneur!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-50 transition-all duration-200 transform hover:scale-105">
              Email Me Now
            </button>
            <button className="bg-purple-700 text-white font-semibold px-8 py-4 rounded-xl hover:bg-purple-800 transition-all duration-200 transform hover:scale-105">
              Text for Quick Questions
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}