import React from "react";
import CounSelorReplyListContainer from "./counselor/CounSelorReplyListContainer";
import CounselorStudyCheckContainer from "./counselor/CounselorStudyCheckContainer";
import CounSelorStudyDateContainer from "./counselor/CounSelorStudyDateContainer";
import UserManagementContainer from "./counselor/UserManagementContainer";

const CounSelorContainer = () => {
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

export default CounSelorContainer;
