import React from "react";

export const Tile = ({
  object
}) => {

  const data = object;

  const info = data.map((data, index) => {
    if (index === 0) {
      return <p className="tile-title" key={index}>{data}</p>
    } else {
      return <p className="tile" key={index}>{data}</p>
    }
  })
  return (
    <div className="tile-container">
      {info}
    </div>
  );
};

export default Tile;
