
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Use basename only in production - must match vite.config.ts base
const basename = import.meta.env.PROD ? "/snaporderflow" : "";

console.log("=== APP.TSX DEBUG INFO ===");
console.log("App.tsx - Environment:", import.meta.env.MODE);
console.log("App.tsx - Is Production:", import.meta.env.PROD);
console.log("App.tsx - Basename:", basename);
console.log("App.tsx - Current URL:", window.location.href);
console.log("App.tsx - Current pathname:", window.location.pathname);
console.log("App.tsx - Current search:", window.location.search);
console.log("App.tsx - Current hash:", window.location.hash);

const App = () => {
  console.log("=== APP COMPONENT RENDERING ===");
  console.log("App component is rendering now");
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={basename}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
