import React, { useEffect, useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";

export default function ArrowNavButton() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollAction = () => {
    if (window.scrollY < 100) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const circumference = 22 * 2 * Math.PI;
  const offset = circumference - (scrollProgress / 100) * circumference;

  return (
    <button 
      tabIndex={0}
      className="fixed bottom-[30px] right-[30px] w-[50px] h-[50px] cursor-pointer z-[1000] flex items-center justify-center bg-transparent rounded-full shadow-[0_4px_10px_rgba(255,217,1,0.2)] transition-transform duration-300 hover:scale-110"
      onClick={handleScrollAction}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleScrollAction();
        }
      }}
    >
      <svg className="absolute top-0 left-0 -rotate-90" width="50" height="50">
        <circle
          stroke="#e6e6e6"
          strokeWidth="4"
          fill="transparent"
          r="22"
          cx="25"
          cy="25"
        />
        <circle
          className="transition-[stroke-dashoffset] duration-100 origin-center stroke-[#2979ff]"
          strokeWidth="4"
          fill="transparent"
          r="22"
          cx="25"
          cy="25"
          style={{
            strokeDasharray: `${circumference} ${circumference}`,
            strokeDashoffset: Number.isNaN(offset) ? circumference : offset,
          }}
        />
      </svg>
      <button
        className="text-2xl text-[#2979ff] font-bold transition-transform duration-300 select-none bg-transparent border-none outline-none cursor-pointer"
        style={{
          transform: scrollProgress < 50 ? "translateY(0)" : "translateY(-2px)",
        }}
      >
        {scrollProgress < 50 ? <ArrowDown size={24} /> : <ArrowUp size={24} />}
      </button>
    </button>
  );
}
