import { useRouter } from "next/dist/client/router";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppliHeader from "../components/asset/AppliHeader";
import BigButton from "../components/asset/BigButton";
import Footer from "../components/asset/Footer";
import MainHeader from "../components/asset/MainHeader";
import BrainDevelopSection1 from "../components/brainDevelop/BrainDevelopSection1";
import BrainDevelopSection2 from "../components/brainDevelop/BrainDevelopSection2";
import BrainDevelopSection3 from "../components/brainDevelop/BrainDevelopSection3";
import BrainDevelopSection4 from "../components/brainDevelop/BrainDevelopSection4";
import BrainDevelopSection5 from "../components/brainDevelop/BrainDevelopSection5";
import BrainDevelopSection6 from "../components/brainDevelop/BrainDevelopSection6";
import BrainDevelopSection7 from "../components/brainDevelop/BrainDevelopSection7";
import BrainDevelopSection8 from "../components/brainDevelop/BrainDevelopSection8";
import { applicationFirst, clearId } from "../redux/reducers/modules/application";
import { AppliedModalWrap, BrainDevelopWrap } from "./mainStyle";

const BrainDevelopContainer = () => {
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
    if (userId) {
      history.push(`/application/1?user_id=${userId}`);
      dispatch(clearId());
    }
  }, [userId]);
  const applicationBtn = (e) => {
    // history.push("/application/1");
    const result = { step: "/application/1" };
    dispatch(applicationFirst({ result, token }));
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
      <BrainDevelopWrap>
        <MainHeader applied />
        <BrainDevelopSection1 applicationBtn={applicationBtn} />
        <BrainDevelopSection2 />
        <BrainDevelopSection3 />
        <BrainDevelopSection4 />
        <BrainDevelopSection5 />
        <BrainDevelopSection6 />
        <BrainDevelopSection7 />
        <BrainDevelopSection8 />
        <Footer />
      </BrainDevelopWrap>
      {appliedCheck && (
        <AppliedModalWrap>
          <div className="container">
            <span>👀</span>
            <h2>작성중이던 신청서가 있습니다.</h2>
            <div className="text-wrap">
              <span>작성중이던 신청서 내역이 있습니다. 이어서 신청</span>
              <span>서를 작성하시겠습니까?</span>
            </div>
            <div className="btn-group">
              <BigButton onClick={firstPage} white>
                처음부터 할게요
              </BigButton>
              <BigButton onClick={goAppliedPage}>네, 작성할게요</BigButton>
            </div>
          </div>
        </AppliedModalWrap>
      )}
    </>
  );
};

export default BrainDevelopContainer;
