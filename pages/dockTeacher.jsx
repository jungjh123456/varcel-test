import React from "react";
import ProgramContainer from "../containers/ProgramContainer";
import { useMediaQuery } from "react-responsive";
import MainPcContainer from "../containers/MainPcContainer";
import DockTeacherContainer from "../containers/DockTeacherContainer";
import Loading from "../components/asset/Loading";
import dynamic from "next/dynamic";
const DockTeacher = () => {
  const isPc = useMediaQuery({ query: "(min-width: 850px)" });
  const HeavyComponent = dynamic(import("../containers/DockTeacherContainer"), {
    loading: () => <DockTeacherContainer />,
    ssr: true,
  });
  return (
    <>
      <DockTeacherContainer />
      {/* {isPc ? <MainPcContainer /> : <DockTeacherContainer />} */}
    </>
  );
};

export default DockTeacher;
