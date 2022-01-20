import { useRouter } from "next/dist/client/router";
import React from "react";
import Footer from "../components/asset/Footer";
import MainHeader from "../components/asset/MainHeader";
import ProgramSection1 from "../components/program/ProgramSection1";
import SupportSection1 from "../components/support/SupportSection1";
import SupportSection2 from "../components/support/SupportSection2";
import SupportSection3 from "../components/support/SupportSection3";
import SupportSection4 from "../components/support/SupportSection4";
import SupportSection5 from "../components/support/SupportSection5";
import SupportSection6 from "../components/support/SupportSection6";
import SupportSection7 from "../components/support/SupportSection7";
import SupportSection8 from "../components/support/SupportSection8";
import { SupportrWrap } from "./mainStyle";

const CounselorSupportContainer = () => {
  const history = useRouter();
  const goAppliedTeacher = () => {
    history.push("/teacherAppli");
  };
  return (
    <SupportrWrap>
      {" "}
      <MainHeader />
      <SupportSection1 goAppliedTeacher={goAppliedTeacher} />
      <SupportSection2 />
      <SupportSection3 />
      <SupportSection4 />
      <SupportSection6 />
      <SupportSection5 />
      <SupportSection7 goAppliedTeacher={goAppliedTeacher} />
      <SupportSection8 />
      <Footer />
    </SupportrWrap>
  );
};

export default CounselorSupportContainer;
