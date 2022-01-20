import React from "react";
import { StudyPaySection2Wrap } from "./studyPayStyle";
import Image from "next/image";
import { myLoader } from "../asset/myLoader";
import RightIcon from "../asset/RightIcon";
import { useRouter } from "next/dist/client/router";
const StudyPaySection2 = () => {
  const history = useRouter();
  const goCostPay = (e) => {
    history.push("/application/8?pagesection=session");
  };
  return (
    <StudyPaySection2Wrap>
      <div className="container">
        <div className="triangle"></div>
        <div className="study_list">
          <h2>똑똑쌤 수업료</h2>
          <div>
            {[1, 2, 3].map((item, i) => {
              return (
                <div onClick={goCostPay} key={i}>
                  <div>
                    <span>7% 할인 혜택</span>
                    <span>2개월 (8회권)</span>
                    <span>
                      299,000원<span>/월</span>
                    </span>
                    <span>x2개월 = 총 799,000원</span>
                  </div>
                  <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 3L10.4138 4.58625L16.6912 10.875H3V13.125H16.6912L10.4138 19.4137L12 21L21 12L12 3Z" fill="black" />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="study_list">
          <h2>프리미엄 똑똑쌤 수업료</h2>
          <div>
            {[1, 2, 3].map((item, i) => {
              return (
                <div onClick={goCostPay} key={i}>
                  <div>
                    <span>7% 할인 혜택</span>
                    <span>2개월 (8회권)</span>
                    <span>
                      299,000원<span>/월</span>
                    </span>
                    <span>x2개월 = 총 799,000원</span>
                  </div>
                  <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 3L10.4138 4.58625L16.6912 10.875H3V13.125H16.6912L10.4138 19.4137L12 21L21 12L12 3Z" fill="black" />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </StudyPaySection2Wrap>
  );
};

export default StudyPaySection2;
