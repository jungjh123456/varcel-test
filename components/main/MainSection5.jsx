import React, { useRef, useState } from "react";
import Image from "next/image";
import { myLoader } from "../asset/myLoader";
import { MainSection5Wrap } from "./mainComponentStyle";
import SectionSlick from "./SectionSlick";
import Link from "next/dist/client/link";
const MainSection5 = () => {
  return (
    <MainSection5Wrap>
      <div className="container">
        <h2>부모님들의 믿을 수 있는 발달 파트너</h2>
        <div className="reason-text">
          <span>소중한 우리아이 성장을 위한</span>
          <span>
            <span>똑똑</span>쌤을 만나보세요!
          </span>
        </div>
        <div className="slider">
          <div>
            <div>
              <div className="img-wrap">
                <Image loader={myLoader} src="/imgs/sliderimg.png" layout="responsive" objectFit="contain" alt="me" width="264" height="254" />
              </div>
              <div className="text-title">
                <span>강명실 치료사</span>
                <span>12년차 언어치료사</span>
                <span>#아동발달센터 #언어재활 #아동전문</span>
              </div>
            </div>
            <div>
              <div className="img-wrap">
                <Image loader={myLoader} src="/imgs/sliderimg.png" layout="responsive" objectFit="contain" alt="me" width="264" height="254" />
              </div>
              <div className="text-title">
                <span>강명실 치료사</span>
                <span>12년차 언어치료사</span>
                <span>#아동발달센터 #언어재활 #아동전문</span>
              </div>
            </div>
            <div>
              <div className="img-wrap">
                <Image loader={myLoader} src="/imgs/sliderimg.png" layout="responsive" objectFit="contain" alt="me" width="264" height="254" />
              </div>
              <div className="text-title">
                <span>강명실 치료사</span>
                <span>12년차 언어치료사</span>
                <span>#아동발달센터 #언어재활 #아동전문</span>
              </div>
            </div>
          </div>
        </div>
        <div className="go_text">
          <Link href="/homeGo">
            <a>
              <span>자세히 보기</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3L10.4138 4.58625L16.6912 10.875H3V13.125H16.6912L10.4138 19.4137L12 21L21 12L12 3Z" fill="black" />
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </MainSection5Wrap>
  );
};

export default MainSection5;
