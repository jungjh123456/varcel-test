import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import ApplicationHeader from "../components/asset/ApplicationHeader";
import AppliHeader from "../components/asset/AppliHeader";
import Progress from "../components/asset/Progress";
import { ApplicationContainerWrap, StudyOkWrap } from "./applicationStyle";
import DaumPostcode from "react-daum-postcode";
import BigButton from "../components/asset/BigButton";
import ApplicationSection1 from "../components/application/ApplicationSection1";
import BabyInfo from "../components/application/BabyInfo";
import ProgramCheckPage from "../components/application/ProgramCheckPage";
import { ApplicationWrap } from "./mainStyle";
import ProgramStatusPage from "../components/application/ProgramStatusPage";
import ProgramPurposePage from "../components/application/ProgramPurposePage";
import VisitPage from "../components/application/VisitPage";
import StudyDate from "../components/application/StudyDate";
import CostPayContainer from "../components/application/CostPayContainer";
import LastContainer from "../components/application/LastContainer";
import PurposeLanguage from "../components/application/PurposeLanguage";
import CureLogged from "../components/application/CureLogged";
import CureLogged2 from "../components/application/CureLogged2";
import { applicationPatch } from "../redux/reducers/modules/application";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import CostPayPrepending from "../components/application/CostPayPrepending";
import CostPayRealClassPrepending from "../components/application/CostPayRealClassPrepending";
import CostPayRealContainer from "../components/application/CostPayRealContainer";
import MainHeader from "../components/asset/MainHeader";
const ApplicationContainer = () => {
  const param = useRouter();
  const [percent, setPercent] = useState(0);

  const {
    application: { success },
  } = useSelector(({ application }) => ({ application }));

  useEffect(() => {
    if (param.query.id) {
      setPercent((param.query.id / 7) * 100);
    }
    return () => {
      setPercent(null);
    };
  }, [param.query.id]);

  return (
    <ApplicationWrap>
      {+param.query.id === 1 && (
        <>
          {false ? (
            <StudyOkWrap>
              <MainHeader message={"수업가능 여부"} white />
              <div className="container">
                <div className="text">
                  <h1>방문수업이 가능한 지역입니다.</h1>
                  <div>
                    <span>방문 선생님께서 체험수업을 준비하실 수 있도록 아동정보를 꼼꼼하게 작성해주세요!</span>
                  </div>
                </div>
                <div className="btn-wrap">
                  <BigButton>아동정보 작성하기</BigButton>
                </div>
              </div>
            </StudyOkWrap>
          ) : (
            <ApplicationSection1
            // goInfo={goInfo}
            // program1Input={program1Input}
            // param={param}
            // percent={percent}
            // addressModal={addressModal}
            // modalStatebtb={modalStatebtb}
            // handleComplete={handleComplete}
            // goNextBtn={goNextBtn}
            />
          )}
        </>
      )}
      {+param.query.id === 2 && (
        <>
          <BabyInfo param={param} percent={percent} />
        </>
      )}
      {+param.query.id === 3 && (
        <>
          <ProgramCheckPage param={param} percent={percent} />
        </>
      )}
      {+param.query.id === 4 && (
        <>
          {param.query.program === "study" && <ProgramPurposePage param={param} percent={percent} />}
          {param.query.program === "languge_program" && <PurposeLanguage param={param} percent={percent} />}
        </>
      )}
      {+param.query.id === 5 && (
        <>
          {param.query.program === "study" && <ProgramStatusPage param={param} percent={percent} />}
          {param.query.program === "languge_program" && (
            <>
              {+param.query.step === 1 && <CureLogged />}
              {+param.query.step === 2 && <CureLogged2 />}
            </>
          )}
        </>
      )}
      {+param.query.id === 6 && (
        <>
          <VisitPage />
        </>
      )}
      {+param.query.id === 7 && (
        <>
          <StudyDate />
        </>
      )}
      {+param.query.id === 8 && (
        <>
          {param.query.pagesection === "presession" && <CostPayPrepending />}
          {param.query.pagesection === "session" && <CostPayRealClassPrepending />}
        </>
      )}
      {+param.query.id === 9 && (
        <>
          {param.query.pagesection === "presession" && <CostPayContainer />}
          {param.query.pagesection === "session" && <CostPayRealContainer />}
        </>
      )}

      {param.query.id === "applied_costpay_complete" && (
        <>
          <LastContainer />
        </>
      )}
    </ApplicationWrap>
  );
};

export default ApplicationContainer;
