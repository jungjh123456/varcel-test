import React, { useRef } from "react";
import MainHeader from "../asset/MainHeader";
import Image from "next/image";
import { myLoader } from "../asset/myLoader";
import { CostPayPrependingWrap } from "./applicationstyle";
import HandleIcon from "../asset/HandleIcon";
import ChartIcon from "../asset/ChartIcon";
import SensitiveIcon from "../asset/SensitiveIcon";
import SisoIcon from "../asset/SisoIcon";
import CryingIcon from "../asset/CryingIcon";
import SadIcon from "../asset/SadIcon";
import Emoticon5 from "../asset/Emoticon5";
import Emoticon6 from "../asset/Emoticon6";
import Emoticon7 from "../asset/Emoticon7";
import Emoticon8 from "../asset/Emoticon8";
import BigButton from "../asset/BigButton";
import smoothscroll from "smoothscroll-polyfill";

import { useRouter } from "next/dist/client/router";
const CostPayRealClassPrepending = () => {
  const history = useRouter();
  const scoll1Ref = useRef();
  const scoll2Ref = useRef();

  const goPay = (e) => {
    let str = "";
    for (let [key, value] of Object.entries(history.query)) {
      str += `${key}=${value}&`;
    }

    sessionStorage.clear();
    history.push(`/application/9?${str}`);
  };
  const goSmoth = (e) => {
    if (e.target.value === "introduce") {
      smoothscroll.polyfill();
      scoll1Ref.current.scrollIntoView({ behavior: "smooth" });
    }
    if (e.target.value === "notice") {
      smoothscroll.polyfill();
      scoll2Ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <CostPayPrependingWrap>
      <MainHeader applied message={"정규수업 결제 페이지"} white />
      <div className="container">
        <div className="img_wrap">
          <div>
            <h2>똑똑쌤 홈티칭</h2>
            <div className="text-wrap">
              <span>2개월 수업권 (8회)</span>
            </div>
            <div className="imgs">{/* <img src="/imgs/prependingmain.png" alt="" /> */}</div>
            <Image loader={myLoader} objectFit="cover" layout="responsive" src="/imgs/prependingmain.png" alt="me" width="360px" height="242px" />
          </div>
        </div>
        <div className="study_info">
          <h2>
            <span>이용권 정보</span>
            <span>📌</span>
          </h2>
          <div>
            <div>
              <span>수업 유형</span>
              <span>정규수업 2개월 (8회권)</span>
            </div>
            <div>
              <span>프로그램 유형</span>
              <span>영유아 발달자극 프로그램</span>
            </div>
            <div>
              <span>세부 프로그램</span>
              <span>언어 발달자극 프로그램</span>
            </div>
          </div>
        </div>
        <div className="list_style">
          <input onChange={goSmoth} type="radio" value="introduce" defaultChecked={true} id="check1" name="info_tab" />
          <label htmlFor="check1">상세설명</label>
          <input onChange={goSmoth} type="radio" value="notice" id="check2" name="info_tab" />
          <label htmlFor="check2">유의사항</label>
        </div>
        <div ref={scoll1Ref} className="children_way">
          <h3>우리아이 언어발달의 고민들!</h3>
          <div>
            <div>
              <span>아이와 빨리 소통하고 싶은데 너무 답답해요..</span>
            </div>
            <div>
              <span>아이가 의사표현을 못해서 답답하지 계속 울어요ㅠㅠ</span>
            </div>
            <div>
              <span>16개월인데 아직 엄마,아빠만 할 줄 알아요..</span>
            </div>
            <div>
              <span>언어폭발기에 언어자극을 어떻게 줄지 모르겠어요</span>
            </div>
          </div>
        </div>
        <div className="brain_develop">
          <h2>
            <span>생후 16 - 40개월</span>
            <span>
              <span>영유아 언어폭발기</span>
            </span>
          </h2>
          <div className="text_gae">
            <span>
              생후 개월 수에 맞는 <span>적절한 언어놀이 발달</span>로
            </span>
            <span>
              우리아이 <span>두뇌발달의 기초를 튼튼히</span> 해보세요!
            </span>
          </div>
          <div className="imgwrap">
            <Image loader={myLoader} src="/imgs/progressBrain.png" layout="responsive" objectFit="contain" alt="me" width="320" height="320" />
          </div>
        </div>
        <div className="children_baldal">
          <h3>
            <span>영유아 발달자극 수업으로</span>
            <span>우리아이 언어를 촉진시켜보세요</span>
          </h3>
          <div>
            <Image loader={myLoader} src="/imgs/costpayPAge.png" layout="responsive" objectFit="contain" alt="me" width="320" height="200px" />
            <div>
              <svg width="320" height="25" viewBox="0 0 320 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="65" y="13" width="190" height="12" fill="#CDC3FB" />
                <path
                  d="M90.4758 6.3H88.0358V2.3H85.3958V12.6H88.0358V8.46H90.4758V6.3ZM82.8558 11.6V3.48H74.0758V11.6H82.8558ZM80.2558 5.56V9.5H76.6558V5.56H80.2558ZM83.6158 15.54H88.2758V13.48H75.9358V15.54H80.5958C80.2158 16.92 78.4558 18.28 75.1358 18.66L76.0958 20.66C79.0758 20.28 81.0758 19.12 82.1158 17.58C83.1758 19.12 85.1358 20.3 88.1158 20.68L89.0558 18.68C85.7958 18.3 84.0358 16.88 83.6158 15.54ZM92.6342 8.5L93.3942 10.48C96.9342 10.26 99.0942 9.36 100.234 7.92C101.434 9.36 103.614 10.26 107.074 10.48L107.854 8.52C103.874 8.3 102.094 7.16 101.774 5.94H106.974V3.9H101.554V2.3H98.9142V3.9H93.5342V5.94H98.7142C98.3942 7.18 96.6142 8.28 92.6342 8.5ZM101.554 13.22H108.574V11.14H91.9342V13.22H98.9142V14.62H93.8742V20.52H106.594V14.62H101.554V13.22ZM103.994 16.7V18.44H96.4542V16.7H103.994ZM120.493 6.04V3.96H116.893V2.16H114.253V3.96H110.393V6.04H120.493ZM123.093 12.12V14.02H125.733V2.3H123.093V6.34H120.733V8.44H123.093V10.02H120.693V12.12H123.093ZM119.873 10.12C119.873 8.08 118.073 6.68 115.573 6.68C113.033 6.68 111.253 8.08 111.253 10.12C111.253 12.16 113.033 13.56 115.573 13.56C118.073 13.56 119.873 12.16 119.873 10.12ZM113.713 10.12C113.713 9.16 114.453 8.64 115.573 8.64C116.693 8.64 117.433 9.16 117.433 10.12C117.433 11.08 116.693 11.6 115.573 11.6C114.453 11.6 113.713 11.08 113.713 10.12ZM119.513 14.26C115.613 14.26 113.193 15.48 113.193 17.5C113.193 19.52 115.613 20.72 119.513 20.72C123.393 20.72 125.813 19.52 125.813 17.5C125.813 15.48 123.393 14.26 119.513 14.26ZM119.513 18.72C117.173 18.72 115.993 18.36 115.993 17.5C115.993 16.64 117.173 16.28 119.513 16.28C121.773 16.28 123.033 16.64 123.033 17.5C123.033 18.36 121.773 18.72 119.513 18.72ZM150.182 5.86H147.762V2.3H145.122V11.66H147.762V8H150.182V5.86ZM142.622 11.18V3.1H140.022V5.3H136.402V3.1H133.802V11.18H142.622ZM140.022 7.28V9.12H136.402V7.28H140.022ZM138.242 18.54V17.38H147.762V12.38H135.602V14.38H145.162V15.5H135.622V20.58H148.282V18.54H138.242ZM168.601 5.78H166.161V2.28H163.521V11.44H166.161V7.92H168.601V5.78ZM162.361 10.44L162.101 8.38C160.041 8.8 158.081 8.98 154.921 8.98V5.32H160.541V3.26H152.301V11.06H153.841C157.761 11.06 159.961 10.98 162.361 10.44ZM156.641 18.44V17.28H166.161V12.2H154.001V14.28H163.561V15.36H154.021V20.5H166.681V18.44H156.641ZM189.99 2.3H187.35V9.36H183.91V11.5H187.35V20.72H189.99V2.3ZM183.95 4.06H175.51V6.16H181.33C181.25 7.04 181.11 7.84 180.93 8.62L174.53 8.98L174.87 11.2L180.13 10.72C179.07 12.74 177.33 14.42 174.43 15.94L175.87 17.94C182.47 14.48 183.95 9.72 183.95 4.06ZM208.309 2.28H205.669V20.76H208.309V2.28ZM196.669 14.3V10.98H202.649V3.86H193.949V5.96H199.949V8.9H193.969V16.48H195.629C198.989 16.48 201.629 16.38 204.669 15.84L204.389 13.7C201.809 14.12 199.469 14.3 196.669 14.3ZM223.947 11.26H228.007V9.2H225.787C226.107 7.36 226.107 5.9 226.107 4.46V2.84H213.447V4.88H223.507C223.507 5.22 223.507 5.54 223.487 5.92L212.927 6.14L213.207 8.16L223.367 7.72C223.307 8.2 223.247 8.66 223.147 9.2H211.427V11.26H215.427V12.54H213.207V14.54H223.607V15.56H213.247V20.5H226.827V18.52H215.847V17.42H226.227V12.54H223.947V11.26ZM221.307 11.26V12.54H218.087V11.26H221.307ZM245.186 2.3H242.546V6.1H239.686V8.2H242.546V13.14H245.186V2.3ZM240.246 12.2L240.066 10.08C237.826 10.46 235.826 10.52 233.106 10.52V8.8H238.766V3.18H230.466V5.28H236.166V6.86H230.486V12.64H232.006C235.346 12.64 237.666 12.62 240.246 12.2ZM232.846 13.92V20.5H245.186V13.92H232.846ZM235.446 18.44V15.98H242.586V18.44H235.446Z"
                  fill="black"
                />
              </svg>
              <div>
                <span>구조화된 발달검사와 부모님 상담으로 아이의 성향과</span>
                <span> 발달 수준에 맞는 목표와 수업계획을 수립해요!</span>
              </div>
            </div>
          </div>
          <div>
            <Image loader={myLoader} src="/imgs/costpayPAge.png" layout="responsive" objectFit="contain" alt="me" width="320" height="200px" />
            <div>
              <svg width="320" height="25" viewBox="0 0 320 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="65" y="13" width="190" height="12" fill="#CDC3FB" />
                <path
                  d="M93.7993 11.2H86.8193V9.44H92.3193V7.34H88.6393V5.1H92.2593V3H85.9993V8.6H85.2793L85.0993 6.98C83.8193 7.22 82.6393 7.32 81.2793 7.34V5.1H84.9593V3H78.6393V9.44H79.7593C81.4593 9.44 82.7993 9.44 84.1793 9.22V11.2H77.1193V13.3H93.7993V11.2ZM78.9193 14.82V16.92H89.0393V20.78H91.6793V14.82H78.9193ZM112.198 11.2H105.218V9.44H110.718V7.34H107.038V5.1H110.658V3H104.398V8.6H103.678L103.498 6.98C102.218 7.22 101.038 7.32 99.6777 7.34V5.1H103.358V3H97.0377V9.44H98.1577C99.8577 9.44 101.198 9.44 102.578 9.22V11.2H95.5177V13.3H112.198V11.2ZM97.3177 14.82V16.92H107.438V20.78H110.078V14.82H97.3177ZM130.096 2.32H127.636V6.62H126.376V2.62H123.976V10.32C122.436 9.1 122.056 7.06 122.056 5.28V3.3H119.756V5.28C119.756 6.64 119.596 8.16 118.856 9.44C118.076 8.14 117.916 6.56 117.916 5.28V3.3H115.636V5.28C115.636 7.12 115.236 9.32 113.476 10.5L114.696 12.34C115.716 11.72 116.356 10.82 116.756 9.7C117.136 10.9 117.776 11.88 118.836 12.58C119.956 11.88 120.536 10.9 120.916 9.7C121.316 10.82 121.976 11.72 122.996 12.34L123.976 10.9V12.92H126.376V8.76H127.636V13H130.096V2.32ZM117.036 13.76V20.5H130.096V13.76H117.036ZM119.636 18.44V15.84H127.496V18.44H119.636ZM144.166 4.04H141.806L137.486 7.76L139.066 9.56L141.506 7.34L141.426 8.64V16.78H138.506V19H146.746V16.78H144.166V4.04ZM152.26 9.8V6.96H149.34V9.8H152.26ZM152.26 17.86V15.02H149.34V17.86H152.26ZM161.842 4.04H159.482L155.162 7.76L156.742 9.56L159.182 7.34L159.102 8.64V16.78H156.182V19H164.422V16.78H161.842V4.04ZM187.907 5.86H185.487V2.3H182.847V11.66H185.487V8H187.907V5.86ZM180.347 11.18V3.1H177.747V5.3H174.127V3.1H171.527V11.18H180.347ZM177.747 7.28V9.12H174.127V7.28H177.747ZM175.967 18.54V17.38H185.487V12.38H173.327V14.38H182.887V15.5H173.347V20.58H186.007V18.54H175.967ZM206.325 5.78H203.885V2.28H201.245V11.44H203.885V7.92H206.325V5.78ZM200.085 10.44L199.825 8.38C197.765 8.8 195.805 8.98 192.645 8.98V5.32H198.265V3.26H190.025V11.06H191.565C195.485 11.06 197.685 10.98 200.085 10.44ZM194.365 18.44V17.28H203.885V12.2H191.725V14.28H201.285V15.36H191.745V20.5H204.405V18.44H194.365ZM222.844 10.96L223.844 8.84C219.684 8.26 217.544 5.88 217.544 3.72V2.84H214.724V3.72C214.724 5.88 212.644 8.26 208.424 8.84L209.424 10.96C212.644 10.48 214.944 9 216.144 7C217.344 9 219.624 10.48 222.844 10.96ZM224.444 14.46V12.32H207.804V14.46H214.744V20.74H217.384V14.46H224.444ZM241.582 2.3H238.942V6.36H236.002C235.462 4.38 233.622 3.06 231.262 3.06C228.502 3.06 226.422 4.9 226.422 7.46C226.422 10.02 228.502 11.86 231.262 11.86C233.622 11.86 235.542 10.48 236.022 8.5H238.942V12.2H241.582V2.3ZM231.262 9.66C229.902 9.66 228.942 8.84 228.942 7.46C228.942 6.08 229.902 5.26 231.262 5.26C232.622 5.26 233.602 6.08 233.602 7.46C233.602 8.84 232.622 9.66 231.262 9.66ZM238.962 13V14.76H232.002V13H229.382V20.5H241.582V13H238.962ZM238.962 16.76V18.42H232.002V16.76H238.962Z"
                  fill="black"
                />
              </svg>

              <div>
                <span>아이에게 필요한 발달영역을 중점으로</span>
                <span>발달을 촉진하는 1:1 놀이기반 수업</span>
              </div>
            </div>
          </div>
          <div>
            <Image loader={myLoader} src="/imgs/costpayPAge.png" layout="responsive" objectFit="contain" alt="me" width="320" height="200px" />
            <div>
              <svg width="320" height="25" viewBox="0 0 320 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="56" y="13" width="208" height="12" fill="#CDC3FB" />
                <path
                  d="M76.7709 11.16V3H74.1709V5.1H66.5909V3H63.9709V11.16H76.7709ZM74.1709 7.16V9.06H66.5909V7.16H74.1709ZM78.7509 15V12.9H62.0709V15H69.0309V20.74H71.6709V15H78.7509ZM97.1494 16.44H90.1094V12.7H95.3294V3.66H82.2294V12.7H87.4694V16.44H80.4694V18.58H97.1494V16.44ZM84.8094 10.62V5.74H92.7494V10.62H84.8094ZM114.148 2.28H111.508V12.6H114.148V2.28ZM110.328 10.94L110.008 8.8C107.588 9.34 105.268 9.5 102.528 9.56V3.36H99.9078V11.74H101.508C104.808 11.74 107.488 11.54 110.328 10.94ZM101.908 13.4V20.5H114.148V13.4H101.908ZM104.508 18.44V15.46H111.568V18.44H104.508ZM134.178 8.28L123.118 8.64L123.458 10.86L134.018 10.3C133.918 11.42 133.698 12.62 133.398 13.98L135.998 14.3C136.858 10.24 136.838 7.68 136.838 5.46V3.84H123.678V5.94H134.238C134.238 6.66 134.238 7.42 134.178 8.28ZM138.458 16.46H130.338V12.06H127.698V16.46H121.798V18.6H138.458V16.46ZM155.496 13.4V2.3H152.836V13.4H155.496ZM150.496 12.84L151.696 10.78C148.816 10.04 147.436 8.16 147.336 6.3H151.036V4.22H147.336V2.32H144.696V4.22H140.976V6.3H144.696C144.596 8.34 143.256 10.38 140.356 11.18L141.596 13.24C143.776 12.62 145.256 11.3 146.076 9.6C146.936 11.12 148.396 12.28 150.496 12.84ZM149.276 13.72C145.376 13.72 142.976 15.04 142.976 17.22C142.976 19.48 145.376 20.74 149.276 20.74C153.156 20.74 155.556 19.48 155.556 17.22C155.556 15.04 153.156 13.72 149.276 13.72ZM149.276 18.7C146.816 18.7 145.596 18.2 145.596 17.22C145.596 16.24 146.816 15.74 149.276 15.74C151.716 15.74 152.936 16.24 152.936 17.22C152.936 18.2 151.716 18.7 149.276 18.7ZM178.406 12.76V2.32H175.766V12.76H178.406ZM172.986 11.2V3.4H164.046V11.2H172.986ZM170.406 5.48V9.14H166.646V5.48H170.406ZM173.626 15.7H178.706V13.74H173.566V12.24H170.886V13.74H165.726V15.7H170.826C170.566 16.98 168.706 18.38 165.026 18.7L165.846 20.66C168.986 20.4 171.106 19.34 172.226 17.9C173.346 19.34 175.486 20.4 178.546 20.66L179.386 18.7C175.766 18.38 173.886 16.92 173.626 15.7ZM202.975 5.84H200.555V2.3H197.915V11.5H200.555V8H202.975V5.84ZM195.995 7C195.995 4.58 193.915 2.82 191.095 2.82C188.295 2.82 186.195 4.58 186.195 7C186.195 9.46 188.295 11.2 191.095 11.2C193.915 11.2 195.995 9.46 195.995 7ZM188.735 7C188.735 5.72 189.715 4.94 191.095 4.94C192.475 4.94 193.455 5.72 193.455 7C193.455 8.3 192.475 9.08 191.095 9.08C189.715 9.08 188.735 8.3 188.735 7ZM191.035 18.46V17.26H200.555V12.22H188.395V14.26H197.955V15.36H188.415V20.5H201.075V18.46H191.035ZM219.754 2.32H217.094V13.22H219.754V2.32ZM215.874 12.1L215.574 10C213.174 10.38 211.034 10.5 207.994 10.5V8.9H213.854V3.34H205.374V5.46H211.254V6.94H205.394V12.62H207.014C210.694 12.62 213.134 12.52 215.874 12.1ZM207.494 14.04V20.5H219.754V14.04H207.494ZM210.094 18.44V16.12H217.174V18.44H210.094ZM239.532 16.52H232.512V12.32H237.772V10.22H227.372V3.7H224.732V12.32H229.872V16.52H222.852V18.66H239.532V16.52ZM256.151 13.88V11.8H245.891V9.74H255.591V7.7H245.891V5.76H256.011V3.64H243.211V13.88H256.151ZM257.931 16.46H241.251V18.6H257.931V16.46Z"
                  fill="black"
                />
              </svg>

              <div>
                <span>집에서 할 수 있는 발달자극 방법을 배우고 우리아이</span>
                <span>발달 노트를 통해 성장 과정을 확인해요!</span>
              </div>
            </div>
          </div>
        </div>
        <div className="review_wrap">
          <h3>
            <span>똑똑쌤 수업을 들어본</span>
            <span>부모님들의 후기를 확인하세요!</span>
          </h3>
          <div className="review_list">
            <div className="card">
              <div>
                <span>김O진님</span>
                <span>22개월 여아</span>
              </div>
              <div>
                <span>
                  신체와 인지발달은 또래보다 빨랐지만 언어발달이 있어 엄마인 제가 어떤 부분이 미흡했던 걸까, 아니면 무슨 문제라도 있는 것일까.. 고민도 많이 하고 검색도 해보고 이리저리 찾던 중 알게 된
                  똑똑쌤. 3개월 진행한 결과 선생님이 알려주시는 부모코칭 덕분에 조금씩 변화하는 아이의 모습을 발견하였습니다. 기쁨에 눈물을 흘리기도 하고 박수치며 기뻐하기도 했던 수업 기간이었습니다.
                  애써주신 선생님께 감사하다는 말씀 드려요.
                </span>
              </div>
            </div>
            <div className="card">
              <div>
                <span>이O후님</span>
                <span>19개월 여아</span>
              </div>
              <div>
                <span>
                  아이가 유독 말이 늦어 참 걱정이 많았는데, 선생님 수업 하시는 것 옆에서 보면서 많이 배웠고 조언도 많이 받았어요. 초기 언어가 중요하기 때문에 아이에게 언어자극을 줘야할 때 참고할
                  커리큘럼이 없어 막막했는데, 수업을 진행하며 아이 언어도 올라오는 모습이 보이고 저도 기다리던 커리큘럼을 제공받은 느낌이예요.가야할 길이 보이니 더 쉽게 도달할 수 있었어요.
                </span>
              </div>
            </div>
            <div className="card">
              <div>
                <span>김O아님</span>
                <span>18개월 남아</span>
              </div>
              <div>
                <span>
                  OO진 선생님은 언어자극 뿐만 아니라 아이 마음까지 잘 수용해주시면서 수업해주시는선생님~ 선생님과 수업후에는 우리 O현이가 열심히 조잘거리려는 모습이 넘 기특하네요. 언어자극도 너무
                  마음에 들고, 선생님이 아이를 잘 이끌어주시며 수업을 진행해주셔서 너무 만족합니다.
                </span>
              </div>
            </div>
            <div className="card">
              <div>
                <span>남0정님</span>
                <span>26개월 여아</span>
              </div>
              <div>
                <span>
                  이제 한달이 지났습니다. 그리고 마지막 수업전 3달치를 추가 등록 하였습니다. 그것만으로도 우선, 선생님에 대한 저희 가족의 믿음? 이 담겨있다고 생각합니다^^
                  <div>
                    처음 체험수업을 할때 어색해 하고 집에 갈때가 되어서야 선생님과 익숙해져서 첫 수업 시간에 괜찮을까 약간 걱정을 하였지만, 그 걱정이 무색하게 첫수업부터 선생님을 너무 좋아하고
                    잘따라서, 항상 선생님이 오는 시간을 기다리고 있네요. 센터 교육과는 또 다른 장점이 있는 것 같아요. 아이를 밀접하게 볼수도 있고, 집에서만 드러나는 아이의 특성도 있다보니 좀더
                    세세하게 피드백을 받았던 것 같아요. 앞으로 선생님과의 시간이 기대가 됩니다!
                  </div>
                </span>
              </div>
            </div>
            <div className="card">
              <div>
                <span>박0현님</span>
                <span>17개월 남아</span>
              </div>
              <div>
                <span>
                  아이의 성향을 잘 파악하시고 다가가주셔서 아이가 조금 낯가림이 있는 편인데도 선생님을 너무 좋아하고 잘 따릅니다. 다양한 상황에 맞는 언어표현을 자극해주시고 발음 교정도 잘 유도해주셔서
                  아이의 언어 발달이 눈에 보이게 변화하고 있어 너무 감사드립니다.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bakdal_rank">
          <h2>
            <span>똑똑쌤 영유아 발달자극</span>
            <span>이런 아이들에게 추천해요!</span>
          </h2>
          <div className="list_wrap">
            <div>
              <div>
                <span>추천 1</span>
                <div>
                  <span>신체발달은 준수하나,</span>
                  <span>말이 다소 느린아이</span>
                </div>
              </div>
              <div>
                <ChartIcon />
              </div>
            </div>
            <div>
              <div>
                <span>추천 2</span>
                <div>
                  <span>언어표현이 원활하지 않아</span>
                  <span>예민함이 심한 아이</span>
                </div>
              </div>
              <div>
                <SensitiveIcon />
                {/* <JunguIcon /> */}
              </div>
            </div>
            <div>
              <div>
                <span>추천 3</span>
                <div>
                  <span>또래와 비교했을 때,</span>
                  <span>어휘력이 부족한 아이</span>
                </div>
              </div>
              <div>
                <SisoIcon />
                {/* <Message /> */}
              </div>
            </div>
            <div>
              <div>
                <span>교육 4</span>
                <div>
                  <span>원하는 것이 있을 때</span>
                  <span>말 대신 우는 아이</span>
                </div>
              </div>
              <div>
                <CryingIcon />
                {/* <NoteIcon /> */}
              </div>
            </div>
            <div>
              <div>
                <span>교육 5</span>
                <div>
                  <span>발음을 정확하게</span>
                  <span>말하지 못하는 아이</span>
                </div>
              </div>
              <div>
                <SadIcon />
                {/* <NoteIcon /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="study_way-wrap">
          <h2>
            <span>똑똑!</span>
            <span>수업은 어떻게 진행되나요?</span>
          </h2>
          <div className="study_way">
            <h3>
              <span>
                <Emoticon5 />
              </span>
              <span>수업 전, 아이의 발달단계를 알아가요.</span>
            </h3>
            <div>
              <span>수업 전, 발달검사와 놀이평가를 통해 아이의 성향</span>
              <span>과 발달 수준을 평가해요.</span>
            </div>
            <Image loader={myLoader} src="/imgs/studyWayImg1.png" layout="responsive" objectFit="contain" alt="me" width="360" height="260" />
          </div>
          <div className="study_way">
            <h3>
              <span>
                <Emoticon6 />
              </span>
              <span>똑똑쌤의 부모님 상담코칭</span>
            </h3>
            <div>
              <span>수업 내용을 정리하고, 부모님이 </span>
              <span>집에서 꼭 해주셔야할 자극방법을 알려드려요.</span>
            </div>
            <Image loader={myLoader} src="/imgs/studyWayImg2.png" layout="responsive" objectFit="contain" alt="me" width="360" height="260" />
          </div>
          <div className="study_way">
            <h3>
              <span>
                <Emoticon7 />
              </span>
              <span>즐거운 홈티칭 수업</span>
            </h3>
            <div>
              <span>자극이 필요한 발달영역을 중점으로 </span>
              <span>놀이수업을 진행해요.</span>
            </div>
            <Image loader={myLoader} src="/imgs/studyWayImg3.png" layout="responsive" objectFit="contain" alt="me" width="360" height="260" />
          </div>
          <div className="study_way">
            <h3>
              <span>
                <Emoticon8 />
              </span>
              <span>똑똑쌤 알림노트</span>
            </h3>
            <div>
              <span>똑똑쌤이 정리한 수업내용과 부모님에게 전하는</span>
              <span>홈티칭 활동을 카카오 알림으로 전달드려요!</span>
            </div>
            <Image loader={myLoader} src="/imgs/studyWayImg4.png" layout="responsive" objectFit="contain" alt="me" width="360" height="318" />
          </div>
        </div>
        <div ref={scoll2Ref} className="notice">
          <h3>유의사항</h3>
          <div className="one">
            <span>1</span>
            <div>
              <span>수업 일정 정책</span>

              <span>정규수업의 일정은 선생님과 별도로 협의하지 않았다면 체험수업 일정과 동일한 요일 및 시간에 진행됩니다.</span>
            </div>
          </div>
          <div className="two">
            <span>2</span>
            <div>
              <span>수업 일정 변경 정책</span>
              <div>
                <span>정규수업의 일정 변경 횟수는 등록권에 비례하며, 아래 등록한 정규수업 횟수에 따른 회차변경 횟수가 넘을 경우 수업 일정 변경이 불가능합니다.</span>
              </div>
              <div>
                <span>2개월 등록권: 최대 2회 변경 가능</span>
                <span>3개월 등록권: 최대 3회 변경 가능</span>
                <span>6개월 등록권: 최대 6회 변경 가능</span>
              </div>
            </div>
          </div>
          <div className="two">
            <span>3</span>
            <div>
              <span>수업 일정 변경 정책</span>
              <div>
                <span>
                  수업 스케쥴 변경을 희망할 경우, 적어도 수업 하루 전 18시 이전까지 고객센터를 통한 알림이 필요하며, 이후 일정 연기 또는 변경을 요청할 경우 당일 취소 보호 규정에 따라 수업은 1회
                  차감됩니다.
                </span>
              </div>
              <div>
                <span>아동의 병가 등 당사가 인정하는 수업 진행이 불가능한 사유로 인한 취소는 관련 서류(진단서, 의사소견서 등)를 제출할 경우, 수업 회기 차감 없이 수업 일정의 연기가 가능합니다.</span>
              </div>
              <div>
                <span> 단, 아이가 아픈 경우라도 수업 최소 2시간 이전까지 이 사실을 고객센터 또는 선생님에게 알려야하며, 그 이후 고지될 경우 수업은 진행된 것으로 간주합니다.</span>
              </div>
            </div>
          </div>
          <div className="two">
            <span>4</span>
            <div>
              <span>정규수업 환불규정</span>
              <div>
                <span>
                  정규수업 등록 이후부터 수업 진행 전, 중도환불 시 등록한 수업권의 정가 수업료의 10%에 해당하는 취소위약금이 발생하며 <span style={{ color: "#6100ff" }}>(할인금액 미반영)</span>, 잔여
                  수업 회차에 대한 환불은 아래와 같습니다:
                </span>
              </div>
              <div>
                <span>정규수업 등록 이전: 수업료의 100% 환불 </span>
                <span>수업 이틀 전 18시 이후 ~ 수업 하루 전 18시 이전: 해당 회차수업료 50% 환불 수업 하루 전 18시 이후 ~ 수업 당일: 환불 불가</span>
              </div>
              <div>
                <span>정규수업 등록 후, 선생님 변경을 희망할 경우 지역 별로 타 선생님 배정에 따른 대기기간이 장기간 소요됩니다.</span>
              </div>
              <div>
                <span>
                  지역 별 활동 선생님 일정에 따라 선생님 변경이 불가하거나 대기 기간 문제로 고객 측이 선생님 변경을 요청한 후, 중도 환불을 요청할 경우, 정규수업 환불규정과 동일한 환불규정이 적용되어
                  정가 수업료의 10%가 위약금으로 발생합니다 <span style={{ color: "#6100ff" }}>(할인금액 미반영).</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-group">
          <BigButton onClick={goPay}>결제하기</BigButton>
        </div>
      </div>
    </CostPayPrependingWrap>
  );
};

export default CostPayRealClassPrepending;
