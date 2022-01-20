import React from "react";
import Image from "next/image";
import { myLoader } from "../asset/myLoader";
import { BrainDevelopSection4wrap } from "../brainDevelop/brainDevelopStyle";
import CheckIcon from "../asset/CheckIcon";
import HandleIcon from "../asset/HandleIcon";
import { HomeGoSection4Wrap } from "./homeGoStyle";

const HomeGoSection4 = () => {
  return (
    <HomeGoSection4Wrap>
      <div className="container">
        <h2>
          <span>똑똑쌤 발달치료 프로그램</span>
          <span>
            이런 아이들에게 <span>추천해요!</span>
          </span>
        </h2>
        <div className="list_wrap">
          <div>
            <div>
              <span>추천 1</span>
              <div>
                <span>발달검사, 진료에서</span>
                <span>치료를 권고받은 아이</span>
              </div>
            </div>
            <div>
              <HandleIcon />
            </div>
          </div>
          <div>
            <div>
              <span>추천 2</span>
              <div>
                <span>만 3세 이후에도</span>
                <span>또래보다 발달이 느린아이</span>
              </div>
            </div>
            <div>
              <HandleIcon />
              {/* <JunguIcon /> */}
            </div>
          </div>
          <div>
            <div>
              <span>추천 3</span>
              <div>
                <span>발음 명료도가</span>
                <span>비교적 부족한 아이</span>
              </div>
            </div>
            <div>
              <HandleIcon />
              {/* <Message /> */}
            </div>
          </div>
          <div>
            <div>
              <span>교육 4</span>
              <div>
                <span>또래에 비해 말을</span>
                <span>더듬는 빈도가 높은아이</span>
              </div>
            </div>
            <div>
              <HandleIcon />
              {/* <NoteIcon /> */}
            </div>
          </div>
          <div>
            <div>
              <span>교육 5</span>
              <div>
                <span>상황에 맞지 않는 말을</span>
                <span>
                  하거나 <span>의사표현이 힘든아이</span>
                </span>
              </div>
            </div>
            <div>
              <HandleIcon />
              {/* <NoteIcon /> */}
            </div>
          </div>
        </div>
      </div>
    </HomeGoSection4Wrap>
  );
};

export default HomeGoSection4;
