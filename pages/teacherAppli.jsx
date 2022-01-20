import React from "react";
import { useMediaQuery } from "react-responsive";
import Loading from "../components/asset/Loading";
import MainPcContainer from "../containers/MainPcContainer";
import TeacherAppliContainer from "../containers/TeacherAppliContainer";
import dynamic from "next/dynamic";
const teacherAppli = () => {
  const isPc = useMediaQuery({ query: "(min-width: 850px)" });
  const HeavyComponent = dynamic(import("../containers/TeacherAppliContainer"), {
    loading: () => <TeacherAppliContainer />,
    ssr: true,
  });
  return (
    <>
      <TeacherAppliContainer />
      {/* {isPc ? <MainPcContainer /> : <TeacherAppliContainer />} */}
    </>
  );
};

export default teacherAppli;
