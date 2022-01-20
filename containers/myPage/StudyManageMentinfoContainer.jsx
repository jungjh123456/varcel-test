import { useRouter } from "next/dist/client/router";
import React from "react";
import AppliHeader from "../../components/asset/AppliHeader";
import MainHeader from "../../components/asset/MainHeader";
import RightIcon from "../../components/asset/RightIcon";
import { StudyManageMentinfoContainerWrap } from "./myPageStyle";
import StudyClass from "./StudyClass";
import StudyRealclass from "./StudyRealclass";

const StudyManageMentinfoContainer = () => {
  const history = useRouter();
  return (
    <>
      {history.query.program === "realClass" && <StudyRealclass />}
      {history.query.program === "classDetail" && <StudyClass />}
    </>
  );
};

export default StudyManageMentinfoContainer;
