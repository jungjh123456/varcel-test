import React, { useEffect, useRef, useState } from "react";

import axios from "axios";

import { useDispatch, useSelector } from "react-redux";

import { API } from "../../lib/api/restApi";
import { ClassDetailContainerWrap, ClassReviewModalWrap } from "./CounselorStyle";
import { useRouter } from "next/dist/client/router";
import MainHeader from "../asset/MainHeader";
import { AlimeNotetimeInfofullDate } from "../../lib/api/timeDate";
import CamearIcon from "../asset/CamearIcon";
import SmileIcon from "../asset/SmileIcon";
import BoTongIcon from "../asset/BoTongIcon";
import AngryIcon from "../asset/AngryIcon";
import VeryAngryIcon from "../asset/VeryAngryIcon";
import BigButton from "../asset/BigButton";
const StudyCheckChaumInfo = () => {
  const [modalState, setModalState] = useState(false);
  const history = useRouter();

  const [profileInfos, setProgileInfos] = useState({});
  const infoimg = useRef();

  const [imgName, setImgName] = useState([]);
  const [multiFile, setMultiFile] = useState([]);
  // const history.query = usePar();
  const {
    counselor: { profileInfo },
  } = useSelector(({ counselor }) => ({ counselor }));
  const dispatch = useDispatch();
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
    [...e.target.files].forEach((item, i) => {
      setMultiFile((state) => [...state, item]);
    });
  };
  useEffect(() => {
    if (profileInfo.id && history.query.complete === "true") {
      setProgileInfos(profileInfo);
      setMultiFile(profileInfo.journal_image || []);
      setImgName(profileInfo.journal_image || []);
    }
  }, [history.query.complete, profileInfo, profileInfo.id]);
  const nextModal = (e) => {
    submit();
    setModalState(true);
  };

  const noNext = (e) => {
    history.replace(`/counselor/study_check`);
    setModalState(false);
  };

  const [counselinginfo, setCounselingInfo] = useState({
    status: "??????",
    is_masked: "",
    note_for_operator: "",

    parent_reaction: "",
  });
  const changeInput = (e) => {
    if (e.target.name === "is_masked") {
      setCounselingInfo((state) => ({ ...state, is_masked: JSON.parse(e.target.value) }));
      return;
    }
    setCounselingInfo((state) => ({ ...state, [e.target.name]: e.target.value }));
  };
  const submit = (e) => {
    actionImgCompress(infoimg.current.files);
  };

  const actionImgCompress = async (fileSrc) => {
    dispatch(startLoading("IMGLOADING"));
    const formData = new FormData();
    if (multiFile.length === 0) {
      if (imgName.length === 1) {
        formData.append("journal_image", imgName[0][0]);
      }
      if (imgName.length === 2) {
        for (let i = 0; i < imgName[0].length; i++) {
          formData.append("journal_image", imgName[0][0]);
        }
        for (let i = 0; i < imgName[1].length; i++) {
          formData.append("journal_image", imgName[1][0]);
        }
      }
    }
    if (multiFile.length) {
      for (let i = 0; i < multiFile.length; i++) {
        formData.append("journal_image", multiFile[i]);
      }
    }
    // formData.append("status", "??????");
    formData.append("is_masked", counselinginfo.is_masked);
    formData.append("note_for_operator", counselinginfo.note_for_operator);
    // formData.append("recommended_months", counselinginfo.recommended_months);
    formData.append("parent_reaction", counselinginfo.parent_reaction);
    formData.append("page", 1);
    try {
      const body = formData;
      const res = await axios.patch(`${API}/classes/presessions/${history.query.id}/`, body);

      // dispatch({ type: "alime/REVIEW_SUCCESS" });
      dispatch(finishLoading("IMGLOADING"));
    } catch (error) {
      dispatch(finishLoading("IMGLOADING"));
    }
  };

  const imgCancelBtn = (e) => {
    e.stopPropagation();
    setMultiFile([]);
    setImgName([]);
  };

  // useEffect(() => {
  //   const id = history.query.id;
  //   const name = "presessions";
  //   const param = "alimtalk";
  //   const query = "?target=counselor&type=class_note";
  //   dispatch(classDetailChaum({ id, name, param, query }));
  // }, [history.query.id]);

  const goNextBtn = (e) => {
    history.push(`/classReview2?teacherId=${history.query.id}&id=${history.query.id}&page=mypage`);
  };
  return (
    <>
      <ClassDetailContainerWrap>
        <MainHeader message={"???????????? ????????????"} white applied notoggle />
        <div className="container">
          <div className="grid2">
            <h2>
              {profileInfo?.customer_name} ({profileInfo?.kid_name}) ????????????
            </h2>
            <span>{AlimeNotetimeInfofullDate(profileInfo?.scheduled_datetime)} ??????</span>
            <div>
              <span>??????????????? ?????? ??? 2?????? ??????, ????????? ?????? 2?????? ??????????????? ?????????????????? ??????????????? ??????????????????. ???????????? ??????????????? ?????? ?????? ????????? ?????????????????? ????????? ???????????????.</span>
            </div>
          </div>
          <div className="grid3">
            <h2>
              <span>????????? ?????? ?????????</span>
              <span>????</span>
            </h2>
            <>
              {history.query?.complete === "true" ? (
                <>
                  {" "}
                  {multiFile.length || imgName.length ? (
                    <>
                      {" "}
                      <input ref={infoimg} type="file" id="img-file" multiple disabled />
                      <label className="text-wrap" htmlFor="img-file">
                        {/* <CamearIcon /> */}
                        <span style={multiFile.length || imgName.length ? { color: "#000" } : {}}>{multiFile.length ? multiFile.length : imgName.length}/2</span>
                        <button onClick={(e) => e.stopPropagation()}>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="16.2422" y="6.34314" width="2" height="14" transform="rotate(45 16.2422 6.34314)" fill="#6100FF" />
                            <rect x="17.6562" y="16.2427" width="2" height="14" transform="rotate(135 17.6562 16.2427)" fill="#6100FF" />
                          </svg>
                        </button>
                      </label>
                    </>
                  ) : (
                    <>
                      {" "}
                      <input ref={infoimg} type="file" id="img-file" multiple disabled />
                      <label className="text-wrap_no" htmlFor="img-file">
                        <CamearIcon />
                        {/* <span style={multiFile.length || imgName.length ? { color: "#000" } : {}}>{multiFile.length ? multiFile.length : imgName.length}/2</span> */}
                      </label>
                    </>
                  )}
                </>
              ) : (
                <>
                  {" "}
                  {multiFile.length || imgName.length ? (
                    <>
                      {" "}
                      <input ref={infoimg} onChange={changeImg} type="file" id="img-file" multiple />
                      <label className="text-wrap" htmlFor="img-file">
                        {/* <CamearIcon /> */}
                        <span style={multiFile.length || imgName.length ? { color: "#000" } : {}}>{multiFile.length ? multiFile.length : imgName.length}/2</span>
                        <button onClick={imgCancelBtn}>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="16.2422" y="6.34314" width="2" height="14" transform="rotate(45 16.2422 6.34314)" fill="#6100FF" />
                            <rect x="17.6562" y="16.2427" width="2" height="14" transform="rotate(135 17.6562 16.2427)" fill="#6100FF" />
                          </svg>
                        </button>
                      </label>
                    </>
                  ) : (
                    <>
                      {" "}
                      <input ref={infoimg} onChange={changeImg} type="file" id="img-file" multiple />
                      <label className="text-wrap_no" htmlFor="img-file">
                        <CamearIcon />
                        {/* <span style={multiFile.length || imgName.length ? { color: "#000" } : {}}>{multiFile.length ? multiFile.length : imgName.length}/2</span> */}
                      </label>
                    </>
                  )}
                </>
              )}
            </>
          </div>
          <div className="mask_is">
            <h2>
              <span>????????? ????????????</span>
              <span>????</span>
            </h2>
            {history.query?.complete === "true" ? (
              <div className="input_list">
                <input checked={profileInfo?.is_masked ? true : false} disabled type="radio" id="yes_mask" value={true} name="is_masked" />
                <label htmlFor="yes_mask">
                  <div></div>
                  <span>???</span>
                </label>
                <input checked={profileInfo?.is_masked === false ? true : false} disabled type="radio" id="no_mask" value={false} name="is_masked" />
                <label htmlFor="no_mask">
                  <div></div>
                  <span>?????????</span>
                </label>
              </div>
            ) : (
              <div className="input_list">
                <input onChange={changeInput} value={true} type="radio" id="yes_mask" name="is_masked" />
                <label htmlFor="yes_mask">
                  <div></div>
                  <span>???</span>
                </label>
                <input onChange={changeInput} value={false} type="radio" id="no_mask" name="is_masked" />
                <label htmlFor="no_mask">
                  <div></div>
                  <span>?????????</span>
                </label>
              </div>
            )}
          </div>
          {history.query?.complete === "true" ? (
            <div className="phygical-wrap">
              <h2>
                <span>????????? ????????????</span>
                <span>????????</span>
              </h2>
              <div className="phygical-check-wrap">
                <input disabled checked={profileInfo?.parent_reaction === "?????? ?????????" ? true : false} value="?????? ?????????" type="radio" id="chk1_emotion" name="parent_reaction" />
                <label htmlFor="chk1_emotion">
                  <SmileIcon />
                  <div>
                    <span>??????</span>
                    <span>?????????</span>
                  </div>
                </label>
                <input disabled checked={profileInfo?.parent_reaction === "????????? ?????????" ? true : false} type="radio" value="????????? ?????????" id="chk2_emotion" name="parent_reaction" />
                <label htmlFor="chk2_emotion">
                  <SmileIcon />
                  <div>
                    <span>?????????</span>
                    <span>?????????</span>
                  </div>
                </label>
                <input disabled checked={profileInfo?.parent_reaction === "?????????" ? true : false} type="radio" value="?????????" id="chk3_emotion" name="parent_reaction" />
                <label htmlFor="chk3_emotion">
                  <BoTongIcon />
                  <div>
                    <span>?????????</span>
                  </div>
                </label>
                <input disabled type="radio" checked={profileInfo?.parent_reaction === "?????? ?????????" ? true : false} value="?????? ?????????" id="chk4_emotion" name="parent_reaction" />
                <label htmlFor="chk4_emotion">
                  <AngryIcon />
                  <div>
                    <span>??????</span>
                    <span>?????????</span>
                  </div>
                </label>
                <input disabled type="radio" checked={profileInfo?.parent_reaction === "?????? ?????????" ? true : false} value="?????? ?????????" id="chk5_emotion" name="parent_reaction" />
                <label htmlFor="chk5_emotion">
                  <VeryAngryIcon />
                  <div>
                    <span>??????</span>
                    <span> ?????????</span>
                  </div>
                </label>
              </div>
            </div>
          ) : (
            <div className="phygical-wrap">
              <h2>
                <span>????????? ????????????</span>
                <span>????????</span>
              </h2>
              <div className="phygical-check-wrap">
                <input onChange={changeInput} value="?????? ?????????" type="radio" id="chk1_emotion" name="parent_reaction" />
                <label htmlFor="chk1_emotion">
                  <SmileIcon />
                  <div>
                    <span>??????</span>
                    <span>?????????</span>
                  </div>
                </label>
                <input onChange={changeInput} type="radio" value="????????? ?????????" id="chk2_emotion" name="parent_reaction" />
                <label htmlFor="chk2_emotion">
                  <SmileIcon />
                  <div>
                    <span>?????????</span>
                    <span>?????????</span>
                  </div>
                </label>
                <input onChange={changeInput} type="radio" value="?????????" id="chk3_emotion" name="parent_reaction" />
                <label htmlFor="chk3_emotion">
                  <BoTongIcon />
                  <div>
                    <span>?????????</span>
                  </div>
                </label>
                <input onChange={changeInput} type="radio" value="?????? ?????????" id="chk4_emotion" name="parent_reaction" />
                <label htmlFor="chk4_emotion">
                  <AngryIcon />
                  <div>
                    <span>??????</span>
                    <span>?????????</span>
                  </div>
                </label>
                <input onChange={changeInput} type="radio" value="?????? ?????????" id="chk5_emotion" name="parent_reaction" />
                <label htmlFor="chk5_emotion">
                  <VeryAngryIcon />
                  <div>
                    <span>??????</span>
                    <span> ?????????</span>
                  </div>
                </label>
              </div>
            </div>
          )}

          <div className="Uniqueness">
            <h2>
              <span>???????????? ?????? ????????????</span>
              <span>???????</span>
            </h2>
            {history.query?.complete === "true" ? (
              <>
                {" "}
                <div className="uniqueness_text complete">
                  <span>{profileInfo?.note_for_operator}</span>
                </div>
              </>
            ) : (
              <>
                {" "}
                <div className="uniqueness_text">
                  <h3>???????????? ??????</h3>
                  <div>
                    <span>(1) ???????????? ????????? ?????? ?????? ????????? ?????????????</span>
                    <span>(2) ????????? ????????? ????????? ????????? ??????????????? ?????????????</span>
                    <span>(3) ??? ??? ???????????? ?????? ??? ??????????????? ????????? ??????????????????.</span>
                  </div>
                </div>
                <textarea onChange={changeInput} name="note_for_operator" id="" cols="30" placeholder="???????????? ?????? ??? ??????????????? ????????? ????????? ??????????????????." rows="10"></textarea>
              </>
            )}
          </div>
          {history.query?.complete === "true" ? (
            <>
              {" "}
              <div className="study_num">
                <h2>
                  <span>?????? ???????????? ???</span>
                  <span>????</span>
                </h2>

                <div className="study-check-wrap">
                  <input disabled value="1" checked={+profileInfo?.recommended_months === 1 ? true : false} type="radio" id="study1" name="recommended_months" />
                  <label htmlFor="study1">
                    <span>1??????</span>
                  </label>
                  <input disabled value="2" checked={+profileInfo?.recommended_months === 2 ? true : false} type="radio" id="study2" name="recommended_months" />
                  <label htmlFor="study2">
                    <span>2??????</span>
                  </label>
                  <input disabled value="3" checked={+profileInfo?.recommended_months === 3 ? true : false} type="radio" id="study3" name="recommended_months" />
                  <label htmlFor="study3">
                    <span>3??????</span>
                  </label>
                  <input disabled value="6" checked={+profileInfo?.recommended_months === 6 ? true : false} type="radio" id="study4" name="recommended_months" />
                  <label htmlFor="study4">
                    <span>6??????</span>
                  </label>
                  <input disabled value="12" checked={+profileInfo?.recommended_months === 12 ? true : false} type="radio" id="study5" name="recommended_months" />
                  <label htmlFor="study5">
                    <span>12??????</span>
                  </label>
                </div>
                <h2>
                  <span>?????? ?????? ?????? ??????</span>
                  <span>????</span>
                </h2>
                <div className="weekly_input-wrap">
                  <input disabled checked={+profileInfo?.recommended_weekly_visit_count === 1 ? true : false} type="radio" id="one" name="weekly_visit_count" />
                  <label htmlFor="one">1???</label>
                  <input disabled type="radio" checked={+profileInfo?.recommended_weekly_visit_count === 2 ? true : false} id="two" name="weekly_visit_count" />
                  <label htmlFor="two">2???</label>
                </div>
              </div>
              <div className="parent_opinion-wrap">
                <h2>
                  <span>???????????? ???????????? ??????</span>
                  <span>????</span>
                </h2>
                <div>
                  <span>{profileInfo?.plan_for_session}</span>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
          {history.query?.complete === "true" ? (
            <></>
          ) : (
            <div className="btn-group">
              <BigButton
                disabled={(multiFile.length || imgName.length) && (counselinginfo?.is_masked === false || counselinginfo?.is_masked) && counselinginfo?.parent_reaction ? false : true}
                onClick={nextModal}
              >
                ???????????? ???????????? 1/2
              </BigButton>
            </div>
          )}
        </div>
      </ClassDetailContainerWrap>
      {modalState && (
        <ClassReviewModalWrap>
          <div className="container">
            <span>????</span>
            <h2>??????????????? ?????????????????????????</h2>
            <div className="text-wrap">
              <span>????????? ????????? ?????????????????????. ????????? ???????????? ???????????? ???????????? ??????????????? ??????????????????.</span>
            </div>
            <div className="btn-group">
              <BigButton onClick={noNext} gray>
                ????????? ?????????
              </BigButton>
              <BigButton onClick={goNextBtn}>???????????????</BigButton>
            </div>
          </div>
        </ClassReviewModalWrap>
      )}
    </>
  );
};

export default StudyCheckChaumInfo;
