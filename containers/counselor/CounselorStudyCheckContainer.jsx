import React, { useEffect, useState } from "react";
import ApplicationHeader from "../../components/asset/ApplicationHeader";
import { timeTodayInfofullDate } from "../../lib/api/timeDate";
import { CounSelorStudyCheckWrap } from "./counselorStyle";
import { useRouter } from "next/dist/client/router";
import { getTeacherScheduleList } from "../../redux/reducers/modules/counselor";
import { useDispatch, useSelector } from "react-redux";
import MainHeader from "../../components/asset/MainHeader";
const CounselorStudyCheckContainer = () => {
  const [pageNum, setPageNum] = useState(0);
  const history = useRouter();
  const dispatch = useDispatch();
  const {
    counselor: { teacherScheduleList, teacherSchedulePreSessionList, counselorName, yesterdayClass, todaydayClass, tomorrowClassdayClass },
  } = useSelector(({ counselor }) => ({ counselor }));
  useEffect(() => {
    if (pageNum < 0) {
      setPageNum(2);
      return;
    }
    if (pageNum > 2) {
      setPageNum(0);
      return;
    }
  }, [pageNum]);
  useEffect(() => {
    const id = history.query.counselorid;

    dispatch(getTeacherScheduleList({ id }));
  }, [dispatch, history.query.id]);
  const slickleftClick = (e) => {
    setPageNum((state) => state - 1);
  };
  const slickrightClick = (e) => {
    setPageNum((state) => state + 1);
  };
  const goInfoStudy = (e) => {
    dispatch(clearTeacherSchedule());
    if (e.target.dataset.status === "수업예정" && e.target.dataset.type === "session") {
      history.push(`/counselor/study_check/${e.target.dataset.set}?program=${e.target.dataset.type}&status=prepending`);
      // history.push(`/trialClassscheduleinfo/${e.target.dataset.set}?id=${parsed.id}&status=prepending&program=${e.target.dataset.type}`);
      return;
    }
    if (e.target.dataset.status === "수업예정" && e.target.dataset.type === "presession") {
      history.push(`/counselor/study_check/${e.target.dataset.set}?program=${e.target.dataset.type}&status=prepending`);
      // history.push(`/trialClassscheduleinfo/${e.target.dataset.set}?id=${parsed.id}&status=prepending&program=${e.target.dataset.type}`);
      return;
    }
    if (e.target.dataset.status === "완료" && e.target.dataset.type === "session") {
      history.push(`/counselor/study_check/${e.target.dataset.set}?program=${e.target.dataset.type}&complete=true`);
      return;
    }
    if (e.target.dataset.status === "완료" && e.target.dataset.type === "presession") {
      history.push(`/counselor/study_check/${e.target.dataset.set}?program=${e.target.dataset.type}&complete=true`);

      return;
    }
    if (e.target.dataset.status === "미체크" && e.target.dataset.type === "session") {
      history.push(`/counselor/study_check/${e.target.dataset.set}?sessionId=${e.target.dataset.sessionid}&program=${e.target.dataset.type}`);

      // history.push(`/trialClassscheduleinfo/${e.target.dataset.set}?id=${parsed.id}&program=${e.target.dataset.type}`);
      return;
    }
    if (e.target.dataset.status === "미체크" && e.target.dataset.type === "presession") {
      //  history.push(`/classDetailMain?id=${e.target.dataset.set}&teacherId=${parsed.id}&page=teacher_schedule`);
      if (+e.target.dataset.page === 0 || !e.target.dataset.page) {
        history.push(`/counselor/study_check/${e.target.dataset.set}?program=${e.target.dataset.type}`);
        return;
      }
      if (+e.target.dataset.page === 1) {
        history.push(`/classReview2/${e.target.dataset.set}?program=${e.target.dataset.type}`);
        return;
      }
    }
  };
  const backBtn = () => {
    history.push("/counselor");
  };
  return (
    <CounSelorStudyCheckWrap>
      <MainHeader backBtn={backBtn} message={"수업 일정"} applied white notoggle />
      <div className="messag-wrap">
        <span>일정 업데이트 7일을 경과</span>하였습니다.
      </div>
      <div className="container">
        <div className="time_list">
          <div className="left-btn">
            {pageNum === 2 ? (
              <button data-set="left"></button>
            ) : (
              <button onClick={slickleftClick} data-set="left">
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.41016 1.41L2.83016 6L7.41016 10.59L6.00016 12L0.00015614 6L6.00016 -6.16331e-08L7.41016 1.41Z" fill="black" />
                </svg>
              </button>
            )}
          </div>
          <h2>
            {+pageNum === 0 && timeTodayInfofullDate(new Date())}
            {+pageNum === 1 && timeTodayInfofullDate(new Date())}
            {+pageNum === 2 && timeTodayInfofullDate(new Date())} 수업일정
          </h2>
          <div className="right-btn">
            {pageNum === 1 ? (
              <button data-set="right"></button>
            ) : (
              <button onClick={slickrightClick} data-set="right">
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.589844 10.59L5.16984 6L0.589844 1.41L1.99984 1.68141e-08L7.99984 6L1.99984 12L0.589844 10.59Z" fill="black" />
                </svg>
              </button>
            )}
          </div>
        </div>
        {pageNum === 0 && (
          <div className="grid3">
            {todaydayClass?.presession.length === 0 && todaydayClass?.session_list.length === 0 ? (
              <>
                <div style={{ display: "flex", justifyContent: "center", fontSize: "1.125rem", marginTop: "48px" }}>
                  <span>진행예정인 수업이 없습니다.</span>
                </div>
              </>
            ) : (
              <>
                {/* {"todaydayClass?.session_list "} */}
                {todaydayClass?.session_list.map((item, i) => {
                  return (
                    <div key={i} className="card">
                      <div
                        data-type="session"
                        data-sessionid={item?.id}
                        data-set={item?.session_batch}
                        data-status={item.status}
                        onClick={goInfoStudy}
                        style={
                          item.status === "수업예정"
                            ? { background: "rgba(0, 0, 0, 0.2)" }
                            : item.status === "완료"
                            ? { background: "#F0EFF4" }
                            : item.status === "미체크"
                            ? { background: "#6100ff" }
                            : {}
                        }
                      >
                        <span data-sessionid={item?.id} style={item.status === "완료" ? { color: "#000" } : {}} data-status={item.status} data-type="session" data-set={item?.session_batch}>
                          {item.status === "미체크" ? "종료체크 필요" : item.status === "완료" ? "수업완료" : item.status}
                        </span>
                        <svg
                          data-sessionid={item?.id}
                          data-status={item.status}
                          data-type="session"
                          data-set={item?.session_batch}
                          width="8"
                          height="12"
                          viewBox="0 0 8 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            data-sessionid={item?.id}
                            data-status={item.status}
                            data-type="session"
                            data-set={item?.id}
                            d="M0.589844 10.59L5.16984 6L0.589844 1.41L1.99984 1.68141e-08L7.99984 6L1.99984 12L0.589844 10.59Z"
                            fill="#fff"
                          />
                        </svg>
                      </div>
                      <div data-sessionid={item?.id} onClick={goInfoStudy} data-status={item.status} data-type="session" data-set={item?.session_batch}>
                        <span data-sessionid={item?.id} data-type="session" data-status={item.status} data-set={item?.session_batch}>
                          {item.customer_name} {timeMSDate(item.scheduled_datetime)}
                        </span>
                        <span data-sessionid={item?.id} data-type="session" data-status={item.status} data-set={item?.session_batch}>
                          정규수업 {item.round}/{item.quota}회차
                        </span>
                      </div>
                      {/* <button data-type="session" data-set={item?.id} onClick={goInfoStudy}>
                          <span data-type="session" data-set={item?.id}>
                            {counselorName} {timeMSDate(item?.scheduled_datetime)} 본수업
                          </span>
                          <ArrowIcon datatype="session" dataset={item?.id} />
                        </button> */}
                    </div>
                  );
                })}
                {/* todaydayClass?.presession */}
                {todaydayClass?.presession.map((item, i) => {
                  return (
                    <div className="card" key={i}>
                      <div
                        data-type="presession"
                        data-status={item.status}
                        data-set={item?.id}
                        onClick={goInfoStudy}
                        data-page={item?.page}
                        style={
                          item.status === "수업예정"
                            ? { background: "rgba(0, 0, 0, 0.2)" }
                            : item.status === "완료"
                            ? { background: "#F0EFF4" }
                            : item.status === "미체크"
                            ? { background: "#6100ff" }
                            : {}
                        }
                      >
                        <span style={item.status === "완료" ? { color: "#000" } : {}} data-page={item?.page} data-type="presession" data-status={item.status} data-set={item?.id}>
                          {item.status === "미체크" ? "체험수업 알림노트 작성필요" : item.status === "완료" ? "수업완료" : item.status}
                        </span>
                        <svg
                          data-page={item?.page}
                          data-type="presession"
                          data-status={item.status}
                          data-set={item?.id}
                          width="8"
                          height="12"
                          viewBox="0 0 8 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            data-page={item?.page}
                            data-type="presession"
                            data-status={item.status}
                            data-set={item?.id}
                            d="M0.589844 10.59L5.16984 6L0.589844 1.41L1.99984 1.68141e-08L7.99984 6L1.99984 12L0.589844 10.59Z"
                            fill="#fff"
                          />
                        </svg>
                      </div>
                      <div data-page={item?.page} onClick={goInfoStudy} data-status={item.status} data-type="presession" data-set={item?.id}>
                        <span data-page={item?.page} data-type="presession" data-status={item.status} data-set={item?.id}>
                          {item.customer_name} {timeMSDate(item.scheduled_datetime)}
                        </span>
                        <span data-page={item?.page} data-type="presession" data-status={item.status} data-set={item?.id}>
                          체험수업
                          {/* 정규수업 12/24회차 */}
                        </span>
                      </div>
                      {/* <button data-type="presession" data-set={item?.id} onClick={goInfoStudy}>
                          <span data-type="presession" data-set={item?.id}>
                            {counselorName} {timeMSDate(item?.scheduled_datetime)} 체험수업
                          </span>
                          <ArrowIcon data-type="presession" data-set={item?.id} />
                        </button> */}
                    </div>
                  );
                })}
              </>
            )}
          </div>
        )}
        {pageNum === 1 && (
          <div className="grid3">
            {tomorrowClassdayClass?.session_list.length === 0 && tomorrowClassdayClass?.presession.length === 0 ? (
              <>
                <div style={{ display: "flex", justifyContent: "center", fontSize: "1.125rem", marginTop: "48px" }}>
                  <span>진행예정인 수업이 없습니다.</span>
                </div>
              </>
            ) : (
              <>
                {" "}
                {tomorrowClassdayClass?.session_list.map((item, i) => {
                  return (
                    <div data-sessionid={item?.id} data-status={item.status} className="card" key={i}>
                      <div
                        data-sessionid={item?.id}
                        data-status={item.status}
                        data-type="session"
                        data-set={item?.session_batch}
                        onClick={goInfoStudy}
                        style={
                          item.status === "수업예정"
                            ? { background: "rgba(0, 0, 0, 0.2)" }
                            : item.status === "완료"
                            ? { background: "#F0EFF4" }
                            : item.status === "미체크"
                            ? { background: "#6100ff" }
                            : {}
                        }
                      >
                        <span data-sessionid={item?.id} style={item.status === "완료" ? { color: "#000" } : {}} data-status={item.status} data-type="session" data-set={item?.session_batch}>
                          {item.status === "미체크" ? "종료체크 필요" : item.status === "완료" ? "수업완료" : item.status}
                        </span>
                        <svg
                          data-sessionid={item?.id}
                          data-status={item.status}
                          data-type="session"
                          data-set={item?.session_batch}
                          width="8"
                          height="12"
                          viewBox="0 0 8 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            data-sessionid={item?.id}
                            data-status={item.status}
                            data-type="session"
                            data-set={item?.session_batch}
                            d="M0.589844 10.59L5.16984 6L0.589844 1.41L1.99984 1.68141e-08L7.99984 6L1.99984 12L0.589844 10.59Z"
                            fill="#fff"
                          />
                        </svg>
                      </div>
                      <div data-sessionid={item?.id} onClick={goInfoStudy} data-status={item.status} data-type="session" data-set={item?.session_batch}>
                        <span data-type="session" data-status={item.status} data-set={item?.session_batch}>
                          {item.customer_name} {timeMSDate(item.scheduled_datetime)}
                        </span>
                        <span data-type="session" data-status={item.status} data-set={item?.session_batch}>
                          정규수업 {item.round}/{item.quota}회차
                        </span>
                      </div>
                      {/* <button data-type="session" data-set={item?.id} onClick={goInfoStudy}>
                          <span data-type="session" data-set={item?.id}>
                            {counselorName} {timeMSDate(item?.scheduled_datetime)} 본수업
                          </span>
                          <ArrowIcon data-type="session" data-set={item?.id} />
                        </button> */}
                    </div>
                  );
                })}
                {tomorrowClassdayClass?.presession.map((item, i) => {
                  return (
                    <div className="card" key={i}>
                      <div
                        data-page={item?.page}
                        data-status={item.status}
                        data-type="presession"
                        data-set={item?.id}
                        onClick={goInfoStudy}
                        style={
                          item.status === "수업예정"
                            ? { background: "rgba(0, 0, 0, 0.2)" }
                            : item.status === "완료"
                            ? { background: "#F0EFF4" }
                            : item.status === "미체크"
                            ? { background: "#6100ff" }
                            : {}
                        }
                      >
                        <span style={item.status === "완료" ? { color: "#000" } : {}} data-page={item?.page} data-status={item.status} data-type="presession" data-set={item?.id}>
                          {item.status === "미체크" ? "체험수업 알림노트 작성필요" : item.status === "완료" ? "수업완료" : item.status}
                        </span>
                        <svg
                          data-page={item?.page}
                          data-status={item.status}
                          data-type="presession"
                          data-set={item?.id}
                          width="8"
                          height="12"
                          viewBox="0 0 8 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            data-page={item?.page}
                            data-type="presession"
                            data-set={item?.id}
                            d="M0.589844 10.59L5.16984 6L0.589844 1.41L1.99984 1.68141e-08L7.99984 6L1.99984 12L0.589844 10.59Z"
                            fill="#fff"
                          />
                        </svg>
                      </div>
                      <div data-page={item?.page} onClick={goInfoStudy} data-status={item.status} data-type="presession" data-set={item?.id}>
                        <span data-page={item?.page} data-type="presession" data-status={item.status} data-set={item?.id}>
                          {item.customer_name} {timeMSDate(item.scheduled_datetime)}
                        </span>
                        <span data-page={item?.page} data-type="presession" data-status={item.status} data-set={item?.id}>
                          체험수업
                          {/* 정규수업 12/24회차 */}
                        </span>
                      </div>
                      {/* <button data-type="presession" data-set={item?.id} onClick={goInfoStudy}>
                          <span data-type="presession" data-set={item?.id}>
                            {counselorName} {timeMSDate(item?.scheduled_datetime)} 체험수업
                          </span>
                          <ArrowIcon data-type="presession" data-set={item?.id} />
                        </button> */}
                    </div>
                  );
                })}
              </>
            )}
          </div>
        )}
        {pageNum === 2 && (
          <div className="grid3">
            {yesterdayClass?.session_list.length === 0 && yesterdayClass?.presession.length === 0 ? (
              <>
                <div style={{ display: "flex", justifyContent: "center", fontSize: "1.125rem", marginTop: "48px" }}>
                  <span>진행예정인 수업이 없습니다.</span>
                </div>
              </>
            ) : (
              <>
                {" "}
                {yesterdayClass?.session_list.map((item, i) => {
                  return (
                    <div data-sessionid={item?.id} data-status={item.status} className="card" key={i}>
                      <div
                        data-sessionid={item?.id}
                        data-status={item.status}
                        data-type="session"
                        data-set={item?.session_batch}
                        onClick={goInfoStudy}
                        style={
                          item.status === "수업예정"
                            ? { background: "rgba(0, 0, 0, 0.2)" }
                            : item.status === "완료"
                            ? { background: "#F0EFF4" }
                            : item.status === "미체크"
                            ? { background: "#6100ff" }
                            : {}
                        }
                      >
                        <span data-sessionid={item?.id} style={item.status === "완료" ? { color: "#000" } : {}} data-status={item.status} data-type="session" data-set={item?.session_batch}>
                          {item.status === "미체크" ? "종료체크 필요" : item.status === "완료" ? "수업완료" : item.status}
                        </span>
                        <svg
                          data-sessionid={item?.id}
                          data-status={item.status}
                          data-type="session"
                          data-set={item?.session_batch}
                          width="8"
                          height="12"
                          viewBox="0 0 8 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            data-sessionid={item?.id}
                            data-status={item.status}
                            data-type="session"
                            data-set={item?.session_batch}
                            onClick={goInfoStudy}
                            d="M0.589844 10.59L5.16984 6L0.589844 1.41L1.99984 1.68141e-08L7.99984 6L1.99984 12L0.589844 10.59Z"
                            fill="#fff"
                          />
                        </svg>
                      </div>
                      <div data-sessionid={item?.id} onClick={goInfoStudy} data-status={item.status} data-type="session" data-set={item?.session_batch}>
                        <span data-sessionid={item?.id} data-type="session" data-status={item.status} data-set={item?.session_batch}>
                          {item.customer_name} {timeMSDate(item.scheduled_datetime)}
                        </span>
                        <span data-sessionid={item?.id} data-type="session" data-status={item.status} data-set={item?.session_batch}>
                          정규수업 {item.round}/{item.quota}회차
                        </span>
                      </div>
                      {/* <button data-type="session" data-set={item?.id} onClick={goInfoStudy}>
                            <span data-type="session" data-set={item?.id}>
                              {counselorName} {timeMSDate(item?.scheduled_datetime)} 본수업
                            </span>
                            <ArrowIcon data-type="session" data-set={item?.id} />
                          </button> */}
                    </div>
                  );
                })}
                {yesterdayClass?.presession.map((item, i) => {
                  return (
                    <div data-page={item?.page} className="card" key={i}>
                      <div
                        data-page={item?.page}
                        data-status={item.status}
                        data-type="presession"
                        data-set={item?.id}
                        onClick={goInfoStudy}
                        style={
                          item.status === "수업예정"
                            ? { background: "rgba(0, 0, 0, 0.2)" }
                            : item.status === "완료"
                            ? { background: "#F0EFF4" }
                            : item.status === "미체크"
                            ? { background: "#6100ff" }
                            : {}
                        }
                      >
                        <span style={item.status === "완료" ? { color: "#000" } : {}} data-page={item?.page} data-status={item.status} data-type="presession" data-set={item?.id}>
                          {item.status === "미체크" ? "체험수업 알림노트 작성필요" : item.status === "완료" ? "수업완료" : item.status}
                        </span>
                        <svg
                          data-page={item?.page}
                          data-status={item.status}
                          data-type="presession"
                          data-set={item?.id}
                          width="8"
                          height="12"
                          viewBox="0 0 8 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            data-page={item?.page}
                            data-status={item.status}
                            data-type="presession"
                            data-set={item?.id}
                            d="M0.589844 10.59L5.16984 6L0.589844 1.41L1.99984 1.68141e-08L7.99984 6L1.99984 12L0.589844 10.59Z"
                            fill="#fff"
                          />
                        </svg>
                      </div>
                      <div data-page={item?.page} onClick={goInfoStudy} data-status={item.status} data-type="presession" data-set={item?.id}>
                        <span data-page={item?.page} data-type="presession" data-status={item.status} data-set={item?.id}>
                          {item.customer_name} {timeMSDate(item.scheduled_datetime)}
                        </span>
                        <span data-page={item?.page} data-type="presession" data-status={item.status} data-set={item?.id}>
                          체험수업
                          {/* 정규수업 12/24회차 */}
                        </span>
                      </div>
                      {/* <button data-type="presession" data-set={item?.id} onClick={goInfoStudy}>
                            <span data-type="presession" data-set={item?.id}>
                              {counselorName} {timeMSDate(item?.scheduled_datetime)} 체험수업
                            </span>
                            <ArrowIcon data-type="presession" data-set={item?.id} />
                          </button> */}
                    </div>
                  );
                })}
              </>
            )}
          </div>
        )}
      </div>
    </CounSelorStudyCheckWrap>
  );
};

export default CounselorStudyCheckContainer;
