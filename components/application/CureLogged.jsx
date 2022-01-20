import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { applicationPatch, getAppliedInfo, postCureLogged } from "../../redux/reducers/modules/application";
import BigButton from "../asset/BigButton";
import CheckInput from "../asset/CheckInput";
import MainHeader from "../asset/MainHeader";
import Progress from "../asset/Progress";
import RadioInput from "../asset/RadioInput";
import { CureLogPageWrap, ProgramStatusPageWrap } from "./applicationstyle";

const CureLogged = () => {
  const [goObj, setGoObj] = useState({});
  const param = useRouter();
  const dispatch = useDispatch();
  const {
    auth: { token },
  } = useSelector(({ auth }) => ({ auth }));
  const {
    application: { userAppliedInfo },
  } = useSelector(({ application }) => ({ application }));
  const checkRadioInput = (e) => {
    setGoObj((state) => ({ ...state, [e.target.name]: JSON.parse(e.target.value) }));
  };
  useEffect(() => {
    if (param.query.complete === "true") {
      const id = param.query.user_id;
      dispatch(getAppliedInfo({ token, id }));
    }
  }, [param.query]);
  const [treatmentList, setTreatMentList] = useState([]);
  const [treatedLocation, setTreatedLocation] = useState([]);

  useEffect(() => {
    if (userAppliedInfo?.id) {
      setGoObj(userAppliedInfo?.diagnosis_history || {});
    }
  }, [userAppliedInfo?.id]);
  useEffect(() => {
    if (userAppliedInfo?.id) {
      setTreatMentList(userAppliedInfo?.diagnosis_history?.treatment_list || []);
      setTreatMentList(userAppliedInfo?.diagnosis_history?.treated_location_list || []);
    }
  }, [userAppliedInfo?.id]);

  const nextStep = (e) => {
    if (param.query.children) {
      if (param.query.children === "one") {
        const id = param.query.user_id;
        const result = {
          diagnosis_history: { ...goObj },
          step: `/application/5?program=${param.query.program}&programnum=${param.query.programnum}&step=2&program_id=${param.query.program_id}&children=${param.query.children}`,
        };
        dispatch(applicationPatch({ token, id, result }));
        sessionStorage.setItem("applied5Lang", JSON.stringify(goObj));
        sessionStorage.setItem("applied5Lang_1", JSON.stringify(treatmentList));
        sessionStorage.setItem("applied5Lang_2", JSON.stringify(treatedLocation));
        param.push(
          `/application/5?program=${param.query.program}&step=2&programnum=${param.query.programnum}&user_id=${param.query.user_id}&program_id=${param.query.program_id}&children=${param.query.children}`
        );
        return;
      }
      if (param.query.children === "two") {
        const id = param.query.user_id;
        const result = {
          diagnosis_history: { ...goObj },
          step: `/application/5?program=${param.query.program}&step=2&programnum=${param.query.programnum}&program_id=${param.query.program_id}&children=${param.query.children}&first_id=${param.query.first_id}`,
        };
        sessionStorage.setItem("applied5Lang", JSON.stringify(goObj));
        sessionStorage.setItem("applied5Lang_1", JSON.stringify(treatmentList));
        sessionStorage.setItem("applied5Lang_2", JSON.stringify(treatedLocation));
        dispatch(applicationPatch({ token, id, result }));
        param.push(
          `/application/5?program=${param.query.program}&step=2&programnum=${param.query.programnum}&user_id=${param.query.user_id}&program_id=${param.query.program_id}&children=${param.query.children}&first_id=${param.query.first_id}`
        );
        return;
      }
    }
    if (!param.query.children) {
      const id = param.query.user_id;
      const result = { diagnosis_history: { ...goObj }, step: `/application/5?program=${param.query.program}&programnum=${param.query.programnum}&step=2&program_id=${param.query.program_id}` };
      sessionStorage.setItem("applied5Lang", JSON.stringify(goObj));
      sessionStorage.setItem("applied5Lang_1", JSON.stringify(treatmentList));
      sessionStorage.setItem("applied5Lang_2", JSON.stringify(treatedLocation));
      dispatch(applicationPatch({ token, id, result }));
      param.push(`/application/5?program=${param.query.program}&step=2&programnum=${param.query.programnum}&user_id=${param.query.user_id}&program_id=${param.query.program_id}`);
      return;
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem("applied5Lang")) {
      setGoObj(JSON.parse(sessionStorage.getItem("applied5Lang")));
    }
  }, []);
  useEffect(() => {
    if (sessionStorage.getItem("applied5Lang_1")) {
      setTreatMentList(JSON.parse(sessionStorage.getItem("applied5Lang_1")));
    }
  }, []);
  useEffect(() => {
    if (sessionStorage.getItem("applied5Lang_2")) {
      setTreatedLocation(JSON.parse(sessionStorage.getItem("applied5Lang_2")));
    }
  }, []);
  const inputCheckChange = (e) => {
    if (e.target.name === "treated_age") {
      setGoObj((state) => ({ ...state, [e.target.name]: +e.target.value }));
      return;
    }
    if (e.target.name === "treatment_list") {
      if (e.target.checked) {
        setTreatMentList((state) => [...state, e.target.value]);
        setGoObj((state) => ({ ...state, treatment_list: [...treatmentList, e.target.value] }));
      }
      if (!e.target.checked) {
        const filter = treatmentList.filter((item) => item !== e.target.value);
        setTreatMentList(filter);
        setGoObj((state) => ({ ...state, treatment_list: filter }));
      }
      return;
    }
    if (e.target.name === "treated_location_list") {
      if (e.target.checked) {
        setTreatedLocation((state) => [...state, e.target.value]);
        setGoObj((state) => ({ ...state, treated_location_list: [...treatedLocation, e.target.value] }));
      }
      if (!e.target.checked) {
        const filter = treatedLocation.filter((item) => item !== e.target.value);
        setTreatedLocation(filter);
        setGoObj((state) => ({ ...state, treated_location_list: filter }));
      }
      return;
    }
    setGoObj((state) => ({ ...state, [e.target.name]: e.target.value }));
  };
  const goSkipNextBtn = (e) => {
    param.push(`/application/5?step=2&user_id=${param.query.user_id}&program=${param.query.program}&complete=true`);
  };
  return (
    <div>
      <MainHeader applied message={"프로그램 선택"} white />
      <CureLogPageWrap>
        <div className="container">
          <div className="progress">
            <Progress info="application" param={5} prevPercent={70} percent={70} />
          </div>
          <h1>치료이력을 알려주세요</h1>
          <div className="cure_check">
            <span>병원에서 발달지연 및 지체장애진단을 받았나요?</span>
            <div>
              <RadioInput checked={goObj?.is_diagnosed === false ? true : false} onChange={checkRadioInput} value={false} label="아니오" type="radio" name="is_diagnosed" id="no_check" />
              <RadioInput checked={goObj?.is_diagnosed ? true : false} onChange={checkRadioInput} value={true} label="네" type="radio" name="is_diagnosed" id="yes_check" />
            </div>
          </div>
          {goObj?.is_diagnosed && (
            <div className="cure_check-yes">
              <span>진단명이 무엇이었나요?</span>
              <div>
                <input onChange={inputCheckChange} type="text" name="diagnosed_with" value={goObj?.diagnosed_with} placeholder="진단명을 입력해주세요" />
              </div>
            </div>
          )}
          <div className="cure_check last">
            <span>병원에서 발달지연 및 지체장애진단을 받았나요?</span>
            <div>
              <RadioInput checked={goObj?.is_treated === false ? true : false} onChange={checkRadioInput} value={false} label="아니오" type="radio" name="is_treated" id="no_check_handicap" />
              <RadioInput value={true} checked={goObj?.is_treated ? true : false} onChange={checkRadioInput} label="네" type="radio" name="is_treated" id="yes_check_handicap" />
            </div>
          </div>
          {goObj?.is_treated && (
            <>
              <div className="cure_check-yes_checkbox">
                <span>어떤 종류의 치료를 받으셨나요?</span>
                <span className="sub_title">복수응답이 가능합니다.</span>
                <div>
                  <CheckInput
                    checked={treatmentList.filter((item) => item === "언어치료").length ? true : false}
                    id="treatment_list1"
                    onChange={inputCheckChange}
                    value="언어치료"
                    name="treatment_list"
                  />
                  <CheckInput
                    checked={treatmentList.filter((item) => item === "물리치료").length ? true : false}
                    id="treatment_list2"
                    onChange={inputCheckChange}
                    value="물리치료"
                    name="treatment_list"
                  />
                  <CheckInput
                    checked={treatmentList.filter((item) => item === "감각치료").length ? true : false}
                    id="treatment_list3"
                    onChange={inputCheckChange}
                    value="감각치료"
                    name="treatment_list"
                  />
                  <CheckInput
                    checked={treatmentList.filter((item) => item === "놀이치료").length ? true : false}
                    id="treatment_list4"
                    onChange={inputCheckChange}
                    value="놀이치료"
                    name="treatment_list"
                  />
                  <CheckInput checked={treatmentList.filter((item) => item === "그 외").length ? true : false} id="treatment_list5" onChange={inputCheckChange} value="그 외" name="treatment_list" />
                  {/* <input onChange={inputCheckChange} type="text" name="treated_with" value={goObj?.treated_with} placeholder="진단명을 입력해주세요" /> */}
                </div>
              </div>
              <div className="cure_check-yes_checkbox">
                <span>어떤 기관에서 치료를 받으셨나요?</span>
                <span className="sub_title">복수응답이 가능합니다.</span>
                <div>
                  <CheckInput
                    checked={treatedLocation.filter((item) => item === "병원 및 부설 발달 클리닉").length ? true : false}
                    id="treated_location_list1"
                    onChange={inputCheckChange}
                    value="병원 및 부설 발달 클리닉"
                    name="treated_location_list"
                  />
                  <CheckInput
                    checked={treatedLocation.filter((item) => item === "복지관 및 아동발달센터").length ? true : false}
                    id="treated_location_list2"
                    onChange={inputCheckChange}
                    value="복지관 및 아동발달센터"
                    name="treated_location_list"
                  />
                  <CheckInput
                    checked={treatedLocation.filter((item) => item === "그 외 (홈티칭 포함)").length ? true : false}
                    id="treated_location_list3"
                    onChange={inputCheckChange}
                    value="그 외 (홈티칭 포함)"
                    name="treated_location_list"
                  />

                  {/* <input onChange={inputCheckChange} type="text" name="treated_with" value={goObj?.treated_with} placeholder="진단명을 입력해주세요" /> */}
                </div>
              </div>

              <div className="cure_check-textarea">
                <span>치료기간은 어떻게 되시나요?</span>
                <div>
                  <textarea onChange={inputCheckChange} type="text" name="treatment_period" value={goObj?.treatment_period} placeholder="예: 2세부터 지금까지 치료를 받고 있습니다."></textarea>
                </div>
              </div>
            </>
          )}
          <div className="btn-group">
            {param.query.complete === "true" ? (
              <BigButton onClick={goSkipNextBtn}>넘어가기</BigButton>
            ) : (
              <BigButton
                disabled={
                  goObj?.is_diagnosed === false && goObj?.is_treated === false
                    ? false
                    : goObj?.is_diagnosed && goObj?.is_treated === false && goObj?.diagnosed_with
                    ? false
                    : goObj?.is_diagnosed === false && goObj?.is_treated && treatmentList.length && treatedLocation.length && goObj?.treatment_period
                    ? false
                    : goObj?.is_diagnosed && goObj?.is_treated && treatmentList.length && treatedLocation.length && goObj?.diagnosed_with && goObj?.treatment_period
                    ? false
                    : true
                }
                onClick={nextStep}
              >
                넘어가기
              </BigButton>
            )}
          </div>
        </div>
      </CureLogPageWrap>
    </div>
  );
};

export default CureLogged;
