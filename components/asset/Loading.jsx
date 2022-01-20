import React from "react";

import { AiOutlineLoading } from "react-icons/ai";
import { LoadingWrap } from "./assetStyle";
const Loading = () => {
  return (
    <LoadingWrap>
      <div className="container">
        <AiOutlineLoading />
      </div>
    </LoadingWrap>
  );
};

export default React.memo(Loading);
