import React, { useRef, useEffect, useState } from 'react';
import { FaPause, FaPlay } from 'react-icons/fa';

const PlayPause = ({ isPlaying, duration, startTime, nextSlideTime, togglePlayPause }) => {
  const circle = useRef(null);
  let animationRef = useRef(null);
  const [strokeOffset, setStrokeOffset] = useState(null);


  useEffect(() => {
    if (!circle.current) return;
    console.log(circle.current.style.strokeDasharray)

    const circumference = circle.current.r.baseVal.value * 2 * Math.PI;
    circle.current.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.current.style.strokeDashoffset = circumference;

  
    const resetAndProgress = () => {
      const currentTime = Date.now();
      const timeLeft = nextSlideTime - duration;
      if (timeLeft <= 0) return;  // Guard clause to prevent negative duration
      

      circle.current.style.strokeDashoffset = strokeOffset;

      const offsetPerMs = circumference / (duration);
      const finalOffset = circumference - (timeLeft * offsetPerMs);
console.log(finalOffset)
      animationRef.current = circle.current.animate(
        [{ strokeDashoffset: `${strokeOffset}` }, { strokeDashoffset: `${finalOffset}` }],
        {
          duration: timeLeft,
          fill: 'forwards',
        }
      );
    };

    if (animationRef.current) {
      animationRef.current.cancel(); // Cancel existing animation
    }

    if (isPlaying) {
      resetAndProgress();
    } else {
      setStrokeOffset(finalOffset)
    }
  }, [isPlaying, duration, startTime, nextSlideTime]);



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