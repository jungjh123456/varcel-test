import React from "react";
import { MainSectionNew9Wrap } from "./mainComponentStyle";
import SectionSlick from "./SectionSlick";
import StodySlick from "./StodySlick";
import Link from "next/link";
const MainSectionNew9 = () => {
  return (
    <MainSectionNew9Wrap>
      <div className="container">
        <h1>
          <span>똑똑쌤</span>스토리
        </h1>
        <div className="children_wrap">
          <span>우리아이의 발달교육과 치료에 관련된</span>
          <span>유익한 정보를 찾아보세요!</span>
        </div>
        {/* <div className="slick_list"> */}
        <div className="slick_list">
          <StodySlick />
        </div>
        {/* </div> */}
        <div className="go_text">
          <Link href="/homeGo">
            <a>
              <span>똑똑쌤 홈티칭 더 알아보기</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3L10.4138 4.58625L16.6912 10.875H3V13.125H16.6912L10.4138 19.4137L12 21L21 12L12 3Z" fill="black" />
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </MainSectionNew9Wrap>
  );
};

export default MainSectionNew9;
