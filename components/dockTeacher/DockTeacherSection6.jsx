import React from "react";
import { MainSection7wrap } from "../main/mainComponentStyle";
import Image from "next/image";
import { myLoader } from "../asset/myLoader";
import { DockTeacher6Wrap } from "./dockTeacherStyle";
const DockTeacherSection6 = () => {
  return (
    <DockTeacher6Wrap>
      <div className="container">
        {/* <h2>똑똑쌤의 생생한 후기</h2> */}

        <div className="img-wrap">
          <Image loader={myLoader} src="/imgs/couponImgWhite.png" layout="responsive" objectFit="contain" alt="me" width="320" height="355" />
        </div>
        <div className="btn-group">
          <button>할인받고 체험수업 신청하기</button>
        </div>
      </div>
    </DockTeacher6Wrap>
  );
};

export default DockTeacherSection6;
