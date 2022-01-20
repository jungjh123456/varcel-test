import React from "react";
import ApplicationHeader from "../../components/asset/ApplicationHeader";
import BigButton from "../../components/asset/BigButton";
import MainHeader from "../../components/asset/MainHeader";
import WhiteArrow from "../../components/asset/WhiteArrow";
import { CounSelorReviewContainerWrap } from "./counselorStyle";

const CounSelorReplyListContainer = () => {
  return (
    <CounSelorReviewContainerWrap>
      <MainHeader applied message={"후기관리"} white notoggle />
      <div className="messag-wrap">
        <span>2개의 미응답 댓글</span>이 있습니다.
      </div>
      <div className="container">
        <h1>답글을 작성해주세요.</h1>
        <div className="text-wrap">
          <span>수업 후기를 확인하고, 답글을 달아보세요.</span>
          <span>답글 작성을 통해 프로필을 관리를 해보세요.</span>
        </div>
        <div className="review_list">
          <div className="review_card">
            <div>
              <div>
                <div>
                  <span>똑똑맘</span>
                </div>
                <div>
                  <span>2021.10.11</span>
                </div>
              </div>
              <div>
                <span>쌍둥이라서 항상 걱정이 많았는데 선생님이 너무 잘 아이들과 상호작용을 해주시는 것을 보고 너무 좋았습니다.</span>
              </div>
            </div>
            <div>
              <span>답글 작성하기</span>
              <WhiteArrow />
            </div>
          </div>
          <div className="review_card">
            <div>
              <div>
                <div>
                  <span>똑똑맘</span>
                </div>
                <div>
                  <span>2021.10.11</span>
                </div>
              </div>
              <div>
                <span>쌍둥이라서 항상 걱정이 많았는데 선생님이 너무 잘 아이들과 상호작용을 해주시는 것을 보고 너무 좋았습니다.</span>
              </div>
            </div>
            <div className="active">
              <span>답글 작성하기</span>
              <WhiteArrow />
            </div>
          </div>
        </div>
      </div>
    </CounSelorReviewContainerWrap>
  );
};

export default CounSelorReplyListContainer;
