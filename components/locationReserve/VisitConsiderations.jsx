import React from "react";
import ApplicationHeader from "../asset/ApplicationHeader";
import BigButton from "../asset/BigButton";
import Dropdown from "../asset/Dropdown";
import MainHeader from "../asset/MainHeader";
import Progress from "../asset/Progress";
import RadioInput from "../asset/RadioInput";
import { ModalWrap, VisitConsiderationsWrap } from "./locationReserveStyle";

const VisitConsiderations = ({ percent }) => {
  const carList = [
    {
      label: "자유롭게 출입 및 주차 가능",
    },
    {
      label: "경비실 동, 호수 작성필요",
    },
    {
      label: "방문차량 사전등록 필요",
    },
    {
      label: "주차 불가",
    },
  ];
  return (
    <>
      <VisitConsiderationsWrap>
        <MainHeader applied message={"양육자 정보"} white />
        <div className="container">
          <div className="wrap">
            <div className="progress">
              <Progress info="reservation" param={2} prevPercent={100} percent={100} />
            </div>
            <h1>방문 시 고려사항을 알려주세요</h1>
            <div className="drop_down">
              <span>주차방식</span>
              <Dropdown Zindex={1000} id="cars" name="is_car" list={carList}>
                차량 방문 시 주차가 가능한가요?
              </Dropdown>
            </div>
            <div className="is_dog">
              <span>주차방식</span>
              <div>
                <RadioInput type="radio" label="없음" name="is_pet" id="no_pet" value={false} />
                <RadioInput type="radio" label="있음" name="is_pet" id="yes_pet" value={true} />
              </div>
            </div>
          </div>
          <div className="btn-group">
            <BigButton>넘어가기</BigButton>
          </div>
        </div>
      </VisitConsiderationsWrap>
      {false}
      <ModalWrap>
        <div className="container">
          <span>🔔</span>
          <div>
            <h2>예약신청이 완료되었습니다.</h2>
            <div>
              <span>해당 지역 신규교사 채용이 완료되면,</span>
              <span>고객님의 카카오톡으로 알림을 드립니다.</span>
              <span>우리아이들에게 알맞는 똑똑쌤을 위해</span>
              <span>꼼꼼한 체크와 검증을 약속드립니다.</span>
            </div>
            <div className="btn-group">
              <BigButton>네, 확인했습니다.</BigButton>
            </div>
          </div>
        </div>
      </ModalWrap>
    </>
  );
};

export default VisitConsiderations;
