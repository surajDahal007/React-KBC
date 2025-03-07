import React, { useState, useEffect } from "react";
import './style/Timer.css';

export default function Timer() {
  const [counter, setCounter] = useState(60);

  useEffect(() => {
    
    const interval = setInterval(() => {
      setCounter(prevCounter => {
        if (prevCounter <= 1) {
          clearInterval(interval); // Stop the interval
          return 0;
        }
        return prevCounter - 1;
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []); 

  return <div className="timer-counter">{counter}</div>;
}
