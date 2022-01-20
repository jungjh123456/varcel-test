import React from "react";
import { useMediaQuery } from "react-responsive";
import MainPcContainer from "../containers/MainPcContainer";
import DockTeacherContainer from "../containers/DockTeacherContainer";
import CounselorSupportContainer from "../containers/CounselorSupportContainer";
import Loading from "../components/asset/Loading";
import dynamic from "next/dynamic";
const counselorsupport = () => {
  const isPc = useMediaQuery({ query: "(min-width: 850px)" });
  const HeavyComponent = dynamic(import("../containers/CounselorSupportContainer"), {
    loading: () => <CounselorSupportContainer />,
    ssr: true,
  });
  return (
    <>
      <CounselorSupportContainer />
      {/* {isPc ? <MainPcContainer /> : <CounselorSupportContainer />} */}
    </>
  );
};

export default counselorsupport;
