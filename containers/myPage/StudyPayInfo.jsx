import React from "react";
import MainHeader from "../../components/asset/MainHeader";
import { PaymentInfocontainerWrap } from "./myPageStyle";

const StudyPayInfo = () => {
  return (
    <PaymentInfocontainerWrap>
      <MainHeader applied white />
      <div className="container">
        <h2>결제정보를 확인해주세요.</h2>
        <span>결제일시 2021.10.17 | 15:37</span>
        <div>
          <h2>
            <span>최종 결제금액</span>
            <span>💰</span>
          </h2>
          <div className="program_wrap">
            <div>
              <span>할인혜택</span>
              <span>첫 체험할인 60%</span>
            </div>
            <div>
              <span>총 결제금액</span>
              <span>42,900원</span>
            </div>
          </div>

          <h3>
            <span>수업권 정보</span>
            <span>📌</span>
          </h3>
          <div className="cost_wrap">
            <div>
              <span>수업 유형</span>
              <span>첫 체험수업</span>
            </div>
            <div>
              <span>프로그램 유형</span>
              <span>아동 발달치료 프로그램</span>
            </div>
            <div>
              <span>세부 프로그램</span>
              <span>언어치료 프로그램</span>
            </div>
            <div>
              <span>담당 치료사</span>
              <span>강명실 선생님</span>
            </div>
            <div>
              <span>등급</span>
              <span>프리미엄</span>
            </div>
          </div>
        </div>
      </div>
    </PaymentInfocontainerWrap>
  );
};

export default StudyPayInfo;
