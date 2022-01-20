import React from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { myLoader } from "../asset/myLoader";
import styled from "styled-components";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// import "swiper/css/swiper.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const SwiperWrap = styled(Swiper)`
  max-width: 400px;

  position: unset !important;
  box-sizing: border-box;
  & > .swiper-pagination {
    position: absolute;
    bottom: -40px !important;
    /* border: 1px solid red; */
    /* z-index: 10; */
    & > span {
      /* border: 1px solid red; */
      width: 8px;
      height: 8px;
      background: #6100ff;
    }
  }
  & > .swiper-wrapper {
    max-width: 320px;
    & > .swiper-slide {
      & > div {
        background: #ffffff;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        & > div {
          &:first-child {
            & > img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          &:last-child {
            padding: 16px 12px;
            & > div {
              &:first-child {
                margin-bottom: 12px;
                & > span {
                  font-size: 1.125rem;
                  font-weight: 700;
                }
              }
              &:last-child {
                display: -webkit-box;
                display: -ms-flexbox;
                display: box;
                margin-top: 1px;
                max-height: 80px;
                overflow: hidden;
                vertical-align: top;
                text-overflow: ellipsis;
                word-break: break-all;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                & > span {
                  font-size: 0.875rem;
                }
              }
            }
          }
        }
      }
    }
  }
`;
const SectionSlick = () => {
  SwiperCore.use([Pagination]);
  return (
    <div>
      <Head>
        <title>Swiper test page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://unpkg.com/swiper/css/swiper.min.css" />
      </Head>
      <SwiperWrap
        // pagination={{ clickable: true }}
        className="swiper-container"
        spaceBetween={10}
        slidesPerView={1}
        pagination={true}
      >
        {[1, 2, 3].map((item) => {
          return (
            <SwiperSlide>
              <div>
                <div>
                  <img src="/imgs/testChirdren.png" layout="responsive" alt="me" width="320" height="226" />
                </div>
                <div>
                  <div>
                    <span>우리아이 정말 발달이 늦은걸까요?</span>
                  </div>
                  <div>
                    <span>또래보다 말이 늦은 우리아이, 주변에서는 조금 있으면 말이 터진다고 예민한 엄마 취급을 받아요. 괜찮아요</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </SwiperWrap>
    </div>
  );
};

export default SectionSlick;
