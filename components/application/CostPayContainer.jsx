import React, { useState } from "react";
import { useEffect } from "react";
import BigButton from "../asset/BigButton";
import MainHeader from "../asset/MainHeader";
import Progress from "../asset/Progress";
import { CostPayContainerWrap } from "./applicationstyle";
import { loadTossPayments } from "@tosspayments/payment-sdk";
import { uuid } from "uuidv4";
import { useRouter } from "next/dist/client/router";
const CostPayContainer = () => {
  const [toss, setToss] = useState({});
  const history = useRouter();

  useEffect(() => {
    const main = async () => {
      const tossPayments = await loadTossPayments("test_ck_N5OWRapdA8dQEWGxL4W3o1zEqZKL");
      setToss(tossPayments);
    };
    main();
  }, []);
  const payBtn = () => {
    const customer_id = `${uuid()}`;

    toss.requestBillingAuth("카드", {
      customerKey: customer_id,
      successUrl: "http://localhost:3000/application/8?id=35",
      failUrl: "http://localhost:3000/fail",
    });
  };

  // 모두 체크
  const [allCheckState, setAllCheckState] = useState({ chk1: false, chk2: false });
  const allCheck = (e) => {
    if (e.target.checked) {
      setAllCheckState((state) => ({ ...state, chk1: true, chk2: true }));
      return;
    }
    if (!e.target.checked) {
      setAllCheckState((state) => ({ ...state, chk1: false, chk2: false }));
      return;
    }
  };
  const checkState = (e) => {
    if (e.target.dataset.name === "check1") {
      if (e.target.checked) {
        setAllCheckState((state) => ({ ...state, chk1: true }));
        return;
      }
      if (!e.target.checked) {
        setAllCheckState((state) => ({ ...state, chk1: false }));
        return;
      }
      return;
    }
    if (e.target.dataset.name === "check2") {
      if (e.target.checked) {
        setAllCheckState((state) => ({ ...state, chk2: true }));
        return;
      }
      if (!e.target.checked) {
        setAllCheckState((state) => ({ ...state, chk2: false }));
        return;
      }
      return;
    }
  };
  return (
    <CostPayContainerWrap>
      <MainHeader applied message={"수업일정"} white />
      <div className="container">
        <div className="progress">
          <Progress info="application" param={8} prevPercent={100} percent={100} />
        </div>
        <h1>결제정보를 확인해주세요.</h1>
        <div className="talk-btn">
          <BigButton>1:1 문의하기</BigButton>
        </div>
        <div className="program_wrap">
          <h2>언어 발달자극 프로그램</h2>
          <div>
            <div>
              <span>담당 치료사</span>
              <span>강명실 선생님</span>
            </div>
            <div>
              <span>이용권</span>
              <span>체험이용권</span>
            </div>
            <div>
              <span>주문자 성함</span>
              <span>김한나 (박서현 아동)</span>
            </div>
          </div>
        </div>
        <div className="cost_info">
          <h2>최종 결제금액</h2>
          <div>
            <div>
              <span>할인혜택</span>
              <span>첫 체험할인 60%</span>
            </div>
            <div>
              <span>총 결제금액</span>
              <span>42900원</span>
            </div>
          </div>
        </div>
        <div className="cost_way">
          <h2>결제수단</h2>
          <div>
            <input type="radio" id="simple_pay" name="cost_way" />
            <label htmlFor="simple_pay">간편결제</label>
            <input type="radio" id="sinyong" name="cost_way" />
            <label htmlFor="sinyong">신용카드</label>
          </div>
        </div>
        <div className="check_list">
          <input onChange={allCheck} type="checkbox" id="all_check" />
          <label htmlFor="all_check">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
                fill="black"
                fillOpacity="0.4"
              />
            </svg>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="#6100FF" />
            </svg>
            모두 동의하기
          </label>
          <div>
            <input checked={allCheckState.chk1 ? true : false} onChange={checkState} data-name="check1" type="checkbox" id="guid" />
            <label htmlFor="guid">
              <div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fillOpacity="0.4" />
                </svg>
                <span>똑똑쌤 이용 가이드 동의 (필수)</span>
              </div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.58984 16.59L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.59Z" fill="black" fillOpacity="0.4" />
              </svg>
            </label>
            <input checked={allCheckState.chk2 ? true : false} onChange={checkState} data-name="check2" type="checkbox" id="agreed_cost" />
            <label htmlFor="agreed_cost">
              <div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z" fill="black" fillOpacity="0.4" />
                </svg>
                <span>회원약관 및 카드이용약관 동의 (필수)</span>
              </div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.58984 16.59L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.59Z" fill="black" fillOpacity="0.4" />
              </svg>
            </label>
          </div>
        </div>
        <div className="btn-group">
          <BigButton onClick={payBtn}>결제하기</BigButton>
        </div>
      </div>
    </CostPayContainerWrap>
  );
};

export default CostPayContainer;
