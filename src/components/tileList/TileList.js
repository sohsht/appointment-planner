import React from "react";
import Tile from "../tile/Tile"

export const TileList = ({
  objects
}) => {

  const items = objects.map((object, index) => {
    return <Tile key={index} object={object}/>
  })
  
  return (
    <div>
      {items}
    </div>
  );
};

export default TileList;