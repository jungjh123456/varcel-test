import React, { useState } from "react";

import { ClassReviewChahum2ContainerWrap, ClassReviewChahum3ContainerWrap, ClassReviewModalWrap } from "./CounselorStyle";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainHeader from "../asset/MainHeader";
import { useRouter } from "next/dist/client/router";
import { AlimeNotetimeInfofullDate } from "../../lib/api/timeDate";
import BigButton from "../asset/BigButton";

const ClassReviewChahumContainer2 = () => {
  const [modalState, setModalState] = useState(false);
  const {
    counselor: { profileInfo, success },
  } = useSelector(({ counselor }) => ({ counselor }));
  const history = useRouter();
  const dispatch = useDispatch();
  const [classObj, setClassObj] = useState({});
  const inputChange = (e) => {
    if (e.target.name === "recommended_months") {
      setClassObj((state) => ({ ...state, [e.target.name]: +e.target.value }));
      return;
    }
    if (e.target.name === "recommended_weekly_visit_count") {
      setClassObj((state) => ({ ...state, [e.target.name]: +e.target.value }));
      return;
    }
    setClassObj((state) => ({ ...state, [e.target.name]: e.target.value }));
  };
  const [btnState, setBtnState] = useState(false);
  const nextModal = (e) => {
    const result = { ...classObj, status: "완료" };
    const name = `classes/presessions/${history.query.id}/`;
    dispatch(patchClassDetail({ name, result }));
    setModalState(true);
  };
  useEffect(() => {
    if (success) {
      setModalState(true);
      setBtnState(true);
      dispatch(clearSuccess());
    }
  }, [success]);
  const noNext = (e) => {
    history.push(`/counselor/study_check`);
    setModalState(false);
    return;
  };
  //   useEffect(() => {
  //     const id = parsed.id;
  //     const name = "presessions";
  //     const param = "alimtalk";
  //     const query = "?target=counselor&type=class_note";
  //     dispatch(classDetailChaum({ id, name, param, query }));
  //   }, [history.query.id]);

  return (
    <>
      <ClassReviewChahum3ContainerWrap>
        <MainHeader white applied notoggle message="체험수업 알림노트" />
        <div className="container">
          <div className="grid2">
            <h2>
              {profileInfo?.customer_name} ({profileInfo?.kid_name}) 체험수업
            </h2>
            <span>{AlimeNotetimeInfofullDate(profileInfo?.scheduled_datetime)} 수업</span>
            <div>
              <span>
                부모님께 보내는 체험수업 알림노트 페이지 입니다. 체험수업을 바탕으로 아동에게 필요한 발달 영역과 향후 수업계획, 조언 등을 기재해주세요. 정성스러운 체험노트는 선생님 신뢰도 향상과 수업
                등록으로 이끄는 중요한 요인입니다.
              </span>
            </div>
          </div>
          <div className="parent_opinion-wrap">
            <h2>
              <span>아동 언어발달 종합의견</span>
              <span>💬</span>
            </h2>
            <textarea onChange={inputChange} name="overall_opinion" id="" cols="30" rows="10" placeholder="선생님이 관찰하신 아동발달 평가와 내용을 부모님께 정리하여 전달해주세요."></textarea>
          </div>

          <div className="study_num">
            <h2>
              <span>추천 수업개월 수</span>
              <span>💡</span>
            </h2>

            <div className="study-check-wrap">
              <input onChange={inputChange} value="1" type="radio" id="study1" name="recommended_months" />
              <label htmlFor="study1">
                <span>1개월</span>
              </label>
              <input onChange={inputChange} value="2" type="radio" id="study2" name="recommended_months" />
              <label htmlFor="study2">
                <span>2개월</span>
              </label>
              <input onChange={inputChange} value="3" type="radio" id="study3" name="recommended_months" />
              <label htmlFor="study3">
                <span>3개월</span>
              </label>
              <input onChange={inputChange} value="6" type="radio" id="study4" name="recommended_months" />
              <label htmlFor="study4">
                <span>6개월</span>
              </label>
              <input onChange={inputChange} value="12" type="radio" id="study5" name="recommended_months" />
              <label htmlFor="study5">
                <span>12개월</span>
              </label>
            </div>
            <h2>
              <span>추천 주당 수업 회수</span>
              <span>💡</span>
            </h2>
            <div className="weekly_input-wrap">
              <input onChange={inputChange} type="radio" value="1" id="one" name="recommended_weekly_visit_count" />
              <label htmlFor="one">1회</label>
              <input onChange={inputChange} type="radio" id="two" value="2" name="recommended_weekly_visit_count" />
              <label htmlFor="two">2회</label>
            </div>
          </div>
          <div className="parent_opinion-wrap">
            <h2>
              <span>선생님의 정규수업 계획</span>
              <span>📄</span>
            </h2>
            <textarea onChange={inputChange} name="plan_for_session" id="" cols="30" rows="10" placeholder="선생님이 계획하는 수업 방향과 아동발달 목표를 부모님께 전달해주세요!"></textarea>
          </div>
          <div className="btn-group">
            <BigButton
              disabled={btnState ? true : classObj?.overall_opinion && classObj?.recommended_months && classObj?.recommended_weekly_visit_count && classObj?.plan_for_session ? false : true}
              onClick={nextModal}
            >
              체험수업 종료체크 2/2
            </BigButton>
          </div>
        </div>
      </ClassReviewChahum3ContainerWrap>
      {modalState && (
        <ClassReviewModalWrap>
          <div className="container">
            <span>👏</span>
            <h2>제출이 완료되었습니다.</h2>
            <div className="text-wrap">
              <span>선생님께서 작성하신 체험수업 알림노트가 부모님에게 전달될 예정입니다. 상담 매니저의 1:1 상담 후 등록여부는 약 3~5일 후에 알림톡으로 간략한 사유와 함께 안내드릴 예정입니다.</span>
            </div>
            <div className="btn-group">
              <BigButton onClick={noNext}>수고하셨습니다!</BigButton>
            </div>
          </div>
        </ClassReviewModalWrap>
      )}
    </>
  );
};

export default ClassReviewChahumContainer2;
