import React, { useEffect, useRef, useState } from 'react';
import { FaPause, FaPlay } from 'react-icons/fa';

const Test = ({paused, setPaused, togglePlayPause}) => {
  const circleRef = useRef(null);
  const requestIdRef = useRef(null);
  const startTimeRef = useRef(Date.now());
  const [elapsedTime, setElapsedTime] = useState(0);
  const duration = 8000;


  const radius = 17;
  const circumference = 2 * Math.PI * radius;
  const animateCircle = () => {
    const now = Date.now();
    const totalTimeElapsed = (now - startTimeRef.current) + elapsedTime;
    const progress = totalTimeElapsed / duration;
    const offset = circumference * (1 - progress);
  
    circleRef.current.style.strokeDashoffset = offset;
  
    if (progress < 1) {
      requestIdRef.current = requestAnimationFrame(animateCircle);
    } else {
      // Resetting the animation
      startTimeRef.current = Date.now(); // Reset the start time to now
      setElapsedTime(0); // Reset the elapsed time
      console.log(circleRef.current.style.strokeDashoffset)
      circleRef.current.style.strokeDasharray = `${circumference} ${circumference}`;
      circleRef.current.style.strokeDashoffset = `${106}`; // Reset circle offset

      console.log(circleRef.current.style.strokeDashoffset)
      requestIdRef.current = requestAnimationFrame(animateCircle); // Restart the animation
    }
  };
  

  useEffect(() => {
    circleRef.current.style.strokeDasharray = `${circumference} ${circumference}`;
    circleRef.current.style.strokeDashoffset = `${circumference}`;
  }, []);

  useEffect(() => {
    if (paused) {
      startTimeRef.current = Date.now();
      requestIdRef.current = requestAnimationFrame(animateCircle);
      console.log(circleRef.current.style.strokeDashoffset)
    } else {
      cancelAnimationFrame(requestIdRef.current);
      const now = Date.now();
      console.log(circleRef.current.style.strokeDashoffset)
      setElapsedTime(elapsedTime + (now - startTimeRef.current));
    }

    return () => {
      cancelAnimationFrame(requestIdRef.current);
    };
  }, [paused]);
  return (
    <div className='bg-white'>
      <svg height="100" width="100">
          <circle
            ref={circleRef}
            stroke="black"
            strokeWidth="1.5"
            fill="transparent"
            r={radius}
            cx="50"
            cy="50"
          />
      </svg>
      <button onClick={togglePlayPause}>
        {!paused ? <FaPlay /> : <FaPause />}
      </button>
    </div>
  );
};

export default Test;