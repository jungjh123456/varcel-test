import React, { useEffect } from "react";
import AppliHeader from "../../components/asset/AppliHeader";
import ArrowIcon from "../../components/asset/ArrowIcon";
import { ReviewContainerWrap, StudyManageMentContainerWrap } from "./myPageStyle";
import { timeDate } from "../../lib/api/timeDate";
import NextIcon from "../../components/asset/NextIcon";
import MainHeader from "../../components/asset/MainHeader";
import { useDispatch, useSelector } from "react-redux";
import { clearNote, clearReview, getPaymentList, getReviewList } from "../../redux/reducers/modules/myPage";
import { useRouter } from "next/dist/client/router";

const ReviewContainer = () => {
  const dispatch = useDispatch();
  const {
    myPage: { reviewList },
  } = useSelector(({ myPage }) => ({ myPage }));
  const {
    auth: { token },
  } = useSelector(({ auth }) => ({ auth }));
  useEffect(() => {
    dispatch(getReviewList({ token }));
  }, []);
  const history = useRouter();
  const goInfo = (e) => {
    if (e.target.dataset.status === "true") {
      history.push(`/myPage/review_log/${e.target.dataset.id}?status=true&program=${e.target.dataset.program}`);
      return;
    }
    if (e.target.dataset.status === "false") {
      history.push(`/myPage/review_log/${e.target.dataset.id}?status=false&program=${e.target.dataset.program}`);
      return;
    }
  };

  useEffect(() => {
    dispatch(clearNote());
  }, []);
  const backBtn = (e) => {
    dispatch(clearReview());
    history.back();
  };
  return (
    <ReviewContainerWrap>
      <MainHeader backBtn={backBtn} white applied />
      <div className="container">
        <h2>후기 관리</h2>
        <div className="study_wrap">
          {reviewList?.sessionbatch_list?.map((item, i) => {
            return (
              <div key={i} data-program="sessions" onClick={goInfo} data-status={item.content ? true : false} data-id={item.id} className="card">
                <div data-program="sessions" data-status={item.content ? true : false} data-id={item.id}>
                  <div data-program="sessions" data-status={item.content ? true : false} data-id={item.id}>
                    <span data-program="sessions" data-status={item.content ? true : false} data-id={item.id}>
                      {item.product}
                    </span>
                    <span data-program="sessions" data-status={item.content ? true : false} data-id={item.id}>
                      {timeDate(item.start_datetime)} - {timeDate(item.end_datetime)}
                    </span>
                    <span data-program="sessions" data-status={item.content ? true : false} data-id={item.id}>
                      {item.counselor} 선생님
                    </span>
                  </div>
                </div>
                <div data-program="sessions" data-status={item.content ? true : false} data-id={item.id}>
                  <span data-program="sessions" data-status={item.content ? true : false} data-id={item.id}>
                    {item.content ? "작성완료" : "후기 작성하기"}
                  </span>
                  <NextIcon dataprogram="sessions" datastatus={item.status} id={item.id} />
                </div>
              </div>
            );
          })}
          {reviewList?.presession_list?.map((item, i) => {
            return (
              <div key={i} data-program="presessions" onClick={goInfo} data-status={item.content ? true : false} data-id={item.id} className="card">
                <div data-program="presessions" data-status={item.content ? true : false} data-id={item.id}>
                  <div data-program="presessions" data-status={item.content ? true : false} data-id={item.id}>
                    <span data-program="presessions" data-status={item.content ? true : false} data-id={item.id}>
                      {item.product} (체험권)
                    </span>
                    <span data-program="presessions" data-status={item.content ? true : false} data-id={item.id}>
                      {timeDate(item.start_datetime)} - {timeDate(item.end_datetime)}
                    </span>
                    <span data-program="presessions" data-status={item.content ? true : false} data-id={item.id}>
                      {item.counselor} 선생님
                    </span>
                  </div>
                </div>
                <div data-program="presessions" data-status={item.content ? true : false} data-id={item.id}>
                  <span data-program="presessions" data-status={item.content ? true : false} data-id={item.id}>
                    {item.content ? "작성완료" : "후기 작성하기"}
                  </span>
                  <NextIcon dataprogram="presessions" datastatus={item.status} id={item.id} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </ReviewContainerWrap>
  );
};

export default ReviewContainer;
