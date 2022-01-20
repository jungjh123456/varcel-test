import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainHeader from "../../components/asset/MainHeader";
import { AlimeNotetimeInfofullDate } from "../../lib/api/timeDate";
import { clearNote, getAlimeNote } from "../../redux/reducers/modules/myPage";
import { CustomerClassAlimenoteContainerWrap } from "./myPageStyle";

const CustomerRealNote = () => {
  // const [alimeNoteInfo, setalimeNoteInfo] = useState({});
  const history = useRouter();
  const dispatch = useDispatch();
  const {
    auth: { token },
  } = useSelector(({ auth }) => ({ auth }));
  const {
    myPage: { alimeNoteInfo },
  } = useSelector(({ myPage }) => ({ myPage }));

  useEffect(() => {
    const name = `classes/sessionbatches/${history.query.sessionId}/alimtalk/?target=customer&type=class_note`;
    dispatch(getAlimeNote({ token, name }));
  }, []);

  const backBtn = (e) => {
    dispatch(clearNote());
    history.back();
  };
  return (
    <CustomerClassAlimenoteContainerWrap>
      <MainHeader message="정규수업 알림노트" white applied backBtn={backBtn} />
      <div className="container">
        <div className="header">
          <h1>
            {alimeNoteInfo?.customer_name} ({alimeNoteInfo?.kid_name}) {alimeNoteInfo?.round_and_quota}회차
          </h1>
          <span>{AlimeNotetimeInfofullDate(alimeNoteInfo?.scheduled_datetime)}</span>
        </div>
        <div className="study_shedule">
          <h2>
            <span>오늘의 수업 계획</span>
            <span>✍🏽</span>
          </h2>
          <div>
            <span>{alimeNoteInfo?.class_plan}</span>
          </div>
        </div>
        <div className="study_shedule">
          <h2>
            <span>수업활동 내용</span>
            <span>💬</span>
          </h2>
          <div>
            <span>{alimeNoteInfo?.class_content}</span>
          </div>
        </div>
        <div className="study_shedule">
          <h2>
            <span>오늘의 상담내용</span>
            <span>💡</span>
          </h2>
          <div>
            <span>{alimeNoteInfo?.counsel_content}</span>
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
    </CustomerClassAlimenoteContainerWrap>
  );
};

export default CustomerRealNote;
