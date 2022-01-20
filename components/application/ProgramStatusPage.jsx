import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { applicationPatch, applicationTwin, clearId, getAppliedInfo } from "../../redux/reducers/modules/application";
import BigButton from "../asset/BigButton";
import MainHeader from "../asset/MainHeader";
import Progress from "../asset/Progress";
import { ProgramPurposePageWrap, ProgramStatusPageWrap, ApplicationModalWrap, ApplicationTwinModalWrap } from "./applicationstyle";
const ProgramStatusPage = () => {
  const [goObj, setGoObj] = useState({});
  const param = useRouter();
  const [modal, setModalState] = useState(false);
  const dispatch = useDispatch();
  const changeInput = (e) => {
    setGoObj((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const {
    auth: { token },
  } = useSelector(({ auth }) => ({ auth }));
  const {
    application: { twinId, userAppliedInfo },
  } = useSelector(({ application }) => ({ application }));
  const goNextBtn = (e) => {
    if (param.query.children) {
      if (param.query.children === "one") {
        setModalState(true);
        const id = param.query.user_id;
        // const result = { ...goInfo, step: `/application/1` };
        const result = { ...goObj };
        dispatch(applicationPatch({ result, id, token }));

        // sessionStorage.clear("applied5", JSON.stringify(goObj));
        return;
      }
      if (param.query.children === "two") {
        const id = param.query.user_id;
        // const result = { ...goInfo, step: `/application/1` };
        const result = { ...goObj, step: `/application/6?program_id=${param.query.program_id}&programnum=${param.query.programnum}&children=two&first_id=${param.query.first_id}` };
        dispatch(applicationPatch({ result, id, token }));
        param.push(
          `/application/6?user_id=${param.query.user_id}&program_id=${param.query.program_id}&programnum=${param.query.programnum}&children=${param.query.children}&first_id=${param.query.first_id}`
        );
        return;
      }
    }
    const id = param.query.user_id;
    // const result = { ...goInfo, step: `/application/1` };
    const result = { ...goObj, step: `/application/6?program_id=${param.query.program_id}&programnum=${param.query.programnum}` };
    dispatch(applicationPatch({ result, id, token }));
    param.push(`/application/6?user_id=${param.query.user_id}&programnum=${param.query.programnum}&program_id=${param.query.program_id}`);
  };
  useEffect(() => {
    if (param.query.complete === "true") {
      const id = param.query.user_id;
      dispatch(getAppliedInfo({ token, id }));
    }
  }, [param.query]);

  useEffect(() => {
    if (userAppliedInfo?.id) {
      setGoObj({ kid_linguistics: userAppliedInfo.kid_linguistics, kid_interests: userAppliedInfo.kid_interests });
    }
  }, [userAppliedInfo?.id]);
  useEffect(() => {
    if (JSON.parse(sessionStorage.getItem("applied5"))) {
      setGoObj(JSON.parse(sessionStorage.getItem("applied5")) || {});
    }
  }, []);
  useEffect(() => {
    if (twinId) {
      sessionStorage.clear();
      param.push(`/application/2?user_id=${twinId}&children=two&first_id=${param.query.user_id}`);
      dispatch(clearId());
    }
  }, [twinId]);
  const goTwinChildrenBtn = () => {
    const id = param.query.user_id;
    const result = { step: `/application/2?children=two&first_id=${param.query.user_id}` };
    dispatch(applicationPatch({ result, id, token }));
    dispatch(applicationTwin({ result, id, token }));
    // param.push(`/application/2?user_id=${param.query.user_id}&children=two`);
  };
  const goSkipNextBtn = (e) => {
    param.push(`/application/6?user_id=${param.query.user_id}&complete=true`);
  };
  return (
    <div>
      <MainHeader applied message={"프로그램 선택"} white />
      <ProgramStatusPageWrap>
        <div className="container">
          <div className="progress">
            <Progress info="application" param={5} prevPercent={70} percent={70} />
          </div>
          <h1>아동 발달 상태를 알려주세요.</h1>
          <div className="lanaguge_status-wrap">
            <span>아동의 언어발달 상태</span>
            <textarea
              onChange={changeInput}
              id=""
              value={goObj.kid_linguistics}
              cols="30"
              rows="10"
              name={"kid_linguistics"}
              placeholder="주양육자분께서 보시기에 아이가 자주 사용하는 어휘나 발화 특징을 가급적 상세히 기재해주세요"
            ></textarea>
          </div>
          <div className="lanaguge_status-wrap">
            <span>아동이 좋아하는 놀이 / 장난감</span>
            <textarea
              value={goObj.kid_interests}
              onChange={changeInput}
              id=""
              cols="30"
              rows="10"
              name="kid_interests"
              placeholder="아이가 집에서 흥미를 갖는 장난감이나 놀이가 있다면 기재해주세요"
            ></textarea>
          </div>
          <div className="btn-group">
            {param.query.complete === "true" ? (
              <BigButton onClick={goSkipNextBtn}>넘어가기</BigButton>
            ) : (
              <BigButton disabled={goObj.kid_linguistics && goObj.kid_interests ? false : true} onClick={goNextBtn}>
                넘어가기
              </BigButton>
            )}
          </div>
        </div>
      </ProgramStatusPageWrap>
      {modal && param.query.children === "one" && (
        <ApplicationTwinModalWrap>
          <div className="container">
            <span>👏</span>
            <h2>둘째 정보를 입력해주세요</h2>
            <div className="text-wrap">
              <span>첫째 아동정보 작성이 완료되었습니다. 둘째 아동 정보 작성을 진행해주세요!</span>
            </div>
            <div className="btn-group">
              <BigButton onClick={goTwinChildrenBtn}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 5.9C13.16 5.9 14.1 6.84 14.1 8C14.1 9.16 13.16 10.1 12 10.1C10.84 10.1 9.9 9.16 9.9 8C9.9 6.84 10.84 5.9 12 5.9ZM12 14.9C14.97 14.9 18.1 16.36 18.1 17V18.1H5.9V17C5.9 16.36 9.03 14.9 12 14.9ZM12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4ZM12 13C9.33 13 4 14.34 4 17V20H20V17C20 14.34 14.67 13 12 13Z"
                    fill="#6100FF"
                  />
                </svg>
                <span>둘째 정보 작성하러 가기</span>
              </BigButton>
            </div>
          </div>
        </ApplicationTwinModalWrap>
      )}
    </div>
  );
};

export default ProgramStatusPage;
