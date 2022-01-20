import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { applicationPatch, getAppliedInfo } from "../../redux/reducers/modules/application";
import ApplicationHeader from "../asset/ApplicationHeader";
import BigButton from "../asset/BigButton";
import Dropdown from "../asset/Dropdown";
import MainHeader from "../asset/MainHeader";
import Progress from "../asset/Progress";
import RadioInput from "../asset/RadioInput";
import { VisitConsiderationsWrap } from "../locationReserve/locationReserveStyle";
import { VisitWrap } from "./applicationstyle";

const VisitPage = () => {
  const {
    auth: { token },
  } = useSelector(({ auth }) => ({ auth }));
  const {
    application: { userAppliedInfo },
  } = useSelector(({ application }) => ({ application }));
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
  const [checkObj, setCheckObj] = useState({});
  const param = useRouter();
  const dispatch = useDispatch();
  const checkInputChange = (e) => {
    setCheckObj((state) => ({ ...state, [e.target.dataset.name]: e.target.dataset.set }));
  };
  const petChangeInput = (e) => {
    setCheckObj((state) => ({ ...state, [e.target.name]: JSON.parse(e.target.value) }));
  };

  useEffect(() => {
    if (param.query.complete === "true") {
      const id = param.query.user_id;
      dispatch(getAppliedInfo({ token, id }));
    }
  }, [param.query]);
  useEffect(() => {
    if (userAppliedInfo?.id) {
      setCheckObj({ parking_option: userAppliedInfo.parking_option, have_pets: userAppliedInfo.have_pets });
    }
  }, [userAppliedInfo?.id]);
  const nextBtn = (e) => {
    if (param.query.children) {
      const id = param.query.user_id;
      // const result = { ...goInfo, step: `/application/1` };
      const result = {
        ...checkObj,
        step: `/application/7?program_id=${param.query.program_id}&programnum=${param.query.programnum}&children=${param.query.children}&first_id=${param.query.first_id}`,
      };
      dispatch(applicationPatch({ result, id, token }));
      sessionStorage.setItem("applied6", JSON.stringify(checkObj));
      param.push(
        `/application/7?user_id=${param.query.user_id}&program_id=${param.query.program_id}&programnum=${param.query.programnum}&children=${param.query.children}&first_id=${param.query.first_id}`
      );
      return;
    }
    const id = param.query.user_id;
    // const result = { ...goInfo, step: `/application/1` };
    const result = { ...checkObj, step: `/application/7?program_id=${param.query.program_id}&programnum=${param.query.programnum}` };
    dispatch(applicationPatch({ result, id, token }));
    sessionStorage.setItem("applied6", JSON.stringify(checkObj));
    param.push(`/application/7?user_id=${param.query.user_id}&program_id=${param.query.program_id}&programnum=${param.query.programnum}`);
  };
  useEffect(() => {
    if (JSON.parse(sessionStorage.getItem("applied6"))) {
      setCheckObj(JSON.parse(sessionStorage.getItem("applied6")) || {});
    }
  }, []);
  const goSkipNextBtn = (e) => {
    param.push(`/application/7?user_id=${param.query.user_id}&complete=true`);
  };
  return (
    <VisitWrap>
      <MainHeader applied message={"양육자 정보"} white />
      <div className="container">
        <div className="wrap">
          <div className="progress">
            <Progress info="application" param={6} prevPercent={84} percent={84} />
          </div>
          <h1>방문 시 고려사항을 알려주세요</h1>
          <div className="drop_down">
            <span>주차방식</span>
            <Dropdown state={checkObj?.parking_option ? true : false} onClick={checkInputChange} Zindex={1000} id="cars" name="parking_option" list={carList}>
              {checkObj?.parking_option ? checkObj?.parking_option : "차량 방문 시 주차가 가능한가요?"}
            </Dropdown>
          </div>
          <div className="is_dog">
            <span>애완동물 여부</span>
            <div>
              <RadioInput checked={checkObj.have_pets === false ? true : false} onChange={petChangeInput} type="radio" label="없음" name="have_pets" id="no_pet" value={false} />
              <RadioInput checked={checkObj.have_pets ? true : false} onChange={petChangeInput} type="radio" label="있음" name="have_pets" id="yes_pet" value={true} />
            </div>
          </div>
        </div>
        <div className="btn-group">
          {param.query.complete === "true" ? (
            <BigButton onClick={goSkipNextBtn}>넘어가기</BigButton>
          ) : (
            <BigButton disabled={(checkObj.have_pets === false || checkObj.have_pets) && checkObj?.parking_option ? false : true} onClick={nextBtn}>
              넘어가기
            </BigButton>
          )}
        </div>
      </div>
    </VisitWrap>
  );
};

export default VisitPage;
