import React from "react";
import { SupportSection8Wrap } from "./supportStyle";

const SupportSection8 = () => {
  return (
    <SupportSection8Wrap>
      <div className="container">
        <h2>
          <span>더 궁금한 내용은</span>
          <span>똑똑쌤 매니저와 상담하세요.</span>
        </h2>
        <div className="text-wrap">
          <a>
            <span>채팅 상담</span>
          </a>
          <a href="tel:010-4228-8874">070.1111.1111</a>
        </div>
      </div>
    </SupportSection8Wrap>
  );
};

export default SupportSection8;
