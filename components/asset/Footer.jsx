import React from "react";
import Image from "next/image";
import { myLoader } from "./myLoader";
import { FooterWrap } from "./FooterStyle";
import Link from "next/link";
const Footer = () => {
  return (
    <FooterWrap>
      <div className="container">
        <div className="img-wrap">
          <Image loader={myLoader} src="/imgs/FooterLogo.png" objectFit="conver" alt="me" width="60px" height="36px" />
        </div>
        <div className="info-text">
          <span>(주) 릴리프마인드 | 대표 김기원</span>
          <span>전라북도 전주시 완산구 홍산로 269, 3층 381</span>
          <span>사업자등록번호 760-87-02187</span>
          <span>통신판매업 신고번호: 2021-전주완산-0091호</span>
          <span>개인정보책임자 장성원</span>
          <span>문의 이메인 reliefmindofficial@gmail.com</span>
        </div>
        <div className="service-link">
          <Link href="/">
            <a>이용약관</a>
          </Link>
          <Link href="/">
            <a>개인정보처리방침</a>
          </Link>
          <Link href="/">
            <a>제휴문의</a>
          </Link>
        </div>
      </div>
    </FooterWrap>
  );
};

export default Footer;
