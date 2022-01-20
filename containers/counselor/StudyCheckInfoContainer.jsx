import { useRouter } from "next/dist/client/router";
import React, { useState } from "react";
import { useRef } from "react";
import AngryIcon from "../../components/asset/AngryIcon";
import ApplicationHeader from "../../components/asset/ApplicationHeader";
import BoTongIcon from "../../components/asset/BoTongIcon";
import CamearIcon from "../../components/asset/CamearIcon";
import SmileIcon from "../../components/asset/SmileIcon";
import VeryAngryIcon from "../../components/asset/VeryAngryIcon";
import StudyCheckBornInfo from "../../components/counselor/StudyCheckBornInfo";
import StudyCheckChaumInfo from "../../components/counselor/StudyCheckChaumInfo";
import { timeInfofullDate } from "../../lib/api/timeDate";
import { ClassDetailContainerWrap } from "./counselorStyle";
import StudyInfo from "./StudyInfo";

const StudyCheckInfoContainer = () => {
  const history = useRouter();
  const [profileInfo, setProgileInfo] = useState({});
  const infoimg = useRef();

  const [imgName, setImgName] = useState([]);
  const [multiFile, setMultiFile] = useState([]);
  const changeImg = (e) => {
    // for (var value of e.target.files.keys()) {
    // 	console.log(value);
    // }
    if (imgName.length === 1) {
      setImgName((state) => [imgName[0], e.target.files]);
      return;
    }
    if (imgName.length >= 2 || multiFile.length >= 2) {
      setImgName([]);
      setMultiFile([]);
    }
    [...e.target.files].forEach((item) => {
      setMultiFile((state) => [...state, item]);
    });
  };
  return (
    <>
      {history.query.status === "prepending" && <StudyInfo />}
      {history.query.program === "presession" && history.query?.status !== "prepending" && <StudyCheckChaumInfo />}
      {history.query.program === "session" && history?.query?.status !== "prepending" && <StudyCheckBornInfo history={history} />}
    </>
  );
};

export default StudyCheckInfoContainer;
