import React from "react";
import Image from "next/image";
import { myLoader } from "./myLoader";
import Toggle from "./Toggle";
import { BackHeaderStyle, MainHeaderStyle, SaveHeaderStyle } from "./headerStyle";
import { useRouter } from "next/dist/client/router";
const MyHeaderSave = ({ white, saveBtnState, onSaveBtn, backBtn }) => {
  const history = useRouter();
  const backbtn = (e) => {
    history.Back();
  };
  return (
    <SaveHeaderStyle style={white ? { background: "#fff" } : {}}>
      <svg onClick={backBtn ? backBtn : backbtn} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="black" />
      </svg>

      {saveBtnState ? (
        <button onClick={onSaveBtn} style={{ color: "#6100ff" }} className="toggle">
          저장하기
        </button>
      ) : (
        <button className="toggle">수정하기</button>
      )}
    </SaveHeaderStyle>
  );
};

export default MyHeaderSave;
