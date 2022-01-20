import React from "react";
import { StudyPaySection3Wrap } from "./studyPayStyle";

const StudyPaySection3 = () => {
  return (
    <StudyPaySection3Wrap>
      <div className="container">
        <h2>
          <span>똑똑쌤의 이런 점,</span>
          <span>궁금해요!</span>
        </h2>
        <div className="question_list">
          <h3>Q. 프리미엄 똑똑쌤은 무엇이 다른가요?</h3>
          <div>
            <span>
              모든 똑똑쌤이 갖춰야할 <span>경력, 이력, 자격사항</span> 이외에도 선생님의 <span>수업후기와 부모님 만족도</span>를 종합적으로 고려하여 우수한 역량이 검증된 선생님들을 프리미엄 똑똑쌤
              으로 자격을 부여합니다.
            </span>
            <span> 프리미엄 똑똑쌤 수업은 분야별 1급 공인자격증, 아동발달 관련학과 석사 졸업 이외에도 아동발달 재활 실무경력 최소 6년 이상의 검증된 선생님이 찾아갑니다.</span>
            <span>*지역에 따라 프리미엄 똑똑쌤이 계시지 않아 프로미엄 똑똑쌤 수업 진행이 어려우실 수 있습니다. </span>
          </div>
        </div>
        <div className="question_list">
          <h3>Q. 프리미엄 똑똑쌤은 무엇이 다른가요?</h3>
          <div>
            <span style={{ fontSize: "0.875rem" }}>
              똑똑쌤 수업료는 최소 2개월 또는 3개월 단위로 결제가 진행됩니다. 예를들어 6개월 프로그램 등록을 희망하시는 경우, 3개월 수업권이 2번 결제가 진행됩니다.
            </span>
          </div>
        </div>
        <div className="notice-wrap">
          <h3>필수 유의사항</h3>
          <ul>
            <li>정규수업에 등록할 경우, 체험수업 시 배정된 담당 선생님이 정규수업을 이어서 진행합니다.</li>
            <li>지역 별로 체험수업 및 정규수업 진행을 위한 담당 선생님 배정까지 걸리는 시간은 상이하며, 신청이 완료될 경우 지역을 고려한 소요시간을 안내드립니다.</li>
            <li>수업 진행을 위해서는 신청서 작성 및 체험수업권 또는 정규수업권 결제가 필요합니다.</li>
            <li>담당 선생님이 배정되면 선생님 프로필 및 수업일정 정보가 카카오 알림메세지를 통해 안내됩니다.</li>
            <li>
              체험수업 및 정규수업 일정의 변경은 수업 이틀 전 18시 이전까지 요청한 변경 건에 대해 최대 1회 가능하며, 이후에는 수업일정 변경이 불가합니다 (단, 아이의 내원 또는 코로나-19 관련 증상 있을
              경우, 서류 상 증명이 완료되면 연기 가능)
            </li>
            <li>정규수업은 주 1회를 권장하며, 선생님과의 상의 하에 주 2회로 변경도 가능합니다.</li>
            <li>정규수업 등록 후, 담당 선생님 변경은 정책 상 가능하지만 지역 별로 타 선생님 배정에 따른 소요 기간이 길거나 불가할 수 있습니다.</li>
          </ul>
        </div>
        <div className="refund_wrap">
          <h3>환불 규정</h3>
          <div className="description">
            <span>수업권 환불은 환불 신청의 시점에 따라 위약금이 차등 부과되며, 환불 사유를 말씀해주셔야 신속한 환불 처리가 가능합니다. </span>
          </div>
          <div className="chaum_description">
            <h4>체험수업의 환불 규정은 아래와 같습니다</h4>
            <div>
              <span>매칭 이전: 수업료의 100%</span>
              <span> 1차 매칭 후 ~ 수업 이틀 전 18시 이전: 수업료 70% </span>
              <span>수업 이틀 전 18시 이후 ~ 수업 하루 전 18시 이전: 수업료 50% </span>
              <span>수업 하루 전 18시 이후 ~ 수업 당일: 환불 불가</span>
            </div>
          </div>
          <div className="born_description">
            <h4>정규수업의 환불 규정은 아래와 같습니다.</h4>
            <span>정규수업 등록 후부터 수업 진행 전, 중도환불 시 등록한 수업권의 정가 수업료의 10%가 위약금으로 발생합니다 (할인금액 미반영)</span>

            <span> 정규수업 진행 중, 중도 환불 시 신청 시점에 따라 잔여 수업 회차에 대한 환불이 진행됩니다.</span>
            <div>
              <span>수업 이틀 전 18시 이전: 해당 회차 수업료 100%</span>
              <span>수업 이틀 전 18시 이후 ~ 수업 하루 전 18시 이전: 수업료 50%</span>
              <span>수업 하루 전 18시 이후 ~ 수업 당일: 환불 불가</span>
            </div>
          </div>
        </div>
      </div>
    </StudyPaySection3Wrap>
  );
};

export default StudyPaySection3;
