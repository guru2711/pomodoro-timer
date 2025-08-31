import { useState } from "react";

const ShortInterval = () => {
  return (
    <div className="timercontainer">
      <div className="showtime">
        <div className="minutes"> </div>
        <div className="secs"> </div>
      </div>
      <div className="showtimer features">
        <div className="btn play">play</div>
        <div className="btn pause">pause</div>
        <div className="btn reset">reset</div>
      </div>
    </div>
  );
};

export default ShortInterval;
