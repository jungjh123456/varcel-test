import React, { useEffect } from "react";
import { MainSection6Wrap } from "./mainComponentStyle";
import ReviewSlick from "../asset/ReviewSlick";
import { useDispatch, useSelector } from "react-redux";
import { getComunity } from "../../redux/reducers/modules/main";
const MainSection6 = () => {
  const dispatch = useDispatch();
  const {
    main: { list },
  } = useSelector(({ main }) => ({ main }));
  useEffect(() => {
    const name = "services/mainreviews/";
    dispatch(getComunity({ name }));
  }, [dispatch]);
  return (
    <MainSection6Wrap>
      <div className="container">
        <div className="reason-text">
          <span>똑똑쌤을 선택한</span>
          <span>
            똑똑맘의 <span>생생한 수업후기</span>
          </span>
        </div>
        <div className="card">
          <ReviewSlick list={list} />
        </div>
        {/* <div className="plus-btn">
          <Link href="/">
            <a>
              <span>더보기</span>
              <PlusIcon />
            </a>
          </Link>
        </div> */}
      </div>
    </MainSection6Wrap>
  );
};

export default MainSection6;
