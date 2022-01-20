import React from "react";
import ApplicationHeader from "../asset/ApplicationHeader";
import BigButton from "../asset/BigButton";
import { StudyCheckBornInfoWrap } from "./CounselorStyle";

const StudyCheckBornInfo = () => {
  return (
    <StudyCheckBornInfoWrap>
      <ApplicationHeader message={"정규수업 알림노트"} white notoggle />
      <div className="container">
        <div className="grid2">
          <h2>김소연 (유하늘) 12/24회차</h2>
          <span>2021.12.13 (월) 오전 10시 30분 수업</span>
        </div>
        <div className="tody_study_schedule">
          <h2>
            <span>오늘의 수업 계획</span>
            <span>✍🏽</span>
          </h2>
          <div>
            <textarea name="" id="" cols="30" rows="10" placeholder="오늘의 수업 목표가 무엇이었는지 기록해주세요."></textarea>
          </div>
        </div>
        <div className="tody_study_studyactive">
          <h2>
            <span>오늘의 활동</span>
            <span>💬</span>
          </h2>
          <div>
            <textarea name="" id="" cols="30" rows="10" placeholder="오늘의 수업 목표가 무엇이었는지 기록해주세요."></textarea>
          </div>
        </div>
        <div className="tody_study_studyactive">
          <h2>
            <span>오늘의 상담</span>
            <span>💡</span>
          </h2>
          <div>
            <textarea name="" id="" cols="30" rows="10" placeholder="오늘의 수업 목표가 무엇이었는지 기록해주세요."></textarea>
          </div>
        </div>
        <div className="btn-group">
          <BigButton>알림노트 제출할게요.</BigButton>
        </div>
      </div>
    </StudyCheckBornInfoWrap>
  );
};

export default StudyCheckBornInfo;
