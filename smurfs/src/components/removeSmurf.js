import React from "react";

const RemoveSmurf = ({ data, removeSmurf }) => {
  return (
    <div className="SingleCard">
      <p>
        name: <span>{data.name}</span>
      </p>
      <p>
        age:<span>{data.age}</span>
      </p>
      <p>
        heigth: <span>{data.height}</span>
      </p>
      <button onClick={removeSmurf}>remove</button>
    </div>
  );
};

export default RemoveSmurf;