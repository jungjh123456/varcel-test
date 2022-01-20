import React from "react";
import { useState } from "react";
import Footer from "../components/asset/Footer";
import MainHeader from "../components/asset/MainHeader";
import ComunitySection1 from "../components/comunity/ComunitySection1";
import ComunitySection2 from "../components/comunity/ComunitySection2";
import { ComunityContainerWrap } from "./mainStyle";

const ComunityContainer = () => {
  return (
    <ComunityContainerWrap>
      <MainHeader />
      <ComunitySection1 />
      <ComunitySection2 />
      <Footer />
    </ComunityContainerWrap>
  );
};

export default ComunityContainer;
