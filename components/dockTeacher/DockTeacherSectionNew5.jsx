import React from "react";
import { DockTeacherSectionNew5Wrap } from "./dockTeacherStyle";
import Image from "next/image";
import { myLoader } from "../asset/myLoader";
const DockTeacherSectionNew5 = () => {
  return (
    <DockTeacherSectionNew5Wrap>
      <div className="container">
        <h2>
          <span>똑똑쌤과 함께한</span>
          <span>똑똑맘의 홈티칭 후기</span>
        </h2>
        <div className="review-wrap">
          {/* phoneImg */}
          <Image loader={myLoader} src="/imgs/phoneImg.png" layout="responsive" objectFit="contain" alt="me" width="304px" height="500px" />
        </div>
      </div>
    </DockTeacherSectionNew5Wrap>
  );
};

export default DockTeacherSectionNew5;
