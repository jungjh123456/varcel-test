import React from "react";
import Image from "next/image";
import { myLoader } from "../asset/myLoader";
import { BrainDevelopSection4wrap } from "./brainDevelopStyle";
import CheckIcon from "../asset/CheckIcon";
import HandleIcon from "../asset/HandleIcon";
import ChartIcon from "../asset/ChartIcon";
import SensitiveIcon from "../asset/SensitiveIcon";
import SisoIcon from "../asset/SisoIcon";
import CryingIcon from "../asset/CryingIcon";
import SadIcon from "../asset/SadIcon";
const BrainDevelopSection4 = () => {
  return (
    <BrainDevelopSection4wrap>
      <div className="container">
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
    </BrainDevelopSection4wrap>
  );
};

export default BrainDevelopSection4;
