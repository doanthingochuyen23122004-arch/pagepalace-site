import React from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Mail } from "lucide-react";

// ✅ Import ảnh đúng cách (đặt trong src/assets/)
import leaf from "@/assets/leaf.png";
import sleepyCat from "@/assets/sleepy-cat.png";

export default function FooterAnimated() {
  return (
    <footer className="relative overflow-hidden bg-[#2e4d2c] text-white mt-10 rounded-t-2xl shadow-inner">
      {/* Lá đung đưa */}
      <motion.img
        src={leaf}
        alt="Lá cây"
        className="absolute top-0 left-8 w-10 opacity-80"
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.img
        src={leaf}
        alt="Lá cây"
        className="absolute top-4 right-10 w-12 opacity-70"
        animate={{ rotate: [0, -4, 4, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6 z-10 relative">
        {/* Cột 1 */}
        <div>
          <h3 className="text-lg font-semibold mb-2">🐾 Truyện Nhà Meo</h3>
          <p className="text-sm leading-relaxed text-gray-100">
            Nơi chia sẻ những câu chuyện ấm áp, nhẹ nhàng và đầy cảm xúc dành cho mọi độc giả.
          </p>
        </div>

        {/* Cột 2 */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Liên kết nhanh</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/" className="hover:text-[#b6e7a3] transition">Trang chủ</a></li>
            <li><a href="/the-loai" className="hover:text-[#b6e7a3] transition">Thể loại</a></li>
            <li><a href="/dau-trang" className="hover:text-[#b6e7a3] transition">Dấu trang</a></li>
          </ul>
        </div>

        {/* Cột 3 */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Kết nối với Meo 🐱</h3>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-[#b6e7a3]"><Facebook size={20} /></a>
            <a href="#" aria-label="Instagram" className="hover:text-[#b6e7a3]"><Instagram size={20} /></a>
            <a href="mailto:contact@meostory.vn" aria-label="Email" className="hover:text-[#b6e7a3]"><Mail size={20} /></a>
          </div>
        </div>
      </div>

      {/* Mèo nằm ngủ */}
      <motion.img
  src={sleepyCat}
  alt="Mèo ngủ"
  className="absolute top-16 right-0 w-[220px] md:w-[320px] opacity-90"
  animate={{ y: [0, -3, 0] }}
  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
/>

      {/* Chữ bản quyền */}
      <div className="text-center text-sm py-4 border-t border-[#4a7145] bg-[#2e4d2c]/90 backdrop-blur-sm relative z-10">
        © {new Date().getFullYear()} Truyện Nhà Meo 🐾 — Mọi quyền được bảo lưu.
      </div>
    </footer>
  );
}
