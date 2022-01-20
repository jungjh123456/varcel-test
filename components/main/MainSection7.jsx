import React from "react";
import { MainSection7wrap } from "./mainComponentStyle";
import Image from "next/image";
import { myLoader } from "../asset/myLoader";
const MainSection7 = () => {
  return (
    <MainSection7wrap>
      <div className="container">
        <div className="img-wrap">
          <Image loader={myLoader} src="/imgs/couponImgWhite.png" layout="responsive" objectFit="contain" alt="me" width="320" height="355" />
        </div>
        <div className="btn-group">
          <button>할인받고 체험수업 신청하기</button>
        </div>
      </div>
    </MainSection7wrap>
  );
};

export default MainSection7;
