import React, { useState } from "react";
import "./index.css";

const TrafficLight = () => {
  const [signalStop, setSignalStop] = useState(false);
  const [signalReady, setSignalready] = useState(false);
  const [signalGo, setSignalGo] = useState(false);

  const handleRed = () => {
    setSignalStop(!signalStop);
    setSignalready(false);
    setSignalGo(false);
  };
  const handleReady = () => {
    setSignalStop(false);
    setSignalready(!signalReady);
    setSignalGo(false);
  };
  const handleGo = () => {
    setSignalStop(false);
    setSignalready(false);
    setSignalGo(!signalGo);
  };
  return (
    <div
      style={{
        backgroundColor: "lightyellow",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1>Traffic Light</h1>
      <div className="traffic-container">
        <div className="btn-container">
          <button
            onClick={handleRed}
            style={{ backgroundColor: signalStop && "red" }}
            className="btn-stp"
          >
            Stop
          </button>
          <button
            onClick={handleReady}
            style={{ backgroundColor: signalReady && "orange" }}
            className="btn-stp"
          >
            Ready
          </button>
          <button
            onClick={handleGo}
            style={{ backgroundColor: signalGo && "green" }}
            className="btn-stp"
          >
            Go
          </button>
        </div>
        <div className="traffic-lights">
          <div
            style={{ backgroundColor: signalStop && "red" }}
            className="bg-light"
          ></div>
          <div
            style={{ backgroundColor: signalReady && "orange" }}
            className="bg-light"
          ></div>
          <div
            style={{ backgroundColor: signalGo && "green" }}
            className="bg-light"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default TrafficLight;
