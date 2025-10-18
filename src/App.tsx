import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import HeaderMeo from "./HeaderMeo";
import FloatingWatermelons from "./FloatingWatermelons";

// ✅ Khởi tạo QueryClient chỉ 1 lần
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* Các tiện ích toàn cục */}
        <Toaster />
        <Sonner />

        {/* Toàn bộ trang */}
        <div className="relative min-h-screen bg-[#f8fff5] overflow-hidden">
          {/* Nền dưa hấu toàn trang 🍉 */}
          <FloatingWatermelons count={30} area="page" />

          {/* Header */}
          <HeaderMeo />

          {/* Router chính */}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
