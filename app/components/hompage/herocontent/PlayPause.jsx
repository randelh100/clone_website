import React, { useState, useEffect } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

const Test = ({ togglePlayPause, isPlaying }) => {
  const [progress, setProgress] = useState(0);
  const duration = 8000; // 8 seconds
  const radius = 17;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    let interval;

    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress + 50;
          if (newProgress >= duration) {
            return 0;
          }
          return newProgress;
        });
      }, 50); // Update every 50ms
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isPlaying]);

  const strokeDashoffset = circumference - (progress / duration) * circumference;

  return (
    <div className="relative w-[100px] h-[100px]">
      <svg className="absolute top-0 left-0 z-0 w-full h-full">
        <circle
          stroke="white"
          strokeWidth="1.5"
          fill="black"
          r={radius}
          cx="50"
          cy="50"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
      <div className="absolute top-0 left-0 z-10 w-full h-full flex items-center justify-center">
        <button className="focus:outline-none" onClick={togglePlayPause}>
          {!isPlaying ? <FaPlay className="text-white" /> : <FaPause className="text-white" />}
        </button>
      </div>
    </div>
  );
};

export default Test;
