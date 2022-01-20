import { useRouter } from "next/dist/client/router";
import React from "react";
import MainHeader from "../../components/asset/MainHeader";
import { StudyInfoContainerWrap } from "./myPageStyle";

const StudyInfoContainer = () => {
  const history = useRouter();
  return (
    <StudyInfoContainerWrap>
      <MainHeader message={"체험수업 알림노트"} applied white />
      {history.query.program === "study" && (
        <div className="container">
          <h1>김소연 (유하늘) 체험수업</h1>
          <span>2021.12.13 (월) 오전 10시 30분 수업</span>
          <div className="general_optional">
            <h2>
              <span>아동 언어발달 종합의견</span>
              <span>✍🏽</span>
            </h2>
            <div>
              <span>
                아동은 호명반응 및 상호작용이 잘 이루어지며 간단한 지시에 행동으로 표현하는 모습 보였습니다 현재 아동은 의미있는 언어 표현이 극히 적은 편으로 어휘폭발기 시기임에도 불구하고 표현하는
                어휘의 수가 거의 없었습니다. 요구및 거부하기 등 자신의 의사를 행동 및 울음으로 표현하였으며, 수업중 관찰된 표현어휘갯수는 10개 미만정도로 보였다는 점에서 지속적인 자극이
                필요해보입니다.
              </span>
            </div>
          </div>
          <div className="months_class">
            <h2>
              <span>추천 수업개월 수</span>
              <span>📄</span>
            </h2>
            <div>
              <input type="radio" id="one" name="recommend_date" />
              <label htmlFor="one">1개월</label>
              <input type="radio" id="two" name="recommend_date" />
              <label htmlFor="two">2개월</label>
              <input type="radio" id="three" name="recommend_date" />
              <label htmlFor="three">3개월</label>
              <input type="radio" id="six" name="recommend_date" />
              <label htmlFor="six">6개월</label>
              <input type="radio" id="tweve" name="recommend_date" />
              <label htmlFor="tweve">12개월</label>
            </div>
          </div>
          <div className="general_optional">
            <h2>
              <span>정규수업 예상 커리큘럼</span>
              <span>📄</span>
            </h2>
            <div>
              <span>
                아동은 호명반응 및 상호작용이 잘 이루어지며 간단한 지시에 행동으로 표현하는 모습 보였습니다 현재 아동은 의미있는 언어 표현이 극히 적은 편으로 어휘폭발기 시기임에도 불구하고 표현하는
                어휘의 수가 거의 없었습니다. 요구및 거부하기 등 자신의 의사를 행동 및 울음으로 표현하였으며, 수업중 관찰된 표현어휘갯수는 10개 미만정도로 보였다는 점에서 지속적인 자극이
                필요해보입니다.
              </span>
            </div>
          </div>
        </div>
      )}
      {history.query.program === "born_study" && (
        <div className="container">
          <h1>4/24회차</h1>
          <span>2021.12.13 (월) 오전 10시 30분</span>
          <div className="general_optional">
            <h2>
              <span>오늘의 수업 계획</span>
              <span>✍🏽</span>
            </h2>
            <div>
              <span>구조화된 놀이상황 제시 및 상호작용 증진을 위한 활동</span>
            </div>
          </div>

          <div className="general_optional">
            <h2>
              <span>수업활동 내용</span>
              <span>💬</span>
            </h2>
            <div>
              <span>
                아동은 호명반응 및 상호작용이 잘 이루어지며 간단한 지시에 행동으로 표현하는 모습 보였습니다 현재 아동은 의미있는 언어 표현이 극히 적은 편으로 어휘폭발기 시기임에도 불구하고 표현하는
                어휘의 수가 거의 없었습니다. 요구및 거부하기 등 자신의 의사를 행동 및 울음으로 표현하였으며, 수업중 관찰된 표현어휘갯수는 10개 미만정도로 보였다는 점에서 지속적인 자극이
                필요해보입니다.
              </span>
            </div>
          </div>
          <div className="general_optional">
            <h2>
              <span>오늘의 상담내용</span>
              <span>💡</span>
            </h2>
            <div>
              <span>
                아동은 호명반응 및 상호작용이 잘 이루어지며 간단한 지시에 행동으로 표현하는 모습 보였습니다 현재 아동은 의미있는 언어 표현이 극히 적은 편으로 어휘폭발기 시기임에도 불구하고 표현하는
                어휘의 수가 거의 없었습니다. 요구및 거부하기 등 자신의 의사를 행동 및 울음으로 표현하였으며, 수업중 관찰된 표현어휘갯수는 10개 미만정도로 보였다는 점에서 지속적인 자극이
                필요해보입니다.
              </span>
            </div>
          </div>
        </div>
      )}
    </StudyInfoContainerWrap>
  );
};

export default StudyInfoContainer;
