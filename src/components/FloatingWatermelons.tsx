import { motion, useAnimationFrame } from "framer-motion";
import { useRef } from "react";

export const FloatingWatermelons = () => {
  const fruits = Array.from({ length: 15 }, (_, i) => i);
  const fruitTypes = ["🍃", "🍉", "🍃"];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {fruits.map((i) => {
        const leftPercent =
          (i / fruits.length) * 100 + (Math.random() * 5 - 2.5);
        const delay = Math.random() * 8;
        const duration = 18 + Math.random() * 10;
        const horizontalRange = 60 + Math.random() * 60; // độ lượn sang 2 bên
        const speed = 0.5 + Math.random() * 0.8; // tốc độ sóng gió khác nhau
        const initialRotate = Math.random() * 360;
        const finalRotate = initialRotate + 360 + Math.random() * 180;
        const scale = 0.5 + Math.random() * 0.5;

        // custom hook để di chuyển theo dạng sóng gió
        const ref = useRef<HTMLDivElement>(null);
        useAnimationFrame((t) => {
          if (ref.current) {
            const wave = Math.sin((t / 1000) * speed + i) * horizontalRange;
            ref.current.style.transform = `translateX(${wave}px)`;
          }
        });

        return (
          <motion.div
            key={i}
            ref={ref}
            className="absolute"
            initial={{
              y: -150,
              rotate: initialRotate,
              opacity: 0,
              scale,
            }}
            animate={{
              y: window.innerHeight + 200,
              rotate: finalRotate,
              opacity: [0, 1, 1, 0],
              scale,
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${leftPercent}%`,
              fontSize: `${Math.random() * 1 + 1.8}rem`, 
            }}
          >
            {fruitTypes[i % fruitTypes.length]}
          </motion.div>
        );
      })}
    </div>
  );
};
