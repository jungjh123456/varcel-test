import { useRouter } from "next/dist/client/router";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BigButton from "../components/asset/BigButton";
import Footer from "../components/asset/Footer";
import MainHeader from "../components/asset/MainHeader";
import HomeGoSection1 from "../components/homeGo/HomeGoSection1";
import HomeGoSection2 from "../components/homeGo/HomeGoSection2";
import HomeGoSection3 from "../components/homeGo/HomeGoSection3";
import HomeGoSection4 from "../components/homeGo/HomeGoSection4";
import HomeGoSection5 from "../components/homeGo/HomeGoSection5";
import HomeGoSection6 from "../components/homeGo/HomeGoSection6";
import HomeGoSection7 from "../components/homeGo/HomeGoSection7";
import HomeGoSection8 from "../components/homeGo/HomeGoSection8";
import { applicationFirst, clearId } from "../redux/reducers/modules/application";
import { AppliedModalWrap, BrainDevelopWrap } from "./mainStyle";

const HomeGoContainer = () => {
  const dispatch = useDispatch();
  const history = useRouter();

  const {
    count: { list },
  } = useSelector(({ count }) => ({ count }));
  const {
    auth: { token },
  } = useSelector(({ auth }) => ({ auth }));
  const {
    application: { userId },
  } = useSelector(({ application }) => ({ application }));

  const queryObj = history.query;

  const [appliedCheck, setAppliedCheck] = useState(false);

  useEffect(() => {
    if (userId) {
      history.push(`/application/1?user_id=${userId}`);
      dispatch(clearId());
    }
  }, [userId]);
  const applicationBtn = (e) => {
    // history.push("/application/1");
    if (!appliedCheck) {
      const result = { step: "/application/1" };
      dispatch(applicationFirst({ result, token }));
      return;
    }
  };
  const goAppliedPage = (e) => {
    history.push("/myPage/applied_log");
    // setAppliedCheck(false);
  };
  const firstPage = (e) => {
    const result = { step: "/application/1" };
    dispatch(applicationFirst({ result, token }));
    setAppliedCheck(false);
  };
  return (
    <>
      {" "}
      <BrainDevelopWrap>
        <MainHeader applied />
        <HomeGoSection1 applicationBtn={applicationBtn} />
        <HomeGoSection2 />
        <HomeGoSection3 />
        <HomeGoSection4 />
        <HomeGoSection5 />
        <HomeGoSection6 />
        <HomeGoSection7 />
        <HomeGoSection8 />
        <Footer />
      </BrainDevelopWrap>
      {appliedCheck && (
        <AppliedModalWrap>
          <div className="container">
            <span>????</span>
            <h2>??????????????? ???????????? ????????????.</h2>
            <div className="text-wrap">
              <span>??????????????? ????????? ????????? ????????????. ????????? ??????</span>
              <span>?????? ?????????????????????????</span>
            </div>
            <div className="btn-group">
              <BigButton onClick={firstPage} white>
                ???????????? ?????????
              </BigButton>
              <BigButton onClick={goAppliedPage}>???, ???????????????</BigButton>
            </div>
          </div>
        </AppliedModalWrap>
      )}
    </>
  );
};

export default HomeGoContainer;
