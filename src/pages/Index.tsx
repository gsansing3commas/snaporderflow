
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
  Moon, 
  ShoppingCart, 
  Pizza, 
  HeartHandshake
} from 'lucide-react';
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

      {/* Why Choose Us Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 mb-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Choose Us</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-purple-600 mx-auto"></div>
            <p className="text-xl text-gray-300 mt-4 max-w-2xl mx-auto">
              Our AI-powered order system delivers real results for food service businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Cost Savings */}
            <div className="glass-card p-6 hover:scale-105 transition-all duration-500 group overflow-hidden relative">
              <div className="absolute -right-4 -top-4 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-all"></div>
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400/20 to-emerald-600/20 flex items-center justify-center">
                  <DollarSign className="w-10 h-10 text-green-400 group-hover:animate-float" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-center">Cost Savings</h3>
              <p className="stats-number text-center">35%</p>
              <p className="text-gray-300 text-center text-sm mt-2">Cut order-taking costs with 24/7 bot service</p>
            </div>
            
            {/* Upsell */}
            <div className="glass-card p-6 hover:scale-105 transition-all duration-500 group overflow-hidden relative">
              <div className="absolute -right-4 -top-4 w-16 h-16 bg-gradient-to-br from-orange-400 to-red-600 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-all"></div>
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400/20 to-red-600/20 flex items-center justify-center">
                  <Pizza className="w-10 h-10 text-orange-400 group-hover:animate-spin-slow" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-center">Upsell</h3>
              <p className="stats-number text-center">20%</p>
              <p className="text-gray-300 text-center text-sm mt-2">Increase ticket sizes with smart suggestions</p>
            </div>
            
            {/* Speed */}
            <div className="glass-card p-6 hover:scale-105 transition-all duration-500 group overflow-hidden relative">
              <div className="absolute -right-4 -top-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-all"></div>
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400/20 to-indigo-600/20 flex items-center justify-center">
                  <Clock className="w-10 h-10 text-blue-400 group-hover:animate-spin-slow" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-center">Speed</h3>
              <p className="stats-number text-center">50%</p>
              <p className="text-gray-300 text-center text-sm mt-2">Slash order wait times with instant processing</p>
            </div>
            
            {/* After Hours */}
            <div className="glass-card p-6 hover:scale-105 transition-all duration-500 group overflow-hidden relative">
              <div className="absolute -right-4 -top-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-violet-600 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-all"></div>
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400/20 to-violet-600/20 flex items-center justify-center">
                  <Moon className="w-10 h-10 text-purple-400 group-hover:animate-float" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-center">After Hours</h3>
              <p className="stats-number text-center">80%</p>
              <p className="text-gray-300 text-center text-sm mt-2">Process late-night orders automatically</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {/* Rush Hour */}
            <div className="glass-card p-6 hover:scale-105 transition-all duration-500 group overflow-hidden relative">
              <div className="absolute -right-4 -top-4 w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-all"></div>
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400/20 to-yellow-600/20 flex items-center justify-center">
                  <ShoppingCart className="w-10 h-10 text-amber-400 group-hover:animate-bounce" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-center">Rush Hour Rescue</h3>
              <p className="stats-number text-center">10x</p>
              <p className="text-gray-300 text-center text-sm mt-2">Handle more lunch rush orders at once</p>
            </div>
            
            {/* Abandoned Orders */}
            <div className="glass-card p-6 hover:scale-105 transition-all duration-500 group overflow-hidden relative">
              <div className="absolute -right-4 -top-4 w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-all"></div>
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-400/20 to-cyan-600/20 flex items-center justify-center">
                  <Bot className="w-10 h-10 text-teal-400 group-hover:animate-float" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-center">Drop-Off Defender</h3>
              <p className="stats-number text-center">30%</p>
              <p className="text-gray-300 text-center text-sm mt-2">Save abandoned orders with smart nudges</p>
            </div>
            
            {/* Guest Delight */}
            <div className="glass-card p-6 hover:scale-105 transition-all duration-500 group overflow-hidden relative">
              <div className="absolute -right-4 -top-4 w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-600 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-all"></div>
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-400/20 to-rose-600/20 flex items-center justify-center">
                  <HeartHandshake className="w-10 h-10 text-pink-400 group-hover:animate-pulse" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-center">Guest Delight</h3>
              <p className="stats-number text-center">40%</p>
              <p className="text-gray-300 text-center text-sm mt-2">Higher satisfaction with accurate ordering</p>
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
