import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SlugWrap } from "../components/style";
import { testGet } from "../redux/reducers/modules/count";

import { useRouter } from "next/dist/client/router";
import { AppliedModalWrap, MainWrap } from "./mainStyle";
import MainSection1 from "../components/main/MainSection1";
import MainHeader from "../components/asset/MainHeader";
import MainSection2 from "../components/main/MainSection2";
import MainSection3 from "../components/main/MainSection3";
import MainSection4 from "../components/main/MainSection4";
import MainSection5 from "../components/main/MainSection5";
import MainSection6 from "../components/main/MainSection6";
import MainSection7 from "../components/main/MainSection7";
import Footer from "../components/asset/Footer";
import RightMenu from "../components/asset/RightMenu";
import MainSectionNew7 from "../components/main/MainSectionNew7";
import MainSectionNew8 from "../components/main/MainSectionNew8";
import MainSectionNew9 from "../components/main/MainSectionNew9";
import MainQuestion from "../components/main/MainQuestion";
import { applicationFirst, clearId } from "../redux/reducers/modules/application";
import BigButton from "../components/asset/BigButton";
import Loading from "../components/asset/Loading";

const MainContainer = () => {
  const dispatch = useDispatch();
  const history = useRouter();

  const {
    auth: { token },
  } = useSelector(({ auth }) => ({ auth }));
  const {
    application: { userId },
  } = useSelector(({ application }) => ({ application }));

  const queryObj = history.query;

  const [appliedCheck, setAppliedCheck] = useState(false);
  useEffect(() => {
    sessionStorage.clear();
  });
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
      // pg??? ?????????
      history.push(`/application/1?user_id=32`);
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
  const { loading } = useSelector(({ loading }) => ({ loading }));
  return (
    <>
      {loading["application/APPLICATIONFIRST"] && <Loading />}
      <MainWrap>
        <MainHeader white />
        <MainSection1 applicationBtn={applicationBtn} />
        <MainSection5 />
        <MainSection2 />
        <MainSection3 />
        <MainSection4 />
        <MainSection6 />
        <MainSectionNew7 />
        {/* <MainSectionNew8 /> */}
        <MainSectionNew9 />
        <MainQuestion />
        <MainSection7 />
        <Footer />
        {/* <MainSection1 />
      <MainSection1 />
      <MainSection1 />
      <MainSection1 /> */}
      </MainWrap>
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

export default MainContainer;
