import { useRouter } from "next/dist/client/router";
import React from "react";
import CounSelorReplyListContainer from "../../containers/counselor/CounSelorReplyListContainer";
import CounselorStudyCheckContainer from "../../containers/counselor/CounselorStudyCheckContainer";
import CounSelorStudyDateContainer from "../../containers/counselor/CounSelorStudyDateContainer";
import UserManagementContainer from "../../containers/counselor/UserManagementContainer";

const counSelorMenu = () => {
  const param = useRouter();

  return (
    <>
      {param.query.id === "study_date" && <CounSelorStudyDateContainer />}
      {param.query.id === "reply" && <CounSelorReplyListContainer />}
      {param.query.id === "study_check" && <CounselorStudyCheckContainer />}
      {param.query.id === "usermanagement" && <UserManagementContainer />}
    </>
  );
};

export default counSelorMenu;
