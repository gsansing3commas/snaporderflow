
import React from 'react';
import { Languages, MessageSquare, Phone, Zap, Globe, Bot, Users } from 'lucide-react';
import ChatBubble from '../components/ChatBubble';

const Index = () => {
  const handlePhoneCall = () => {
    window.location.href = 'tel:9122549970';
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 hero-gradient opacity-90" />
        <div className="absolute inset-0 bg-grid" />
        
        <div className="container relative mx-auto px-4 py-20 text-center">
          <div className="space-y-8 animate-fade-up">
            <h1 className="text-5xl md:text-7xl text-white font-bold leading-tight">
              AI-Powered Order Taking
              <span className="block text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-white animate-pulse">
                Streamline Your Customer Experience with Smart, Efficient Service
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Transform your customer experience with multilingual AI that never keeps anyone waiting
            </p>
            <button 
              className="btn-primary group"
              onClick={handlePhoneCall}
            >
              Tap to Try AI Ordering!
              <Phone className="inline-block ml-2 w-5 h-5 group-hover:animate-pulse" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gradient-to-b from-black to-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 hover:scale-105 transition-all duration-500 group">
              <Globe className="w-12 h-12 text-primary mb-6 group-hover:animate-spin" />
              <h3 className="text-2xl font-bold mb-4">32 Languages</h3>
              <p className="text-gray-400">Real-time translation for orders and communication in any language</p>
            </div>
            
            <div className="glass-card p-8 hover:scale-105 transition-all duration-500 group">
              <MessageSquare className="w-12 h-12 text-primary mb-6 group-hover:animate-pulse" />
              <h3 className="text-2xl font-bold mb-4">Multi-Channel</h3>
              <p className="text-gray-400">Seamless integration with chat, SMS, phone, and social media</p>
            </div>
            
            <div className="glass-card p-8 hover:scale-105 transition-all duration-500 group">
              <Users className="w-12 h-12 text-primary mb-6 group-hover:animate-bounce" />
              <h3 className="text-2xl font-bold mb-4">Rush Hour Ready</h3>
              <p className="text-gray-400">Handle multiple orders simultaneously with perfect accuracy</p>
            </div>
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

      {/* Final CTA */}
      <section className="py-32 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container relative mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Ready to Transform Your <br />Customer Experience?
          </h2>
          <button className="btn-primary text-lg group">
            Get Started
            <Zap className="inline-block ml-2 w-5 h-5 group-hover:animate-pulse" />
          </button>
        </div>
      </section>
      <ChatBubble />
    </div>
  );
};

export default Index;
