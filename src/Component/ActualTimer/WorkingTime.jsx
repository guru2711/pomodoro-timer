import { useState, useRef, useEffect } from "react";
import Edit from "../../EditTimer/EditTimer.json";

const WorkingTime = () => {
  const [minutes, setMinutes] = useState(Edit.workingtimer.minutes || 0);
  const [seconds, setSeconds] = useState(Edit.workingtimer.sec || 0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  //   const handlePlay = () => {
  //     console.log(minutes);
  //     if (minutes > 0) {
  //       setMinutes(minutes - 1);
  //     }
  //   };

  const handlePlay = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds > 0) {
            return prevSeconds - 1;
          } else {
            // when seconds hit 0
            setMinutes((prevMinutes) => {
              if (prevMinutes > 0) {
                return prevMinutes - 1;
              } else {
                clearInterval(timerRef.current);
                setIsRunning(false);
                return 0;
              }
            });
            return 59; // reset seconds to 59 after minute decreases
          }
        });
      }, 1000);
    }
  };

  const handlePause = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
  };

  const handleReset = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setMinutes(Edit.workingtimer.minutes);
    setSeconds(Edit.workingtimer.sec);
  };

  // cleanup interval when component unmounts
  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div className="timercontainer">
      <div className="showtime">
        <div className="minutes"> {minutes.toString().padStart(2, "0")}</div>
        <div className="secs"> {seconds.toString().padStart(2, "0")} </div>
      </div>
      <div className="showtimer features">
        <div className="btn play" onClick={handlePlay}>
          play
        </div>
        <div className="btn pause" onClick={handlePause}>
          pause
        </div>
        <div className="btn reset" onClick={handleReset}>
          reset
        </div>
      </div>
    </div>
  );
};

export default WorkingTime;
