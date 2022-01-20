import React from "react";
import Image from "next/image";
import { myLoader } from "./myLoader";
import Toggle from "./Toggle";
import { BackHeaderStyle, MainHeaderStyle } from "./headerStyle";
const ApplicationHeader = ({ white, message, notoggle }) => {
  return (
    <BackHeaderStyle style={white ? { background: "#fff" } : {}}>
      <Image loader={myLoader} src="/imgs/backimg.png" objectFit="cover" alt="me" width="24" height="24" />
      <div>
        <span>{message}</span>
      </div>
      {notoggle ? (
        <button></button>
      ) : (
        <button className="toggle">
          <Toggle />
        </button>
      )}
    </BackHeaderStyle>
  );
};

export default ApplicationHeader;
