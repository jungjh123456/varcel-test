import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { applicationPatch, clearSuccess, getAppliedInfo, postPayment, synChronizetWin, synClear } from "../../redux/reducers/modules/application";
import BigButton from "../asset/BigButton";
import MainHeader from "../asset/MainHeader";
import Progress from "../asset/Progress";
import { ProgramStudyDatePageWrap } from "./applicationstyle";
import UserCheckTable from "./UserCheckTable";
const StudyDate = () => {
  const [dateList, setDateList] = useState([]);
  const {
    auth: { token },
  } = useSelector(({ auth }) => ({ auth }));
  const {
    application: { synState, userAppliedInfo, success, payinfo },
  } = useSelector(({ application }) => ({ application }));
  const param = useRouter();
  const dispatch = useDispatch();
  const dateCheckTableInput = (e) => {
    // setCheckDateState(true);
    if (e.target.checked) {
      setDateList((state) => {
        return [...state, e.target.value];
      });
      // setTextState((state) => ({ ...state, schedule: [...textState.schedule, e.target.value] }));
    }
    if (!e.target.checked) {
      const filterList = dateList.filter((item) => item !== e.target.value);
      setDateList(filterList);
      // setTextState((state) => ({ ...state, schedule: filterList }));
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
      setDateList(userAppliedInfo.schedule);
    }
  }, [userAppliedInfo?.id]);
  useEffect(() => {
    if (param.query?.children) {
      if (success) {
        const twinId = param.query.user_id;
        const id = param.query.first_id;
        dispatch(synChronizetWin({ token, id, twinId }));
        dispatch(clearSuccess());
      }
    }
  }, [param.query, success]);
  useEffect(() => {
    if (param.query?.children) {
      if (synState) {
        const result = {};
        dispatch(postPayment({ token, result }));
        dispatch(synClear());
      }
    }
  }, [param.query, success]);
  useEffect(() => {
    if (!param.query?.children) {
      if (success) {
        const result = {};
        dispatch(postPayment({ token, result }));
        dispatch(clearSuccess());
      }
    }
  }, [param.query, success]);
  useEffect(() => {
    if (param.query.children) {
      if (payinfo.id) {
        param.push(
          `/application/8?user_id=${param.query.user_id}&first_id=${
            param.query.first_id
          }&pagesection=presession&Classtype=${"???????????????"}&program=${"????????? ???????????? ????????????"}&sub_program=${"?????? ???????????? ????????????"}&payment_id=${3}`
        );
      }
    }
  }, [param.query.children, payinfo]);
  useEffect(() => {
    if (!param.query.children) {
      if (payinfo?.id) {
        param.push(
          `/application/8?user_id=${param.query.user_id}&pagesection=presession&Classtype=${"???????????????"}&program=${"????????? ???????????? ????????????"}&sub_program=${"?????? ???????????? ????????????"}&payment_id=${3}`
        );
      }
    }
  }, [param.query.children, payinfo]);
  const nextBtn = (e) => {
    if (param.query.children) {
      const id = param.query.user_id;
      // const result = { ...goInfo, step: `/application/1` };
      const result = { schedule: dateList, application_status: "????????????" };
      dispatch(applicationPatch({ result, id, token }));
      sessionStorage.setItem("applied7", JSON.stringify(dateList));
      // param.push(`/application/8?user_id=${param.query.user_id}&first_id=${param.query.first_id}`);
      return;
    }
    const id = param.query.user_id;
    // const result = { ...goInfo, step: `/application/1` };
    const result = { schedule: dateList, application_status: "????????????" };
    dispatch(applicationPatch({ result, id, token }));
    sessionStorage.setItem("applied7", JSON.stringify(dateList));
    param.push(`/application/8?user_id=${param.query.user_id}&pagesection=presession`);
  };
  useEffect(() => {
    if (JSON.parse(sessionStorage.getItem("applied7"))) {
      setDateList(JSON.parse(sessionStorage.getItem("applied7")) || []);
    }
  }, []);
  const goSkipNextBtn = (e) => {
    param.push(`/myPage/applied_log`);
  };
  return (
    <ProgramStudyDatePageWrap>
      <MainHeader applied message={"????????????"} white />
      <div className="container">
        <div className="progress">
          <Progress info="application" param={7} prevPercent={96} percent={96} />
        </div>
        <h1>??????????????? ??????????????????</h1>
        <div className="text-wrap">
          <span>????????? ????????? ????????? ????????? ?????? ???????????????</span>
          <span>?????? ????????? ??????????????????.</span>
        </div>
        <span>????????? ????????? ????????? ??? ?????? ????????? ???????????????.</span>
        <div className="table_wrap">
          <UserCheckTable dateCheckTableInput={dateCheckTableInput} dateList={dateList} />
        </div>
        <div className="btn-group">
          {param.query.complete === "true" ? (
            <BigButton onClick={goSkipNextBtn}>????????????</BigButton>
          ) : (
            <BigButton disabled={dateList.length ? false : true} onClick={nextBtn}>
              ????????????
            </BigButton>
          )}
        </div>
      </div>
    </ProgramStudyDatePageWrap>
  );
};

export default StudyDate;
