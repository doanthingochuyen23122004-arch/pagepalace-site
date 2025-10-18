import { useEffect, useRef } from "react";


/**
 * FloatingWatermelons 🍉
 * - Rải các miếng dưa hấu động nhẹ trên nền section hoặc toàn trang.
 * - Dùng cho trang "Truyện Nhà Mèo" tạo cảm giác vui tươi, chill.
 *
 * 🔧 Props:
 *  count: số lượng dưa hấu (default: 20)
 *  sizes: mảng kích thước (px)
 *  image: đường dẫn ảnh (public hoặc import)
 *  intensity: độ mờ tổng thể (0–1)
 *  area: 'section' | 'page' → dùng toàn trang hay trong 1 vùng
 */

export default function FloatingWatermelons({
  count = 20,
  sizes = [28, 36, 48, 60],
  image = "/images/dua-hau.jpg",
  intensity = 0.9,
  area = "section",
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Xóa cũ khi render lại
    container.innerHTML = "";

    for (let i = 0; i < count; i++) {
      const melon = document.createElement("div");
      melon.className = "melon absolute pointer-events-none";

      // vị trí ngẫu nhiên
      melon.style.left = `${Math.random() * 100}%`;
      melon.style.top = `${Math.random() * 100}%`;

      // kích thước ngẫu nhiên
      const size = sizes[Math.floor(Math.random() * sizes.length)];
      melon.style.width = `${size}px`;
      melon.style.height = `${size}px`;

      // xoay & độ mờ
      melon.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`;
      melon.style.opacity = (0.3 + Math.random() * 0.7) * intensity;

      // delay và tốc độ riêng
      const delay = Math.random() * 5;
      const duration = 6 + Math.random() * 10;
      melon.style.animation = `melonFloat ${duration}s ease-in-out ${delay}s infinite alternate`;

      // hình ảnh dưa hấu
      melon.style.backgroundImage = `url(${image})`;
      melon.style.backgroundSize = "contain";
      melon.style.backgroundRepeat = "no-repeat";

      container.appendChild(melon);
    }

    return () => {
      container.innerHTML = "";
    };
  }, [count, sizes, image, intensity]);

  return (
    <>
      <div
        ref={containerRef}
        className={`${
          area === "page" ? "fixed" : "absolute"
        } inset-0 overflow-hidden pointer-events-none -z-10`}
      />

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes melonFloat {
          0% {
            transform: translate(-50%, -50%) translateY(-8px) rotate(0deg);
          }
          50% {
            transform: translate(-50%, -50%) translateY(8px) rotate(10deg);
          }
          100% {
            transform: translate(-50%, -50%) translateY(-8px) rotate(-10deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .melon {
            animation: none !important;
          }
        }
      `}</style>
    </>
  );
}
