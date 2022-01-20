import { useRouter } from "next/dist/client/router";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import MainHeader from "../../components/asset/MainHeader";
import { AlimeNotetimeInfofullDate } from "../../lib/api/timeDate";
import { clearNote, getAlimeNote } from "../../redux/reducers/modules/myPage";
import { StudyChahumAlimeContainerWrap } from "./myPageStyle";

const SutdyClassInfo = () => {
  const history = useRouter();
  const dispatch = useDispatch();
  const {
    auth: { token },
  } = useSelector(({ auth }) => ({ auth }));
  const {
    myPage: { alimeNoteInfo },
  } = useSelector(({ myPage }) => ({ myPage }));

  useEffect(() => {
    const name = `classes/presessions/${history.query.presessionId}/alimtalk/?target=customer&type=class_note`;

    dispatch(getAlimeNote({ token, name }));
  }, []);
  const backBtn = (e) => {
    dispatch(clearNote());
    history.back();
  };
  return (
    <StudyChahumAlimeContainerWrap>
      <MainHeader backBtn={backBtn} message="체험수업 알림노트" white applied />
      <div className="container">
        <div className="title_wrap">
          <h1>
            {alimeNoteInfo?.customer_name} ({alimeNoteInfo?.kid_name}) 체험수업
          </h1>
          <span>{AlimeNotetimeInfofullDate(alimeNoteInfo?.scheduled_datetime)} 수업</span>
        </div>
        <div className="children_opinion">
          <h2>
            <span>아동 언어발달 종합의견</span>
            <span>💬</span>
          </h2>
          <div className="opinion_text">
            <span>{alimeNoteInfo?.overall_opinion}</span>
          </div>
        </div>
        <div className="study_date-wrap">
          <h2>
            <span>추천 수업개월 수</span>
            <span>💡</span>
          </h2>
          <div className="study_input-wrap">
            <input type="radio" checked={+alimeNoteInfo?.recommended_months === 1 ? true : false} disabled id="study_one" name="study" />
            <label htmlFor="study_one">1개월</label>
            <input type="radio" checked={+alimeNoteInfo?.recommended_months === 2 ? true : false} disabled id="study_two" name="study" />
            <label htmlFor="study_two">2개월</label>
            <input type="radio" checked={+alimeNoteInfo?.recommended_months === 3 ? true : false} disabled id="study_three" name="study" />
            <label htmlFor="study_three">3개월</label>
            <input type="radio" checked={+alimeNoteInfo?.recommended_months === 6 ? true : false} disabled id="study_fore" name="study" />
            <label htmlFor="study_fore">6개월</label>
            <input type="radio" checked={+alimeNoteInfo?.recommended_months === 12 ? true : false} disabled id="study_five" name="study" />
            <label htmlFor="study_five">12개월</label>
          </div>
          <h2>
            <span>주당 수업 회수</span>
            <span>💡</span>
          </h2>
          <div className="weekly_date-wrap">
            <input type="radio" checked={+alimeNoteInfo?.recommended_weekly_visit_count === 1 ? true : false} disabled id="weekly_study_one" name="weekly_study" />
            <label htmlFor="weekly_study_one">1회</label>
            <input type="radio" checked={+alimeNoteInfo?.recommended_weekly_visit_count === 2 ? true : false} disabled id="weekly_study_two" name="weekly_study" />
            <label htmlFor="weekly_study_two">2회</label>
          </div>
        </div>
        <div className="coliculum-wrap">
          <h2>
            <span>정규수업 예상 커리귤럼</span>
            <span>📄</span>
          </h2>
          <div>
            <span>{alimeNoteInfo?.plan_for_session}</span>
          </div>
        </div>
        <div className="teacher_message-wrap">
          <div className="img-wrap">
            <img src="/imgs/chaumTeacher.png" alt="" />
          </div>
          <div className="teacher-message">
            <div>
              <span>항상 자녀분의 지속적인 발전과 건강한 성장을 기원합니다.</span>
            </div>
            <div>
              <span>{alimeNoteInfo?.counselor} 똑똑쌤</span>
            </div>
          </div>
        </div>
      </div>
    </StudyChahumAlimeContainerWrap>
  );
};

export default SutdyClassInfo;
