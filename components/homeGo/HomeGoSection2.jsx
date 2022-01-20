import React from "react";
import Image from "next/image";
import { HomeGoSection2Wrap } from "./homeGoStyle";

const HomeGoSection2 = () => {
  return (
    <HomeGoSection2Wrap>
      <div className="container">
        <h2>
          <span>우리아이 발달 선생님</span>
          <span>
            <span>특별한 발달자극과 치료수업</span>
          </span>
        </h2>
        <div className="card_wrap">
          <div className="card">
            <div>
              <span>부모님도 함께하는 홈티칭</span>
              <div>
                <span>부모님과 아이가 함께 성장할 수 있도록</span>
                <span>돕는 똑똑쌤의 상담과 코칭</span>
              </div>
            </div>
            <div className="img-card">
              <div className="img-wrap">
                <img src="/imgs/homeImgs1.png" alt="" />
              </div>
            </div>
          </div>
          <div className="card">
            <div>
              <span>홈티칭 수업</span>
              <div>
                <span>부모님도 아이도 가장 편안한</span>
                <span>공간으로 찾아가는 발달치료 수업</span>
              </div>
            </div>
            <div className="img-card imgs_two">
              <div className="img-wrap">
                <img src="/imgs/homeImgs2.png" alt="" />
              </div>
            </div>
          </div>
          <div className="card">
            <div>
              <span>홈티칭 수업</span>
              <div>
                <span>부모님도 아이도 가장 편안한</span>
                <span>공간으로 찾아가는 발달치료 수업</span>
              </div>
            </div>
            <div className="img-card imgs_tree">
              <div className="img-wrap">
                <img src="/imgs/homeImgs3.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeGoSection2Wrap>
  );
};

export default HomeGoSection2;
