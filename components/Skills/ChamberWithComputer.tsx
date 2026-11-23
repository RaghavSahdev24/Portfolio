import React from "react";
import Chamber from "../../assets/skills/chamber2.png";
import Image from "next/image";
import Vent from "../Vent";
import ComputerImage from "../../assets/computer.png";
import { ArrowDown } from "lucide-react";

interface ComputerProps {
  onClick?: () => void;
}

function Computer({ onClick }: ComputerProps) {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <Image
        src={Chamber}
        fill
        className="object-cover z-0"
        alt="chamber"
        priority
      />

      {/* Computer with subtle hover glow */}
      <div
        onClick={onClick}
        className="group absolute cursor-pointer z-10"
        style={{ top: "42.29%", left: "35.68%" }}
      >
        {/* Click hint */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center whitespace-nowrap animate-bounce pointer-events-none">
          <span className="among-font text-sm sm:text-base text-[#39ff14] bg-black/70 backdrop-blur-sm px-3 py-1 rounded-lg border border-[#39ff14]/60 shadow-[0_0_10px_rgba(57,255,20,0.4)]">
            Click here
          </span>
          <ArrowDown
            className="h-5 w-5 -mt-0.5 text-[#39ff14] drop-shadow-[0_0_6px_rgba(57,255,20,0.9)]"
            strokeWidth={3}
          />
        </div>

        <div
          className="
            absolute inset-0 scale-110 rounded-full
            bg-white/15 blur-xl
            transition-all duration-500
            group-hover:scale-125
            group-hover:bg-white/30
            group-hover:blur-2xl
          "
        />

        <Image
          src={ComputerImage}
          className="
            relative z-10 w-30 h-30
            drop-shadow-[0_0_8px_rgba(210,210,210,1)]
            transition-all duration-100
            group-hover:drop-shadow-[0_0_10px_rgba(240,240,240,1)]
          "
          alt="computer"
        />
      </div>

      <Vent
        path="/projects"
        side="right"
        open={true}
        className="h-15 w-15 among-font right-[15.37%] bottom-0 z-10"
      />
    </div>
  );
}

export default Computer;