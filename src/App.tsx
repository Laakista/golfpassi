import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import UKK from "./pages/UKK";
import Yhteys from "./pages/Yhteys";
import Pelimatkat from "./pages/Pelimatkat";
import PGAPros from "./pages/PGAPros";
import DestinationPage from "./pages/DestinationPage";
import YksiloidytMatkat from "./pages/YksiloidytMatkat";
import Opetusmatkat from "./pages/Opetusmatkat";
import LongStay from "./pages/LongStay";
import Teemamatkat from "./pages/Teemamatkat";
import Akkilahdot from "./pages/Akkilahdot";
import Meista from "./pages/Meista";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ukk" element={<UKK />} />
          <Route path="/yhteys" element={<Yhteys />} />
          <Route path="/pelimatkat" element={<Pelimatkat />} />
          <Route path="/pelimatkat/*" element={<Pelimatkat />} />
          <Route path="/pelimatkat/:country/:destination/:tripId" element={<DestinationPage />} />
          <Route path="/info/pga-prot" element={<PGAPros />} />
          <Route path="/info/meista" element={<Meista />} />
          <Route path="/yksiloidyt-matkat" element={<YksiloidytMatkat />} />
          <Route path="/opetusmatkat" element={<Opetusmatkat />} />
          <Route path="/long-stay" element={<LongStay />} />
          <Route path="/teemamatkat" element={<Teemamatkat />} />
          <Route path="/akkilahdot" element={<Akkilahdot />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
