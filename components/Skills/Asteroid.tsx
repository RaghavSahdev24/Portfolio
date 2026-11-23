"use client";
import React, { useState } from "react";
import Image from "next/image";
import AsteroidImage from "../../assets/asteroids/asteroid1.png";

import {
  Python,
  Java,
  CPP,
  MySQL,
  PostgreSQL,
  Snowflake,
  Pandas,
  PowerBI,
  Spark,
  Airflow,
  Dbt,
  LangChain,
  Git,
  GitHub,
  Linux,
} from "../../assets/tech-icons/tech-icons";

const skillIcons = {
  Python,
  Java,
  "C++": CPP,
  MySQL,
  PostgreSQL,
  Snowflake,
  Pandas,
  "Power BI": PowerBI,
  Spark,
  Airflow,
  dbt: Dbt,
  LangChain,
  Git,
  GitHub,
  Linux,
};

type AsteroidProps = {
  skill: keyof typeof skillIcons;
};

function Asteroid({ skill }: AsteroidProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const SkillIcon = skillIcons[skill];

  return (
    <div className="relative w-30 h-30">
      <Image
        src={AsteroidImage}
        fill
        className={`object-contain animate-[spin_30s_linear_infinite] transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        alt="asteroid"
        onLoad={() => setIsLoaded(true)}
      />

      {isLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Image
            src={SkillIcon}
            width={28}
            height={28}
            alt={skill}
            className={`object-contain ${
              skill === "GitHub" ? "invert" : ""
            }`}
          />

          <p className="text-[10px] font-medium text-white">{skill}</p>
        </div>
      )}
    </div>
  );
}

export default Asteroid;