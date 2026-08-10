import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Index from "./pages/Index";
import UKK from "./pages/UKK";
import Yhteys from "./pages/Yhteys";
import PgaProt from "./pages/PgaProt";
import MatkaSivu from "./pages/MatkaSivu";
import PyydaTarjous from "./pages/PyydaTarjous";
import Kohteet from "./pages/Kohteet";
import KohdeSivu from "./pages/KohdeSivu";
import Teemamatkat from "./pages/Teemamatkat";
import KategoriaSivu from "./pages/KategoriaSivu";
import Akkilahdot from "./pages/Akkilahdot";
import Meista from "./pages/Meista";
import Tiedotteet from "./pages/Tiedotteet";
import Uutinen from "./pages/Uutinen";
import Messut2027 from "./pages/Messut2027";
import SivuaEiLoydy from "./pages/SivuaEiLoydy";
import ScrollToTop from "./components/layout/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ukk" element={<UKK />} />
          <Route path="/yhteys" element={<Yhteys />} />
          <Route path="/pelimatkat/:country/:destination/:tripId" element={<MatkaSivu />} />
          <Route path="/info/pga-prot" element={<PgaProt />} />
          <Route path="/info/meista" element={<Meista />} />
          <Route path="/pyyda-tarjous" element={<PyydaTarjous />} />
          <Route path="/kohteet" element={<Kohteet />} />
          <Route path="/kohteet/:destinationId" element={<KohdeSivu />} />
          <Route path="/teemamatkat" element={<Teemamatkat />} />
          <Route path="/teemamatkat/:categoryId" element={<KategoriaSivu />} />
          <Route path="/akkilahdot" element={<Akkilahdot />} />
          <Route path="/info/tiedotteet" element={<Tiedotteet />} />
          <Route path="/info/tiedotteet/:id" element={<Uutinen />} />
          <Route path="/kampanja/messut-2027" element={<Messut2027 />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<SivuaEiLoydy />} />
        </Routes>
      </BrowserRouter>
      <Analytics />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
