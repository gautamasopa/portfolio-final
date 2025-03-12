"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateCursor);
    return () => window.removeEventListener("mousemove", updateCursor);
  }, []);

  return (
    <motion.div
      className="fixed w-3 h-3 bg-cyan-400 rounded-full pointer-events-none mix-blend-difference"
      animate={{ x: position.x - 6, y: position.y - 6 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    />
  );
}
