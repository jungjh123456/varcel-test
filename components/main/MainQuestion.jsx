import React from "react";
import QuestionDrop from "../asset/QuestionDrop";
import { MainQuestionWrap } from "./mainComponentStyle";

const MainQuestion = () => {
  return (
    <MainQuestionWrap>
      <div className="container">
        <h2>자주묻는 질문</h2>
        <div className="question-wrap">
          {" "}
          <QuestionDrop
            id="Q1"
            value="발달재활 관련 학과 졸업이 필수이며, 언어, 놀이, 감각 등 발달재활 치료에 관련된 공인 자격증을 보유해야합니다. 또한 발달보육 및 치료 관련 기관에서 3년 이상 경력을 쌓아야 합니다."
            name="Q. 지원자격은 어떻게 되나요?"
            white
          />
          <QuestionDrop
            value="발달재활 관련 학과 졸업이 필수이며, 언어, 놀이, 감각 등 발달재활 치료에 관련된 공인 자격증을 보유해야합니다. 또한 발달보육 및 치료 관련 기관에서 3년 이상 경력을 쌓아야 합니다."
            id="Q2"
            name="Q. 차가 없는데 수업이 가능할까요?"
            white
          />
          <QuestionDrop
            value="발달재활 관련 학과 졸업이 필수이며, 언어, 놀이, 감각 등 발달재활 치료에 관련된 공인 자격증을 보유해야합니다. 또한 발달보육 및 치료 관련 기관에서 3년 이상 경력을 쌓아야 합니다."
            id="Q3"
            name="Q. 센터일정으로 저녁수업만 가능한데, 활동이 가능할까요?"
            white
          />
          <QuestionDrop
            value="발달재활 관련 학과 졸업이 필수이며, 언어, 놀이, 감각 등 발달재활 치료에 관련된 공인 자격증을 보유해야합니다. 또한 발달보육 및 치료 관련 기관에서 3년 이상 경력을 쌓아야 합니다."
            id="Q4"
            name="Q. 센터일정으로 저녁수업만 가능한데, 활동이 가능할까요?"
            white
          />
          <QuestionDrop
            value="발달재활 관련 학과 졸업이 필수이며, 언어, 놀이, 감각 등 발달재활 치료에 관련된 공인 자격증을 보유해야합니다. 또한 발달보육 및 치료 관련 기관에서 3년 이상 경력을 쌓아야 합니다."
            id="Q5"
            name="Q. 센터일정으로 저녁수업만 가능한데, 활동이 가능할까요?"
            white
          />
          <QuestionDrop
            value="발달재활 관련 학과 졸업이 필수이며, 언어, 놀이, 감각 등 발달재활 치료에 관련된 공인 자격증을 보유해야합니다. 또한 발달보육 및 치료 관련 기관에서 3년 이상 경력을 쌓아야 합니다."
            id="Q6"
            name="Q. 센터일정으로 저녁수업만 가능한데, 활동이 가능할까요?"
            white
          />
        </div>
      </div>
    </MainQuestionWrap>
  );
};

export default MainQuestion;
