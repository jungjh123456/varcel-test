import { useRouter } from "next/dist/client/router";
import React from "react";
import ArrowIcon from "../../components/asset/ArrowIcon";
import BigButton from "../../components/asset/BigButton";
import MainHeader from "../../components/asset/MainHeader";
import TalkIcon from "../../components/asset/TalkIcon";
import { CounselorContainerWrap, CounSelorMenuWrap } from "./counselorStyle";

const CounselorContainer = () => {
  const router = useRouter();
  const studyBtn = (e) => {
    if (e.target.dataset.name === "study_date") {
      router.push("/counselor/study_date?step=1");
      return;
    }
    if (e.target.dataset.name === "reply") {
      router.push("/counselor/reply");
      return;
    }
    if (e.target.dataset.name === "study_check") {
      router.push("/counselor/study_check");
      return;
    }
    if (e.target.dataset.name === "usermanagement") {
      router.push("/counselor/usermanagement");
      return;
    }
  };
  return (
    <CounselorContainerWrap>
      <MainHeader white />
      <CounSelorMenuWrap>
        <div className="container">
          <div className="messag-wrap">
            <span>일정 업데이트 7일을 경과</span>하였습니다.
          </div>
          <h1>안녕하세요 장성원 선생님</h1>
          <div className="setting-list">
            <button data-name="study_date" onClick={studyBtn} className="list-click">
              <span data-name="study_date">수업가능 일정 및 지역관리</span>
              <ArrowIcon dataname="study_date" />
            </button>
            <button data-name="reply" onClick={studyBtn} className="list-click">
              <span data-name="reply">후기관리</span>
              <ArrowIcon dataname="reply" />
            </button>
            <button data-name="study_check" onClick={studyBtn} className="list-click">
              <span data-name="study_check">수업 스케쥴 및 종료 알림 체크</span>
              <ArrowIcon dataname="study_check" />
            </button>
            <button data-name="usermanagement" onClick={studyBtn} className="list-click">
              <span data-name="usermanagement">회원관리</span>
              <ArrowIcon dataname="usermanagement" />
            </button>
          </div>
          <div className="btn-group">
            <BigButton>
              <TalkIcon />
              똑똑쌤에게 익명 건의하기
            </BigButton>
          </div>
        </div>
      </CounSelorMenuWrap>
    </CounselorContainerWrap>
  );
};

export default CounselorContainer;
