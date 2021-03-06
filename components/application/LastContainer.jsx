import React from "react";
import BigButton from "../asset/BigButton";
import MainHeader from "../asset/MainHeader";
import Link from "next/dist/client/link";
import { LastContainerWrap } from "./applicationstyle";
const LastContainer = () => {
  return (
    <LastContainerWrap>
      <MainHeader white />
      <div className="container">
        <span>π</span>
        <h1>κ²°μ κ° μλ£λμμ΅λλ€.</h1>
        <div className="text-wrap">
          <span>λ©λ΄ {">"} λ§μ΄νμ΄μ§μμ κ²°μ κΆμ νμΈνμ€ μ μ</span>
          <span>μΌλ©°, μ μ ν μλ¦Όν‘μ΄ μ λ¬λ  μμ μλλ€.</span>
        </div>
        <div className="btn-group">
          <Link href="/">
            <a>ννλ©΄μΌλ‘ λμκ°κΈ°</a>
          </Link>
        </div>
      </div>
    </LastContainerWrap>
  );
};

export default LastContainer;
