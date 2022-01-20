import { useRouter } from "next/dist/client/router";
import React from "react";
import AppliHeader from "../../components/asset/AppliHeader";
import MainHeader from "../../components/asset/MainHeader";
import { PaymentInfocontainerWrap } from "./myPageStyle";
import SessionStudyPayInfo from "./SessionStudyPayInfo";
import StudyPayInfo from "./StudyPayInfo";

const PaymentInfoContainer = () => {
  const history = useRouter();

  return (
    <>
      {history.query?.program === "presession" && <StudyPayInfo />}
      {history.query?.program === "session" && <SessionStudyPayInfo />}
    </>
  );
};

export default PaymentInfoContainer;
