import React from "react";
import ProgramContainer from "../containers/ProgramContainer";

import MainPcContainer from "../containers/MainPcContainer";
import DockTeacherContainer from "../containers/DockTeacherContainer";
import Loading from "../components/asset/Loading";
import dynamic from "next/dynamic";
const DockTeacher = () => {
  return (
    <>
      <DockTeacherContainer />
      {/* {isPc ? <MainPcContainer /> : <DockTeacherContainer />} */}
    </>
  );
};

export default DockTeacher;
