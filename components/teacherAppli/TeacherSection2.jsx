import React from "react";
import CheckInput from "../asset/CheckInput";
import { TeacherSection2Wrap } from "./TeacherSectionStyle";

const TeacherSection2 = () => {
  return (
    <TeacherSection2Wrap>
      <div className="container">
        <h2>2. 자격 및 경력사항</h2>
        <div className="teacher_info-wrap">
          <h3>전문 발달지도 분야</h3>
          <span>중복체크 가능하며, 인터뷰 이후 종목변경될 수 있습니다.</span>
          <div>
            <CheckInput value="언어" id="language" />
            <CheckInput value="놀이" id="play_ground" />
            <CheckInput value="감각통합" id="emotion" />
          </div>
        </div>
        <div className="teacher_info-wrap">
          <h3>발달장애 아동치료 경험</h3>
          <span>중복체크 가능하며, 인터뷰 시 관련 질문 및 서류검증이 있습니다. </span>
          <div>
            <CheckInput value="자폐 스펙트럼" id="spectrum" />
            <CheckInput value="지적장애" id="intellectual " />
            <CheckInput value="실어증" id="aphasia" />
            <CheckInput value="청각장애" id="deaf" />
            <CheckInput value="난청장애" id="hearing_loss" />
            <CheckInput value="뇌병변 장애" id="brain_lesion" />
            <CheckInput value="아동 ADHD" id="ADHD" />
            <CheckInput value="발달지연" id="developmental " />
            <CheckInput value="난독증" id="dyslexia" />
            <CheckInput value="학습장애" id="learning_error" />
          </div>
        </div>
        <div className="text_field">
          <span>보유 자격증</span>
          <div>
            <textarea placeholder="작성 양식: 자격증명 - 발급기관 - 발급연도" name="" id="" cols="30" rows="10"></textarea>
          </div>
        </div>
        <div className="text_field">
          <span>전체 치료 경력</span>
          <div>
            <textarea placeholder="작성 양식: OO년도 O월 - OO년도 O월 / 근무처 / 채용분야" name="" id="" cols="30" rows="10"></textarea>
          </div>
        </div>
      </div>
    </TeacherSection2Wrap>
  );
};

export default TeacherSection2;
