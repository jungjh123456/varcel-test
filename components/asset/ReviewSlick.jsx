import React from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import styled from "styled-components";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
// import "swiper/css/swiper.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { myLoader } from "./myLoader";
const SwiperWrap = styled(Swiper)`
  max-width: 450px;
  /* border: 1px solid red; */
  /* position: unset !important; */
  box-sizing: border-box;

  & > .swiper-wrapper {
    /* max-width: 320px; */

    max-height: 543px;
    height: 100%;
    & > .swiper-slide {
      /* border: 1px solid red; */
      /* min-height: 305px; */
      box-sizing: border-box;
      & > .card1 {
        width: 100%;
        height: 165px;
        background: #fff;
        border-radius: 8px;
        /* box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25); */
        padding: 24px 12px;
        box-sizing: border-box;
        margin-bottom: 16px;
        & > div {
          &:first-child {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid rgba(0, 0, 0, 0.4);
            padding-bottom: 8px;
            margin-bottom: 8px;
            & > span {
              font-size: 1rem;
            }
            & > div {
              /* padding: 3px 8px; */
              height: 20px;
              box-sizing: border-box;
              background: #6100ff;
              color: #fff;
              border-radius: 6px;
              margin-left: 8px;
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 0 8px;
              & > span {
                font-size: 0.75rem;
              }
            }
          }
          &:last-child {
            font-size: 0.875rem;
            white-space: normal;
            display: -webkit-box;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        }
      }
    }
  }
`;
const ReviewSlick = ({ list }) => {
  SwiperCore.use([Autoplay]);
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://unpkg.com/swiper/css/swiper.min.css" />
      </Head>
      <SwiperWrap
        // pagination={{ clickable: true }}
        direction={"vertical"}
        // speed={35000}
        loop={true}
        // centeredSlides={true}
        className="mySwiper"
        // spaceBetween={16}
        simulateTouch={false}
        // slidesPerView={3}
        // slidesPerView={5}
        speed={2000}
        // autoplay={true}
        noSwiping={true}
        allowTouchMove={false}
        loopFillGroupWithBlank={true}
        autoplay={{
          delay: 1000,

          disableOnInteraction: true,
          loopPreventsSlide: true,
        }}
        slidesPerView="3"
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={(e) => console.log(e, "slide change")}
        // pagination={true}
      >
        {list.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="card1">
                <div>
                  <span>{item.name}</span>
                  <div>
                    <span>영유아 언어발달 프로그램 3개월</span>
                  </div>
                </div>
                <div>
                  <span>{item.content}</span>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        {/* <SwiperSlide>
          {list.map((item, i) => {
            return (
              <div className="card1">
                <div>
                  <span>{item.name}</span>
                  <div>
                    <span>영유아 언어발달 프로그램 3개월</span>
                  </div>
                </div>
                <div>
                  <span>{item.content}</span>
                </div>
              </div>
            );
          })}
        </SwiperSlide> */}
        {/* <SwiperSlide>
          {list.map((item, i) => {
            return (
              <>
                {" "}
                <div className="card1">
                  <div>
                    <span>{item.name}</span>
                    <div>
                      <span>영유아 언어발달 프로그램 3개월</span>
                    </div>
                  </div>
                  <div>
                    <span>{item.content}</span>
                  </div>
                </div>
              </>
            );
          })}
        </SwiperSlide> */}
        {/* <SwiperSlide>
          <div className="card1">
            <div>
              <span>똑똑맘</span>
              <div>
                <span>연장 3개월</span>
              </div>
            </div>
            <div>
              <span>쌍둥이라서 항상 걱정이 많았는데 선생님이 너무 잘 아이들과 상호작용을 해주시는 것을 보고 너무 만족했어요! 아이들도 선생님을 너무 좋아서 계속 수업 받아보려구요 :)</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card1">
            <div>
              <span>똑똑맘</span>
              <div>
                <span>연장 3개월</span>
              </div>
            </div>
            <div>
              <span>쌍둥이라서 항상 걱정이 많았는데 선생님이 너무 잘 아이들과 상호작용을 해주시는 것을 보고 너무 만족했어요! 아이들도 선생님을 너무 좋아서 계속 수업 받아보려구요 :)</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card1">
            <div>
              <span>똑똑맘</span>
              <div>
                <span>연장 3개월</span>
              </div>
            </div>
            <div>
              <span>쌍둥이라서 항상 걱정이 많았는데 선생님이 너무 잘 아이들과 상호작용을 해주시는 것을 보고 너무 만족했어요! 아이들도 선생님을 너무 좋아서 계속 수업 받아보려구요 :)</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card1">
            <div>
              <span>똑똑맘</span>
              <div>
                <span>연장 3개월</span>
              </div>
            </div>
            <div>
              <span>쌍둥이라서 항상 걱정이 많았는데 선생님이 너무 잘 아이들과 상호작용을 해주시는 것을 보고 너무 만족했어요! 아이들도 선생님을 너무 좋아서 계속 수업 받아보려구요 :)</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card1">
            <div>
              <span>똑똑맘</span>
              <div>
                <span>연장 3개월</span>
              </div>
            </div>
            <div>
              <span>쌍둥이라서 항상 걱정이 많았는데 선생님이 너무 잘 아이들과 상호작용을 해주시는 것을 보고 너무 만족했어요! 아이들도 선생님을 너무 좋아서 계속 수업 받아보려구요 :)</span>
            </div>
          </div>
        </SwiperSlide> */}
      </SwiperWrap>
    </div>
  );
};

export default ReviewSlick;
