import React from "react";
import Vent from "../Vent";
import SecurityRoom from "./SecurityRoom";
import {
  IkeaImage1,
  IkeaImage2,
  IkeaImage3,
  IkeaImage4,
  MindImage1,
  MindImage2,
  MindImage3,
  MindImage4,
  CarImage1,
  CarImage2,
} from "../../assets/projects/ProjectImages";
import MappedProjects from "./MappedProjects";

const projectsArray = [
  {
    name: "IKEA Gifting",
    content:
      "Cleaned over 1.06 million messy transaction rows, fixing mixed date formats and removing duplicate records. Scored 5,881 customers into 6 segments using RFM, with a 90-day churn flag. Found that Champions are about 22% of customers but drive about 68% of revenue. Built 2 interactive dashboards tracking revenue, churn and segment value by time period and country.",
    githubLink: "https://github.com/RaghavSahdev24/IKEA-Customer-Analytics",
    tech: ["SQL", "Python", "Power BI"],
    images: [IkeaImage1, IkeaImage2, IkeaImage3, IkeaImage4],
  },
  {
    name: "MindFull Horizon",
    content:
      "AI-driven student mental health platform with separate student and provider dashboards. Students get PHQ-9 and GAD-7 assessments, mood check-ins, goal and medication tracking, and wellness tools. Providers get risk-filtered patient lists, analytics, appointment booking and video consultations. Uses the Google Gemini API to give each user a 1 to 10 severity score, flagging 7 or above for appointment recommendations.",
    githubLink: "https://github.com/RaghavSahdev24/MindFullHorizon",
    tech: ["Python", "Flask", "PostgreSQL", "HTML5", "Tailwind", "JavaScript", "Google Gemini API", "WebRTC", "Docker", "Render.com"],
    images: [MindImage1, MindImage2, MindImage3, MindImage4],
  },
  {
    name: "WiFi Robot Car",
    content:
      "Built a robot car that creates its own WiFi network, so any phone, tablet or laptop can drive it from a browser with no internet needed. It has a touch-friendly control interface and two motors with variable speed from 0 to 100%",
    githubLink: "https://github.com/RaghavSahdev24/WiFi-Robot-Car-Controlled",
    tech: [
      "C++",
      "ESP32",
      "Motor driver L298N",
      "DC motors",
      "Jumper wires",
      "Chassis",
      "Wheels",
    ],
    images: [CarImage1, CarImage2],
  },
];

function ProjectsMain() {
  return (
    <main className="among-font min-h-screen w-full">
      <Vent path="/skills" side="right" open={true} className="w-15 h-15" />

      <div className="flex flex-col items-center pt-10">
        <p className="text-6xl">Projects</p>
      </div>

      {/* Responsive layout: row on desktop, column on mobile */}
      <div className="flex flex-col lg:flex-row w-full items-center gap-8 lg:gap-16 pr-0 lg:pr-12">
        <div className="flex-shrink-0">
          <SecurityRoom />
        </div>
        <div className="flex-1 flex justify-center py-4 lg:py-10 w-full">
          <MappedProjects projects={projectsArray} />
        </div>
      </div>
    </main>
  );
}

export default ProjectsMain;