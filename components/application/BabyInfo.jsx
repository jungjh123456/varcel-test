import React, { useEffect, useState } from "react";
import ApplicationHeader from "../asset/ApplicationHeader";
import BigButton from "../asset/BigButton";
import CheckInput from "../asset/CheckInput";
import Input from "../asset/Input";
import Progress from "../asset/Progress";
import RadioInput from "../asset/RadioInput";
import { BabyInfoWrap } from "./applicationstyle";
import DatePicker from "react-datepicker";
// import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import { applicationPatch, getAppliedInfo } from "../../redux/reducers/modules/application";
import { useDispatch, useSelector } from "react-redux";
import { timeDate } from "../../lib/api/timeDate";
import MainHeader from "../asset/MainHeader";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { TextField } from "@mui/material";
import { ko } from "date-fns/locale";
const StyleTimePicker = styled(DatePicker)`
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  min-height: 48px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  background: #fff;
  color: #000;
  font-size: 1rem;
  &::-webkit-input-placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
`;
const MobileDatePickerWrap = styled(TextField)`
  /* .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline {
    border: 0 !important;
  } */
  width: 100%;

  & > label {
    display: flex;
    display: none;
    justify-content: center;
    align-items: center;
    text-align: center;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: rgba(0, 0, 0, 0.4) !important;

    /* display: none; */
  }
  & > div {
    border: 1px solid rgba(0, 0, 0, 0.4) !important;
    height: 48px !important;
    border-radius: 8px;
    & > input {
      text-align: center;
    }
    & > fieldset {
      border: 0;
    }
  }
`;
const BabyInfo = ({ percent, param }) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setObj((state) => ({ ...state, birthday: timeDate(e) }));
    setValue(e);
  };
  const {
    auth: { token },
  } = useSelector(({ auth }) => ({ auth }));
  const {
    application: { userAppliedInfo },
  } = useSelector(({ application }) => ({ application }));
  const [goObj, setObj] = useState({});
  const datePickerSelect = (e) => {
    setObj((state) => ({ ...state, birthday: timeDate(e) }));
  };

  const inputChange = (e) => {
    if (e.target.name === "is_attending_kindergarten" || e.target.name === "is_diagnosed") {
      setObj((state) => ({ ...state, [e.target.name]: JSON.parse(e.target.value) }));
      return;
    }
    if (e.target.name === "expectations") {
      if (e.target.checked) {
        if (goObj?.expectations) {
          setObj((state) => ({ ...state, expectations: [...goObj?.expectations, e.target.value] }));
          return;
        }
        setObj((state) => ({ ...state, expectations: [e.target.value] }));
      }
      if (!e.target.checked) {
        if (goObj?.expectations) {
          const filter = goObj?.expectations.filter((item) => item !== e.target.value);
          setObj((state) => ({ ...state, expectations: filter }));
          return;
        }
      }
      return;
    }
    setObj((state) => ({ ...state, [e.target.name]: e.target.value }));
  };
  const dispatch = useDispatch();
  useEffect(() => {
    if (param.query.complete === "true") {
      const id = param.query.user_id;
      dispatch(getAppliedInfo({ token, id }));
    }
  }, [param.query]);
  useEffect(() => {
    if (userAppliedInfo?.id) {
      setObj({
        kid_name: userAppliedInfo.kid_name,
        birthday: userAppliedInfo.birthday,
        gender: userAppliedInfo.gender,
        is_attending_kindergarten: userAppliedInfo.is_attending_kindergarten,
        is_diagnosed: userAppliedInfo.is_diagnosed,
        expectations: userAppliedInfo.expectations,
      });
      setValue(userAppliedInfo.birthday);
      // setGoInfo({ address: userAppliedInfo?.address, address_detail: userAppliedInfo.address_detail, customer_name: userAppliedInfo.customer_name, cellphone: userAppliedInfo?.cellphone });
    }
  }, [userAppliedInfo?.id]);
  const goNextBtn = (e) => {
    if (param.query?.children) {
      if (param.query?.children === "one") {
        const id = param.query.user_id;
        const result = { ...goObj, step: `/application/3?children=${param.query.children}` };
        // const result = goInfo;
        dispatch(applicationPatch({ result, id, token }));
        sessionStorage.setItem("applied2", JSON.stringify(goObj));
        sessionStorage.setItem("applied2date", JSON.stringify(value));
        param.push(`/application/3?user_id=${param.query.user_id}&children=${param.query.children}`);
        return;
      }
      if (param.query?.children === "two") {
        const id = param.query.user_id;
        const result = { ...goObj, step: `/application/3?children=${param.query.children}&first_id=${param.query.first_id}` };
        // const result = goInfo;
        dispatch(applicationPatch({ result, id, token }));
        sessionStorage.setItem("applied2", JSON.stringify(goObj));
        sessionStorage.setItem("applied2date", JSON.stringify(value));
        param.push(`/application/3?user_id=${param.query.user_id}&children=${param.query.children}&first_id=${param.query.first_id}`);
        return;
      }
      return;
    }
    if (!param.query?.children) {
      const id = param.query.user_id;
      const result = { ...goObj, step: "/application/3" };
      // const result = goInfo;
      dispatch(applicationPatch({ result, id, token }));
      sessionStorage.setItem("applied2", JSON.stringify(goObj));
      sessionStorage.setItem("applied2date", JSON.stringify(value));
      param.push(`/application/3?user_id=${param.query.user_id}`);
      return;
    }
  };
  useEffect(() => {
    if (JSON.parse(sessionStorage.getItem("applied2"))) {
      setObj(JSON.parse(sessionStorage.getItem("applied2")) || {});
    }
  }, []);
  useEffect(() => {
    if (JSON.parse(sessionStorage.getItem("applied2date"))) {
      setValue(JSON.parse(sessionStorage.getItem("applied2date")) || "");
    }
  }, []);
  const goSkipNextBtn = (e) => {
    param.push(`/application/3?user_id=${param.query.user_id}&complete=true`);
  };
  return (
    <>
      <MainHeader applied message={"아동정보"} white />
      <BabyInfoWrap>
        <div className="container">
          <div className="progress">
            <Progress info="application" param={2} prevPercent={28} percent={28} />
          </div>
          <h1>아동정보를 알려주세요</h1>
          <div className="input-wrap">
            <Input
              // checkboxid="sangdongy"
              // is_checkbox={true}
              value={goObj?.kid_name}
              label={param?.query?.children ? `아동 이름 (${param?.query?.children === "one" ? "첫째" : "둘째"})` : "아동 이름"}
              type="text"
              placeholder="홍길동"
              name="kid_name"
              onChange={inputChange}
            />
          </div>

          <div className="input-wrap">
            <span>{param?.query?.children ? (param?.query?.children === "one" ? "생년월일 (첫째)" : "생년월일 (둘째)") : "생년월일"}</span>
            {/* <StyleTimePicker
              name="applied_date"
              id="lastDate"
              onFocus={() => {}}
              placeholderText={"2020.12.01"}
              // value={goObj?.birthday}
              value={timeDate(goObj?.birthday)}
              onChange={datePickerSelect}
              autocomplete="off"
              dateFormat="yyyy.MM.dd"

           
            /> */}
            <div className="date_picker">
              <LocalizationProvider dateAdapter={AdapterDateFns} locale={ko}>
                <MobileDatePicker
                  label="생년월일"
                  inputFormat="yyyy.MM.dd"
                  mask="____.__.__"
                  locale="kor"
                  value={value}
                  id="mui-1"
                  onChange={handleChange}
                  renderInput={(params) => <MobileDatePickerWrap {...params} />}
                />
              </LocalizationProvider>

              {value === "" && <label htmlFor="mui-1">2020.12.01</label>}
            </div>
          </div>
          <div className="radio-check">
            <span>아동성별</span>
            <div className="radio_group">
              <RadioInput checked={goObj?.gender === "여자" ? true : false} onChange={inputChange} id="gender_women" type="radio" value="여자" label="여아" name="gender" />
              <RadioInput checked={goObj?.gender === "남자" ? true : false} onChange={inputChange} id="gender_men" type="radio" label="남아" value="남자" name="gender" />
            </div>
          </div>
          <div className="radio-check">
            <span>어린이집 동원여부</span>
            <div className="radio_group">
              <RadioInput
                checked={goObj?.is_attending_kindergarten === false ? true : false}
                onChange={inputChange}
                id="center_no"
                value={false}
                type="radio"
                label="아니오"
                name="is_attending_kindergarten"
              />
              <RadioInput checked={goObj?.is_attending_kindergarten ? true : false} onChange={inputChange} id="center_yes" value={true} type="radio" label="예" name="is_attending_kindergarten" />
            </div>
          </div>
          <div className="radio-check">
            <span>발달센터 방문여부</span>
            <div className="radio_group">
              <RadioInput checked={goObj?.is_diagnosed === false ? true : false} onChange={inputChange} id="check_no" value={false} type="radio" label="아니오" name="is_diagnosed" />
              <RadioInput checked={goObj?.is_diagnosed ? true : false} onChange={inputChange} id="check_yes" value={true} type="radio" label="예" name="is_diagnosed" />
            </div>
          </div>

          <div className="homeTeaching_reason-wrap">
            <h3>홈티칭 수업을 신청하신 계기를 선택해주세요.</h3>
            <span>중복체크 가능합니다</span>
            <div className="check_input-group">
              <CheckInput
                checked={goObj?.expectations?.filter((item) => item === "언어치료가 필요하다고 생각하거나 권고받음").length ? true : false}
                onChange={inputChange}
                value="언어치료가 필요하다고 생각하거나 권고받음"
                name="expectations"
                id="expectations"
              />
              <CheckInput
                checked={goObj?.expectations?.filter((item) => item === "언어폭발기 자녀의 언어발달 촉진을 위해").length ? true : false}
                onChange={inputChange}
                value="언어폭발기 자녀의 언어발달 촉진을 위해"
                name="expectations"
                id="expectations2"
              />
              <CheckInput
                checked={goObj?.expectations?.filter((item) => item === "부모가 할 수 있는 언어자극 노하우 학습을 위해").length ? true : false}
                onChange={inputChange}
                value="부모가 할 수 있는 언어자극 노하우 학습을 위해"
                name="expectations"
                id="expectations3"
              />
              <CheckInput
                checked={goObj?.expectations?.filter((item) => item === "아이에게 다양한 교육을 제공하기 위해").length ? true : false}
                onChange={inputChange}
                value="아이에게 다양한 교육을 제공하기 위해"
                name="expectations"
                id="expectations4"
              />
            </div>
          </div>
          <div className="btn-group">
            {param.query.complete === "true" ? (
              <BigButton onClick={goSkipNextBtn}>넘어가기</BigButton>
            ) : (
              <BigButton
                disabled={
                  goObj?.kid_name &&
                  goObj?.birthday &&
                  (goObj?.is_attending_kindergarten === false || goObj?.is_attending_kindergarten) &&
                  (goObj?.is_diagnosed === false || goObj?.is_diagnosed) &&
                  goObj?.expectations?.length !== 0
                    ? false
                    : true
                }
                onClick={goNextBtn}
              >
                넘어가기
              </BigButton>
            )}
          </div>
        </div>
      </BabyInfoWrap>
    </>
  );
};

export default BabyInfo;
