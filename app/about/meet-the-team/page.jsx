"use client";

import { useEffect, useState } from "react";

const MeetTheTeam = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="w-full h-screen bg-white overflow-hidden">
      <header className="w-full flex justify-center items-start pt-12">
        <h1
          className={
            "text-3xl md:text-5xl font-bold font-poppins flex space-x-4 transform transition-all duration-1000 ease-out capitalize " +
            (animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")
          }
        >
          <span className="text-black">Meet the</span>
          <span className="text-amber-500">Team</span>
        </h1>
      </header>
    </div>
  );
};

export default MeetTheTeam;
