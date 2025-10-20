import { motion } from "framer-motion";

export const FloatingWatermelons = () => {
  const fruits = Array.from({ length: 25 }, (_, i) => i);
  const fruitTypes = [ "🍃","🍉", "🍃"]; 

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {fruits.map((i) => {
        // chia đều các vị trí ngang
        const leftPercent =
          (i / fruits.length) * 100 + (Math.random() * 4 - 2); // lệch nhẹ cho tự nhiên
        const delay = Math.random() * 5;
        const duration = 8 + Math.random() * 5;
        const horizontalDrift = Math.random() * 200 - 100; // bay chéo sang trái/phải

        return (
          <motion.div
            key={i}
            className="absolute text-5xl"
            initial={{
              x: 0,
              y: -100,
              rotate: Math.random() * 360,
              opacity: 0,
            }}
            animate={{
              x: horizontalDrift,
              y: window.innerHeight + 150,
              rotate: 360 + Math.random() * 360,
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: `${leftPercent}%`,
            }}
          >
            {fruitTypes[i % fruitTypes.length]}
          </motion.div>
        );
      })}
    </div>
  );
};
