
import React from 'react';
import { 
  Languages, 
  MessageSquare, 
  Phone, 
  Zap, 
  Globe, 
  Bot, 
  Users, 
  DollarSign, 
  Clock, 
  ShoppingCart, 
  Pizza, 
  HeartHandshake
} from 'lucide-react';
import ChatBubble from '../components/ChatBubble';
import { ProfitCalculator } from '../components/ProfitCalculator';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const handleGetStarted = () => {
  window.open('https://www.paypal.com/ncp/payment/UF3DQG9FZ7YJJ', '_blank');
};

const Index = () => {
  console.log("=== INDEX COMPONENT DEBUG ===");
  console.log("Index component is rendering");
  console.log("Index component - current location:", window.location);
  
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 hero-gradient opacity-90" />
        <div className="absolute inset-0 bg-grid" />
        
        <div className="container relative mx-auto px-4 py-16 text-center">
          <div className="space-y-8 animate-fade-up">
            <h1 className="text-5xl md:text-7xl text-white font-bold leading-tight">
              AI-Powered Order Taking
              <span className="block text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-white animate-pulse">
                Streamline Your Customer Experience with Smart, Efficient Service
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Profit Calculator Section - Moved to top */}
      <ProfitCalculator />
      
      {/* Features Grid */}
      <section className="py-24 bg-gradient-to-b from-black to-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 hover:scale-105 transition-all duration-500 group overflow-hidden relative">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br from-primary to-purple-600 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-all duration-700"></div>
              <Languages className="w-12 h-12 text-primary mb-6 group-hover:animate-float transition-all duration-700" />
              <h3 className="text-2xl font-bold mb-2">32 Languages</h3>
              <div className="h-1 w-12 bg-gradient-to-r from-primary to-purple-600 mb-4 group-hover:w-20 transition-all duration-500"></div>
              <p className="text-gray-400">Real-time translation for orders and communication in any language</p>
              <div className="mt-4 flex gap-2 flex-wrap">
                {["EN", "ES", "FR", "ZH", "DE"].map((lang) => (
                  <span key={lang} className="text-xs px-2 py-1 bg-white/10 rounded-full text-white/70">{lang}</span>
                ))}
                <span className="text-xs px-2 py-1 bg-primary/20 rounded-full text-white/70">+27</span>
              </div>
            </div>
            
            <div className="glass-card p-8 hover:scale-105 transition-all duration-500 group overflow-hidden relative">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-all duration-700"></div>
              <MessageSquare className="w-12 h-12 text-blue-400 mb-6 group-hover:animate-pulse" />
              <h3 className="text-2xl font-bold mb-2">Instant Order Processing</h3>
              <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-cyan-400 mb-4 group-hover:w-20 transition-all duration-500"></div>
              <p className="text-gray-400">Fast, reliable communication for seamless customer interactions</p>
              <div className="mt-4 flex gap-2">
                <span className="text-xs px-2 py-1 bg-white/10 rounded-full text-white/70">24/7</span>
                <span className="text-xs px-2 py-1 bg-white/10 rounded-full text-white/70">Real-time</span>
                <span className="text-xs px-2 py-1 bg-blue-500/20 rounded-full text-white/70">AI-powered</span>
              </div>
            </div>
            
            <div className="glass-card p-8 hover:scale-105 transition-all duration-500 group overflow-hidden relative">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-400 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-all duration-700"></div>
              <Users className="w-12 h-12 text-green-400 mb-6 group-hover:animate-bounce" />
              <h3 className="text-2xl font-bold mb-2">Rush Hour Ready</h3>
              <div className="h-1 w-12 bg-gradient-to-r from-green-500 to-emerald-400 mb-4 group-hover:w-20 transition-all duration-500"></div>
              <p className="text-gray-400">Handle multiple orders simultaneously with perfect accuracy</p>
              <div className="mt-4 grid grid-cols-3 gap-2">
                <div className="text-center">
                  <span className="text-lg font-bold text-green-400">10x</span>
                  <p className="text-xs text-white/70">Capacity</p>
                </div>
                <div className="text-center">
                  <span className="text-lg font-bold text-green-400">99%</span>
                  <p className="text-xs text-white/70">Accuracy</p>
                </div>
                <div className="text-center">
                  <span className="text-lg font-bold text-green-400">0</span>
                  <p className="text-xs text-white/70">Burnout</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-black to-primary-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Real businesses are boosting sales, saving time, and capturing missed orders with OrderChat.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                text: "Our missed calls went from constant frustration to almost zero. The system just picks them up and books orders.",
                author: "Local Pizzeria, NY"
              },
              {
                text: "Customers love that they can reach us on Facebook, Instagram, or text and still get the same fast response.",
                author: "Deli Owner, Chicago"
              },
              {
                text: "We didn't realize how much money was slipping through the cracks until this chat captured 95% of calls we were missing.",
                author: "Sandwich Shop, Florida"
              },
              {
                text: "The upsell prompts alone paid for the system in a week. Average order size jumped immediately.",
                author: "Burger Joint, Texas"
              },
              {
                text: "We save hours a day not chasing voicemails. Everything is logged and confirmed automatically.",
                author: "Cafe Owner, California"
              },
              {
                text: "The broadcast feature makes social posting effortless. Our IG stays active without me touching it.",
                author: "Bakery, Washington DC"
              },
              {
                text: "Being able to answer via SMS or Instagram is huge. Customers don't even need to call anymore.",
                author: "Juice Bar, Miami"
              },
              {
                text: "Fast install, no training needed. Staff just picked it up and ran with it.",
                author: "Coffee Shop, Seattle"
              },
              {
                text: "Call volume dropped, orders went up. Customers love chatting instead of waiting on hold.",
                author: "Food Truck, Austin"
              },
              {
                text: "Customers don't fall through the cracks anymore. We finally feel on top of everything.",
                author: "Family Diner, Ohio"
              },
              {
                text: "Order accuracy improved overnight. Fewer mistakes, happier customers.",
                author: "Grill House, Boston"
              },
              {
                text: "Finally, a system that works across phone, webchat, and socials without costing a fortune.",
                author: "Restaurant, Denver"
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-primary text-xl mb-3">★★★★★</div>
                <p className="text-gray-800 text-lg mb-4 leading-relaxed">"{testimonial.text}"</p>
                <p className="text-sm font-semibold text-gray-600">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Communication Channels */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-12">Connect Everywhere</h2>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {['WhatsApp', 'Facebook', 'Instagram', 'SMS', 'Phone'].map((channel) => (
              <div key={channel} 
                className="px-6 py-3 bg-black/30 rounded-full text-white/80 backdrop-blur-sm
                border border-white/10 hover:bg-primary/20 transition-all duration-300">
                {channel}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <ChatBubble />
      <Footer />
    </div>
  );
};

export default Index;
