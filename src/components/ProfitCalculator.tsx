
import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Calculator, Phone, TrendingUp } from 'lucide-react';

export const ProfitCalculator = () => {
  const [phoneOrders, setPhoneOrders] = useState(40);
  const [webOrders, setWebOrders] = useState(10);
  const [avgOrderValue, setAvgOrderValue] = useState(25);
  const [missedCallPercent, setMissedCallPercent] = useState(20);
  const [upsellRate, setUpsellRate] = useState(20);
  const [doorDashOrders, setDoorDashOrders] = useState(20);
  const [uberEatsOrders, setUberEatsOrders] = useState(15);

  const [results, setResults] = useState({
    missedPhoneRevenue: 0,
    abandonedWebRevenue: 0,
    upsellPotential: 0,
    laborWaste: 0,
    recoveredDoorDash: 0,
    recoveredUberEats: 0,
    revenueLift: 0,
    platformFees: 0,
    netGain: 0,
    totalMonthly: 0,
    totalAnnual: 0
  });

  const format = (num: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(num);

  const calculate = () => {
    const missedPhoneRevenue = phoneOrders * (missedCallPercent / 100) * avgOrderValue * 30;
    const abandonedWebRevenue = webOrders * 0.3 * avgOrderValue * 30;
    const upsellPotential = (phoneOrders + webOrders) * (upsellRate / 100) * (avgOrderValue * 0.35) * 30;
    const laborWaste = ((phoneOrders * 3) / 60) * 15 * 30;

    const recoveredDoorDash = doorDashOrders * avgOrderValue * 0.30 * 30;
    const recoveredUberEats = uberEatsOrders * avgOrderValue * 0.30 * 30;

    const revenueLift = phoneOrders * 1.15 * avgOrderValue * 0.15 * 30;
    const platformFees = (phoneOrders + webOrders) * 2.50 * 30;
    const netGain = revenueLift - platformFees;

    const totalMonthly = missedPhoneRevenue + abandonedWebRevenue + upsellPotential + recoveredDoorDash + recoveredUberEats + netGain;
    const totalAnnual = totalMonthly * 12;

    setResults({
      missedPhoneRevenue,
      abandonedWebRevenue,
      upsellPotential,
      laborWaste,
      recoveredDoorDash,
      recoveredUberEats,
      revenueLift,
      platformFees,
      netGain,
      totalMonthly,
      totalAnnual
    });
  };

  useEffect(() => {
    calculate();
  }, [phoneOrders, webOrders, avgOrderValue, missedCallPercent, upsellRate, doorDashOrders, uberEatsOrders]);

  const handlePhoneCall = () => {
    window.location.href = 'tel:9122549970';
  };

  const handleGetStarted = () => {
    window.open('https://square.link/u/VIGdRnHj', '_blank');
  };

  return (
    <section className="py-24 bg-gradient-to-b from-secondary to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Calculate Your Revenue Potential</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-purple-600 mx-auto"></div>
          <p className="text-xl text-gray-300 mt-4 max-w-2xl mx-auto">
            See exactly how much revenue you're missing and could recover with our AI ordering system
          </p>
        </div>

        <Tabs defaultValue="calculator" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-black/30 backdrop-blur-sm">
            <TabsTrigger value="calculator" className="text-white data-[state=active]:bg-primary data-[state=active]:text-white">
              <Calculator className="w-4 h-4 mr-2" />
              Revenue Calculator
            </TabsTrigger>
            <TabsTrigger value="demo" className="text-white data-[state=active]:bg-primary data-[state=active]:text-white">
              <Phone className="w-4 h-4 mr-2" />
              Try Our System
            </TabsTrigger>
          </TabsList>

          <TabsContent value="calculator">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="glass-card border-white/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Calculator className="w-5 h-5 mr-2 text-primary" />
                    Your Restaurant Metrics
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Adjust these values to match your business
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="block text-white mb-2">Phone Orders/Day <span className="text-xs bg-white/10 px-2 py-1 rounded">Industry Avg: 40-75</span></label>
                    <Slider
                      value={[phoneOrders]}
                      onValueChange={(value) => setPhoneOrders(value[0])}
                      max={150}
                      step={1}
                      className="w-full"
                    />
                    <div className="text-primary font-bold text-xl mt-1">{phoneOrders} orders/day</div>
                  </div>

                  <div>
                    <label className="block text-white mb-2">Website Orders/Day <span className="text-xs bg-white/10 px-2 py-1 rounded">Range: 10-50</span></label>
                    <Slider
                      value={[webOrders]}
                      onValueChange={(value) => setWebOrders(value[0])}
                      max={100}
                      step={1}
                      className="w-full"
                    />
                    <div className="text-primary font-bold text-xl mt-1">{webOrders} orders/day</div>
                  </div>

                  <div>
                    <label className="block text-white mb-2">Average Order Value ($)</label>
                    <input
                      type="number"
                      value={avgOrderValue}
                      onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                      min="10"
                      max="100"
                      step="5"
                      className="w-full p-2 bg-black/30 border border-white/20 rounded text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-white mb-2">Missed Call % <span className="text-xs bg-white/10 px-2 py-1 rounded">Avg: 15-25%</span></label>
                    <Slider
                      value={[missedCallPercent]}
                      onValueChange={(value) => setMissedCallPercent(value[0])}
                      min={5}
                      max={40}
                      step={1}
                      className="w-full"
                    />
                    <div className="text-primary font-bold text-xl mt-1">{missedCallPercent}%</div>
                  </div>

                  <div>
                    <label className="block text-white mb-2">Upsell Rate <span className="text-xs bg-white/10 px-2 py-1 rounded">Top: 18-22%</span></label>
                    <Slider
                      value={[upsellRate]}
                      onValueChange={(value) => setUpsellRate(value[0])}
                      min={5}
                      max={30}
                      step={1}
                      className="w-full"
                    />
                    <div className="text-primary font-bold text-xl mt-1">{upsellRate}%</div>
                  </div>

                  <div>
                    <label className="block text-white mb-2">DoorDash Orders/Day</label>
                    <Slider
                      value={[doorDashOrders]}
                      onValueChange={(value) => setDoorDashOrders(value[0])}
                      max={100}
                      step={1}
                      className="w-full"
                    />
                    <div className="text-primary font-bold text-xl mt-1">{doorDashOrders} orders/day</div>
                  </div>

                  <div>
                    <label className="block text-white mb-2">Uber Eats Orders/Day</label>
                    <Slider
                      value={[uberEatsOrders]}
                      onValueChange={(value) => setUberEatsOrders(value[0])}
                      max={100}
                      step={1}
                      className="w-full"
                    />
                    <div className="text-primary font-bold text-xl mt-1">{uberEatsOrders} orders/day</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-white/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
                    Your Revenue Opportunity
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Monthly potential with our AI system
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-red-500/10 rounded border border-red-500/20">
                    <span className="text-white">📉 Missed Phone Revenue</span>
                    <span className="text-red-400 font-bold">{format(results.missedPhoneRevenue)}</span>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-red-500/10 rounded border border-red-500/20">
                    <span className="text-white">🛒 Abandoned Web Revenue</span>
                    <span className="text-red-400 font-bold">{format(results.abandonedWebRevenue)}</span>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-green-500/10 rounded border border-green-500/20">
                    <span className="text-white">🚀 Upsell Potential</span>
                    <span className="text-green-400 font-bold">{format(results.upsellPotential)}</span>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-red-500/10 rounded border border-red-500/20">
                    <span className="text-white">💸 Labor Waste</span>
                    <span className="text-red-400 font-bold">{format(results.laborWaste)}</span>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-green-500/10 rounded border border-green-500/20">
                    <span className="text-white">🍔 Recovered DoorDash Revenue</span>
                    <span className="text-green-400 font-bold">{format(results.recoveredDoorDash)}</span>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-green-500/10 rounded border border-green-500/20">
                    <span className="text-white">🍟 Recovered Uber Eats Revenue</span>
                    <span className="text-green-400 font-bold">{format(results.recoveredUberEats)}</span>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-green-500/10 rounded border border-green-500/20">
                    <span className="text-white">💰 Revenue Lift (15% Markup)</span>
                    <span className="text-green-400 font-bold">{format(results.revenueLift)}</span>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-red-500/10 rounded border border-red-500/20">
                    <span className="text-white">📱 Platform Fees ($2.50/Order)</span>
                    <span className="text-red-400 font-bold">{format(results.platformFees)}</span>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-yellow-500/10 rounded border border-yellow-500/20">
                    <span className="text-white">🤑 Net Gain From Our System</span>
                    <span className="text-yellow-400 font-bold">{format(results.netGain)}</span>
                  </div>

                  <div className="border-t border-white/20 pt-4">
                    <div className="flex justify-between items-center p-4 bg-primary/20 rounded border border-primary/40">
                      <span className="text-white font-semibold">💰 Total Monthly Opportunity</span>
                      <span className="text-primary font-bold text-xl">{format(results.totalMonthly)}</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-primary/20 rounded border border-primary/40 mt-2">
                      <span className="text-white font-semibold">📈 Annual Potential</span>
                      <span className="text-primary font-bold text-xl">{format(results.totalAnnual)}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
                    <button 
                      onClick={handlePhoneCall}
                      className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                      📞 Try It Now - Call (912) 254-9970
                    </button>
                    <button 
                      onClick={handleGetStarted}
                      className="btn-primary"
                    >
                      🚀 Get Started Today
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="demo">
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="text-white text-center">Experience Our AI Ordering System</CardTitle>
                <CardDescription className="text-gray-400 text-center">
                  Call now to test our AI assistant and see how it handles your orders
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <div className="space-y-4">
                  <div className="text-6xl">📞</div>
                  <h3 className="text-2xl font-bold text-white">Ready to Try Our AI?</h3>
                  <p className="text-gray-300 max-w-md mx-auto">
                    Call our demo line to experience firsthand how our AI assistant handles orders in 32 languages, processes upsells, and never misses a call.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <button 
                    onClick={handlePhoneCall}
                    className="btn-primary text-xl py-4 px-8"
                  >
                    📞 Call (912) 254-9970 Now
                  </button>
                  <p className="text-sm text-gray-400">
                    Available 24/7 • Try ordering in any language • Experience AI upselling
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                  <div className="bg-black/30 p-4 rounded-lg">
                    <div className="text-2xl mb-2">🌍</div>
                    <h4 className="font-semibold text-white">32 Languages</h4>
                    <p className="text-sm text-gray-400">Order in any language</p>
                  </div>
                  <div className="bg-black/30 p-4 rounded-lg">
                    <div className="text-2xl mb-2">🚀</div>
                    <h4 className="font-semibold text-white">Smart Upsells</h4>
                    <p className="text-sm text-gray-400">AI suggests relevant add-ons</p>
                  </div>
                  <div className="bg-black/30 p-4 rounded-lg">
                    <div className="text-2xl mb-2">⚡</div>
                    <h4 className="font-semibold text-white">Never Busy</h4>
                    <p className="text-sm text-gray-400">24/7 availability</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
