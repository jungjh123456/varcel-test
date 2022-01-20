import { useRouter } from "next/dist/client/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppliHeader from "../../components/asset/AppliHeader";
import ArrowIcon from "../../components/asset/ArrowIcon";
import MainHeader from "../../components/asset/MainHeader";
import { hoursListTime, timeDate } from "../../lib/api/timeDate";
import { getPaymentList, paymentClear } from "../../redux/reducers/modules/myPage";
import { AppliedContainerWrap } from "./myPageStyle";
const PayMentContainer = () => {
  const dispatch = useDispatch();
  const {
    myPage: { paymentList },
  } = useSelector(({ myPage }) => ({ myPage }));
  const {
    auth: { token },
  } = useSelector(({ auth }) => ({ auth }));
  useEffect(() => {
    dispatch(getPaymentList({ token }));
  }, []);
  const history = useRouter();
  const goInfo = (e) => {
    if (e.target.dataset.status === "결제대기") {
      history.push(`/application/8?paymentId=${e.target.dataset.id}&pagesection=${e.target.dataset.program}`);
      return;
    }
    if (e.target.dataset.status === "결제완료") {
      history.push(`/myPage/payment_log/${e.target.dataset.id}?program=${e.target.dataset.program}`);
      return;
    }
  };
  const backBtn = (e) => {
    dispatch(paymentClear());
    history.back();
  };
  return (
    <AppliedContainerWrap>
      <MainHeader backBtn={backBtn} white applied />
      <div className="container">
        <h2>결제 내역</h2>
        <div className="applied_wrap">
          {paymentList?.map((item, i) => {
            return (
              <div key={i} data-program={item.type === "체험권" ? "presession" : "session"} onClick={goInfo} data-id={item.id} data-status={item.status} className="card1">
                <div data-program={item.type === "체험권" ? "presession" : "session"} data-id={item.id} data-status={item.status}>
                  <span data-program={item.type === "체험권" ? "presession" : "session"} data-id={item.id} data-status={item.status}>
                    {item.product} ({item.type})
                  </span>
                  <span data-program={item.type === "체험권" ? "presession" : "session"} data-id={item.id} data-status={item.status}>
                    {timeDate(item.payment_time)} | {hoursListTime(item.payment_time)}
                  </span>
                  <span
                    data-program={item.type === "체험권" ? "presession" : "session"}
                    data-id={item.id}
                    data-status={item.status}
                    style={item.status === "결제대기" ? { color: "#FF3535" } : { color: "#6100FF" }}
                  >
                    {item.status}
                  </span>
                </div>
                <ArrowIcon dataprogram={item.type === "체험권" ? "presession" : "session"} id={item.id} dataStatus={item.status} />
              </div>
            );
          })}
        </div>
      </div>
    </AppliedContainerWrap>
  );
};

export default PayMentContainer;
