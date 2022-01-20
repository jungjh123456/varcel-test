import { useRouter } from "next/dist/client/router";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import MainHeader from "../../components/asset/MainHeader";
import RightIcon from "../../components/asset/RightIcon";
import { AlimeNotetimeInfoDate, DateWeektimeInfoDate } from "../../lib/api/timeDate";
import { clearStudy, getStudyInfo } from "../../redux/reducers/modules/myPage";
import CustomerRealNote from "./CustomerRealNote";
import { StudyManageMentinfoContainerWrap } from "./myPageStyle";

const StudyRealclass = () => {
  const history = useRouter();
  const {
    auth: { token },
  } = useSelector(({ auth }) => ({ auth }));
  const {
    myPage: { studyinfo },
  } = useSelector(({ myPage }) => ({ myPage }));
  const dispatch = useDispatch();
  useEffect(() => {
    if (!history.query.info) {
      const name = `classes/sessions/?session_batch=${history.query.id}`;
      dispatch(getStudyInfo({ token, name }));
    }
  }, [history.query.info]);
  const infoGoBtn = (e) => {
    history.push(`/myPage/study_management/${history.query.id}?program=realClass&info=true&sessionId=${e.target.dataset.id}`);
  };
  const backBtn = (e) => {
    dispatch(clearStudy());
    history.back();
  };
  return (
    <>
      {history?.query?.info ? (
        <CustomerRealNote />
      ) : (
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
                <span>정규수업 {studyinfo?.sessionbatch_data?.quota}회권</span>
              </div>
              <div>
                <span>프로그램 유형</span>
                <span>{studyinfo?.sessionbatch_data?.product}</span>
              </div>
              <div>
                <span>세부 프로그램</span>
                <span>{studyinfo?.sessionbatch_data?.program}</span>
              </div>
              <div>
                <span>담당 치료사</span>
                <span>{studyinfo?.sessionbatch_data?.counselor__name} 선생님</span>
              </div>

              <div>
                <span>등급</span>
                <span>{studyinfo?.sessionbatch_data?.counselor__tier}</span>
              </div>

              <div>
                <span>주당 수업 횟수</span>
                <span>{studyinfo?.weekly_visit_count}회</span>
              </div>
              {studyinfo?.sessionbatch_data?.weekly_visit_datetime ? (
                <>
                  {" "}
                  <div>
                    <span>수업일정</span>
                    <div style={{ display: "flex", flexDirection: "column", fontSize: "0.875rem" }}>
                      {studyinfo?.sessionbatch_data?.weekly_visit_datetime?.map((item, i, arr) => {
                        return <span key={i}>매주 {item}</span>;

                        // return <span>{arr[arr.length - 1] === item ? "" : "수업일정"}</span>;
                      })}
                    </div>
                  </div>
                </>
              ) : (
                <div>
                  <span>수업일정</span>
                  <span></span>
                </div>
              )}
              <div>
                <span>첫 수업일</span>
                <span>{DateWeektimeInfoDate(studyinfo?.sessionbatch_data?.start_datetime)}</span>
              </div>
            </div>
            <div className="study_log">
              {/* results */}
              {studyinfo?.sessionbatch_data?.results?.map((item, i) => {
                return (
                  <div key={i} data-id={item.id} data-status={item.status} onClick={infoGoBtn} className="card">
                    <div data-id={item.id} data-status={item.status}>
                      <span data-id={item.id} data-status={item.status}>
                        {item.session_round}회차
                      </span>
                      <span data-id={item.id} data-status={item.status}>
                        {AlimeNotetimeInfoDate(item.scheduled_datetime)}
                      </span>
                      <span data-id={item.id} data-status={item.status}>
                        {item.status}
                      </span>
                    </div>
                    <div data-id={item.id} data-status={item.status}>
                      <RightIcon dataid={item.id} datastatus={item.status} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </StudyManageMentinfoContainerWrap>
      )}
    </>
  );
};

export default StudyRealclass;
