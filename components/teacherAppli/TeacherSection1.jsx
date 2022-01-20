import React from "react";
import { TeacherSection1Wrap } from "./TeacherSectionStyle";

const TeacherSection1 = () => {
  return (
    <TeacherSection1Wrap>
      <div className="container">
        <h1>똑똑쌤 지원서</h1>
        <div className="hello-teacher-wrap">
          <span>안녕하세요. 발달 치료사 선생님!</span>
          <span>똑똑쌤을 찾아주셔서 감사합니다.</span>
        </div>
        <div className="info-text">
          <h2>1. 기본정보</h2>
          <div>
            <span>이름</span>
            <div>
              <input type="text" placeholder="본명을 작성해주세요." />
            </div>
          </div>
          <div className="check_gender">
            <span>성별</span>
            <div>
              <input type="radio" id="women" name="gender" />
              <label htmlFor="women">여성</label>
              <input type="radio" id="men" name="gender" />
              <label htmlFor="men">남성</label>
            </div>
          </div>
          <div className="cellphone">
            <span>연락처</span>
            <div>
              <input type="text" placeholder="01023682072" />
            </div>
          </div>
          <div className="address">
            <span>거주지 (구 단위)</span>
            <div>
              <input type="text" placeholder="서울 강남구" />
            </div>
          </div>
        </div>
      </div>
    </TeacherSection1Wrap>
  );
};

export default TeacherSection1;
