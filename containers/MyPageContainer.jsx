import { useRouter } from "next/dist/client/router";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ArrowIcon from "../components/asset/ArrowIcon";
import BigButton from "../components/asset/BigButton";
import MainHeader from "../components/asset/MainHeader";
import TalkIcon from "../components/asset/TalkIcon";
import { clearApplied, clearManageStudy, clearReview, paymentClear, profileClear } from "../redux/reducers/modules/myPage";
import { MyPageMenuWrap, MyPageWrap } from "./mainStyle";

const MyPageContainer = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const menuActive = () => {
    setActiveMenu(true);
  };
  const history = useRouter();
  const dispatch = useDispatch();

  const goBtn = (e) => {
    if (e.target.dataset.name === "profile") {
      history.push("/myPage/profile");
      return;
    }
    if (e.target.dataset.name === "applied") {
      history.push("/myPage/applied_log");
      return;
    }
    if (e.target.dataset.name === "cost_pay") {
      history.push("/myPage/payment_log");
      return;
    }
    if (e.target.dataset.name === "study_manage") {
      history.push("/myPage/study_management");
      return;
    }
    if (e.target.dataset.name === "review_list") {
      history.push("/myPage/review_log");
      return;
    }
  };
  useEffect(() => {
    dispatch(clearManageStudy());
    dispatch(clearReview());
    dispatch(profileClear());
    dispatch(paymentClear());
    dispatch(clearApplied());
  }, []);
  return (
    <MyPageWrap>
      <MainHeader menuActive={menuActive} white />
      <MyPageMenuWrap>
        <div className="container">
          <h1>마이 페이지</h1>
          <div className="setting-list">
            <button data-name="profile" onClick={goBtn} className="list-click">
              <span data-name="profile">프로필</span>
              <ArrowIcon dataname="profile" />
            </button>
            <button data-name="applied" onClick={goBtn} className="list-click">
              <span data-name="applied">신청서 내역</span>
              <ArrowIcon dataname="applied" />
            </button>
            <button data-name="cost_pay" onClick={goBtn} className="list-click">
              <span data-name="cost_pay">결제 내역</span>
              <ArrowIcon dataname="cost_pay" />
            </button>
            <button data-name="study_manage" onClick={goBtn} className="list-click">
              <span data-name="study_manage">수업 관리</span>
              <ArrowIcon dataname="study_manage" />
            </button>
            <button data-name="review_list" onClick={goBtn} className="list-click">
              <span data-name="review_list">후기 관리</span>
              <ArrowIcon dataname="review_list" />
            </button>
          </div>
          <div className="btn-group">
            <BigButton>
              <TalkIcon />
              1:1 문의하기
            </BigButton>
          </div>
        </div>
      </MyPageMenuWrap>
    </MyPageWrap>
  );
};

export default MyPageContainer;
