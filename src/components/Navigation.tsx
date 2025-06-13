
import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Home, Info, Phone, Settings } from 'lucide-react';

const Navigation = () => {
  return (
    <div className="w-full bg-black/90 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <Tabs defaultValue="home" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-transparent border-none h-16">
            <TabsTrigger 
              value="home" 
              className="flex items-center gap-2 text-white/70 hover:text-white data-[state=active]:text-primary data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none h-full"
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Home</span>
            </TabsTrigger>
            <TabsTrigger 
              value="about" 
              className="flex items-center gap-2 text-white/70 hover:text-white data-[state=active]:text-primary data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none h-full"
            >
              <Info className="w-4 h-4" />
              <span className="hidden sm:inline">About</span>
            </TabsTrigger>
            <TabsTrigger 
              value="contact" 
              className="flex items-center gap-2 text-white/70 hover:text-white data-[state=active]:text-primary data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none h-full"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Contact</span>
            </TabsTrigger>
            <TabsTrigger 
              value="pricing" 
              className="flex items-center gap-2 text-white/70 hover:text-white data-[state=active]:text-primary data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none h-full"
            >
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Pricing</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default Navigation;
