import React from "react";
import Footer from "../components/asset/Footer";
import MainHeader from "../components/asset/MainHeader";
import QuestionSection1 from "../components/question/QuestionSection1";
import { QuestionWrap } from "./mainStyle";

const QuestionContainer = () => {
  return (
    <QuestionWrap>
      <MainHeader white />
      <QuestionSection1 />
      <Footer />
    </QuestionWrap>
  );
};

export default QuestionContainer;
