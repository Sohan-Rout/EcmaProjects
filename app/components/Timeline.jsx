"use client";

import React from "react";
import { motion } from "framer-motion";

const timelineEvents = [
  {
    date: "Jan 2023",
    title: "The Spark",
    description: "We observed the gap in collaborative student projects...",
  },
  {
    date: "Apr 2023",
    title: "First Collaboration",
    description: "Started working on small React-based UIs...",
  },
  {
    date: "Jul 2023",
    title: "Growth Phase",
    description: "Expanded the team and added new features.",
  },
  {
    date: "Oct 2023",
    title: "Beta Launch",
    description: "Released the beta version to select users.",
  },
  {
    date: "Dec 2023",
    title: "Official Launch",
    description: "Public release with full features and support.",
  },
];

const TimelineItem = ({ date, title, description }) => {
  return (
    <motion.div
      className="relative bg-black rounded-xl p-6 shadow-lg shadow-amber-400/40 w-full max-w-4xl cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-amber-500/70"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover={{ y: -5, scale: 1.05 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.6 }}
    >
      <h3 className="text-amber-400 font-bold text-lg">{title}</h3>
      <p className="text-white mt-2">{description}</p>
      <span className="block text-sm text-gray-400 mt-1">{date}</span>
      {/* Arrow pointing left */} 
      <div className="absolute left-[-20px] top-8 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-amber-400"></div>
    </motion.div>
  );
};

const Timeline = () => {
  return (
    <main className="relative min-h-screen bg-white py-12 px-6 flex justify-center items-start">
      <div className="relative max-w-5xl w-full">
        {/* Vertical line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-amber-400 rounded"></div>

        {/* Timeline items */}
        <div className="flex flex-col space-y-16 pl-20">
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative flex items-start w-full">
              {/* Marker */}
              <div className="absolute left-0 top-8 w-5 h-5 bg-amber-400 rounded-full border-2 border-black shadow-lg shadow-amber-400/50"></div>
              {/* Content */}
              <TimelineItem
                date={event.date}
                title={event.title}
                description={event.description}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Timeline;
