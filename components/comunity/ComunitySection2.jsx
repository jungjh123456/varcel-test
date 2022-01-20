import React, { useEffect } from "react";
import { ComunitySection2Wrap } from "./comunityStyle";
import Image from "next/image";
import { myLoader } from "../asset/myLoader";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearList, getComunity } from "../../redux/reducers/modules/main";
import { useRouter } from "next/dist/client/router";

const ComunitySection2 = () => {
  const [menuState, setMenuState] = useState("baldal");
  const dispatch = useDispatch();
  const history = useRouter();
  const {
    main: { list },
  } = useSelector(({ main }) => ({ main }));
  useEffect(() => {
    if (menuState === "baldal") {
      dispatch(clearList());
      const name = "services/columns/";
      dispatch(getComunity({ name }));
    }
    if (menuState === "review") {
      dispatch(clearList());

      const name = "services/mainreviews/";
      dispatch(getComunity({ name }));
    }
    if (menuState === "interview") {
      dispatch(clearList());

      const name = "services/interviews/";
      dispatch(getComunity({ name }));
    }
    if (menuState === "etc") {
      dispatch(clearList());

      const name = "services/notices/";
      dispatch(getComunity({ name }));
    }
  }, [menuState]);
  const checkChange = (e) => {
    setMenuState(e.target.value);
  };
  const goInfoCard = (e) => {
    history.push(`/comunity/${e.target.dataset.id}?program=${e.target.dataset.program}`);
  };
  return (
    <ComunitySection2Wrap>
      <div className="container">
        <div className="tab_list-wrap">
          <div>
            <input onChange={checkChange} type="radio" checked={menuState === "baldal" ? true : false} id="tab1" name="tabs" value="baldal" />
            <label htmlFor="tab1">
              <span>✍️</span>
              <span>발달칼럼</span>
            </label>
            <input onChange={checkChange} type="radio" checked={menuState === "review" ? true : false} id="tab2" name="tabs" value="review" />
            <label htmlFor="tab2">
              <span>💬</span>
              <span>똑똑맘 후기</span>
            </label>
            <input onChange={checkChange} type="radio" id="tab3" checked={menuState === "interview" ? true : false} name="tabs" value="interview" />
            <label htmlFor="tab3">
              <span>👂🏼</span>
              <span>똑똑쌤 인터뷰</span>
            </label>
            <input onChange={checkChange} type="radio" checked={menuState === "etc" ? true : false} id="tab4" name="tabs" value="etc" />
            <label htmlFor="tab4">
              <span>📣</span>
              <span>공지사항</span>
            </label>
          </div>
        </div>
        <div className="card-wrap">
          {menuState === "baldal" && (
            <>
              {" "}
              {list.map((item) => {
                return (
                  <div key={i} onClick={goInfoCard} data-id={item.id} data-program="baldal" className="card">
                    <div data-id={item.id} data-program="baldal" className="img-wrap">
                      <img data-id={item.id} data-program="baldal" src="/imgs/testChirdren.png" alt="me" />
                    </div>
                    <div data-id={item.id} data-program="baldal" className="text-wrap">
                      <h2 data-id={item.id} data-program="baldal">
                        우리아이 정말 발달이 늦은걸까요?
                      </h2>
                      <div data-id={item.id} data-program="baldal" className="text">
                        <span data-id={item.id} data-program="baldal">
                          {item.content}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          )}
          {menuState === "review" && (
            <>
              {" "}
              {list.map((item) => {
                return (
                  <div key={i} onClick={goInfoCard} data-id={item.id} data-program="review" className="card">
                    <div data-id={item.id} data-program="review" className="img-wrap">
                      <img data-id={item.id} data-program="review" src="/imgs/testChirdren.png" alt="me" />
                    </div>
                    <div data-id={item.id} data-program="review" className="text-wrap">
                      <h2 data-id={item.id} data-program="review">
                        {item.name}
                      </h2>
                      <div data-id={item.id} data-program="review" className="text">
                        <span data-id={item.id} data-program="review">
                          {item.content}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          )}
          {menuState === "interview" && (
            <>
              {" "}
              {list.map((item) => {
                return (
                  <div key={i} onClick={goInfoCard} data-id={item.id} data-program="interview" className="card">
                    <div data-id={item.id} data-program="interview" className="img-wrap">
                      <img data-id={item.id} data-program="interview" src="/imgs/testChirdren.png" alt="me" />
                    </div>
                    <div data-id={item.id} data-program="interview" className="text-wrap">
                      <h2 data-id={item.id} data-program="interview">
                        우리아이 정말 발달이 늦은걸까요?
                      </h2>
                      <div data-id={item.id} data-program="interview" className="text">
                        <span data-id={item.id} data-program="interview">
                          {item.content}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          )}
          {menuState === "etc" && (
            <>
              {" "}
              {list.map((item) => {
                return (
                  <div key={i} onClick={goInfoCard} data-id={item.id} data-program="etc" className="card">
                    <div data-id={item.id} data-program="etc" className="img-wrap">
                      <img data-id={item.id} data-program="etc" src="/imgs/testChirdren.png" alt="me" />
                    </div>
                    <div data-id={item.id} data-program="etc" className="text-wrap">
                      <h2 data-id={item.id} data-program="etc">
                        우리아이 정말 발달이 늦은걸까요?
                      </h2>
                      <div data-id={item.id} data-program="etc" className="text">
                        <span data-id={item.id} data-program="etc">
                          {item.content}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </ComunitySection2Wrap>
  );
};

export default ComunitySection2;
