'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  Mail,
  Phone,
  MessageCircle,
  Star,
  Printer,
  Puzzle,
  Gamepad2,
  Heart,
  Sparkles,
  ArrowRight,
  Clock,
  Award,
  Users
} from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Adorable Bunnies',
    description: 'Cute 3D printed bunnies in various poses. Perfect companions for play and decoration.',
    price: '$3',
    category: 'Animal',
    image: '/bunnies.jpeg',
    features: ['Multiple poses', 'Smooth finish', 'Kid-friendly'],
    popular: true
  },
  {
    id: 2,
    name: 'Playful Dogs',
    description: 'Friendly 3D printed dogs that make perfect desk companions and toys.',
    price: '$5',
    category: 'Animal',
    image: '/dogs.jpg',
    features: ['Realistic details', 'Various breeds', 'Durable material']
  },
  {
    id: 3,
    name: 'Majestic Dragons',
    description: 'Detailed dragon figures with intricate scales and powerful poses.',
    price: '$18',
    category: 'Fantasy',
    image: '/dragons.jpg',
    features: ['Intricate details', 'Multiple sizes', 'Fantasy collection'],
    popular: true
  },
  {
    id: 4,
    name: 'Beautiful Flower Vase',
    description: 'Elegant 3D printed vases perfect for small flowers and decoration.',
    price: '$16',
    category: 'Decoration',
    image: '/flowervase.jpg',
    features: ['Elegant design', 'Water-resistant', 'Perfect size']
  },
  {
    id: 5,
    name: 'Cute Penguins',
    description: 'Adorable penguin figures that waddle their way into your heart.',
    price: '$2',
    category: 'Animal',
    image: '/penguins.jpg',
    features: ['Adorable design', 'Smooth finish', 'Collectible series']
  }
];

const stats = [
  { icon: Award, label: 'Products Created', value: '50+' },
  { icon: Users, label: 'Happy Customers', value: '25+' },
  { icon: Clock, label: 'Years Experience', value: '2' },
  { icon: Star, label: 'Customer Rating', value: '5.0' }
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const categories = ['All', 'Animal', 'Fantasy', 'Decoration'];
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-lg">
                <Printer className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Nimbleship's 3D Creations
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#products" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Products</a>
              <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">About</a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Contact</a>
            </div>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              Order Now
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full blur-3xl transform -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto text-center relative">
          <div className="mb-8">
            <Badge className="mb-4 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border-purple-200">
              <Sparkles className="h-4 w-4 mr-1" />
              10-Year-Old Entrepreneur
            </Badge>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Nimbleship's 3D {' '}
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
              Collections
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            I'm 10 years old and I create amazing 3D printed toys and fidgets! 
            Each piece is designed with care and printed with precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 group">
              View My Products
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-purple-200 hover:bg-purple-50">
              Learn My Story
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/80 transition-all duration-300">
                <stat.icon className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              My 3D Printed Creations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Every product is carefully designed and 3D printed with high-quality materials. 
              Perfect for play, stress relief, or as unique gifts!
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category 
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700" 
                    : "hover:bg-purple-50 border-purple-200"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card 
                key={product.id} 
                className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/60 backdrop-blur-sm hover:bg-white/90 hover:-translate-y-2"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {product.popular && (
                      <Badge className="absolute top-3 left-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-white border-0">
                        <Star className="h-3 w-3 mr-1" />
                        Popular
                      </Badge>
                    )}
                    <div className="absolute top-3 right-3">
                      <Badge variant="secondary" className="bg-white/90 text-gray-700">
                        {product.category}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2 group-hover:text-purple-600 transition-colors">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 mb-4 line-clamp-2">
                    {product.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.features.map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-purple-200 text-purple-700">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-purple-600">{product.price}</span>
                    <Button 
                      size="sm"
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      Order Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                My 3D Printing Journey
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Hi! I'm Arya, and I'm 10 years old. I started 3D printing when I was 8 because 
                  I loved creating things that didn't exist before. What started as a hobby has 
                  become my small business!
                </p>
                <p>
                  I design and print toys, fidgets, and puzzles that are fun to play with and 
                  help people relax. Each product is made with care and tested by me and my 
                  friends to make sure they're awesome!
                </p>
                <p>
                  I use high-quality, safe materials and take pride in every single print. 
                  My goal is to bring joy to other kids and adults through my 3D creations.
                </p>
              </div>
              <div className="mt-8 flex items-center space-x-4">
                <div className="flex items-center text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600 font-medium">5.0 stars from happy customers</span>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-400 to-blue-400 rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <Puzzle className="h-12 w-12 mx-auto mb-3 opacity-80" />
                    <div className="text-2xl font-bold">50+</div>
                    <div className="text-sm opacity-80">Designs Created</div>
                  </div>
                  <div className="text-center">
                    <Heart className="h-12 w-12 mx-auto mb-3 opacity-80" />
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm opacity-80">Made with Love</div>
                  </div>
                  <div className="text-center">
                    <Gamepad2 className="h-12 w-12 mx-auto mb-3 opacity-80" />
                    <div className="text-2xl font-bold">25+</div>
                    <div className="text-sm opacity-80">Happy Customers</div>
                  </div>
                  <div className="text-center">
                    <Printer className="h-12 w-12 mx-auto mb-3 opacity-80" />
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm opacity-80">Printing Time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Order?
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Contact me to place your order! I'll work with you to create the perfect 3D printed 
            toy or fidget. Custom colors and designs available!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-shadow bg-white/60 backdrop-blur-sm border-0">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-600 mb-4">Send me your order details</p>
                <Button variant="outline" className="hover:bg-purple-50 border-purple-200">
                  shipnimble@gmail.com
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow bg-white/60 backdrop-blur-sm border-0">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-r from-green-500 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
                <p className="text-gray-600 mb-4">Quick messages and photos</p>
                <Button variant="outline" className="hover:bg-green-50 border-green-200">
                  Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow bg-white/60 backdrop-blur-sm border-0">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-gray-600 mb-4">Call to discuss your order</p>
                <Button variant="outline" className="hover:bg-blue-50 border-blue-200">
                 +1 (734) 644-2643
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-8 border border-purple-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Order Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">What I Need:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Which product you want</li>
                  <li>• Preferred colors</li>
                  <li>• Quantity needed</li>
                  <li>• Any custom requests</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">Order Details:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Processing time: 3-5 days</li>
                  <li>• Local pickup or shipping available</li>
                  <li>• Payment via parent's PayPal</li>
                  <li>• Custom orders welcome!</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center items-center space-x-2 mb-6">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-lg">
              <Printer className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold">Nimbleship's 3D Creations</span>
          </div>
          <p className="text-gray-400 mb-6">
            Creating joy through 3D printing, one toy at a time.
          </p>
          <Separator className="bg-gray-700 mb-6" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Nimbleship's 3D Creations. Made with ❤️ by a 10-year-old entrepreneur.
            </p>
            <div className="flex space-x-6">
              <a href="#products" className="text-gray-400 hover:text-white transition-colors">Products</a>
              <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}