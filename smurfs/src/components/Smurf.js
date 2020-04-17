import React from "react";

const Smurf = ({ data, removeSmurf }) => {
  return (
    <div className="SingleCard">
      <p>
        Name: <span>{data.name}</span>
      </p>
      <p>
        Age: <span>{data.age}yrs</span>
      </p>
      <p>
        Height: <span>{data.height}cm</span>
      </p>
      <button onClick={removeSmurf}>Move Out</button>
    </div>
  );
};

export default Smurf;