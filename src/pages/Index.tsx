
import React from 'react';
import { Sparkles, Zap, MousePointerClick } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-black opacity-90" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
        </div>
        
        <div className="container relative mx-auto px-4 py-20 text-center">
          <div className="space-y-8 animate-fade-up">
            <h1 className="text-5xl md:text-7xl text-white font-bold leading-tight">
              The Future of <br />
              <span className="bg-clip-text text-transparent bg-gradient 
              animate-pulse bg-gradient-to-r from-white via-primary to-white">
                Restaurant AI
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Transform your restaurant with next-generation AI technology
            </p>
            <button className="btn-primary group">
              Get Started
              <Sparkles className="inline-block ml-2 w-5 h-5 group-hover:animate-spin" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gradient-to-b from-black to-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 transform hover:scale-105 transition-all duration-500 group">
              <Zap className="w-12 h-12 text-primary mb-6 group-hover:animate-bounce" />
              <h3 className="text-2xl font-bold mb-4">Lightning Fast AI</h3>
              <p className="text-gray-400">Instant order processing powered by cutting-edge artificial intelligence</p>
            </div>
            
            <div className="glass-card p-8 transform hover:scale-105 transition-all duration-500 group">
              <MousePointerClick className="w-12 h-12 text-primary mb-6 group-hover:animate-pulse" />
              <h3 className="text-2xl font-bold mb-4">One-Click Setup</h3>
              <p className="text-gray-400">Seamless integration with your existing systems</p>
            </div>
            
            <div className="glass-card p-8 transform hover:scale-105 transition-all duration-500 group">
              <Sparkles className="w-12 h-12 text-primary mb-6 group-hover:animate-spin" />
              <h3 className="text-2xl font-bold mb-4">Smart Analytics</h3>
              <p className="text-gray-400">Real-time insights and predictive ordering patterns</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="container relative mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Ready to Transform?
          </h2>
          <button className="btn-primary text-lg group">
            Join the Future
            <Sparkles className="inline-block ml-2 w-5 h-5 group-hover:animate-spin" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Index;
