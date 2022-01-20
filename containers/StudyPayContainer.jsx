import React, { useCallback } from "react";
import { useState } from "react";
import Footer from "../components/asset/Footer";
import MainHeader from "../components/asset/MainHeader";
import StudyPaySection1 from "../components/studyPay/StudyPaySection1";
import StudyPaySection2 from "../components/studyPay/StudyPaySection2";
import StudyPaySection3 from "../components/studyPay/StudyPaySection3";
import StudyPaySection4 from "../components/studyPay/StudyPaySection4";
import StudyPaySection5 from "../components/studyPay/StudyPaySection5";
import StudyPaySection6 from "../components/studyPay/StudyPaySection6";
import { StudyPayContainerWrap } from "./mainStyle";

const StudyPayContainer = () => {
  const [checkProgram, setCheckProgram] = useState("아동 발달치료 프로그램");
  const changeList = useCallback(
    (e) => {
      setCheckProgram(e.target.dataset.set);
    },
    [checkProgram]
  );
  console.log(checkProgram);
  return (
    <StudyPayContainerWrap>
      <MainHeader />
      <StudyPaySection1 checkProgram={checkProgram} changeList={changeList} />
      <StudyPaySection2 />
      <StudyPaySection3 />
      <StudyPaySection4 />
      <StudyPaySection5 />
      <StudyPaySection6 />
      <Footer />
    </StudyPayContainerWrap>
  );
};

export default StudyPayContainer;
