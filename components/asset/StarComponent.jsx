import React from "react";
import { StarComponentWrap } from "./assetStyle";
import StarRating from "./StarRating";

const StarComponent = ({ message, text, hover, setHover, changeStarRating, rating }) => {
  return (
    <StarComponentWrap>
      <div className="container">
        <div className="grid2">
          <span>{text}</span>
          <StarRating hover={hover} setHover={setHover} changeStarRating={changeStarRating} rating={rating} />
        </div>
      </div>
    </StarComponentWrap>
  );
};

export default StarComponent;
