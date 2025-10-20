import React from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Mail } from "lucide-react";
import leaf from "@/assets/leaf.png";
export default function FooterAnimated() {
  return (
    <footer className="relative overflow-hidden bg-[#d5e8c7] text-[#2f3e1f] mt-10 rounded-t-2xl shadow-inner">
      {/* Lá đung đưa */}
      <motion.img
        src="/assets/leaf.png"
        alt="Lá"
        className="absolute top-0 left-8 w-10 opacity-70"
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.img
        src="/assets/leaf.png"
        alt="lá"
        className="absolute top-4 right-10 w-12 opacity-60"
        animate={{ rotate: [0, -4, 4, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6 z-10 relative">
        {/* Cột 1 */}
        <div>
          <h3 className="text-lg font-semibold mb-2">🐾 Truyện Nhà Meo</h3>
          <p className="text-sm leading-relaxed">
            Nơi chia sẻ những câu chuyện ấm áp, nhẹ nhàng và đầy cảm xúc dành cho mọi độc giả.
          </p>
        </div>

        {/* Cột 2 */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Liên kết nhanh</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/" className="hover:text-[#4c7a34] transition">Trang chủ</a></li>
            <li><a href="/the-loai" className="hover:text-[#4c7a34] transition">Thể loại</a></li>
            <li><a href="/dau-trang" className="hover:text-[#4c7a34] transition">Dấu trang</a></li>
          </ul>
        </div>

        {/* Cột 3 */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Kết nối với Meo 🐱</h3>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-[#4c7a34]"><Facebook size={20} /></a>
            <a href="#" aria-label="Instagram" className="hover:text-[#4c7a34]"><Instagram size={20} /></a>
            <a href="mailto:contact@meostory.vn" aria-label="Email" className="hover:text-[#4c7a34]"><Mail size={20} /></a>
          </div>
        </div>
      </div>

      {/* Mèo nằm ngủ */}
      <motion.img
        src="/assets/sleepy-cat.png"
        alt="Meo"
        className="absolute bottom-0 right-10 w-32 md:w-40 opacity-90"
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Chữ bản quyền */}
      <div className="text-center text-sm py-4 border-t border-[#b6d5a3] bg-[#d5e8c7]/70 backdrop-blur-sm relative z-10">
        © {new Date().getFullYear()} Truyện Nhà Meo 🐾 — Mọi quyền được bảo lưu.
      </div>
    </footer>
  );
}
