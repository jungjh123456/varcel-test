import React, { useState } from "react";
import AppliHeader from "../../components/asset/AppliHeader";
import MyHeaderSave from "../../components/asset/MyHeaderSave.";
import PlusImgIcon from "../../components/asset/PlusImgIcon";
import { CompleteModalWrap, ProfileContainerWrap } from "./myPageStyle";
import DaumPostcode from "react-daum-postcode";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getProfile, patchProfile, profileClear } from "../../redux/reducers/modules/myPage";
import BigButton from "../../components/asset/BigButton";

const ProfileContainer = () => {
  const [addressModal, setAddressModal] = useState(false);
  const {
    auth: { token },
  } = useSelector(({ auth }) => ({ auth }));
  const dispatch = useDispatch();
  const {
    myPage: { profileInfo },
  } = useSelector(({ myPage }) => ({ myPage }));
  useEffect(() => {
    if (token) {
      dispatch(getProfile({ token }));
    }
  }, [token]);
  const modalStatebtb = (e) => {
    setAddressModal(true);
  };
  const [address, setAddress] = useState("");
  useEffect(() => {
    if (profileInfo?.address) {
      setAddress(profileInfo?.address);
    }
  }, [profileInfo?.address]);

  const [saveBtnState, setSaveBtnState] = useState(false);
  const handleComplete = (data) => {
    setSaveBtnState(true);

    // bname,sigungu
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress += extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    setAddressModal(false);
    setAddress(fullAddress);
    setSaveObj((state) => ({ ...state, address: fullAddress, sigungu: data?.sigungu, bname: data?.bname }));
  };
  const [url, setUrl] = useState("");
  const [saveObj, setSaveObj] = useState({});
  useEffect(() => {
    if (profileInfo?.profile_pic) {
      setUrl(profileInfo?.profile_pic);
    }
  }, [profileInfo?.profile_pic]);
  const imgChange = (e) => {
    setSaveBtnState(true);

    const blob = new Blob(e.target.files, { type: e.target.files[0]?.type });

    const urlImg = URL.createObjectURL(blob);

    setUrl(urlImg);

    setSaveObj((state) => ({ ...state, profile_pic: e.target.files[0] }));
  };

  const saveInput = (e) => {
    setSaveBtnState(true);
    // setFormDateState((state) => state.append([e.target.name], e.target.value));
    setSaveObj((state) => ({ ...state, [e.target.name]: e.target.value }));
  };
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    if (complete) {
      setUrl("");
      setAddress("");
      setSaveObj({});
      setSaveBtnState(false);
      dispatch(getProfile({ token }));
    }
  }, [complete]);

  const onSaveBtn = (e) => {
    const formData = new FormData();
    // formData.append("img", saveObj.img);
    for (let [key, value] of Object.entries(saveObj)) {
      formData.append(key, value);
    }
    // FormData의 값 확인

    const result = formData;
    const name = "personnels/users/";
    dispatch(patchProfile({ token, name, result }));
    setComplete(true);
  };
  const okBtn = (e) => {
    setComplete(false);
  };

  const backBtn = (e) => {
    dispatch(profileClear());
    history.back();
  };
  return (
    <>
      <ProfileContainerWrap>
        <MyHeaderSave backBtn={backBtn} onSaveBtn={onSaveBtn} white saveBtnState={saveBtnState} />
        <div className="container">
          <div className="img-wrap">
            <input onChange={imgChange} type="file" id="img" />
            <label htmlFor="img">
              <img src={url ? url : "/imgs/baby.png"} alt="프로필 이미지" />
            </label>
            <PlusImgIcon />
          </div>

          <div className="user_name-wrap">
            <span>전화번호</span>
            <input defaultValue={profileInfo?.cellphone} onChange={saveInput} type="text" name="cellphone" placeholder="01077777777" />
          </div>
          <div className="user_name-wrap">
            <span>이메일</span>
            <input defaultValue={profileInfo?.email} onChange={saveInput} type="text" name="email" placeholder="jjjj@naver.com" />
          </div>
          <div className="user_name-wrap">
            <span>성함</span>
            <input defaultValue={profileInfo?.nickname} onChange={saveInput} type="text" name="name" placeholder="장성원" />
          </div>
          <div className="user_name-wrap">
            <span>주소</span>
            <button style={address.length ? { color: "#000" } : {}} onClick={modalStatebtb} type="text" placeholder="서울 성동구 종암로 14길 19-4">
              {address.length ? address : "지번,도로명,건물명으로 검색"}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
                  fill="black"
                />
              </svg>
            </button>
            <input defaultValue={profileInfo?.address_detail} onChange={saveInput} type="text" name="address_detail" placeholder="상세주소를 입력해주세요" />
          </div>
          {addressModal && (
            <div className={addressModal ? "modal active" : "modal"}>
              <div className="address-wrap">
                <DaumPostcode style={{ maxWidth: "450px", boxSizing: "border-box", width: "100vw", height: "60vh" }} onComplete={handleComplete} />
              </div>
            </div>
          )}
        </div>
      </ProfileContainerWrap>
      {complete && (
        <CompleteModalWrap>
          <div className="container">
            <span>👍</span>
            <h2>저장이 완료되었습니다.</h2>
            <div className="btn-group">
              <BigButton onClick={okBtn}>확인했어요</BigButton>
            </div>
          </div>
        </CompleteModalWrap>
      )}
    </>
  );
};

export default ProfileContainer;
