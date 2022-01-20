import React from "react";
import { MainSection3Wrap } from "../main/mainComponentStyle";
import Image from "next/image";
import { myLoader } from "../asset/myLoader";
import { DockTeacherSection3wrap } from "./dockTeacherStyle";
const DockTeacherSection3 = () => {
  return (
    <DockTeacherSection3wrap>
      <div className="container">
        <Image loader={myLoader} src="/imgs/dockBaby.png" layout="responsive" objectFit="contain" alt="me" width="360" height="520" />
      </div>
    </DockTeacherSection3wrap>
  );
};

export default DockTeacherSection3;
