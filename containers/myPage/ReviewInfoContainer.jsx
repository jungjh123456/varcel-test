import React, { useEffect, useState } from "react";
import AppliHeader from "../../components/asset/AppliHeader";
import Image from "next/image";
import { myLoader } from "../../components/asset/myLoader";
import { ModalStyle, ReviewInfoContainerWrap } from "./myPageStyle";
import { StarComponentWrap } from "../../components/asset/assetStyle";
import StarComponent from "../../components/asset/StarComponent";
import { useRouter } from "next/dist/client/router";
import MainHeader from "../../components/asset/MainHeader";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearNote, clearSuccess, getAlimeNote, reviewPatch } from "../../redux/reducers/modules/myPage";
import { timeDate } from "../../lib/api/timeDate";
import BigButton from "../../components/asset/BigButton";

const ReviewInfoContainer = () => {
  const [text, setText] = useState("-");
  const [starLating, setStarLating] = useState(0);
  const [hover, setHover] = useState(null);
  const [rating, setRating] = useState({});
  const [sendMessageError, setSendMessageError] = useState("");
  const history = useRouter();
  const {
    auth: { token },
  } = useSelector(({ auth }) => ({ auth }));
  const {
    myPage: { success, alimeNoteInfo },
  } = useSelector(({ myPage }) => ({ myPage }));

  useEffect(() => {
    if (history.query.id) {
      const name = `services/classes/reviews/loggedin_user/${history.query.id}/`;
      dispatch(getAlimeNote({ name }));
    }
  }, [history.query.id]);
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
  const [feedback, setfeedback] = useState("");
  useEffect(() => {
    if (history.query.status === "true") {
      setRating({ cleanliness: 3 });
      setfeedback("dd");
    }
  }, [history.query.status]);
  const onTextChange = (e) => {
    setfeedback(e.target.value);
  };
  const dispatch = useDispatch();
  const saveReview = () => {
    if (history.query.program === "presessions") {
      const result = { content: feedback, star: +rating?.cleanliness, presession: +history.query.id };
      dispatch(reviewPatch({ token, result }));
      return;
    }
    if (history.query.program === "sessions") {
      const result = { content: feedback, star: +rating?.cleanliness, sessionbatch: +history.query.id };
      dispatch(reviewPatch({ token, result }));
      return;
    }
  };
  useEffect(() => {
    if (success) {
      setRating({});
      setHover(null);
      setText("-");
      setStarLating(0);
      setfeedback("");
    }
  }, [success]);
  const backBtn = (e) => {
    dispatch(clearNote());
    history.back();
  };
  const okBtn = (e) => {
    history.push("/myPage/review_log");
    dispatch(clearSuccess());
  };
  return (
    <>
      <ReviewInfoContainerWrap>
        <MainHeader backBtn={backBtn} applied white />
        <div className="container">
          <h1>솔직한 후기를 알려주세요.</h1>
          <div className="img-wrap">
            <Image loader={myLoader} src="/imgs/teacher.png" objectFit="contain" alt="me" width="96" height="96" />
          </div>
          <div className="teacher-info">
            <div>
              <span>담당 치료사</span>
              <span>{alimeNoteInfo?.counselor} 선생님</span>
            </div>
            <div>
              <span>프로그램</span>
              <span>{alimeNoteInfo?.product}</span>
            </div>
            <div>
              <span>이용권</span>
              <span>{alimeNoteInfo?.program}</span>
            </div>
            <div>
              <span>수업 유형</span>
              <span>
                {alimeNoteInfo?.type} {alimeNoteInfo?.quota ? `${alimeNoteInfo?.quota}회권` : ""}
              </span>
            </div>
            <div>
              <span>기간</span>
              <span>
                {timeDate(alimeNoteInfo?.class_duration)} - {timeDate(alimeNoteInfo?.class_duration)}
              </span>
            </div>
          </div>
          <div className="star_wrap">
            <StarComponent text={text} hover={hover} setHover={setHover} changeStarRating={changeStarRating} rating={rating} />
          </div>
          <div className="review_text">
            <span>후기 작성하기</span>
            <textarea
              value={feedback}
              onChange={onTextChange}
              placeholder="선생님으로부터 도움을 받았던 부분, 개선이 되었으면 하는 부분 등을 자세히 기록해주세요."
              name="review"
              id=""
              cols="30"
              rows="10"
              disabled={history.query.status === "true" ? true : false}
            ></textarea>
          </div>
          {history.query.status === "true" && (
            <div className="review_text">
              <span>선생님 답변</span>
              <textarea disabled placeholder="선생님으로부터 도움을 받았던 부분, 개선이 되었으면 하는 부분 등을 자세히 기록해주세요." name="" id="" cols="30" rows="10"></textarea>
            </div>
          )}
          {history.query.status === "false" && (
            <div className="btn-group">
              <button onClick={saveReview} disabled={rating?.cleanliness && feedback ? false : true}>
                후기 저장하기
              </button>
            </div>
          )}
        </div>
      </ReviewInfoContainerWrap>
      {success && (
        <ModalStyle>
          <div className="container">
            <span>👏</span>
            <h2>제출이 완료되었습니다.</h2>
            <div className="text-wrap">
              <span>고객님의 후기가 선생님에게 전달되었습니다.</span>
              <span>더 나은 수업 준비를 위해 노력하겠습니다.</span>
            </div>
            <BigButton onClick={okBtn}>확인했어요.</BigButton>
          </div>
        </ModalStyle>
      )}
    </>
  );
};

export default ReviewInfoContainer;
