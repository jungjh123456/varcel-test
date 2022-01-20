import React from "react";
import IconWhiting from "../asset/IconWhiting";
import { SupportSection5Wrap } from "./supportStyle";
import Link from "next/dist/client/link";
const SupportSection5 = () => {
  return (
    <SupportSection5Wrap>
      <div className="container">
        <h2>똑똑쌤 등록절차</h2>
        <div className="register_way">
          <IconWhiting />
          <div>
            <h3>신청서 작성</h3>
            <div>
              <span>작성한 신청서를 검토한 뒤, 운영팀과</span>
              <span>1:1 비대면 미팅을 진행해요.</span>
            </div>
          </div>
        </div>
        <div className="register_way">
          <IconWhiting />
          <div>
            <h3>사전미팅</h3>
            <div>
              <span>운영팀과 사전미팅을 통해 운영안내를 받고,</span>
              <span>비대면 계약서 작성을 진행해요.</span>
            </div>
          </div>
        </div>
        <div className="register_way">
          <IconWhiting />
          <div>
            <h3>등록대기</h3>
            <div>
              <span>서류 검토와 프로필 등록이 완료되면</span>
              <span>모든 수업 준비가 끝나요.</span>
            </div>
          </div>
        </div>
        <div className="register_way">
          <IconWhiting />
          <div>
            <h3>똑똑쌤 매칭진행</h3>
            <div>
              <span>선생님이 원하는 지역과 시간대에 맞는</span>
              <span>아이들을 만나보세요.</span>
            </div>
          </div>
        </div>
      </div>
    </SupportSection5Wrap>
  );
};

export default SupportSection5;
