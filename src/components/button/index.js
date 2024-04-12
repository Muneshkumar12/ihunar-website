import { Grid } from "@material-ui/core";
import React, { useState } from "react";

const buttonLabels = {
  1: "Web",
  2: "WordPress",
  3: "Software",
  4: "Graphic",
  5: "Marketing",
};

export default function Button() {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonNum) => {
    setActiveButton(buttonNum);
  };

  return (
    <div className="App">
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              style={{
                margin: "5px",
                backgroundColor: activeButton === num ? "#971D9A" : "white",
                border: activeButton === num ? "none" : "1px solid #000",
              }}
              onClick={() => handleButtonClick(num)}
            >
              {buttonLabels[num]}
            </button>
          ))}
        </div>
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          {buttonLabels[activeButton]} is Active
        </div>
      </div>
    </div>
  );
}
