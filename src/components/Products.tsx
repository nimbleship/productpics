'use client'

import { motion } from 'framer-motion'
import { Star, Heart, Zap, Sparkles } from 'lucide-react'

export default function Products() {
  const products = [
    {
      id: 1,
      name: 'Rainbow Fidget Spinner',
      price: '$8',
      image: 'https://images.pexels.com/photos/6069112/pexels-photo-6069112.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Super smooth spinning action with rainbow colors that change in the light!',
      category: 'Fidgets',
      popular: true
    },
    {
      id: 2,
      name: 'Mini Dragon Collection',
      price: '$12',
      image: 'https://images.pexels.com/photos/6069113/pexels-photo-6069113.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Cute articulated dragons that move and pose. Available in 6 colors!',
      category: 'Toys',
      popular: false
    },
    {
      id: 3,
      name: 'Infinity Cube',
      price: '$10',
      image: 'https://images.pexels.com/photos/6069114/pexels-photo-6069114.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Endless flipping fun! Perfect for stress relief and keeping hands busy.',
      category: 'Fidgets',
      popular: true
    },
    {
      id: 4,
      name: 'Flexi Animals',
      price: '$6',
      image: 'https://images.pexels.com/photos/6069115/pexels-photo-6069115.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Bendy, stretchy animals that are super fun to play with!',
      category: 'Toys',
      popular: false
    },
    {
      id: 5,
      name: 'Puzzle Keychains',
      price: '$5',
      image: 'https://images.pexels.com/photos/6069116/pexels-photo-6069116.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Mini puzzles you can take anywhere. Great for backpacks!',
      category: 'Accessories',
      popular: false
    },
    {
      id: 6,
      name: 'Spinning Top Deluxe',
      price: '$9',
      image: 'https://images.pexels.com/photos/6069117/pexels-photo-6069117.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'The longest-spinning top you\'ve ever seen! Challenge your friends!',
      category: 'Toys',
      popular: true
    }
  ]

  const categories = ['All', 'Toys', 'Fidgets', 'Accessories']

  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold gradient-text mb-6">
            My Amazing Creations
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Each product is carefully designed and 3D printed with love. I use high-quality, 
            kid-safe materials in vibrant colors that make every piece special!
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-full border-2 border-purple-200 hover:border-purple-400 hover:bg-purple-50 transition-all duration-200 transform hover:scale-105"
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover relative"
            >
              {product.popular && (
                <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                  <Star className="w-4 h-4 mr-1" />
                  Popular
                </div>
              )}
              
              <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                  <span className="font-display text-xl font-bold text-gray-800">
                    {product.price}
                  </span>
                </div>
                
                <h3 className="font-display text-xl font-semibold text-gray-800 mb-3">
                  {product.name}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-sm text-gray-500 ml-2">(5.0)</span>
                  </div>
                  
                  <button className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105">
                    <Heart className="w-4 h-4" />
                    <span className="font-semibold">Order Now</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <Sparkles className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="font-display text-2xl font-bold text-gray-800 mb-4">
              Custom Orders Welcome!
            </h3>
            <p className="text-gray-600 mb-6">
              Have a special idea? I love creating custom designs! Just tell me what you're thinking, 
              and I'll work with you to bring it to life.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
            >
              <Zap className="w-5 h-5 mr-2" />
              Request Custom Design
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}