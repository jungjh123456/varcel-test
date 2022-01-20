import { useRouter } from "next/dist/client/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckIcons from "../../components/asset/CheckIcons";
import { timeDate } from "../../lib/api/timeDate";
import { ClassDetailStyleWrap } from "./counselorStyle";

const DetailCureInfo = () => {
  const history = useRouter();
  const dispatch = useDispatch();

  const {
    counselor: { profileInfo },
  } = useSelector(({ counselor }) => ({ counselor }));

  //   useEffect(() => {
  //     const id = pared.id;
  //     const name = "sessionbatches";
  //     const param = "alimtalk";
  //     const query = "?target=counselor&type=class_info";
  //     dispatch(classDetailChaum({ id, name, param, query }));
  //   }, [parsed.id]);
  const [state, setState] = useState(false);
  const okBtn = () => {
    setState(true);
  };
  return (
    <ClassDetailStyleWrap>
      <div className="container">
        <div className="user_info-wrap">
          <h2>
            <span>수업권 정보</span>
            <span>📌</span>
          </h2>
          <div>
            <div>
              <span>수업유형</span>
              <span>정규수업 {profileInfo?.quota}회권</span>
            </div>
            <div>
              <span>프로그램 유형</span>
              <span>{profileInfo?.product}</span>
            </div>
            <div>
              <span>세부 프로그램</span>
              <span>{profileInfo?.program}</span>
            </div>
            <div>
              <span>주당 수업 횟수</span>
              <span>{profileInfo?.weekly_visit_count}회</span>
            </div>
            {profileInfo?.weekly_visit_datetime ? (
              <>
                {" "}
                <div>
                  <span>수업일정</span>
                  <div style={{ display: "flex", flexDirection: "column", fontSize: "0.875rem" }}>
                    {profileInfo?.weekly_visit_datetime?.map((item, i, arr) => {
                      return <span key={i}>{item}</span>;

                      // return <span>{arr[arr.length - 1] === item ? "" : "수업일정"}</span>;
                    })}
                  </div>
                </div>
              </>
            ) : (
              <div>
                <span>수업일정</span>
                <span></span>
              </div>
            )}
          </div>
        </div>
        <div className="user_info-wrap">
          <h2>
            <span>회원정보</span>
            <span>👈🏼</span>
          </h2>
          <div>
            <div>
              <span>회원</span>
              <span>{profileInfo?.customer_name}</span>
            </div>
            <div>
              <span>아동이름</span>
              <span>{profileInfo?.kid_name}</span>
            </div>
            <div>
              <span>생년월일</span>
              <span>{timeDate(profileInfo?.birthday)}</span>
            </div>
            <div>
              <span>성별</span>
              <span>{profileInfo?.gender}</span>
            </div>
          </div>
        </div>
        <div className="detail_info-wrap">
          {profileInfo?.type === "영유아 발달자극 프로그램" ? (
            <>
              {" "}
              <h2>
                <span>상세정보</span>
                <span>👶🏻</span>
              </h2>
              <div>
                <div>
                  <span>어린이집 등원여부</span>
                  <span>{profileInfo?.is_attending_kindergarten ? "등원중" : "등원 중 아님"}</span>
                </div>
                <div>
                  <span>센터 및 병원치료경험</span>
                  <span>{profileInfo?.is_diagnosed ? "있음" : "없음"}</span>
                </div>

                <div>
                  <span>발달지연 및 지체장애진단 여부</span>
                  <span>{profileInfo?.diagnosis_history?.is_diagnosed ? "있음" : "없음"}</span>
                </div>
                <div>
                  <span>진단명</span>
                  <span>{profileInfo?.diagnosis_history?.diagnosed_with}</span>
                </div>
                <div>
                  <span>발달치료 이력여부</span>
                  <span>{profileInfo?.diagnosis_history?.is_treated ? "있음" : "없음"}</span>
                </div>
                <div>
                  <span>치료 종류명</span>
                  <span>
                    {profileInfo?.diagnosis_history?.treatment_list.map((item) => {
                      return "item, ";
                    })}
                  </span>
                </div>
                <div>
                  <span>치료 기관명</span>
                  {profileInfo?.diagnosis_history?.treated_location_list?.map((item) => {
                    return <span key={item}>{item}</span>;
                  })}
                </div>
                <div className="cuer_date">
                  <span>치료기간</span>
                  <div>
                    <span>{profileInfo?.diagnosis_history?.treatment_period}</span>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              {" "}
              <h2>
                <span>상세정보</span>
                <span>👶🏻</span>
              </h2>
              <div>
                <div>
                  <span>어린이집 등원여부</span>
                  <span>{profileInfo?.is_attending_kindergarten ? "등원중" : "등원 중 아님"}</span>
                </div>
                <div>
                  <span>센터 및 병원치료경험</span>
                  <span>{profileInfo?.is_diagnosed ? "있음" : "없음"}</span>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="address_info-wrap">
          <h2>
            <span>주소</span>
            <span>📍</span>
          </h2>
          <div>
            <div>
              <span>{profileInfo?.address}</span>
              <span>{profileInfo?.address_detail}</span>
            </div>
            <h2>
              <span>방문 시 참고사항</span>
              <span>❗️</span>
            </h2>
            <div className="visit_list-wrap">
              {profileInfo?.parking_option && (
                <div className="visit_list">
                  <CheckIcons />
                  <span>{profileInfo?.parking_option}</span>
                </div>
              )}

              <div className="visit_list">
                <CheckIcons />
                <span>애완동물 {profileInfo?.have_pets ? "있음" : "없음"}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="study_purpose-wrap">
          <h2>
            <span>홈티칭 수업 신청계기</span>
            <span>🔖</span>
          </h2>
          <div>
            <div className="visit_list-wrap">
              {profileInfo?.expectations?.map((item) => {
                return (
                  <div key={i} className="visit_list">
                    <CheckIcons />
                    <span>{item}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="btn-group"></div>
      </div>
    </ClassDetailStyleWrap>
  );
};

export default DetailCureInfo;
