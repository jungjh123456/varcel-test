import React from "react";
import Footer from "../../components/asset/Footer";
import MainHeader from "../../components/asset/MainHeader";
import CommunityInfo from "../../components/comunity/CommunityInfo";
import { ComunityContainerWrap } from "../mainStyle";

const ComunityInfoContainer = () => {
  return (
    <ComunityContainerWrap>
      <MainHeader white applied />
      <CommunityInfo />
      <Footer />
    </ComunityContainerWrap>
  );
};

export default ComunityInfoContainer;
