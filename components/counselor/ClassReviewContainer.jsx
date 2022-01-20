import { useRouter } from "next/dist/client/router";
import React, { useState } from "react";
import ApplicationHeader from "../asset/ApplicationHeader";
import BigButton from "../asset/BigButton";
import { ClassReviewChahum2ContainerWrap } from "./CounselorStyle";

const ClassReviewContainer = () => {
  const [modalState, setModalState] = useState(false);
  const history = useRouter();
  const parsed = history.query;
  const nextModal = (e) => {
    setModalState(true);
  };
  const noNext = (e) => {
    if (parsed?.page === "mypage") {
      history.push(`/trialClassschedule?id=${parsed?.id}`);
      setModalState(false);
      return;
    }
    setModalState(false);
  };
  return (
    <ClassReviewChahum2ContainerWrap>
      <ApplicationHeader message={"체험수업 알림노트"} white notoggle />
      <div className="container">
        <div className="grid2">
          <h2>김소연 (유하늘) 체험수업</h2>
          <span>2021.12.13 (월) 오전 10시 30분 수업</span>
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
          <textarea name="overall_opinion" id="" cols="30" rows="10" placeholder="선생님이 관찰하신 아동발달 평가와 내용을 부모님께 정리하여 전달해주세요."></textarea>
        </div>

        <div className="study_num">
          <h2>
            <span>추천 수업개월 수</span>
            <span>💡</span>
          </h2>

          <div className="study-check-wrap">
            <input value="1" type="radio" id="study1" name="recommended_months" />
            <label htmlFor="study1">
              <span>1개월</span>
            </label>
            <input value="2" type="radio" id="study2" name="recommended_months" />
            <label htmlFor="study2">
              <span>2개월</span>
            </label>
            <input value="3" type="radio" id="study3" name="recommended_months" />
            <label htmlFor="study3">
              <span>3개월</span>
            </label>
            <input value="6" type="radio" id="study4" name="recommended_months" />
            <label htmlFor="study4">
              <span>6개월</span>
            </label>
            <input value="12" type="radio" id="study5" name="recommended_months" />
            <label htmlFor="study5">
              <span>12개월</span>
            </label>
          </div>
          <h2>
            <span>추천 주당 수업 회수</span>
            <span>💡</span>
          </h2>
          <div className="weekly_input-wrap">
            <input type="radio" id="one" name="weekly_visit_count" />
            <label htmlFor="one">1회</label>
            <input type="radio" id="two" name="weekly_visit_count" />
            <label htmlFor="two">2회</label>
          </div>
        </div>
        <div className="parent_opinion-wrap">
          <h2>
            <span>정규수업 예상 커리큘럼</span>
            <span>📄</span>
          </h2>
          <textarea name="" id="" cols="30" rows="10" placeholder="선생님이 계획하는 수업 방향과 아동발달 목표를 부모님께 전달해주세요!"></textarea>
        </div>
        <div className="btn-group">
          <BigButton onClick={nextModal}>체험수업 종료체크 2/2</BigButton>
        </div>
      </div>
    </ClassReviewChahum2ContainerWrap>
  );
};

export default ClassReviewContainer;
