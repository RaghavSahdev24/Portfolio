import React from "react";
import Image from "next/image";

import AvatarBoy from "../../assets/avatarBoyy.png";
import GithubImage from "../../assets/github.svg";
import LinkedInImage from "../../assets/linkedin.svg";
import GmailImage from "../../assets/gmail.svg";
import Leetcodeimage from "../../assets/leetcode.svg";
import PinterestImage from "../../assets/pinterest.svg";

function ProfileHero() {
  return (
    <section className="w-full text-white px-4 sm:px-6 md:px-10 lg:px-16 pt-8 md:pt-12 -mb-10">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-center gap-8 lg:gap-12">
        {/* Left - Image */}
        <div className="shrink-0">
          <Image
            src={AvatarBoy}
            alt="Profile image"
            className="w-32 sm:w-48 md:w-52 lg:w-52 h-auto object-contain rounded-xl"
          />
        </div>

        {/* Right - Info */}
        <div className="w-full max-w-3xl flex flex-col gap-8">
          {/* Name + Socials */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-widest among-font leading-tight break-words pt-10">
                Raghav Sahdev
              </h1>

              <p className="text-base sm:text-lg md:text-xl font-light font-mono">
                Data & AI Enthusiast
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/RaghavSahdev24"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Image
                  src={GithubImage}
                  className="w-5 h-5 invert hover:invert-0 hover:bg-zinc-100 rounded-full hover:border hover:border-zinc-100 transition-all duration-200"
                  alt="GitHub"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/raghav-sahdev24112002"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Image
                  src={LinkedInImage}
                  className="w-5 h-5 hover:bg-zinc-100 hover:rounded-xs transition-all duration-200"
                  alt="LinkedIn"
                />
              </a>

              <a href="mailto:raghavsahdev42@gmail.com" aria-label="Gmail">
                <Image
                  src={GmailImage}
                  className="w-5 h-5 hover:scale-110 transition-transform duration-200"
                  alt="Gmail"
                />
              </a>

              <a
                href="https://leetcode.com/u/Raghavsahdev/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
              >
                <Image
                  src={Leetcodeimage}
                  className="w-5 h-5 p-0.5 bg-zinc-100 rounded-xs transition-transform duration-200 hover:scale-110"
                  alt="LeetCode"
                />
              </a>

              <a
                href="https://pin.it/6ctZrYz3s"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
              >
                <Image
                  src={PinterestImage}
                  className="w-5 h-5 bg-zinc-100 rounded-full transition-transform duration-200 hover:scale-110"
                  alt="Pinterest"
                />
              </a>
            </div>
          </div>

          {/* About */}
          <div className="w-full">
            <p className="font-mono text-lg sm:text-xl">About</p>

            <hr className="border-t border-zinc-500 my-2" />

            <p className="font-mono text-sm sm:text-base leading-relaxed text-justify text-zinc-200">
              Heyy, I&apos;m Raghav. I&apos;m a Computer Science Engineering
              graduate from Veer Madho Singh Bhandari Uttarakhand Technical
              University and a Microsoft Certified Power BI Data Analyst
              Associate (PL-300). I&apos;m curious about data, technology and
              AI, and I enjoy turning ideas into practical, useful solutions.
              I&apos;m always learning and exploring new tools, and I&apos;m
              fascinated by how data and AI are changing the way we work.
              I&apos;m eager to contribute, ready to take on new challenges,
              and excited to grow with every opportunity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileHero;