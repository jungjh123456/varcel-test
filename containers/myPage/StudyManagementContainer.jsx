import React, { useEffect } from "react";
import AppliHeader from "../../components/asset/AppliHeader";
import ArrowIcon from "../../components/asset/ArrowIcon";
import { StudyManageMentContainerWrap } from "./myPageStyle";

import NextIcon from "../../components/asset/NextIcon";
import MainHeader from "../../components/asset/MainHeader";
import { clearManageStudy, clearNote, clearStudy, getStudyManageMentList } from "../../redux/reducers/modules/myPage";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/dist/client/router";

const StudyManagementContainer = () => {
  const dispatch = useDispatch();
  const {
    myPage: { studyManageMentList, realClassStudyManageMentList },
  } = useSelector(({ myPage }) => ({ myPage }));
  const {
    auth: { token },
  } = useSelector(({ auth }) => ({ auth }));
  useEffect(() => {
    dispatch(getStudyManageMentList({ token }));
  }, []);
  const history = useRouter();
  useEffect(() => {
    dispatch(clearNote());
    dispatch(clearStudy());
  }, []);
  const goInfo = (e) => {
    if (e.target.dataset.status === "진행중") {
      return;
    }
    if (e.target.dataset.status === "수업종료" || e.target.dataset.status === "미체크" || e.target.dataset.status === "확정대기") {
      history.push(`/myPage/study_management/${e.target.dataset.id}?program=${e.target.dataset.program}`);
      return;
    }
  };
  const backBtn = (e) => {
    dispatch(clearManageStudy());
    history.back();
  };
  return (
    <StudyManageMentContainerWrap>
      <MainHeader backBtn={backBtn} white applied />
      <div className="container">
        <h2>수업 관리 및 알림노트</h2>
        <div className="study_wrap">
          {realClassStudyManageMentList?.map((item) => {
            return (
              <div key={i} onClick={goInfo} data-program="realClass" data-status={item.status} data-id={item.id} className="card">
                <div data-status={item.status} data-program="realClass" data-id={item.id}>
                  <div data-status={item.status} data-program="realClass" data-id={item.id}>
                    <span data-status={item.status} data-program="realClass" data-id={item.id}>
                      {item.product}
                    </span>
                    <span data-program="realClass" data-status={item.status} data-id={item.id}>
                      {item.counselor ? `${item.counselor} 선생님` : "미정"}
                    </span>
                    <span data-program="realClass" data-status={item.status} data-id={item.id} style={item.status === "진행중" ? { color: "#6100FF" } : {}}>
                      {item?.status}
                    </span>
                  </div>
                  <div data-program="realClass" data-status={item.status} data-id={item.id}>
                    <div data-program="realClass" data-status={item.status} data-id={item.id}>
                      <span data-program="realClass" style={{ fontSize: "1rem", fontWeight: "700" }} data-status={item.status} data-id={item.id}>
                        {item.round}/{item.quota}
                      </span>
                      <span data-program="realClass" data-status={item.status} data-id={item.id}>
                        회권
                      </span>
                    </div>
                  </div>
                </div>
                <div data-program="realClass" data-status={item.status} data-id={item.id}>
                  <span data-program="realClass" data-status={item.status} data-id={item.id}>
                    더보기
                  </span>
                  <NextIcon dataprogram="realClass" datastatus={item.status} id={item.id} />
                </div>
              </div>
            );
          })}
          {studyManageMentList?.map((item) => {
            return (
              <div key={i} data-program="classDetail" onClick={goInfo} data-status={item.status} data-id={item.id} className="card">
                <div data-program="classDetail" data-status={item.status} data-id={item.id}>
                  <div data-program="classDetail" data-status={item.status} data-id={item.id}>
                    <span data-program="classDetail" data-status={item.status} data-id={item.id}>
                      {item.product}
                    </span>
                    <span data-program="classDetail" data-status={item.status} data-id={item.id}>
                      {item.counselor ? `${item.counselor} 선생님` : "미정"}
                    </span>
                    <span data-program="classDetail" data-status={item.status} data-id={item.id} style={item.status === "진행중" ? { color: "#6100FF" } : {}}>
                      {item?.status}
                    </span>
                  </div>
                  <div data-program="classDetail" data-status={item.status} data-id={item.id}>
                    <div data-program="classDetail" data-status={item.status} data-id={item.id}>
                      <span data-program="classDetail" style={{ fontSize: "1rem", fontWeight: "700" }} data-status={item.status} data-id={item.id}>
                        체험
                      </span>
                      <span data-program="classDetail" data-status={item.status} data-id={item.id}>
                        수업권
                      </span>
                    </div>
                  </div>
                </div>
                <div data-program="classDetail" data-status={item.status} data-id={item.id}>
                  <span data-program="classDetail" data-status={item.status} data-id={item.id}>
                    더보기
                  </span>
                  <NextIcon dataprogram="classDetail" datastatus={item.status} id={item.id} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </StudyManageMentContainerWrap>
  );
};

export default StudyManagementContainer;
