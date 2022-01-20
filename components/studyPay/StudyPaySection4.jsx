import React from "react";
import Image from "next/image";
import Link from "next/dist/client/link";
import { MainSection4Wrap } from "../main/mainComponentStyle";
import { myLoader } from "../asset/myLoader";

const StudyPaySection4 = () => {
  return (
    <MainSection4Wrap>
      <div className="container">
        <div className="reason-text">
          <span>프로그램을 신청하면</span>
          <span>어떻게 진행이 되나요?</span>
        </div>
        <div className="img-wrap">
          <Link href="/braindevelop">
            <a>
              <h1>영유아 발달자극 프로그램</h1>
              <span>영유아 언어발달을 촉진시키는 똑똑쌤 홈티칭</span>
              <div className="go_text">
                <span>자세히 보기</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3L10.4138 4.58625L16.6912 10.875H3V13.125H16.6912L10.4138 19.4137L12 21L21 12L12 3Z" fill="black" />
                </svg>
              </div>
              <Image loader={myLoader} src="/imgs/manBaby.png" layout="responsive" objectFit="contain" alt="me" width="320" height="180" />
            </a>
          </Link>
          <Link href="/homeGo">
            <a>
              <h1>영유아 발달치료 프로그램</h1>
              <span>똑똑 언어쌤의 언어치료 홈티칭 수업</span>
              <div className="go_text">
                <span>자세히 보기</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3L10.4138 4.58625L16.6912 10.875H3V13.125H16.6912L10.4138 19.4137L12 21L21 12L12 3Z" fill="black" />
                </svg>
              </div>
              <Image loader={myLoader} src="/imgs/girImg.png" layout="responsive" objectFit="contain" alt="me" width="320" height="180" />
            </a>
          </Link>
        </div>
      </div>
    </MainSection4Wrap>
  );
};

export default StudyPaySection4;
