import React from "react";
import { MainSectionNew8Wrap } from "./mainComponentStyle";
import Link from "next/link";
const MainSectionNew8 = () => {
  return (
    <MainSectionNew8Wrap>
      <div className="container">
        <img src="/imgs/Polygon.png" alt="" />
        <h2>
          <span>부모님도 함께하는</span>
          <span>똑똑쌤 홈티칭 수업</span>
        </h2>
        <div className="home_study-list">
          <div>
            <h3>01</h3>
            <div>
              <span>발달수업과 연계한</span>
              <span>발달자극 방법을 알려드려요!</span>
            </div>
          </div>
          <div>
            <h3>02</h3>
            <div>
              <span>발달을 돕기 위한 양육 환경과</span>
              <span>아동지도 노하우를 코칭해요!</span>
            </div>
          </div>
          <div>
            <h3>03</h3>
            <div>
              <span>매주 전달되는 수업노트로</span>
              <span>부모님께 필요한 핵심지식만 콕콕!</span>
            </div>
          </div>
        </div>
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
    </MainSectionNew8Wrap>
  );
};

export default MainSectionNew8;
