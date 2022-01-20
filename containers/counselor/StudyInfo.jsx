import { useRouter } from "next/dist/client/router";
import React, { useState } from "react";
import MainHeader from "../../components/asset/MainHeader";
import RightIcon from "../../components/asset/RightIcon";
import { CounselorManageMentInfoWrap } from "./counselorStyle";
import DetailCureInfo from "./DetailCureInfo";
import DetailInfo from "./DetailInfo";

const StudyInfo = () => {
  const history = useRouter();
  const [checInputName, setCheckInputName] = useState("sangsae_info");
  const changeInput = (e) => {
    setCheckInputName(e.target.value);
  };
  return (
    <>
      <CounselorManageMentInfoWrap>
        <MainHeader applied message={"회원 관리"} white notoggle />
        <div className="container">
          <div className="tab_wrap">
            <input onChange={changeInput} type="radio" value="sangsae_info" checked={checInputName === "sangsae_info" ? true : false} id="detail_info" name="study_info" />
            <label htmlFor="detail_info">상세정보</label>
            <input type="radio" onChange={changeInput} value="study_ilgy" checked={checInputName === "study_ilgy" ? true : false} id="study_log" name="study_info" />
            <label htmlFor="study_log">수업일지</label>
          </div>
          {checInputName === "sangsae_info" && (
            <>
              {history.query?.program === "presession" && <DetailInfo />}
              {history.query?.program === "session" && <DetailCureInfo />}
            </>
          )}
          {checInputName === "study_ilgy" && (
            <>
              {" "}
              {history.query?.program === "presession" && (
                <>
                  {" "}
                  <h2 className="program_info-h2">
                    <span>프로그램 정보</span>
                    <span>👈🏼</span>
                  </h2>
                  <div className="teacher_info">
                    <div>
                      <span>담당 치료사</span>
                      <span>강명실 선생님</span>
                    </div>
                    <div>
                      <span>이용권</span>
                      <span>24회 정기권</span>
                    </div>
                    <div>
                      <span>등급</span>
                      <span>프리미엄</span>
                    </div>
                  </div>
                  <div className="study_log">
                    <div className="card">
                      <div>
                        <span>6회차</span>
                        <span>2021.11.24 (수) 15:30</span>
                        <span>종료</span>
                      </div>
                      <div>
                        <RightIcon />
                      </div>
                    </div>
                    <div className="card">
                      <div>
                        <span>6회차</span>
                        <span>2021.11.24 (수) 15:30</span>
                        <span>종료</span>
                      </div>
                      <div>
                        <div>
                          <RightIcon />
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div>
                        <span>6회차</span>
                        <span>2021.11.24 (수) 15:30</span>
                        <span>종료</span>
                      </div>
                      <div>
                        <div>
                          <RightIcon />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {history.query?.program === "session" && (
                <>
                  {" "}
                  <h2 className="program_info-h2">
                    <span>프로그램 정보</span>
                    <span>👈🏼</span>
                  </h2>
                  <div className="teacher_info">
                    <div>
                      <span>담당 치료사</span>
                      <span>강명실 선생님</span>
                    </div>
                    <div>
                      <span>이용권</span>
                      <span>24회 정기권</span>
                    </div>
                    <div>
                      <span>등급</span>
                      <span>프리미엄</span>
                    </div>
                  </div>
                  <div className="study_log">
                    <div className="card">
                      <div>
                        <span>6회차</span>
                        <span>2021.11.24 (수) 15:30</span>
                        <span>종료</span>
                      </div>
                      <div>
                        <RightIcon />
                      </div>
                    </div>
                    <div className="card">
                      <div>
                        <span>6회차</span>
                        <span>2021.11.24 (수) 15:30</span>
                        <span>종료</span>
                      </div>
                      <div>
                        <div>
                          <RightIcon />
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div>
                        <span>6회차</span>
                        <span>2021.11.24 (수) 15:30</span>
                        <span>종료</span>
                      </div>
                      <div>
                        <div>
                          <RightIcon />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </CounselorManageMentInfoWrap>
    </>
  );
};

export default StudyInfo;
