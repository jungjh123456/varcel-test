import React from "react";
import ApplicationHeader from "../asset/ApplicationHeader";
import BigButton from "../asset/BigButton";
import MainHeader from "../asset/MainHeader";

import { CounSelorCODCheckContainerWrap } from "./CounselorStyle";
const CounselorCOD = ({ checkCoronaInput, saveCoronaBtn, corona = [] }) => {
  return (
    <CounSelorCODCheckContainerWrap>
      <MainHeader applied message={"일정관리 3/3"} white notoggle />
      <div className="container">
        <h2>백신 접종을 완료하셨나요?</h2>
        <div className="text">
          <span>선생님의 백신 접종여부를 고객측에게 전달드리기</span>
          <span>위해 백신접종 현황을 체크하고 있습니다.</span>
        </div>
        <div className="check_input-wrap">
          <input onChange={checkCoronaInput} value="1차 접종완료" type="radio" id="one" name="backsin" />
          <label htmlFor="one">
            <div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
                  fill="black"
                  fillOpacity="0.4"
                />
              </svg>

              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0H24V24H0V0Z" fill="white" />
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="#6100FF" />
              </svg>
            </div>
            <span>1차 접종완료</span>
          </label>
          <input onChange={checkCoronaInput} value="2차 접종완료" type="radio" id="two" name="backsin" />
          <label htmlFor="two">
            {" "}
            <div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
                  fill="black"
                  fillOpacity="0.4"
                />
              </svg>

              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0H24V24H0V0Z" fill="white" />
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="#6100FF" />
              </svg>
            </div>
            <span>2차 접종완료</span>
          </label>
          <input onChange={checkCoronaInput} value="3차 접종완료 (부스터 샷)" type="radio" id="three" name="backsin" />
          <label htmlFor="three">
            {" "}
            <div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
                  fill="black"
                  fillOpacity="0.4"
                />
              </svg>

              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0H24V24H0V0Z" fill="white" />
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="#6100FF" />
              </svg>
            </div>
            <span>3차 접종완료 (부스터 샷)</span>
          </label>
          <input onChange={checkCoronaInput} value="미접종" type="radio" id="no" name="backsin" />
          <label htmlFor="no">
            {" "}
            <div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
                  fill="black"
                  fillOpacity="0.4"
                />
              </svg>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0H24V24H0V0Z" fill="white" />
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="#6100FF" />
              </svg>
            </div>
            <span>미접종</span>
          </label>
        </div>
        <div className="btn-group">
          <BigButton onClick={saveCoronaBtn} disabled={corona.length ? false : true}>
            백신체크 저장하기
          </BigButton>
        </div>
      </div>
    </CounSelorCODCheckContainerWrap>
  );
};

export default CounselorCOD;
