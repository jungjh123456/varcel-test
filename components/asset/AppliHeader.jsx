import React from "react";
import Image from "next/image";
import { myLoader } from "./myLoader";
import Toggle from "./Toggle";
import { BackHeaderStyle, MainHeaderStyle } from "./headerStyle";
const AppliHeader = ({ white }) => {
  return (
    <BackHeaderStyle style={white ? { background: "#fff" } : {}}>
      <Image loader={myLoader} src="/imgs/backimg.png" objectFit="cover" alt="me" width="24" height="24" />
      <button className="toggle">
        <Toggle />
      </button>
    </BackHeaderStyle>
  );
};

export default AppliHeader;
