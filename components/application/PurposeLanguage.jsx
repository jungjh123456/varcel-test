import React, { useEffect, useState } from "react";
import ApplicationHeader from "../asset/ApplicationHeader";
import ArrowIcon from "../asset/ArrowIcon";
import BigButton from "../asset/BigButton";
import { myLoader } from "../asset/myLoader";
import Progress from "../asset/Progress";
import WhiteArrow from "../asset/WhiteArrow";
import { ProgramCheckPageWrap, ProgramPurposePageWrap } from "./applicationstyle";
import Image from "next/dist/client/image";
import MainHeader from "../asset/MainHeader";
import { useRouter } from "next/dist/client/router";
import { useDispatch, useSelector } from "react-redux";
import { applicationPatch, getAppliedInfo } from "../../redux/reducers/modules/application";
const PurposeLanguage = ({ percent, checkState }) => {
  const param = useRouter();
  const [subProductNumber, setSubProductNumber] = useState(null);
  const dispatch = useDispatch();
  const checkProgramInput = (e) => {
    setSubProductNumber(e.target.dataset.num);
  };
  const {
    auth: { token },
  } = useSelector(({ auth }) => ({ auth }));
  const {
    application: { userAppliedInfo },
  } = useSelector(({ application }) => ({ application }));
  useEffect(() => {
    if (JSON.parse(sessionStorage.getItem("applied4"))) {
      setSubProductNumber(JSON.parse(sessionStorage.getItem("applied4")));
    }
  }, []);
  useEffect(() => {
    if (param.query.complete === "true") {
      const id = param.query.user_id;
      dispatch(getAppliedInfo({ token, id }));
    }
  }, [param.query]);
  useEffect(() => {
    if (userAppliedInfo?.id) {
      setSubProductNumber(userAppliedInfo.program);
    }
  }, [userAppliedInfo?.id]);
  const nextPagebtn = (e) => {
    if (param.query.children) {
      if (param.query.children === "one") {
        const id = param.query.user_id;
        const result = {
          program: +subProductNumber,
          step: `/application/5?program=${param.query.program}&step=1&program_id=${subProductNumber}&programnum=${param.query.programnum}&children=${param.query?.children}`,
        };
        sessionStorage.setItem("applied4", JSON.stringify(subProductNumber));
        dispatch(applicationPatch({ result, id, token }));
        param.push(
          `/application/5?program=${param.query.program}&step=1&user_id=${param.query.user_id}&programnum=${param.query.programnum}&program_id=${subProductNumber}&children=${param.query?.children}`
        );
        return;
      }
      if (param.query.children === "two") {
        const id = param.query.user_id;
        const result = {
          program: +subProductNumber,
          step: `/application/5?program=${param.query.program}&step=1&program_id=${subProductNumber}&programnum=${param.query.programnum}&children=${param.query?.children}&first_id=${param.query.first_id}`,
        };
        sessionStorage.setItem("applied4", JSON.stringify(subProductNumber));
        dispatch(applicationPatch({ result, id, token }));
        param.push(
          `/application/5?program=${param.query.program}&step=1&user_id=${param.query.user_id}&programnum=${param.query.programnum}&program_id=${subProductNumber}&children=${param.query?.children}&first_id=${param.query.first_id}`
        );
        return;
      }
    }
    if (!param.query.children) {
      const id = param.query.user_id;
      const result = { program: +subProductNumber, step: `/application/5?program=${param.query.program}&programnum=${param.query.programnum}&step=1&program_id=${subProductNumber}` };
      sessionStorage.setItem("applied4", JSON.stringify(subProductNumber));
      dispatch(applicationPatch({ result, id, token }));
      param.push(`/application/5?program=${param.query.program}&step=1&user_id=${param.query.user_id}&programnum=${param.query.programnum}&program_id=${subProductNumber}`);
      return;
    }
  };
  const goSkipNextBtn = (e) => {
    param.push(`/application/5?user_id=${param.query.user_id}&program=${param.query.program}&step=1&complete=true`);
  };
  return (
    <>
      <MainHeader applied message={"프로그램 선택"} white />
      <ProgramPurposePageWrap>
        <div className="container">
          <div className="progress">
            <Progress info="application" param={3} prevPercent={42} percent={42} />
          </div>
          <h1>희망 프로그램을 알려주세요</h1>
          <div className="progrem_check-wrap">
            <input checked={+subProductNumber === 3 ? true : false} data-num={3} onChange={checkProgramInput} type="radio" id="program1" value="propgram1" name="program" />
            <label htmlFor="program1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="#6100FF" />
              </svg>

              <div>
                <h2>언어치료 프로그램</h2>
                <span>똑똑 언어쌤의 언어치료 홈티칭 수업</span>
              </div>
              <Image loader={myLoader} layout="responsive" objectFit="cover" src={"/imgs/momimg.png"} alt="me" width="320px" height="147" />
            </label>
            <input data-num={4} disabled onChange={checkProgramInput} type="radio" id="program2" value="propgram2" name="program" />
            <label htmlFor="program2">
              <Image loader={myLoader} layout="responsive" objectFit="cover" src={"/imgs/open_no_language.png"} alt="me" width="320px" height="80" />
              {/* open_no */}
            </label>
          </div>
          <div className="btn-group">
            {param.query.complete === "true" ? (
              <BigButton onClick={goSkipNextBtn}>넘어가기</BigButton>
            ) : (
              <BigButton disabled={subProductNumber ? false : true} onClick={nextPagebtn}>
                넘어가기
              </BigButton>
            )}
          </div>
        </div>
      </ProgramPurposePageWrap>
    </>
  );
};

export default PurposeLanguage;
