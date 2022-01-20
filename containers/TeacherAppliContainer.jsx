import React from "react";
import AppliHeader from "../components/asset/AppliHeader";
import Footer from "../components/asset/Footer";
import MainHeader from "../components/asset/MainHeader";
import TeacherSection1 from "../components/teacherAppli/TeacherSection1";
import TeacherSection2 from "../components/teacherAppli/TeacherSection2";
import TeacherSection3 from "../components/teacherAppli/TeacherSection3";
import { TeacherAppliWrap } from "./mainStyle";

const TeacherAppliContainer = () => {
  return (
    <TeacherAppliWrap>
      <MainHeader white applied />
      {/* <AppliHeader white applied /> */}
      <TeacherSection1 />
      <TeacherSection2 />
      <TeacherSection3 />
      <Footer />
    </TeacherAppliWrap>
  );
};

export default TeacherAppliContainer;
