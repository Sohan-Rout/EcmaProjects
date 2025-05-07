"use client";

import { useEffect, useState } from "react";

const MeetTheTeam = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const founders = [
    {
      id: 2,
      imgSrc: "/founder2.jpg",
      alt: "Founder 2",
      name: "Sohan Rout",
      linkedin: "https://www.linkedin.com/in/sohan-rout/",
      description: "Sohan Rout - A passionate developer currently pursuing my BTech - Cybersecurity, IoT and Blockchain technology",
      role: "Founder"
    },
    {
      id: 1,
      imgSrc: "/founder1.jpg",
      alt: "Founder 1",
      name: "Vaibhav Jamloki",
      linkedin: "https://www.linkedin.com/in/vaibhav-jamloki/",
      description: "Vaibhav Jamloki - A passionate developer currently pursuing my BTech - Cybersecurity, IoT and Blockchain technology",
      role: "Co-founder",
    },
  ];

  const teammates = [
    {
      id: 1,
      imgSrc: "/teammate1.jpg",
      alt: "Teammate 1",
      name: "Vinay Singh Shekhawat",
      linkedin: "https://www.linkedin.com/in/vinay-singh-shekhawat-14a609350?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      description: "Vinay Singh Shekhawat - A passionate developer currently pursuing my BTech - Cybersecurity, IoT and Blockchain technology",
      role: "Teammate"
    },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-15px);
          }
          60% {
            transform: translateY(-7px);
          }
        }
        .bounce {
          animation: bounce 1.2s ease-in-out;
        }
        .snake-border {
          stroke-dasharray: 400;
          stroke-dashoffset: 400;
          transition: stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1);
          rx: 0 !important;
          ry: 0 !important;
        }
        .group:hover .snake-border {
          stroke-dashoffset: 0;
        }
        .card {
          transition: color 0.7s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 0.5rem; /* rounded edges for professional look */
          position: relative;
          overflow: hidden;
          background-color: #ffffff; /* white background */
          color: #374151; /* gray-700 text */
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 32px;
          cursor: pointer;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15); /* stronger shadow for lift */
          width: 340px; /* increased card width */
          height: 480px; /* increased card height for description */
          will-change: transform;
          margin-bottom: 2rem; /* gap below each card */
        }
        .card:hover {
          animation: bounce 1.2s ease-in-out;
          background-color: #ffffff; /* no color change on hover */
          color: #374151; /* no color change on hover */
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25); /* stronger shadow on hover */
          transform: none; /* no translate on hover */
          z-index: 10;
        }
        .card img {
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          margin-bottom: 1.5rem;
          width: 180px; /* increased image size */
          height: 180px; /* increased image size */
          border-radius: 50%;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
        .card:hover img {
          transform: scale(1.1);
          opacity: 1;
        }
        .founder-name {
          font-size: 1.875rem;
          font-weight: 700;
          color: #111827; /* black */
          margin-bottom: 0.25rem;
          text-shadow: 0 1px 2px rgba(0,0,0,0.1);
        }
        .founder-role {
          font-size: 0.875rem;
          font-weight: 600;
          color: #f59e0b; /* amber */
          margin-bottom: 1rem;
          border-bottom: 2px solid #f59e0b;
          padding-bottom: 0.25rem;
          width: 60px;
          text-align: center;
          margin-left: auto;
          margin-right: auto;
        }
        .cofounder-role {
          color: #f59e0b; /* amber */
          font-weight: 600;
          border-color: #f59e0b; /* amber */
          white-space: nowrap;
          width: auto;
          margin-left: 0;
          margin-right: 0;
          padding-left: 0;
          padding-right: 0;
        }
        .connect-button {
          background-color: #3b82f6; /* blue */
          color: white;
          font-weight: 700;
          font-size: 1rem;
          padding: 0.5rem 1.5rem;
          border-radius: 0.375rem;
          cursor: pointer;
          border: none;
          transition: background-color 0.3s ease;
          text-align: center;
          text-decoration: none;
          display: inline-block;
        }
        .connect-button:hover {
          background-color: #2563eb; /* darker blue */
        }
        .founder-description {
          font-size: 0.875rem;
          font-style: italic;
          color: #9ca3af; /* light gray */
          text-align: center;
          margin-bottom: 1.5rem;
          max-width: 280px;
        }
        .connect-button {
          background-color: #3b82f6; /* blue */
          color: white;
          font-weight: 700;
          font-size: 1rem;
          padding: 0.5rem 1.5rem;
          border-radius: 0.375rem;
          cursor: pointer;
          border: none;
          transition: background-color 0.3s ease;
          text-align: center;
          text-decoration: none;
          display: inline-block;
        }
        .connect-button:hover {
          background-color: #2563eb; /* darker blue */
        }
        .section-title {
          font-weight: 700;
          margin-bottom: 2.5rem;
          color: #374151; /* gray-700 */
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .founders-title {
          font-size: 2.25rem; /* larger title */
          margin-top: 5rem; /* added gap above founders */
          margin-bottom: 1.5rem; /* gap below founders title */
          border-bottom: 3px solid #f59e0b;
          padding-bottom: 0.5rem;
          width: 100%;
          max-width: 640px;
          text-align: center;
          margin-left: auto;
          margin-right: auto;
        }
        .teammates-title {
          font-size: 2.25rem; /* half of Meet the Team */
          font-weight: 700;
          color: #374151; /* gray-700 */
          margin-top: 3rem; /* gap above teammates title */
          margin-bottom: 1.5rem; /* gap below teammates title */
          border-bottom: 3px solid #f59e0b;
          padding-bottom: 0.5rem;
          width: 100%;
          max-width: 640px;
          text-align: center;
          margin-left: auto;
          margin-right: auto;
        }
        .teammates-title .black-text {
          color: #111827; /* gray-900 */
        }
        .teammates-title .amber-text {
          color: #f59e0b;
        }
        .meet-the-team-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .founders-cards {
          display: flex;
          justify-content: center;
          gap: 3rem; /* increased gap between cards */
          flex-wrap: wrap;
          width: 100%;
        }
      `}</style>
      <style jsx>{`
      @media (max-width: 768px) {
          .meet-the-team-container > h1 {
            flex-wrap: nowrap;
            font-size: 2rem;
          }
          .meet-the-team-container > h1 > span {
            margin-right: 0.5rem;
          }
          /* Added header styles for mobile */
          .meet-the-team-container > h1 {
            flex-direction: column;
            align-items: center;
            font-size: 2.5rem;
            line-height: 1.2;
          }
          .meet-the-team-container > h1 > span:first-child {
            margin-bottom: 0.25rem;
            white-space: nowrap;
          }
          .meet-the-team-container > h1 > span:last-child {
            font-size: 3rem;
            font-weight: 700;
          }
          .card {
            padding: 16px;
            width: 90vw;
            max-width: 320px;
            height: auto;
            margin-bottom: 1.5rem;
          }
          .card img {
            width: 140px;
            height: 140px;
            margin-bottom: 1rem;
          }
          .founder-name {
            font-size: 1.25rem;
            margin-bottom: 0.25rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 100%;
          }
          .founder-role {
            font-size: 0.75rem;
            width: 50px;
            margin-bottom: 0.75rem;
          }
          .founder-description {
            font-size: 0.75rem;
            max-width: 260px;
            margin-bottom: 1rem;
          }
          .connect-button {
            font-size: 0.875rem;
            padding: 0.4rem 1rem;
            white-space: nowrap;
          }
        }
      `}</style>
      <div className="w-full min-h-screen bg-white overflow-hidden px-8 py-16">
        <div className="meet-the-team-container">
          <h1
            className={
              "text-5xl font-bold font-poppins flex space-x-4 capitalize mb-12"
            }
          >
            <span className="text-gray-900">Meet the</span>
            <span className="text-amber-500">Team</span>
          </h1>

          <h2 className="section-title founders-title">
            Founders
          </h2>

          <div className="founders-cards">
            {founders.map((founder) => (
              <div
                key={founder.id}
                className="card"
              >
                <img
                  src={founder.imgSrc}
                  alt={founder.alt}
                  className=""
                />
                <p className="founder-name">{founder.name}</p>
                <p className={`founder-role ${founder.role.toLowerCase() === 'co-founder' ? 'cofounder-role' : ''}`}>{founder.role}</p>
                <p className="founder-description">"{founder.description}"</p>
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="connect-button"
                >
                  Connect &rarr;
                </a>
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <rect
                    x="1"
                    y="1"
                    width="98"
                    height="98"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="2"
                    className="snake-border"
                  />
                </svg>
              </div>
            ))}
          </div>

          <h3 className="section-title teammates-title">
            <span className="black-text">Team</span><span className="amber-text">mates</span>
          </h3>
          <div className="founders-cards">
            {teammates.map((teammate) => (
              <div
                key={teammate.id}
                className="card"
              >
                <img
                  src={teammate.imgSrc}
                  alt={teammate.alt}
                  className=""
                />
                <p className="founder-name">{teammate.name}</p>
                <p className="founder-role">{teammate.role}</p>
                <p className="founder-description">"{teammate.description}"</p>
                <a
                  href="https://www.linkedin.com/in/vinay-singh-shekhawat-14a609350?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="connect-button"
                >
                  Connect &rarr;
                </a>
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <rect
                    x="1"
                    y="1"
                    width="98"
                    height="98"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="2"
                    className="snake-border"
                  />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MeetTheTeam;
