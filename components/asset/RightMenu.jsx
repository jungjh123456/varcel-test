import React, { useEffect, useRef, useState } from "react";
import LeftMenuHeader from "./LeftMenuHeader";
import MainHeader from "./MainHeader";
import { RightMenuWrap } from "./rightmenuStyle";
import Link from "next/dist/client/link";
import { useRouter } from "next/dist/client/router";
const RightMenu = ({ menuToggle, closeBtn, checkBg, mainBarRef, menuActive, mainRef }) => {
  const [animation, setAnimation] = useState(false);
  const [time, setTime] = useState(false);
  const sectionRef = useRef();
  const history = useRouter();
  // useEffect(() => {
  //   if (activeMenu) {
  //     setTime(true);
  //     setTimeout(() => {
  //       sectionRef.current.style.display = "block";
  //     }, 0);
  //     setTimeout(() => {
  //       setAnimation(true);
  //     }, 500);
  //   }
  //   if (!activeMenu) {
  //     setAnimation(false);
  //     setTimeout(() => {
  //       sectionRef.current.style.display = "none";
  //     }, 0);
  //     setTimeout(() => {
  //       setTime(false);
  //     }, 500);
  //   }
  // }, [activeMenu]);
  console.log(history);
  return (
    <RightMenuWrap ref={mainRef} checkBg={checkBg} time={time} menuToggle={menuToggle}>
      <div ref={mainBarRef} className={menuToggle ? "container" : "container"}>
        <LeftMenuHeader closeBtn={menuActive} />
        <div className="menu_list">
          <button>회원가입 / 로그인</button>
          <button>체험신청</button>
          <div>
            <span>똑똑쌤 소개</span>
            <ul>
              <li>
                <Link href="/program">
                  <a style={history.pathname === "/program" ? { color: "#6100ff" } : {}}>똑똑쌤 프로그램</a>
                </Link>
              </li>
              <li>
                <Link href="/dockTeacher">
                  <a style={history.pathname === "/dockTeacher" ? { color: "#6100ff" } : {}}>똑똑쌤이란?</a>
                </Link>
              </li>
              <li>
                <Link href="/location/1">
                  <a style={history.pathname === "/location/[id]" ? { color: "#6100ff" } : {}}>방문가능 지역</a>
                </Link>
              </li>
              <li>
                <Link href="/question">
                  <a style={history.pathname === "/question" ? { color: "#6100ff" } : {}}>자주묻는 질문</a>
                </Link>
              </li>
              <li>
                <Link href="/study_pay">
                  <a style={history.pathname === "/study_pay" ? { color: "#6100ff" } : {}}>똑똑쌤 수업료</a>
                </Link>
              </li>
            </ul>
          </div>
          <Link href="/comunity">
            <a>똑똑쌤 이야기</a>
          </Link>
          <Link href="/counselorsupport">
            <a>치료사 지원하기</a>
          </Link>
          <Link href="/myPage">
            <a>마이 페이지</a>
          </Link>
        </div>
      </div>
    </RightMenuWrap>
  );
};

export default RightMenu;
