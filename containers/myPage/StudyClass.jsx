import { useRouter } from "next/dist/client/router";
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import MainHeader from "../../components/asset/MainHeader";
import RightIcon from "../../components/asset/RightIcon";
import { AlimeNotetimeInfoDate } from "../../lib/api/timeDate";
import { clearStudy, getStudyInfo } from "../../redux/reducers/modules/myPage";
import { StudyManageMentinfoContainerWrap } from "./myPageStyle";
import SutdyClassInfo from "./SutdyClassInfo";

const StudyClass = () => {
  const history = useRouter();
  const dispatch = useDispatch();
  const {
    auth: { token },
  } = useSelector(({ auth }) => ({ auth }));
  const {
    myPage: { studyinfo },
  } = useSelector(({ myPage }) => ({ myPage }));

  useEffect(() => {
    if (!history.query.info) {
      const name = `classes/presessions/${history.query.id}/`;
      dispatch(getStudyInfo({ token, name }));
    }
  }, [history.query.info]);

  const infoGoBtn = (e) => {
    if (e.target.dataset.status === "확정대기") {
      return;
    }
    history.push(`/myPage/study_management/${history.query.id}?program=classDetail&info=true&presessionId=${e.target.dataset.id}`);
  };
  const backBtn = (e) => {
    dispatch(clearStudy());
    history.back();
  };
  return (
    <>
      {history.query.info ? (
        <SutdyClassInfo />
      ) : (
        <>
          {" "}
          <StudyManageMentinfoContainerWrap>
            <MainHeader backBtn={backBtn} message={"수업관리 및 알림노트"} applied white />
            <div className="container">
              <div className="teacher_info">
                <h2>
                  <span>수업권 정보</span>
                  <span>📌</span>
                </h2>
                <div>
                  <span>수업 유형</span>
                  <span>체험수업</span>
                </div>
                <div>
                  <span>프로그램 유형</span>
                  <span>{studyinfo?.product}</span>
                </div>
                <div>
                  <span>세부 프로그램</span>
                  <span>{studyinfo?.program}</span>
                </div>
                <div>
                  <span>담당 치료사</span>
                  <span>{studyinfo?.counselor}</span>
                </div>

                <div>
                  <span>등급</span>
                  <span>{studyinfo?.tier}</span>
                </div>
              </div>
              <div className="study_log">
                <div data-id={studyinfo?.id} data-status={studyinfo?.status} onClick={infoGoBtn} className="card">
                  <div data-id={studyinfo?.id} data-status={studyinfo?.status}>
                    <span data-id={studyinfo?.id} data-status={studyinfo?.status}>
                      체험수업
                    </span>
                    <span data-id={studyinfo?.id} data-status={studyinfo?.status}>
                      {AlimeNotetimeInfoDate(studyinfo?.scheduled_datetime)}
                    </span>
                    <span data-id={studyinfo?.id} data-status={studyinfo?.status}>
                      {studyinfo?.status}
                    </span>
                  </div>
                  <div data-id={studyinfo?.id} data-status={studyinfo?.status}>
                    <RightIcon dataid={studyinfo?.id} datastatus={studyinfo?.status} />
                  </div>
                </div>
              </div>
            </div>
          </StudyManageMentinfoContainerWrap>
        </>
      )}
    </>
  );
};

export default StudyClass;
