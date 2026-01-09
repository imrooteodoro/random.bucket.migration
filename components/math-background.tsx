'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export function MathBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  const mathSymbols = ['∑', '∫', '∂', '∞', 'π', 'φ', 'θ', 'λ', '∇', '≈'];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20 dark:opacity-10 z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute text-blue-500 dark:text-blue-400 font-bold"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            fontSize: `${particle.size}rem`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {mathSymbols[particle.id % mathSymbols.length]}
        </motion.div>
      ))}
    </div>
  );
}
