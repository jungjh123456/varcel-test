import { useRouter } from "next/dist/client/router";
import React from "react";
import ApplicationHeader from "../../components/asset/ApplicationHeader";
import CheckTable from "../../components/asset/CheckTable";
import CounselorCOD from "../../components/counselor/CounselorCOD";
import CounSelorDateChange from "../../components/counselor/CounSelorDateChange";
import CounSelorLocation from "../../components/counselor/CounSelorLocation";
import { CounSelorStudyDateContainerWrap } from "./counselorStyle";

const CounSelorStudyDateContainer = () => {
  const param = useRouter();

  return (
    <>
      {+param.query.step === 1 && <CounSelorDateChange />}
      {+param.query.step === 2 && <CounSelorLocation />}
      {+param.query.step === 3 && <CounselorCOD />}
    </>
  );
};

export default CounSelorStudyDateContainer;
