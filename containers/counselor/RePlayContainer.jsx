import React, { useEffect, useState } from "react";
import ApplicationHeader from "../../components/asset/ApplicationHeader";
import BigButton from "../../components/asset/BigButton";
import MainHeader from "../../components/asset/MainHeader";
import StarComponent from "../../components/asset/StarComponent";
import { RePlayContainerWrap } from "./counselorStyle";

const RePlayContainer = () => {
  const [text, setText] = useState("-");
  const [starLating, setStarLating] = useState(0);
  const [hover, setHover] = useState(null);
  const [rating, setRating] = useState({});
  const [sendMessageError, setSendMessageError] = useState("");

  useEffect(() => {
    if (rating.cleanliness === 1) {
      setText("부족했어요");
    }
    if (rating.cleanliness === 2) {
      setText("아쉬웠어요");
    }
    if (rating.cleanliness === 3) {
      setText("괜찮았어요");
    }
    if (rating.cleanliness === 4) {
      setText("따뜻했어요");
    }
    if (rating.cleanliness === 5) {
      setText("최고였어요");
    }
  }, [rating.cleanliness]);
  useEffect(() => {
    if (starLating) {
      setHover(starLating);
    }
  }, [starLating]);

  useEffect(() => {
    setStarLating(hover);
  }, [hover]);
  // 각 star rating의 상태를 관리하는 event function (name props로 식별)
  const changeStarRating = (starValue) => (e) => {
    const form = e.target.name;
    setSendMessageError("");
    setRating({ ...rating, [form]: starValue });
  };
  return (
    <RePlayContainerWrap>
      <MainHeader applied message={"후기관리"} white notoggle />
      <div className="container">
        <h1>답글을 작성해주세요.</h1>
        <div className="star_wrap">
          <StarComponent text={text} hover={hover} setHover={setHover} changeStarRating={changeStarRating} rating={rating} />
        </div>
        <div className="customer_review">
          <span>고객 후기</span>
          <div>
            <span>강영실 선생님 덕분에 아이의 언어가 많이 발전했다고 느끼고 있습니다.</span>
          </div>
          {/* <textarea placeholder="강영실 선생님 덕분에 아이의 언어가 많이 발전했다고 느끼고 있습니다." name="" id="" cols="30" rows="10"></textarea> */}
        </div>
        <div className="teacher_review">
          <span>선생님 답글</span>
          <textarea placeholder="강영실 선생님 덕분에 아이의 언어가 많이 발전했다고 느끼고 있습니다." name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div className="btn-group">
          <BigButton disabled>후기 제출하기</BigButton>
        </div>
      </div>
    </RePlayContainerWrap>
  );
};

export default RePlayContainer;
