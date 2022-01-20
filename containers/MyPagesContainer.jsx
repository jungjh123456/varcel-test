import { useRouter } from "next/router";
import React from "react";
import AppliedContainer from "./myPage/AppliedContainer";
import PayMentContainer from "./myPage/PayMentContainer";
import ProfileContainer from "./myPage/ProfileContainer";
import ReviewContainer from "./myPage/ReviewContainer";
import StudyManagementContainer from "./myPage/StudyManagementContainer";
const MyPagesContainer = () => {
  const param = useRouter();
  console.log(param.query.id);
  return (
    <div>
      {" "}
      {param.query.id === "profile" && <ProfileContainer />}
      {param.query.id === "applied_log" && <AppliedContainer />}
      {param.query.id === "payment_log" && <PayMentContainer />}
      {param.query.id === "study_management" && <StudyManagementContainer />}
      {param.query.id === "review_log" && <ReviewContainer />}
    </div>
  );
};

export default MyPagesContainer;
