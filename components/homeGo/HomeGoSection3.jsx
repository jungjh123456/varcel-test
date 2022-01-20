import React, { useState } from "react";
import { HomeGoSection3Wrap } from "./homeGoStyle";
import Image from "next/image";
import { myLoader } from "../asset/myLoader";
import { MainSection3Wrap } from "../main/mainComponentStyle";
import HackwiIcon from "../asset/HackwiIcon";
import Link from "next/link";
import { useEffect } from "react";
import { useRef } from "react";
const HomeGoSection3 = () => {
  const obserberRef = useRef();
  const [obState, setObState] = useState(false);
  useEffect(() => {
    const options = {
      root: null, // 이것은 view 포트이다.
      threshold: 0, // 임계값이라고 한다.
      rootMargin: "-150px", // css 여백을 설정하면
    };
    // 1관찰자를 만들자
    // 교차로 관찰자. .? 콜백함수가 필요하고 옵션이 필요하다,

    const observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          // entry.target.classList.remove("inverse");
          return;
        }
        setObState(entry.target);
        // entry.target.classList.add("inverse");
      });
    }, options);
    observer.observe(obserberRef.current);
  }, []);
  return (
    <MainSection3Wrap ref={obserberRef}>
      <div className="container">
        <span className={obState ? "active" : ""}>2021.12 집계 기준</span>
        <h2 className={obState ? "active" : ""}>
          <span>
            <span>총 2,312회 수업</span>으로 검증된
          </span>
          <span>똑똑쌤이 찾아가고 있어요.</span>
        </h2>
        <div className={obState ? "hakwi_wrap active" : "hakwi_wrap"}>
          <div>
            <span>
              <HackwiIcon />
            </span>
            <div>
              <span>발달재활</span>
              <span>학위취득</span>
            </div>
          </div>
          <div className="line"></div>
          <div>
            <span>
              <HackwiIcon />
            </span>
            <div>
              <span>실무경력</span>
              <span>2년 이상</span>
            </div>
          </div>
          <div className="line"></div>
          <div>
            <span>
              <HackwiIcon />
            </span>
            <div>
              <span>릴리프맘</span>
              <span>운영교육 이수</span>
            </div>
          </div>
        </div>
        {/* twoMenimg */}
        <div className={obState ? "img-wrap active" : "img-wrap"}>
          <Image loader={myLoader} src="/imgs/twoMenimg.png" layout="responsive" alt="me" width="360" height="240" />
        </div>
        <div className={obState ? "btn-group active" : "btn-group"}>
          <Link href="/">
            <a>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21 5V19H23V5H21ZM17 19H19V5H17V19ZM14 5H2C1.45 5 1 5.45 1 6V18C1 18.55 1.45 19 2 19H14C14.55 19 15 18.55 15 18V6C15 5.45 14.55 5 14 5ZM8 7.75C9.24 7.75 10.25 8.76 10.25 10C10.25 11.24 9.24 12.25 8 12.25C6.76 12.25 5.75 11.24 5.75 10C5.75 8.76 6.76 7.75 8 7.75ZM12.5 17H3.5V16.25C3.5 14.75 6.5 14 8 14C9.5 14 12.5 14.75 12.5 16.25V17Z"
                  fill="#6100FF"
                />
              </svg>
              <span>똑똑쌤은 어떻게 선발되나요?</span>
            </a>
          </Link>
          <Link href="/">
            <a>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.5 2C6.81 2 3 5.81 3 10.5C3 15.19 6.81 19 11.5 19H12V22C16.86 19.66 20 15 20 10.5C20 5.81 16.19 2 11.5 2ZM12.5 16.5H10.5V14.5H12.5V16.5ZM12.5 13H10.5C10.5 9.75 13.5 10 13.5 8C13.5 6.9 12.6 6 11.5 6C10.4 6 9.5 6.9 9.5 8H7.5C7.5 5.79 9.29 4 11.5 4C13.71 4 15.5 5.79 15.5 8C15.5 10.5 12.5 10.75 12.5 13Z"
                  fill="#6100FF"
                />
              </svg>

              <span>홈티칭, 어떤 점이 좋나요?</span>
            </a>
          </Link>
        </div>
      </div>
    </MainSection3Wrap>
  );
};

export default HomeGoSection3;
