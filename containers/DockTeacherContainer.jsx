import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/asset/Footer";
import MainHeader from "../components/asset/MainHeader";
import DockTeacherSection1 from "../components/dockTeacher/DockTeacherSection1";
import DockTeacherSection2 from "../components/dockTeacher/DockTeacherSection2";
import DockTeacherSection3 from "../components/dockTeacher/DockTeacherSection3";
import DockTeacherSection4 from "../components/dockTeacher/DockTeacherSection4";
import DockTeacherSection5 from "../components/dockTeacher/DockTeacherSection5";
import DockTeacherSection6 from "../components/dockTeacher/DockTeacherSection6";
import DockTeacherSectionHome from "../components/dockTeacher/DockTeacherSectionHome";
import DockTeacherSectionNew5 from "../components/dockTeacher/DockTeacherSectionNew5";
import DockTeacherStory from "../components/dockTeacher/DockTeacherStory";
import { applicationFirst, clearId } from "../redux/reducers/modules/application";
import { DockTeacherWrap } from "./mainStyle";
import { AppliedModalWrap } from "./mainStyle";
import BigButton from "../components/asset/BigButton";

const DockTeacherContainer = () => {
  const dispatch = useDispatch();
  const history = useRouter();

  const {
    auth: { token },
  } = useSelector(({ auth }) => ({ auth }));
  const {
    application: { userId },
  } = useSelector(({ application }) => ({ application }));

  const queryObj = history.query;

  const [appliedCheck, setAppliedCheck] = useState(false);
  useEffect(() => {
    sessionStorage.clear();
  });
  useEffect(() => {
    if (userId) {
      history.push(`/application/1?user_id=${userId}`);
      dispatch(clearId());
    }
  }, [userId]);
  const applicationBtn = (e) => {
    // history.push("/application/1");
    if (!appliedCheck) {
      const result = { step: "/application/1" };
      dispatch(applicationFirst({ result, token }));
      return;
    }
  };

  const goAppliedPage = (e) => {
    history.push("/myPage/applied_log");
    // setAppliedCheck(false);
  };
  const firstPage = (e) => {
    const result = { step: "/application/1" };
    dispatch(applicationFirst({ result, token }));
    setAppliedCheck(false);
  };
  return (
    <>
      <DockTeacherWrap>
        <MainHeader white />
        <DockTeacherSection1 applicationBtn={applicationBtn} />
        <DockTeacherSection2 />
        {/* <DockTeacherSection3 /> */}
        <DockTeacherSection4 />
        <DockTeacherSectionNew5 />
        <DockTeacherStory />
        <DockTeacherSectionHome />
        {/* <DockTeacherSection5 /> */}
        <DockTeacherSection6 />
        <Footer />
      </DockTeacherWrap>
      {appliedCheck && (
        <AppliedModalWrap>
          <div className="container">
            <span>👀</span>
            <h2>작성중이던 신청서가 있습니다.</h2>
            <div className="text-wrap">
              <span>작성중이던 신청서 내역이 있습니다. 이어서 신청</span>
              <span>서를 작성하시겠습니까?</span>
            </div>
            <div className="btn-group">
              <BigButton onClick={firstPage} white>
                처음부터 할게요
              </BigButton>
              <BigButton onClick={goAppliedPage}>네, 작성할게요</BigButton>
            </div>
          </div>
        </AppliedModalWrap>
      )}
    </>
  );
};

export default DockTeacherContainer;
