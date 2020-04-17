import React from "react";
import Smurf from "./Smurf";

const Smurfs = ({ data, removeSmurf }) => {
  return (
    <div className="DisplayCard">
      {data.map((item) => (
        <Smurf
          key={item.id}
          data={item}
          removeSmurf={() => removeSmurf(item.id)}
        />
      ))}
    </div>
  );
};

export default Smurfs;