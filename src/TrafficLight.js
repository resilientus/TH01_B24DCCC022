import React, { useState, useEffect } from "react";

function TrafficLight() {
  const colors = ["red", "green", "yellow"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px", paddingLeft: "50px" }}>
        {colors.map((c, i) => (
          <div
            key={c}
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: index === i ? c : "lightgray",
            }}
          />
        ))}
      </div>
      <button onClick={() => setIndex((prev) => (prev + 1) % 3)} style = {{marginTop: "20px", marginLeft: "35px"}} >
        Chuyển đèn
      </button>
    </div>
  );
}

export default TrafficLight;
