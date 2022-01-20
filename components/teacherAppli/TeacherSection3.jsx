import React from "react";
import BigButton from "../asset/BigButton";
import CheckInput from "../asset/CheckInput";
import { TeacherSection3Wrap } from "./TeacherSectionStyle";

const TeacherSection3 = () => {
  return (
    <TeacherSection3Wrap>
      <div className="container">
        <h2>3. 활동 정보 입력</h2>
        <div className="text_field">
          <span>활동 가능 지역 (구 단위)</span>
          <div>
            <textarea placeholder="작성 양식:서울시 송파구, 강동구 / 경기도 하남시" name="" id="" cols="30" rows="10"></textarea>
          </div>
        </div>
        <div className="text_field">
          <span>수업 가능 시간대</span>
          <div>
            <textarea placeholder="작성 양식:월요일, 수요일, 금요일 오후 1시 - 6시 / 토요일 오전 9시 - 오후2시" name="" id="" cols="30" rows="10"></textarea>
          </div>
        </div>
        <div className="car_check">
          <span>자차 이용 여부</span>
          <div>
            <input type="radio" id="car_ok" name="car" />
            <label htmlFor="car_ok">가능</label>
            <input type="radio" id="car_no" name="car" />
            <label htmlFor="car_no">불가능</label>
          </div>
        </div>
        <div className="teacher_info-wrap">
          <h3>똑똑쌤을 어떻게 알게 되셨나요?</h3>

          <div>
            <CheckInput value="페이스북" id="facebook" />
            <CheckInput value="인스타그램" id="instagram" />
            <CheckInput value="블로그" id="blog" />
            <CheckInput value="직접 검색" id="search" />
            <CheckInput value="아이소리몰" id="children_mall" />
            <CheckInput value="지인 소개" id="Introduce" />
          </div>
        </div>
        <div className="btn-group">
          <BigButton>제출하기</BigButton>
        </div>
      </div>
    </TeacherSection3Wrap>
  );
};

export default TeacherSection3;
