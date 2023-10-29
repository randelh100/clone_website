import React, { useRef, useEffect } from 'react';
import { FaPause, FaPlay } from 'react-icons/fa';

const PlayPause = ({ isPlaying, togglePlayPause, duration, startTime, nextSlideTime }) => {
  const circle = useRef(null);
  let animationId;

  const setProgress = () => {
    const currentTime = Date.now();
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const circumference = circle.current.r.baseVal.value * 2 * Math.PI;
    const offset = circumference - (progress * circumference);
    circle.current.style.strokeDashoffset = offset;
  };

  useEffect(() => {
    const circumference = circle.current.r.baseVal.value * 2 * Math.PI;
    circle.current.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.current.style.strokeDashoffset = `${circumference}`;

    if (isPlaying) {
      animationId = setInterval(() => {
        setProgress();
      }, 50);
    } else {
      clearInterval(animationId);
    }

    return () => clearInterval(animationId);
  }, [isPlaying, startTime]);

  return (
    <div className='relative'>
      <svg height="100" width="100">
        <circle stroke="black" strokeWidth="0" fill="black" r="21" cx="50" cy="50" />
        <circle ref={circle} stroke="white" strokeWidth="1.5" fill="black" r="17" cx="50" cy="50" />
      </svg>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <button
          className="bg-black w-5 h-5 rounded-full flex items-center justify-center cursor-pointer"
          onClick={togglePlayPause}
        >
          {isPlaying ? <FaPause className="text-white" style={{ width: '10px', height: '10px' }} /> : <FaPlay className="text-white" style={{ width: '10px', height: '10px' }} />}
        </button>
      </div>
    </div>
  );
}

export default PlayPause;
