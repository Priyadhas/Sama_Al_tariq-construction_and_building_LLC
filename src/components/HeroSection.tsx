import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate random particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 10,
    }));
    setParticles(newParticles);
  }, []);

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-black cursor-none"
      onMouseMove={handleMouseMove}
    >
      {/* Floating Light Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 8 + particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}

      {/* Dark Luxury Overlay Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

      {/* Hero Image Container with Parallax */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          x: useTransform(mouseX, [0, window.innerWidth], [-10, 10]),
          y: useTransform(mouseY, [0, window.innerHeight], [-10, 10]),
        }}
      >
        <motion.div
          className="relative w-full h-full"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Building Sketch Image */}
          <motion.img
            src="/images/building-sketch.png"
            alt="Architectural Blueprint"
            className="w-full h-full object-cover"
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />

          {/* Subtle Glow Pulse Outline */}
          <motion.div
            className="absolute inset-0 border border-white/10 rounded-lg"
            animate={{
              boxShadow: [
                "inset 0 0 0 rgba(255,255,255,0.05)",
                "inset 0 0 20px rgba(0,255,255,0.1), 0 0 30px rgba(255,255,255,0.05)",
                "inset 0 0 0 rgba(255,255,255,0.05)",
              ],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>

      {/* Faint Scanning Light */}
      <motion.div
        className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"
        initial={{ left: "-2px" }}
        animate={{ left: "100%" }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 1,
        }}
      />

      {/* Depth Layer - Subtle Animated Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
      />
    </div>
  );
};

export default HeroSection;
