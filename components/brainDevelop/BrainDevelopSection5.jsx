import React from "react";
import { SupportSection3Wrap } from "../support/supportStyle";
import Image from "next/image";
import { myLoader } from "../asset/myLoader";
import { BrainDevelopSection5wrap } from "./brainDevelopStyle";
const BrainDevelopSection5 = () => {
  return (
    <BrainDevelopSection5wrap>
      <div className="container">
        <h2>
          <span>똑똑쌤!</span>
          <span>발달자극은 왜 필요한가요</span>
        </h2>
        <div className="emoticon">
          <svg width="29" height="25" viewBox="0 0 29 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_242_2193)">
              <path
                d="M-0.000326842 15.838C-0.0247757 12.5027 0.912035 9.23352 2.69385 6.43615C4.47567 3.63878 7.02405 1.43636 10.0227 0.102295L12.2946 4.53005C10.3582 5.27393 8.68568 6.5939 7.49416 8.31876C6.30265 10.0436 5.64711 12.0937 5.6126 14.2031C5.8565 14.1694 6.10373 14.1694 6.34763 14.2031C7.03901 14.1424 7.73521 14.2269 8.39335 14.4512C9.05148 14.6755 9.65755 15.0349 10.1741 15.5072C10.6907 15.9796 11.1069 16.5548 11.3969 17.1975C11.6869 17.8402 11.8446 18.5367 11.8603 19.244C11.9277 19.9893 11.8379 20.7407 11.5968 21.4478C11.3558 22.1548 10.969 22.801 10.4627 23.3431C9.9563 23.8851 9.34201 24.3104 8.66104 24.5904C7.98008 24.8703 7.2482 24.9983 6.51464 24.966C2.27155 25.0001 -0.000326842 21.5941 -0.000326842 15.838ZM16.7047 15.838C16.6803 12.5027 17.6171 9.23352 19.3989 6.43615C21.1807 3.63878 23.7291 1.43636 26.7278 0.102295L28.9997 4.53005C27.0632 5.27393 25.3907 6.5939 24.1992 8.31876C23.0077 10.0436 22.3522 12.0937 22.3177 14.2031C22.5616 14.1694 22.8088 14.1694 23.0527 14.2031C23.7441 14.1424 24.4403 14.2269 25.0984 14.4512C25.7565 14.6755 26.3626 15.0349 26.8792 15.5072C27.3958 15.9796 27.8119 16.5548 28.1019 17.1975C28.3919 17.8402 28.5496 18.5367 28.5653 19.244C28.6273 19.9881 28.5336 20.7372 28.2905 21.4417C28.0474 22.1463 27.6605 22.7902 27.1553 23.331C26.6501 23.8718 26.038 24.2972 25.3596 24.579C24.6812 24.8609 23.9518 24.9928 23.2197 24.966C18.9766 25.0001 16.7047 21.5941 16.7047 15.838Z"
                fill="#6100FF"
              />
            </g>
            <defs>
              <clipPath id="clip0_242_2193">
                <rect width="29" height="25" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="teacher_text">
          <span>
            영유아 발달단계에 맞는 언어 구사를 통해 부모님과 아이가 원활히 소통하도록 돕는 것은 아이와 부모님의 <span>튼튼한 애착 형성과 사회성의 기초 토대를 만드는 중요한 과정</span>입니다.
          </span>
          <span>2년차 우수 똑똑쌤 인터뷰 중</span>
        </div>
        <div className="img-wrap">
          <Image loader={myLoader} src="/imgs/teacher_img.png" layout="responsive" objectFit="contain" alt="me" width="320" height="320" />
        </div>
      </div>
    </BrainDevelopSection5wrap>
  );
};

export default BrainDevelopSection5;
