import React from "react";
import ApplicationHeader from "../../components/asset/ApplicationHeader";
import NextIcon from "../../components/asset/NextIcon";
import { CounselorManageMentWrap } from "./counselorStyle";

const UserManagementContainer = () => {
  return (
    <CounselorManageMentWrap>
      <ApplicationHeader message={"회원 관리"} white notoggle />
      <div className="container">
        <div className="tab_wrap">
          <input type="radio" defaultChecked={true} id="born_study" name="study_tab" />
          <label htmlFor="born_study">정규수업</label>
          <input type="radio" id="no_born_study" name="study_tab" />
          <label htmlFor="no_born_study">체험수업</label>
        </div>
        <div className="study_wrap">
          {[
            { id: 32, user: "김소연", text: "언어발달 자극 프로그램 (체험권)", counselor: "강명실", date: new Date(), status: "진행중", quota: 6, max_quota: 24 },
            { id: 37, user: "김소연", text: "언어발달 자극 프로그램 (체험권)", counselor: "강명실", date: new Date(), status: "수업종료", quota: 6, max_quota: 24 },
            { id: 36, user: "김소연", text: "언어발달 자극 프로그램 (체험권)", counselor: "강명실", date: new Date(), status: "진행중", quota: 6, max_quota: 24 },
            { id: 35, user: "김소연", text: "언어발달 자극 프로그램 (체험권)", counselor: "강명실", date: new Date(), status: "진행중", quota: 6, max_quota: 24 },
          ]?.map((item) => {
            return (
              <div data-status={item.status} data-id={item.id} className="card">
                <div data-status={item.status} data-id={item.id}>
                  <div data-status={item.status} data-id={item.id}>
                    <span data-status={item.status} data-id={item.id}>
                      {item.counselor} ({item.user})
                    </span>
                    <span data-status={item.status} data-id={item.id}>
                      {item.text}
                    </span>

                    <span data-status={item.status} data-id={item.id} style={item.status === "진행중" ? { color: "#6100FF" } : {}}>
                      {item?.status}
                    </span>
                  </div>
                  <div data-status={item.status} data-id={item.id}>
                    <div data-status={item.status} data-id={item.id}>
                      <div>
                        <span data-status={item.status} data-id={item.id}>
                          {item.quota}
                        </span>
                        {"/"}
                        <span data-status={item.status} data-id={item.id}>
                          {item.max_quota}
                        </span>
                      </div>
                      <span data-status={item.status} data-id={item.id}>
                        회권
                      </span>
                    </div>
                  </div>
                </div>
                <div data-status={item.status} data-id={item.id}>
                  <span data-status={item.status} data-id={item.id}>
                    더보기
                  </span>
                  <NextIcon datastatus={item.status} id={item.id} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </CounselorManageMentWrap>
  );
};

export default UserManagementContainer;
