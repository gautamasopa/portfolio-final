"use client";

import { useEffect, useState } from "react";

interface SymbolData {
  id: number;
  char: string;
  x: number;
  y: number;
  duration: number;
}

export default function Background() {
  const [symbols, setSymbols] = useState<SymbolData[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return; 

    const matrixSymbols = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    const generateSymbols = (): SymbolData[] => {
      return Array.from({ length: 100 }, (_, i) => ({
        id: i,
        char: matrixSymbols[Math.floor(Math.random() * matrixSymbols.length)],
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        duration: Math.random() * 5 + 5, 
      }));
    };

    setSymbols(generateSymbols());
  }, []);

  return (
    <div className="matrix-container">
      {symbols.map((symbol) => (
        <span
          key={symbol.id}
          className="matrix-text"
          style={{
            left: `${symbol.x}px`,
            top: `${symbol.y}px`,
            animationDuration: `${symbol.duration}s`,
          }}
        >
          {symbol.char}
        </span>
      ))}
    </div>
  );
}
