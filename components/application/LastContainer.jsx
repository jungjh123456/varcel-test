import React from "react";
import BigButton from "../asset/BigButton";
import MainHeader from "../asset/MainHeader";
import Link from "next/dist/client/link";
import { LastContainerWrap } from "./applicationstyle";
const LastContainer = () => {
  return (
    <LastContainerWrap>
      <MainHeader white />
      <div className="container">
        <span>👏</span>
        <h1>결제가 완료되었습니다.</h1>
        <div className="text-wrap">
          <span>메뉴 {">"} 마이페이지에서 결제권을 확인하실 수 있</span>
          <span>으며, 잠시 후 알림톡이 전달될 예정입니다.</span>
        </div>
        <div className="btn-group">
          <Link href="/">
            <a>홈화면으로 돌아가기</a>
          </Link>
        </div>
      </div>
    </LastContainerWrap>
  );
};

export default LastContainer;
