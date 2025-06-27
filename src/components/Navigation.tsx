
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
                <div className="zf-backgroundBg min-h-screen">
                  <div className="zf-templateWidth">
                    <div className="zf-templateWrapper">
                      <div className="zf-tempHeadBdr">
                        <div className="zf-tempHeadContBdr">
                          <h1 className="zf-frmTitle">Customer Intake Form</h1>
                          <p className="zf-frmDesc">Please fill out the information below to get started with our AI-powered order taking system.</p>
                        </div>
                      </div>
                      
                      <div className="zf-tempFrmWrapper">
                        <div className="zf-tempContDiv zf-topAlign">
                          <label className="zf-labelName">Business Name <span className="zf-important">*</span></label>
                          <div className="zf-tempContDiv zf-large">
                            <input type="text" placeholder="Enter your business name" className="zf-form-field" />
                          </div>
                        </div>

                        <div className="zf-subContWrap">
                          <div className="zf-tempContDiv zf-topAlign">
                            <label className="zf-labelName">Contact Person <span className="zf-important">*</span></label>
                            <div className="zf-tempContDiv zf-large">
                              <input type="text" placeholder="Enter contact person name" className="zf-form-field" />
                            </div>
                          </div>
                        </div>

                        <div className="zf-subContWrap">
                          <div className="zf-tempContDiv zf-topAlign">
                            <label className="zf-labelName">Email Address <span className="zf-important">*</span></label>
                            <div className="zf-tempContDiv zf-large">
                              <input type="email" placeholder="Enter your email address" className="zf-form-field" />
                            </div>
                          </div>
                        </div>

                        <div className="zf-subContWrap">
                          <div className="zf-tempContDiv zf-topAlign">
                            <label className="zf-labelName">Phone Number <span className="zf-important">*</span></label>
                            <div className="zf-tempContDiv zf-large">
                              <input type="tel" placeholder="Enter your phone number" className="zf-form-field" />
                            </div>
                          </div>
                        </div>

                        <div className="zf-subContWrap">
                          <div className="zf-tempContDiv zf-topAlign">
                            <label className="zf-labelName">Business Type</label>
                            <div className="zf-tempContDiv zf-large">
                              <select className="zf-form-sBox">
                                <option value="">Select business type</option>
                                <option value="restaurant">Restaurant</option>
                                <option value="cafe">Cafe</option>
                                <option value="food-truck">Food Truck</option>
                                <option value="catering">Catering</option>
                                <option value="other">Other</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className="zf-subContWrap">
                          <div className="zf-tempContDiv zf-topAlign">
                            <label className="zf-labelName">Current Order Volume (per day)</label>
                            <div className="zf-tempContDiv zf-large">
                              <select className="zf-form-sBox">
                                <option value="">Select order volume</option>
                                <option value="1-20">1-20 orders</option>
                                <option value="21-50">21-50 orders</option>
                                <option value="51-100">51-100 orders</option>
                                <option value="100+">100+ orders</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className="zf-subContWrap">
                          <div className="zf-tempContDiv zf-topAlign">
                            <label className="zf-labelName">Primary Challenges</label>
                            <div className="zf-tempContDiv zf-large">
                              <textarea placeholder="Describe your current challenges with order taking..." className="zf-form-field"></textarea>
                            </div>
                          </div>
                        </div>

                        <div className="zf-subContWrap">
                          <div className="zf-tempContDiv zf-topAlign">
                            <label className="zf-labelName">Preferred Communication Channels</label>
                            <div className="zf-tempContDiv zf-oneColumns">
                              <span>
                                <input type="checkbox" id="whatsapp" />
                                <label htmlFor="whatsapp">WhatsApp</label>
                              </span>
                              <span>
                                <input type="checkbox" id="facebook" />
                                <label htmlFor="facebook">Facebook Messenger</label>
                              </span>
                              <span>
                                <input type="checkbox" id="phone" />
                                <label htmlFor="phone">Phone</label>
                              </span>
                              <span>
                                <input type="checkbox" id="sms" />
                                <label htmlFor="sms">SMS</label>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="zf-fmFooter">
                        <button type="submit" className="zf-submitColor">Submit Information</button>
                      </div>
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
