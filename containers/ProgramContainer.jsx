import { useRouter } from "next/dist/client/router";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BigButton from "../components/asset/BigButton";
import Footer from "../components/asset/Footer";
import MainHeader from "../components/asset/MainHeader";
import EssetMainProgram from "../components/program/EssetMainProgram";
import ProgramSection1 from "../components/program/ProgramSection1";
import ProgramSection2 from "../components/program/ProgramSection2";
import ProgramSection3 from "../components/program/ProgramSection3";
import ProgramSection3Sub from "../components/program/ProgramSection3Sub";
import ProgramSection4 from "../components/program/ProgramSection4";
import ProgramSection5 from "../components/program/ProgramSection5";
import ProgramSection6 from "../components/program/ProgramSection6";
import { applicationFirst, clearId } from "../redux/reducers/modules/application";
import { AppliedModalWrap, MainWrap, ProgramWrap } from "./mainStyle";

const ProgramContainer = () => {
  const history = useRouter();
  const dispatch = useDispatch();

  const goDockTeacherBtn = (e) => {
    history.push("/");
  };

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
      <ProgramWrap>
        <MainHeader />
        <ProgramSection1 applicationBtn={applicationBtn} />
        <ProgramSection2 />
        <ProgramSection3 />
        <EssetMainProgram />
        {/* <ProgramSection3Sub /> */}
        <ProgramSection4 />
        <ProgramSection5 goDockTeacherBtn={goDockTeacherBtn} />
        <ProgramSection6 />
        <Footer />
      </ProgramWrap>
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

export default ProgramContainer;
