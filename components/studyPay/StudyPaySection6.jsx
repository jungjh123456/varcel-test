import Link from "next/link";
import React from "react";
import { StudyPaySection6Wrap } from "./studyPayStyle";

const StudyPaySection6 = () => {
  return (
    <StudyPaySection6Wrap>
      <div className="container">
        <h2>
          <span>자세한 유의사항과 환불규정을</span>
          <span>살펴보세요.</span>
        </h2>
        <div className="a_list">
          <Link href="/">
            <a>
              {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 21H23L12 2L1 21ZM13 18H11V16H13V18ZM13 14H11V10H13V14Z" fill="#FFC845" />
            </svg> */}
              <span>유의사항</span>
            </a>
          </Link>{" "}
          <Link href="/">
            <a>
              {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.5 2C6.81 2 3 5.81 3 10.5C3 15.19 6.81 19 11.5 19H12V22C16.86 19.66 20 15 20 10.5C20 5.81 16.19 2 11.5 2ZM12.5 16.5H10.5V14.5H12.5V16.5ZM12.5 13H10.5C10.5 9.75 13.5 10 13.5 8C13.5 6.9 12.6 6 11.5 6C10.4 6 9.5 6.9 9.5 8H7.5C7.5 5.79 9.29 4 11.5 4C13.71 4 15.5 5.79 15.5 8C15.5 10.5 12.5 10.75 12.5 13Z"
                fill="#6100FF"
              />
            </svg> */}
              <span>환불규정</span>
            </a>
          </Link>
        </div>
      </div>
    </StudyPaySection6Wrap>
  );
};

export default StudyPaySection6;
