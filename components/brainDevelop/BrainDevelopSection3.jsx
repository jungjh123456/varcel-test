import React from "react";
import Image from "next/image";
import { myLoader } from "../asset/myLoader";
import { BrainDevelopSection3wrap } from "./brainDevelopStyle";
const BrainDevelopSection3 = () => {
  return (
    <BrainDevelopSection3wrap>
      <div className="container">
        <h2>
          {/* <span>똑똑,</span> */}
          <span>영유아 발달자극도</span>
          <span>아동발달 전문가에게,</span>
        </h2>
        <div className="languge_way">
          <div>
            <span>1.</span>
            <div>
              <span>아이에게 부담없는 1:1 놀이수업으로</span>
              <span>발달자극을 유도해요.</span>
            </div>
            <Image loader={myLoader} src="/imgs/babyinter.png" layout="responsive" objectFit="contain" alt="me" width="360" height="240" />
          </div>
          <div>
            <span>2.</span>
            <div>
              <span>아이에게 부담없는 1:1 놀이수업으로</span>
              <span>발달자극을 유도해요.</span>
            </div>
            <Image loader={myLoader} src="/imgs/babyinter.png" layout="responsive" objectFit="contain" alt="me" width="360" height="240" />
          </div>
          <div>
            <span>3.</span>
            <div>
              <span>아이에게 부담없는 1:1 놀이수업으로</span>
              <span>발달자극을 유도해요.</span>
            </div>
            <Image loader={myLoader} src="/imgs/babyinter.png" layout="responsive" objectFit="contain" alt="me" width="360" height="240" />
          </div>
        </div>
      </div>
    </BrainDevelopSection3wrap>
  );
};

export default BrainDevelopSection3;
