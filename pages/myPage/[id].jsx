import { useRouter } from "next/dist/client/router";
import React from "react";
import AppliedContainer from "../../containers/myPage/AppliedContainer";
import PayMentContainer from "../../containers/myPage/PayMentContainer";
import ProfileContainer from "../../containers/myPage/ProfileContainer";
import ReviewContainer from "../../containers/myPage/ReviewContainer";
import StudyManagementContainer from "../../containers/myPage/StudyManagementContainer";

const MyPage = () => {
  const param = useRouter();
  console.log(param.query.id);
  return (
    <>
      {param.query.id === "profile" && <ProfileContainer />}
      {param.query.id === "applied_log" && <AppliedContainer />}
      {param.query.id === "payment_log" && <PayMentContainer />}
      {param.query.id === "study_management" && <StudyManagementContainer />}
      {param.query.id === "review_log" && <ReviewContainer />}
    </>
  );
};

export default MyPage;
