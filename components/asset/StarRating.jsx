import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import Star from "./Star";

const StarLatingStyle = styled.div`
  position: relative;
  margin-top: 11px;
  input[type="radio"] {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
  label {
    margin-right: 12px;
    width: 100px;
    &:last-child {
      margin-right: 0;
    }
    svg {
      /* fill: none; */
      strokewidth: 1;
      polygon {
      }
    }
  }
`;

const StarRating = ({ hover, changeStarRating, rating, setHover }) => {
  return (
    <StarLatingStyle>
      <div>
        {[...Array(5)].map((_, i) => {
          const starValue = i + 1;

          return (
            <label key={i} name="cleanliness">
              <input name="cleanliness" type="radio" value={starValue} onClick={(e) => changeStarRating(starValue)(e)} />

              <Star
                size={30}
                hover={hover}
                rating={rating}
                starValue={starValue}
                style={{ cursor: "pointer" }}
                onClick={() => setHover(starValue)}
                // onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
      </div>
    </StarLatingStyle>
  );
};

export default React.memo(StarRating);
