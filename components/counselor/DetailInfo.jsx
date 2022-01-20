import React from "react";
import CheckIcon from "../asset/CheckIcon";
import { DetailInfoWrap } from "./CounselorStyle";

const DetailInfo = () => {
  return (
    <DetailInfoWrap>
      <div className="user_info-wrap">
        <h2>
          <span>수업권 정보</span>
          <span>📌</span>
        </h2>
        <div>
          <div>
            <span>수업유형</span>
            <span>첫 체험수업</span>
          </div>
          <div>
            <span>프로그램 유형</span>
            <span>영유아 발달자극 프로그램</span>
          </div>
          <div>
            <span>세부 프로그램</span>
            <span>언어 발달자극 프로그램</span>
          </div>
          <div>
            <span>주당 수업 횟수</span>
            <span>1회</span>
          </div>
          <div>
            <span>수업 일정</span>
            <span>2021.12.31 (월) 10:30</span>
          </div>
          <div>
            <span>생년월일</span>
            <span>2020.10.21</span>
          </div>
          <div>
            <span>성별</span>
            <span>남아</span>
          </div>
        </div>
      </div>
      <div className="user_info-wrap">
        <h2>
          <span>회원정보</span>
          <span>👈🏼</span>
        </h2>
        <div>
          <div>
            <span>회원</span>
            <span>김소연</span>
          </div>
          <div>
            <span>아동이름(첫째)</span>
            <span>이하늘</span>
          </div>
          <div>
            <span>생년월일</span>
            <span>2020.10.21</span>
          </div>
          <div>
            <span>성별</span>
            <span>남아</span>
          </div>
          <div>
            <span>아동이름 (둘째)</span>
            <span>이효원</span>
          </div>
          <div>
            <span>생년월일</span>
            <span>2020.10.21</span>
          </div>
          <div>
            <span>성별</span>
            <span>남아</span>
          </div>
        </div>
      </div>
      <div className="detail_info-wrap">
        <h2>
          <span>상세정보</span>
          <span>👶🏻</span>
        </h2>
        <div>
          <div>
            <span>어린이집 등원여부</span>
            <span>등원중</span>
          </div>
          <div>
            <span>센터 및 병원치료경험</span>
            <span>있음</span>
          </div>
        </div>
      </div>
      <div className="address_info-wrap">
        <h2>
          <span>주소</span>
          <span>📍</span>
        </h2>
        <div>
          <div>
            <span>서울 마포구 마포대로 173-15</span>
            <span>(공덕동, 래미안 공덕5차)502동 1208호</span>
          </div>

          <h2>
            <span>방문 시 참고사항</span>
            <span>❗️</span>
          </h2>
          <div className="visit_list-wrap">
            <div className="visit_list">
              <CheckIcon />
              <span>자유롭게 출입 및 주차 가능</span>
            </div>
            <div className="visit_list">
              <CheckIcon />
              <span>애완동물 있음</span>
            </div>
          </div>
        </div>
      </div>
      <div className="address_info-wrap">
        <h2>
          <span>홈티칭 수업 신청계기</span>
          <span>🔖</span>
        </h2>
        <div>
          <div className="visit_list-wrap">
            <div className="visit_list">
              <CheckIcon />
              <span>언어치료가 필요하다고 생각하거나 권고받음</span>
            </div>
            <div className="visit_list">
              <CheckIcon />
              <span>언어폭발기 자녀의 언어발달 촉진을 위해</span>
            </div>
            <div className="visit_list">
              <CheckIcon />
              <span>부모가 할 수 있는 언어자극 노하우 학습을 위해</span>
            </div>
            <div className="visit_list">
              <CheckIcon />
              <span>아이에게 다양한 교육을 제공하기 위해</span>
            </div>
          </div>
        </div>
      </div>
      <div className="children_status">
        <h2>
          <span>아동 발달 상태</span>
          <span>✍🏽</span>
        </h2>
        <div>
          <span>
            아동은 호명반응 및 상호작용이 잘 이루어지며 간단한 지시에 행동으로 표현하는 모습 보였습니다 현재 아동은 의미있는 언어 표현이 극히 적은 편으로 어휘폭발기 시기임에도 불구하고 표현하는 어휘의
            수가 거의 없었습니다. 요구및 거부하기 등 자신의 의사를 행동 및 울음으로 표현하였으며, 수업중 관찰된 표현어휘갯수는 10개 미만정도로 보였다는 점에서 지속적인 자극이 필요해보입니다.
          </span>
        </div>
      </div>
      <div className="children_status">
        <h2>
          <span>아동이 좋아하는 놀이 / 장난감</span>
          <span>🎁</span>
        </h2>
        <div>
          <span>
            아동은 호명반응 및 상호작용이 잘 이루어지며 간단한 지시에 행동으로 표현하는 모습 보였습니다 현재 아동은 의미있는 언어 표현이 극히 적은 편으로 어휘폭발기 시기임에도 불구하고 표현하는 어휘의
            수가 거의 없었습니다. 요구및 거부하기 등 자신의 의사를 행동 및 울음으로 표현하였으며, 수업중 관찰된 표현어휘갯수는 10개 미만정도로 보였다는 점에서 지속적인 자극이 필요해보입니다.
          </span>
        </div>
      </div>
    </DetailInfoWrap>
  );
};

export default DetailInfo;
