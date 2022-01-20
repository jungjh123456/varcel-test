import React from "react";
import Image from "next/image";
import { myLoader } from "./myLoader";
import Toggle from "./Toggle";
import { MainHeaderStyle, MainLeftMenuHeaderStyle } from "./headerStyle";
import CloseIcon from "./CloseIcon";
const LeftMenuHeader = ({ white, closeBtn }) => {
  return (
    <MainLeftMenuHeaderStyle style={white ? { background: "#fff" } : {}}>
      <Image loader={myLoader} src="/imgs/Logo.png" alt="me" width="80" height="56" />
      <button onClick={closeBtn} className="toggle">
        <CloseIcon />
      </button>
    </MainLeftMenuHeaderStyle>
  );
};

export default LeftMenuHeader;
