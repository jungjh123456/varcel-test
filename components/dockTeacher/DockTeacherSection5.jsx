import React from "react";
import { DockTeacherSection5wrap } from "./dockTeacherStyle";
import Image from "next/image";
import { myLoader } from "../asset/myLoader";
import Emoticon5 from "../asset/Emoticon5";
const DockTeacherSection5 = () => {
  return (
    <DockTeacherSection5wrap>
      {" "}
      <div className="container">
        <h2>
          <span>똑똑쌤과 함께하는</span>
          <span>홈티칭 수업절차</span>
        </h2>
        <div className="study_way">
          <h3>
            <span>
              {" "}
              <Emoticon5 />
            </span>
            <span>체험수업 신청</span>
          </h3>
          <div>
            <span>우리동네 똑똑쌤이 방문하여 아이의</span>
            <span>발달상태를 체크하고 상담을 진행해요!</span>
          </div>
          <Image loader={myLoader} src="/imgs/momImgNew.png" layout="responsive" objectFit="contain" alt="me" width="320" height="200" />
        </div>
        <div className="study_way">
          <h3>
            <span>
              {" "}
              <Emoticon5 />
            </span>
            <span>피드백 및 커리큘럼 확인</span>
          </h3>
          <div>
            <span>체험수업을 통해 확인한 발달상태에</span>
            <span>알맞는 맞춤형 커리큘럼을 받아보세요.</span>
          </div>
          <Image loader={myLoader} src="/imgs/momImgNew.png" layout="responsive" objectFit="contain" alt="me" width="320" height="200" />
        </div>
        <div className="study_way">
          <h3>
            <span>
              {" "}
              <Emoticon5 />
            </span>
            <span>합리적인 등록권 선택</span>
          </h3>
          <div>
            <span>커리큘럼과 체험수업을 통해</span>
            <span>가장 알맞는 등록권을 선택해보세요.</span>
          </div>
          <Image loader={myLoader} src="/imgs/momImgNew.png" layout="responsive" objectFit="contain" alt="me" width="320" height="200" />
        </div>
        <div className="study_way">
          <h3>
            <span>
              {" "}
              <Emoticon5 />
            </span>
            <span>지속적인 관리 시스템 경험</span>
          </h3>
          <div>
            <span>꾸준히 오래받는 수업만큼 똑똑 매니저가</span>
            <span>정기적으로 똑똑쌤 수업을 관리합니다.</span>
          </div>
          <Image loader={myLoader} src="/imgs/momImgNew.png" layout="responsive" objectFit="contain" alt="me" width="320" height="200" />
        </div>
      </div>
    </DockTeacherSection5wrap>
  );
};

export default DockTeacherSection5;
