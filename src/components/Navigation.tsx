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
