import React, { useEffect, useState } from "react";
import ApplicationHeader from "../asset/ApplicationHeader";
import ArrowIcon from "../asset/ArrowIcon";
import BigButton from "../asset/BigButton";
import { myLoader } from "../asset/myLoader";
import Progress from "../asset/Progress";
import WhiteArrow from "../asset/WhiteArrow";
import { ProgramCheckPageWrap } from "./applicationstyle";
import Image from "next/dist/client/image";
import MainHeader from "../asset/MainHeader";
import { useDispatch, useSelector } from "react-redux";
import { applicationPatch, getAppliedInfo } from "../../redux/reducers/modules/application";
import { useRouter } from "next/dist/client/router";
const ProgramCheckPage = ({ percent }) => {
  const param = useRouter();

  const [checkState, setCheckState] = useState("");
  const [programNum, setProgramNum] = useState(null);
  const checkProgramInput = (e) => {
    setCheckState(e.target.value);
    setProgramNum(e.target.dataset.num);
  };
  const dispatch = useDispatch();
  const {
    auth: { token },
  } = useSelector(({ auth }) => ({ auth }));
  const {
    application: { userAppliedInfo },
  } = useSelector(({ application }) => ({ application }));
  const nextBtn = (e) => {
    if (param.query.children) {
      if (param.query.children === "one") {
        const id = param.query.user_id;
        // const result = { ...goInfo, step: `/application/1` };
        const result = { product: +programNum, step: `/application/4?program=${checkState}&programnum=${programNum}&children=${param.query.children}` };
        dispatch(applicationPatch({ result, id, token }));
        sessionStorage.setItem("program", checkState);
        sessionStorage.setItem("applied3", JSON.stringify(programNum));
        param.push(`/application/4?program=${checkState}&user_id=${param.query.user_id}&children=${param.query.children}&programnum=${programNum}`);
        return;
      }
      if (param.query.children === "two") {
        const id = param.query.user_id;
        // const result = { ...goInfo, step: `/application/1` };
        const result = { product: +programNum, step: `/application/4?program=${checkState}&programnum=${programNum}&children=${param.query.children}&first_id=${param.query.first_id}` };
        dispatch(applicationPatch({ result, id, token }));
        sessionStorage.setItem("program", checkState);
        sessionStorage.setItem("applied3", JSON.stringify(programNum));
        param.push(`/application/4?program=${checkState}&user_id=${param.query.user_id}&programnum=${programNum}&children=${param.query.children}&first_id=${param.query.first_id}`);
        return;
      }
      return;
    }
    if (!param.query.children) {
      const id = param.query.user_id;
      // const result = { ...goInfo, step: `/application/1` };
      const result = { product: +programNum, step: `/application/4?program=${checkState}&programnum=${programNum}` };
      dispatch(applicationPatch({ result, id, token }));
      sessionStorage.setItem("program", checkState);
      sessionStorage.setItem("applied3", JSON.stringify(programNum));
      param.push(`/application/4?program=${checkState}&user_id=${param.query.user_id}&programnum=${programNum}`);
    }
  };
  useEffect(() => {
    if (param.query.complete === "true") {
      const id = param.query.user_id;
      dispatch(getAppliedInfo({ token, id }));
    }
  }, [param.query]);
  useEffect(() => {
    if (userAppliedInfo?.id) {
      if (userAppliedInfo.product === "영유아 발달자극 프로그램") {
        setProgramNum(1);
      }
      if (userAppliedInfo.product === "아동 발달치료 프로그램") {
        setProgramNum(2);
      }
    }
  }, [userAppliedInfo?.id]);
  useEffect(() => {
    if (JSON.parse(sessionStorage.getItem("applied3"))) {
      setProgramNum(JSON.parse(sessionStorage.getItem("applied3")) || null);
    }
  }, []);
  useEffect(() => {
    if (sessionStorage.getItem("program")) {
      setCheckState(sessionStorage.getItem("program") || "");
    }
  }, []);
  const goSkipNextBtn = (e) => {
    if (userAppliedInfo.product === "영유아 발달자극 프로그램") {
      param.push(`/application/4?user_id=${param.query.user_id}&program=study&complete=true`);
    }
    if (userAppliedInfo.product === "아동 발달치료 프로그램") {
      param.push(`/application/4?user_id=${param.query.user_id}&program=languge_program&complete=true`);
    }
  };
  return (
    <>
      <MainHeader applied message={"프로그램 선택"} white />
      <ProgramCheckPageWrap>
        <div className="container">
          <div className="progress">
            <Progress info="application" param={3} prevPercent={42} percent={42} />
          </div>
          <h1>프로그램을 선택해주세요</h1>
          <div className="progrem_check-wrap">
            <input checked={+programNum === 1 ? true : false} data-num={1} onChange={checkProgramInput} type="radio" id="program1" value="study" name="program" />
            <label htmlFor="program1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="#6100FF" />
              </svg>

              <div>
                <h2 style={programNum === null ? {} : +programNum === 1 ? {} : { color: "rgba(0,0,0,0.4)" }}>영유아 발달자극 프로그램</h2>
                <span style={programNum === null ? {} : +programNum === 1 ? {} : { color: "rgba(0,0,0,0.4)" }}>생후 14개월 ~ 40개월 미만</span>
              </div>
              <Image
                loader={myLoader}
                layout="responsive"
                objectFit="cover"
                src={programNum === null ? "/imgs/kid_manbaby.png" : +programNum === 1 ? "/imgs/kid_manbaby.png" : "/imgs/no_checkmen.png"}
                alt="me"
                width="320px"
                height="147"
              />
            </label>
            <input checked={+programNum === 2 ? true : false} data-num={2} onChange={checkProgramInput} type="radio" id="program2" value="languge_program" name="program" />
            <label htmlFor="program2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="#6100FF" />
              </svg>
              <div>
                <h2 style={programNum === null ? {} : +programNum === 2 ? {} : { color: "rgba(0,0,0,0.4)" }}>아동 발달치료 프로그램</h2>
                <span style={programNum === null ? {} : +programNum === 2 ? {} : { color: "rgba(0,0,0,0.4)" }}>생후 40개월 ~ 만 7세 대상</span>
              </div>
              <Image
                loader={myLoader}
                layout="responsive"
                objectFit="cover"
                src={programNum === null ? "/imgs/kid_wonanbaby.png" : +programNum === 2 ? "/imgs/kid_wonanbaby.png" : "/imgs/no_checkwomen.png"}
                alt="me"
                width="320px"
                height="147"
              />
            </label>
          </div>
          <div className="btn-group">
            {param.query.complete === "true" ? (
              <BigButton onClick={goSkipNextBtn}>넘어가기</BigButton>
            ) : (
              <BigButton disabled={programNum ? false : true} onClick={nextBtn}>
                넘어가기
              </BigButton>
            )}
          </div>
        </div>
      </ProgramCheckPageWrap>
    </>
  );
};

export default ProgramCheckPage;
