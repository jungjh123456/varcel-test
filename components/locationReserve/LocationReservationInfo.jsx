import React from "react";
import BigButton from "../asset/BigButton";
import Progress from "../asset/Progress";
import DaumPostcode from "react-daum-postcode";
import { ApplicationContainerWrap } from "../../containers/applicationStyle";
import ApplicationHeader from "../asset/ApplicationHeader";
import { LocationReservationInfoWrap } from "./locationReserveStyle";
import SearchIcon from "../asset/SearchIcon";
// import ApplicationHeader from "../asset/ApplicationHeader";
const LocationReservationInfo = ({ percent, addressModal, modalStatebtb, handleComplete }) => {
  return (
    <LocationReservationInfoWrap>
      <ApplicationHeader message={"양육자 정보"} white />
      <div className="container">
        <div className="progress">
          <Progress info="reservation" param={1} prevPercent={50} percent={50} />
        </div>
        <h1>양육자 정보를 작성해주세요.</h1>
        <div className="user_name-wrap">
          <span>성함</span>
          <input type="text" placeholder="장성원" />
        </div>
        <div className="user_name-wrap">
          <span>전화번호</span>
          <input type="text" placeholder="01077777777" />
        </div>
        <div className="user_name-wrap">
          <span>이메일</span>
          <input type="text" placeholder="jjjj@naver.com" />
        </div>
        <div className="user_name-wrap">
          <span>주소</span>
          <button onClick={modalStatebtb} type="text" placeholder="서울 성동구 종암로 14길 19-4">
            서울 성동구 종암로 14길 19-4
            <SearchIcon />
          </button>
          <input type="text" placeholder="상세주소를 입력해주세요" />
        </div>
        <div className="btn-group">
          <BigButton>예약대기 신청하기</BigButton>
        </div>
        {addressModal && (
          <div className={addressModal ? "modal active" : "modal"}>
            <div className="address-wrap">
              <DaumPostcode style={{ maxWidth: "450px", boxSizing: "border-box", width: "100vw", height: "60vh" }} onComplete={handleComplete} />
            </div>
          </div>
        )}
      </div>
    </LocationReservationInfoWrap>
  );
};

export default LocationReservationInfo;
