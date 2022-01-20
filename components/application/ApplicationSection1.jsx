import React, { useState } from "react";
import BigButton from "../asset/BigButton";
import Progress from "../asset/Progress";
import DaumPostcode from "react-daum-postcode";
import { ApplicationContainerWrap } from "../../containers/applicationStyle";
import ApplicationHeader from "../asset/ApplicationHeader";
import SearchIcon from "../asset/SearchIcon";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/dist/client/router";
import { applicationPatch, getAppliedInfo } from "../../redux/reducers/modules/application";
import { useEffect } from "react";

import { ApplicationModalWrap } from "./applicationstyle";
import MainHeader from "../asset/MainHeader";
const ApplicationSection1 = () => {
  const param = useRouter();
  const [goInfo, setGoInfo] = useState({});

  const [addressModal, setAddressModal] = useState(false);
  const {
    application: { userAppliedInfo },
  } = useSelector(({ application }) => ({ application }));
  const modalStatebtb = (e) => {
    setAddressModal(true);
  };
  const {
    auth: { token },
  } = useSelector(({ auth }) => ({ auth }));
  useEffect(() => {
    if (param.query.complete === "true") {
      const id = param.query.user_id;
      dispatch(getAppliedInfo({ token, id }));
    }
  }, [param.query]);

  useEffect(() => {
    if (userAppliedInfo?.id) {
      setGoInfo({ address: userAppliedInfo?.address, address_detail: userAppliedInfo.address_detail, customer_name: userAppliedInfo.customer_name, cellphone: userAppliedInfo?.cellphone });
    }
  }, [userAppliedInfo?.id]);
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress += extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    setGoInfo((state) => ({ ...state, address: fullAddress, bname: data.bname, sigungu: data.sigungu }));
    setAddressModal(false);
  };
  const program1Input = (e) => {
    setGoInfo((state) => ({ ...state, [e.target.name]: e.target.value }));
  };
  const dispatch = useDispatch();

  const goNextBtn = (e) => {
    const id = param.query.user_id;
    const result = { ...goInfo };
    // const result = goInfo;
    dispatch(applicationPatch({ result, id, token }));
    sessionStorage.setItem("applied1", JSON.stringify(goInfo));
    // param.push(`/application/2?user_id=${param.query.user_id}`);
    setModalState(true);
  };
  useEffect(() => {
    if (JSON.parse(sessionStorage.getItem("applied1"))) {
      setGoInfo(JSON.parse(sessionStorage.getItem("applied1")) || {});
    }
  }, []);

  const [modalState, setModalState] = useState(false);

  const modalOneBtn = () => {
    const id = param.query.user_id;
    const result = { step: `/application/2` };
    // const result = goInfo;
    dispatch(applicationPatch({ id, result }));
    param.push(`/application/2?user_id=${param.query.user_id}`);
    setModalState(false);
  };
  const modalTwoBtn = () => {
    const id = param.query.user_id;
    const result = { step: `/application/2?children=one` };
    // const result = goInfo;
    dispatch(applicationPatch({ id, result }));
    param.push(`/application/2?user_id=${param.query.user_id}&children=one`);
    setModalState(false);
  };
  const goSkipNextBtn = (e) => {
    param.push(`/application/2?user_id=${param.query.user_id}&complete=true`);
  };
  return (
    <>
      <ApplicationContainerWrap>
        <MainHeader message={"양육자 정보"} applied white />
        <div className="container">
          <div className="progress">
            <Progress info="application" param={1} prevPercent={14} percent={14} />
          </div>
          <h1>양육자 정보를 작성해주세요.</h1>
          <div className="user_name-wrap">
            <span>성함</span>
            <input type="text" value={goInfo?.customer_name} onChange={program1Input} name="customer_name" placeholder="장성원" />
          </div>
          <div className="user_name-wrap">
            <span>전화번호</span>
            <input type="text" value={goInfo?.cellphone} onChange={program1Input} name="cellphone" placeholder="01077777777" />
          </div>
          {/* <div className="user_name-wrap">
          <span>이메일</span>
          <input type="text" placeholder="jjjj@naver.com" />
        </div> */}
          <div className="user_name-wrap">
            <span>주소</span>
            <button style={goInfo?.address ? { color: "#000" } : {}} onClick={modalStatebtb} type="text" placeholder="서울 성동구 종암로 14길 19-4">
              {goInfo?.address ? goInfo?.address : "서울 성동구 종암로 14길 19-4"}
              <SearchIcon />
            </button>
            <input value={goInfo?.address_detail} onChange={program1Input} type="text" name="address_detail" placeholder="상세주소를 입력해주세요" />
          </div>
          <div className="btn-group">
            {param.query.complete === "true" ? (
              <BigButton onClick={goSkipNextBtn}>넘어가기</BigButton>
            ) : (
              <BigButton disabled={goInfo?.address && goInfo?.address_detail && goInfo?.cellphone && goInfo?.customer_name ? false : true} onClick={goNextBtn}>
                넘어가기
              </BigButton>
            )}
          </div>
          {addressModal && (
            <div className={addressModal ? "modal active" : "modal"}>
              <div className="address-wrap">
                <DaumPostcode style={{ maxWidth: "450px", boxSizing: "border-box", width: "100vw", height: "60vh" }} onComplete={handleComplete} />
              </div>
            </div>
          )}
        </div>
      </ApplicationContainerWrap>
      {modalState && (
        <ApplicationModalWrap>
          <div className="container">
            <span>👏</span>
            <h2>아동정보를 입력해주세요</h2>
            <div className="text-wrap">
              <span>핸드북 제출이 완료되었습니다. 이어서 부모님께 전달되는 체험수업 알림노트를 작성해주세요.</span>
            </div>
            <div className="btn-group">
              <button onClick={modalOneBtn}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 5.9C13.16 5.9 14.1 6.84 14.1 8C14.1 9.16 13.16 10.1 12 10.1C10.84 10.1 9.9 9.16 9.9 8C9.9 6.84 10.84 5.9 12 5.9ZM12 14.9C14.97 14.9 18.1 16.36 18.1 17V18.1H5.9V17C5.9 16.36 9.03 14.9 12 14.9ZM12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4ZM12 13C9.33 13 4 14.34 4 17V20H20V17C20 14.34 14.67 13 12 13Z"
                    fill="#6100FF"
                  />
                </svg>
                <span>한 자녀만 신청해요</span>
              </button>
              <button onClick={modalTwoBtn}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16.5 13C15.3 13 13.43 13.34 12 14C10.57 13.33 8.7 13 7.5 13C5.33 13 1 14.08 1 16.25V19H23V16.25C23 14.08 18.67 13 16.5 13ZM12.5 17.5H2.5V16.25C2.5 15.71 5.06 14.5 7.5 14.5C9.94 14.5 12.5 15.71 12.5 16.25V17.5ZM21.5 17.5H14V16.25C14 15.79 13.8 15.39 13.48 15.03C14.36 14.73 15.44 14.5 16.5 14.5C18.94 14.5 21.5 15.71 21.5 16.25V17.5ZM7.5 12C9.43 12 11 10.43 11 8.5C11 6.57 9.43 5 7.5 5C5.57 5 4 6.57 4 8.5C4 10.43 5.57 12 7.5 12ZM7.5 6.5C8.6 6.5 9.5 7.4 9.5 8.5C9.5 9.6 8.6 10.5 7.5 10.5C6.4 10.5 5.5 9.6 5.5 8.5C5.5 7.4 6.4 6.5 7.5 6.5ZM16.5 12C18.43 12 20 10.43 20 8.5C20 6.57 18.43 5 16.5 5C14.57 5 13 6.57 13 8.5C13 10.43 14.57 12 16.5 12ZM16.5 6.5C17.6 6.5 18.5 7.4 18.5 8.5C18.5 9.6 17.6 10.5 16.5 10.5C15.4 10.5 14.5 9.6 14.5 8.5C14.5 7.4 15.4 6.5 16.5 6.5Z"
                    fill="#6100FF"
                  />
                </svg>

                <span>쌍둥이 신청해요</span>
              </button>
            </div>
          </div>
        </ApplicationModalWrap>
      )}
    </>
  );
};

export default ApplicationSection1;
