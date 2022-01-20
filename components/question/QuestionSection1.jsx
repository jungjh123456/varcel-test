import React from "react";
import QuestionDrop from "../asset/QuestionDrop";
import { QuestionSectionWrap } from "./QuestionStyle";

const QuestionSection1 = () => {
  return (
    <QuestionSectionWrap>
      <div className="container">
        <h1>자주묻는 질문</h1>
        <div className="text-wrap">
          <span>찾으시는 질문에 대한 답변이 없다면</span>
          <span>채널톡 1:1 문의기능을 활용해주세요.</span>
        </div>
        <div className="tab_style">
          <div>
            <input type="radio" id="study" name="tab_quest" />
            <label htmlFor="study">수업안내</label>
            <input type="radio" id="study_tension" name="tab_quest" />
            <label htmlFor="study_tension">체험수업</label>
            <input type="radio" id="refund" name="tab_quest" />
            <label htmlFor="refund">결제/환불</label>
            <input type="radio" id="panerti" name="tab_quest" />
            <label htmlFor="panerti">패널티 정책</label>
          </div>
        </div>
        <div className="question-wrap">
          {" "}
          <QuestionDrop
            id="Q1"
            value="발달재활 관련 학과 졸업이 필수이며, 언어, 놀이, 감각 등 발달재활 치료에 관련된 공인 자격증을 보유해야합니다. 또한 발달보육 및 치료 관련 기관에서 3년 이상 경력을 쌓아야 합니다."
            name="Q. 지원자격은 어떻게 되나요?"
          />
          <QuestionDrop
            value="발달재활 관련 학과 졸업이 필수이며, 언어, 놀이, 감각 등 발달재활 치료에 관련된 공인 자격증을 보유해야합니다. 또한 발달보육 및 치료 관련 기관에서 3년 이상 경력을 쌓아야 합니다."
            id="Q2"
            name="Q. 차가 없는데 수업이 가능할까요?"
          />
          <QuestionDrop
            value="발달재활 관련 학과 졸업이 필수이며, 언어, 놀이, 감각 등 발달재활 치료에 관련된 공인 자격증을 보유해야합니다. 또한 발달보육 및 치료 관련 기관에서 3년 이상 경력을 쌓아야 합니다."
            id="Q3"
            name="Q. 센터일정으로 저녁수업만 가능한데, 활동이 가능할까요?"
          />
          <QuestionDrop
            value="발달재활 관련 학과 졸업이 필수이며, 언어, 놀이, 감각 등 발달재활 치료에 관련된 공인 자격증을 보유해야합니다. 또한 발달보육 및 치료 관련 기관에서 3년 이상 경력을 쌓아야 합니다."
            id="Q4"
            name="Q. 센터일정으로 저녁수업만 가능한데, 활동이 가능할까요?"
          />
          <QuestionDrop
            value="발달재활 관련 학과 졸업이 필수이며, 언어, 놀이, 감각 등 발달재활 치료에 관련된 공인 자격증을 보유해야합니다. 또한 발달보육 및 치료 관련 기관에서 3년 이상 경력을 쌓아야 합니다."
            id="Q5"
            name="Q. 센터일정으로 저녁수업만 가능한데, 활동이 가능할까요?"
          />
          <QuestionDrop
            value="발달재활 관련 학과 졸업이 필수이며, 언어, 놀이, 감각 등 발달재활 치료에 관련된 공인 자격증을 보유해야합니다. 또한 발달보육 및 치료 관련 기관에서 3년 이상 경력을 쌓아야 합니다."
            id="Q6"
            name="Q. 센터일정으로 저녁수업만 가능한데, 활동이 가능할까요?"
          />
        </div>
      </div>
    </QuestionSectionWrap>
  );
};

export default QuestionSection1;
