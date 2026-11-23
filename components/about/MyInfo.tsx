import React from "react";
import AvatarBoy from "../../assets/avatarBoy.png";
import Image from "next/image";
import Link from "next/link";

function MyInfo() {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 select-text max-w-5xl mx-auto">
      {/* Top Section: Avatar & About */}
      <div className="text-zinc-700 font-mono flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
        <Image
          src={AvatarBoy}
          // w-48 sm:w-56 md:w-64 lg:w-72 h-auto,
          className="h-100 w-auto old flex-shrink-0"
          alt="Raghav Sahdev"
        />

        <div className="flex-1 w-full px-2 md:px-0 text-center md:text-left">
          <div className="mb-6">
            <h1 className="text-3xl sm:text-4xl font-bold">Raghav Sahdev</h1>
            <p className="text-base sm:text-lg text-gray-500 mt-1">Data & AI Enthusiast</p>
          </div>

          <div className="w-full">
            <p className="font-semibold">about</p>
            <hr className="border-t border-gray-400 my-2" />
            <p className="text-justify text-sm sm:text-base leading-relaxed">
              Heyy, I&apos;m Raghav. <br className="hidden sm:block" />
              I&apos;m a Computer Science Engineering graduate from Veer Madho
              Singh Bhandari Uttarakhand Technical University and a Microsoft
              Certified Power BI Data Analyst Associate (PL-300). I&apos;m
              curious about data, technology and AI, and I enjoy turning ideas
              into practical, useful solutions. I&apos;m always learning and
              exploring new tools, and I&apos;m fascinated by how data and AI
              are changing the way we work. I&apos;m eager to contribute, ready
              to take on new challenges, and excited to grow with every
              opportunity.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section: Details */}
      <div className="flex flex-col font-mono text-zinc-700 mt-8 sm:mt-12 space-y-8">
        {/* Skills */}
        <div className="flex flex-col">
          <p className="font-semibold">Skills</p>
          <hr className="border-t border-gray-400 my-2" />
          <div className="text-sm sm:text-base space-y-1">
            <p><span className="font-semibold">Programming & Databases:</span> Python, Java, C++, MySQL, PostgreSQL, Snowflake</p>
            <p><span className="font-semibold">Data Analysis:</span> Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn, Power BI, Excel</p>
            <p><span className="font-semibold">Data Engineering & AI:</span> Spark, Apache Airflow, dbt, LangChain, LangGraph, RAG Pipelines</p>
            <p><span className="font-semibold">Core CS:</span> DSA, OOP, DBMS, Operating Systems, Computer Networks</p>
            <p><span className="font-semibold">Tools:</span> Git, GitHub, Linux</p>
          </div>
        </div>

        {/* Education */}
        <div className="flex flex-col">
          <p className="font-semibold">Education</p>
          <hr className="border-t border-gray-400 my-2" />
          <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center">
            <p className="font-semibold text-base sm:text-lg">
              Veer Madho Singh Bhandari Uttarakhand Technical University{" "}
              <span className="font-light text-sm italic block sm:inline"></span>
            </p>
            <p className="mt-1 sm:mt-0 text-sm sm:text-base font-medium">2022-2026</p>
          </div>
          <p className="text-sm sm:text-base mt-2 sm:mt-1">
            Bachelor of Technology (B.Tech.) in Computer Science and Engineering{" "}
          </p>
        </div>

        {/* Socials */}
        <div className="flex flex-col">
          <p className="font-semibold">Socials</p>
          <hr className="border-t border-gray-400 my-2" />
          <div className="flex flex-row gap-6 sm:gap-10 flex-wrap text-sm sm:text-base">
            <a
              href="https://www.linkedin.com/in/raghav-sahdev24112002"
              className="underline hover:text-blue-600 transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/RaghavSahdev24"
              className="underline hover:text-gray-900 transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://leetcode.com/u/Raghavsahdev/"
              className="underline hover:text-yellow-600 transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              LeetCode
            </a>
            <a
              href="https://pin.it/6ctZrYz3s"
              className="underline hover:text-red-600 transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              Pinterest
            </a>
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col">
          <p className="font-semibold">Contact</p>
          <hr className="border-t border-gray-400 my-2" />
          <p className="text-sm sm:text-base break-words">
            +91 8533965518
            <span className="hidden sm:inline mx-2">|</span>
            <span className="block sm:inline mt-1 sm:mt-0">raghavsahdev42@gmail.com</span>
          </p>
        </div>

        <Link href="/profile" className="text-black underline">
          Know more about me &gt;
        </Link>
      </div>
    </div>
  );
}

export default MyInfo;