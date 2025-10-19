import { motion } from "framer-motion";

export const FloatingWatermelons = () => {
  const melons = Array.from({ length: 25 }, (_, i) => i);

  // các emoji / hình dưa hấu khác nhau
  const watermelonShapes = ["🍉", "🍈", "🍉", "🍉", "🍉🥭", "🍉🍈"];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {melons.map((i) => {
        const shape = watermelonShapes[i % watermelonShapes.length];
        const startX = Math.random() * window.innerWidth;
        const drift = 60 + Math.random() * 80; // độ lượn gió
        const delay = Math.random() * 6;
        const size = 2 + Math.random() * 2; // text-2xl đến text-4xl
        const duration = 9 + Math.random() * 6;

        return (
          <motion.div
            key={i}
            className="absolute select-none"
            initial={{
              x: startX,
              y: -100,
              opacity: 0,
              rotate: Math.random() * 360,
              scale: 0.6 + Math.random() * 0.8,
            }}
            animate={{
              y: window.innerHeight + 120,
              x: [startX, startX + drift, startX - drift / 2, startX + drift],
              rotate: [0, 360],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              fontSize: `${size}rem`,
            }}
          >
            {shape}
          </motion.div>
        );
      })}
    </div>
  );
};
