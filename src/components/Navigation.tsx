import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Zap, Star, Phone, UserPlus } from 'lucide-react';

const Navigation = () => {
  return (
    <div className="w-full bg-black/90 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <Tabs defaultValue="solutions" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-transparent border-none h-16">
            
            <TabsTrigger 
              value="solutions" 
              className="flex items-center gap-2 text-white/70 hover:text-white data-[state=active]:text-primary data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none h-full"
            >
              <Zap className="w-4 h-4" />
              <span className="hidden sm:inline">Solutions</span>
            </TabsTrigger>
            <TabsTrigger 
              value="reviews" 
              className="flex items-center gap-2 text-white/70 hover:text-white data-[state=active]:text-primary data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none h-full"
            >
              <Star className="w-4 h-4" />
              <span className="hidden sm:inline">Reviews</span>
            </TabsTrigger>
            <TabsTrigger 
              value="customer-intake" 
              className="flex items-center gap-2 text-white/70 hover:text-white data-[state=active]:text-primary data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none h-full"
            >
              <UserPlus className="w-4 h-4" />
              <span className="hidden sm:inline">Customer Intake</span>
            </TabsTrigger>
            <TabsTrigger 
              value="contact" 
              className="flex items-center gap-2 text-white/70 hover:text-white data-[state=active]:text-primary data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none h-full"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Contact</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="reviews" className="mt-0">
            <div className="min-h-screen bg-gradient-to-br from-black to-primary-dark">
              <div className="container mx-auto px-4 py-20">
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
            </div>
          </TabsContent>

          <TabsContent value="customer-intake" className="mt-0">
            <div className="min-h-screen bg-black">
              <div className="container mx-auto px-4 py-8">
                <div className="bg-black rounded-lg border border-white/10 shadow-lg">
                  <div className="p-8">
                    <div className="text-center mb-8">
                      <h1 className="text-3xl font-bold text-white mb-4">Customer Intake Form</h1>
                      <p className="text-white/70 text-lg">Please fill out the information below to get started with our AI-powered order taking system.</p>
                    </div>
                    
                    <div className="w-full">
                      <iframe 
                        src="https://docs.google.com/forms/d/e/1FAIpQLSekLGoFQbkGpuCeH0hA_POd5OxYufgnrgn-EotrsihDpyJiFw/viewform?embedded=true"
                        width="100%"
                        height="800"
                        frameBorder="0"
                        className="rounded-lg"
                        title="Customer Intake Form"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Navigation;
