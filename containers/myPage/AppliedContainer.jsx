import { useRouter } from "next/dist/client/router";
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import AppliHeader from "../../components/asset/AppliHeader";
import ArrowIcon from "../../components/asset/ArrowIcon";
import MainHeader from "../../components/asset/MainHeader";
import { hoursListTime, timeDate } from "../../lib/api/timeDate";
import { clearApplied, getappliedList } from "../../redux/reducers/modules/myPage";
import { AppliedContainerWrap } from "./myPageStyle";

const AppliedContainer = () => {
  const dispatch = useDispatch();
  const {
    myPage: { appliedList },
  } = useSelector(({ myPage }) => ({ myPage }));
  const {
    auth: { token },
  } = useSelector(({ auth }) => ({ auth }));
  useEffect(() => {
    dispatch(getappliedList({ token }));
  }, []);

  const history = useRouter();
  const goAppliedBtn = (e) => {
    if (e.target.dataset.status === "작성중") {
      if (e.target.dataset.url.length === 14 || e.target.dataset.url === "/application/8") {
        history.push(`${e.target.dataset.url}?user_id=${e.target.dataset.id}`);
        return;
      }
      history.push(`${e.target.dataset.url}&user_id=${e.target.dataset.id}`);
      return;
    }
    history.push(`/application/1?user_id=${e.target.dataset.id}&complete=true`);
  };
  const backBtn = (e) => {
    dispatch(clearApplied());
    history.back();
  };
  return (
    <AppliedContainerWrap>
      <MainHeader backBtn={backBtn} white applied />
      <div className="container">
        <h2>신청서 내역</h2>
        <div className="applied_wrap">
          {[{ id: 90, product: "아동 발달치료 프로그램", updated_at: new Date(), step: "/application/8?pagesection=presession", application_status: "작성중" }]?.map((item) => {
            return (
              <div onClick={goAppliedBtn} data-status={item.application_status} data-url={item.step} data-id={item.id} style={{ cursor: "pointer" }} className="card1">
                <div data-status={item.application_status} data-url={item.step} data-id={item.id}>
                  <span data-status={item.application_status} data-url={item.step} data-id={item.id}>
                    {item?.product}
                  </span>
                  <span data-status={item.application_status} data-url={item.step} data-id={item.id}>
                    {timeDate(item.updated_at)} | {hoursListTime(item.updated_at)}
                  </span>
                  <span data-status={item.application_status} data-url={item.step} data-id={item.id} style={item.application_status === "작성중" ? { color: "#FF3535" } : { color: "#6100FF" }}>
                    {item.application_status}
                  </span>
                </div>
                <ArrowIcon dataStatus={item.application_status} dataurl={item.step} id={item.id} />
              </div>
            );
          })}
          {appliedList?.map((item) => {
            return (
              <div onClick={goAppliedBtn} data-status={item.application_status} data-url={item.step} data-id={item.id} style={{ cursor: "pointer" }} className="card1">
                <div data-status={item.application_status} data-url={item.step} data-id={item.id}>
                  <span data-status={item.application_status} data-url={item.step} data-id={item.id}>
                    {item?.product}
                  </span>
                  <span data-status={item.application_status} data-url={item.step} data-id={item.id}>
                    {timeDate(item.updated_at)} | {hoursListTime(item.updated_at)}
                  </span>
                  <span data-status={item.application_status} data-url={item.step} data-id={item.id} style={item.application_status === "작성중" ? { color: "#FF3535" } : { color: "#6100FF" }}>
                    {item.application_status}
                  </span>
                </div>
                <ArrowIcon dataStatus={item.application_status} dataurl={item.step} id={item.id} />
              </div>
            );
          })}
        </div>
      </div>
    </AppliedContainerWrap>
  );
};

export default AppliedContainer;
