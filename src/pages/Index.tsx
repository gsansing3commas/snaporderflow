
import React from 'react';
import { Shield, Zap, Settings } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient min-h-[80vh] flex items-center relative overflow-hidden">
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="space-y-6 animate-fade-up">
            <h1 className="text-4xl md:text-6xl text-white max-w-4xl mx-auto leading-tight">
              Snap Orders, Zero Fees—AI for QSRs
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
              You pay $50 once, we markup customers—no ongoing costs
            </p>
            <button className="btn-primary text-lg">
              Start for $249
            </button>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-secondary py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="stats-number text-white">
              <div>39</div>
              <div className="text-base font-normal opacity-80">Orders/Day/Store</div>
            </div>
            <div className="stats-number text-white">
              <div>$50</div>
              <div className="text-base font-normal opacity-80">Net Cost</div>
            </div>
            <div className="stats-number text-white">
              <div>$0</div>
              <div className="text-base font-normal opacity-80">Ongoing Fees</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-subtle">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center mb-16">Why OrderSnapAI?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-12 h-12 text-primary" />,
                title: "Zero Fees for You",
                description: "$50 net upfront, no monthly cuts—save $5K-$11K vs. Slice/Uber"
              },
              {
                icon: <Zap className="w-12 h-12 text-primary" />,
                title: "Fast Customer Orders",
                description: "NLP webchat snaps 39 orders/day—customers love it"
              },
              {
                icon: <Settings className="w-12 h-12 text-primary" />,
                title: "We Handle It",
                description: "Markups ($25.28 pizza, $13.44 bagel) cover fees, you focus on food"
              }
            ].map((benefit, index) => (
              <div key={index} className="glass-card p-8 hover:scale-105 transition-transform duration-300">
                <div className="flex flex-col items-center text-center space-y-4">
                  {benefit.icon}
                  <h3 className="text-xl font-bold">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center text-primary mb-16">
            From Click to Cash in 3 Steps
          </h2>
          <div className="max-w-3xl mx-auto space-y-12">
            {[
              {
                title: "Customer Clicks 'Order Now'",
                description: "Hits our NLP webchat"
              },
              {
                title: "AI Takes the Order",
                description: "Parses 'two bagels' instantly"
              },
              {
                title: "You Cook, We Profit",
                description: "Order to POS, we markup $4.28/$3.44"
              }
            ].map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-subtle">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center mb-16">
            Your Cost: One-Time. Our Profit: Built-In
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="glass-card p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-4">$249 Upfront</div>
              <p className="text-xl mb-8">Net $50 after $199 refund, no fees after</p>
              <div className="space-y-4 mb-8">
                <div className="p-4 bg-white rounded-lg">
                  <strong>Pizza:</strong> $25.28 (we profit $3.25)
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <strong>Bagel:</strong> $13.44 (we profit $2.75)
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-8">Stripe fees covered, 39/day avg.</p>
              <button className="btn-primary">Join Now</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
