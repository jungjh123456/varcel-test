import React from "react";

import { useMediaQuery } from "react-responsive";
import Loading from "../components/asset/Loading";
import dynamic from "next/dynamic";
import MainPcContainer from "../containers/MainPcContainer";
import ProgramContainer from "../containers/ProgramContainer";
const program = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 850px)" });
  const isPc = useMediaQuery({ query: "(min-width: 850px)" });
  const HeavyComponent = dynamic(import("../containers/ProgramContainer"), {
    loading: () => <ProgramContainer />,
    ssr: true,
  });
  return (
    <>
      <ProgramContainer />
      {/* {isPc ? <MainPcContainer /> : <ProgramContainer />} */}
      {/* {isPc && <MainPcContainer />} */}
    </>
  );
};

export default program;
