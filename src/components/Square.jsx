import React from "react";

export default function Square({ value, setSquareValue }) {
  return (
    <>
      <button className="square" onClick={setSquareValue}>
        {value}
      </button>
    </>
  );
}
