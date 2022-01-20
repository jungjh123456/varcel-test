import React from "react";
import Image from "next/image";
import { myLoader } from "../asset/myLoader";
import { Program3Wrap } from "./ProgramStyle";
const ProgramSection3 = () => {
  return (
    <Program3Wrap>
      <div className="container">
        <h2>
          <span>편한 수업을 넘어</span>
          <span>
            <span> 더 나은 아동발달 수업, 홈티칭</span>
          </span>
        </h2>
        <div className="text_gae">
          <h3>
            <span>홈티칭 (HT, Home Teaching)</span>이란?
          </h3>
          <span>
            발달 전문가에게 아이의 교육을 전임하는 것이 아닌,
            <span> 가정에서 부모님의 아동지도방법과 양육환경을 함께 변화시키는</span> 발달치료 교육방식입니다.{" "}
          </span>
        </div>
        <div className="imgwrap">
          <h2>6개월 간 영유아 언어발달 지표변화 비교</h2>
          <Image loader={myLoader} src="/imgs/progressNew.png" layout="responsive" objectFit="contain" alt="me" width="320" height="340px" />
          <Image loader={myLoader} src="/imgs/progressNew2.png" layout="responsive" objectFit="contain" alt="me" width="320" height="340px" />
          <span>D. Gibbard et al. 2004; van BalKom et al. 2010</span>
        </div>
      </div>
    </Program3Wrap>
  );
};

export default ProgramSection3;
