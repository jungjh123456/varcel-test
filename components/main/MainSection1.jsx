import React from "react";
import { ImageWrap, Mainsection1Wrap } from "./mainComponentStyle";
import Image from "next/image";
import { myLoader } from "../asset/myLoader";
// const myLoader = ({ src, width, quality }) => {
//   return `https://master.d1w0rhvxlv5xov.amplifyapp.com${src}?w=${width}&q=${quality || 75}`;
// };
const MainSection1 = ({ applicationBtn }) => {
  return (
    <Mainsection1Wrap>
      <div className="container">
        <div>
          <span className="heading">
            <span>똑똑</span>쌤 홈티칭
          </span>
          {/* <div className="img-wrap">
            <Image loader={myLoader} objectFit="cover" src="/imgs/mainText.png" alt="me" width="320" height="62" />
          </div> */}
          <h1 className="heading-wrap">
            <span>믿을 수 있는</span>
            <span>우리아이 발달 선생님</span>
          </h1>
          <div className="sub_title">
            <span>
              영유아 <span>발달자극</span>부터
            </span>
            <span>
              아동 <span>발달치료 교육</span>까지,
            </span>
          </div>
        </div>

        <div className="btn-group">
          <Image loader={myLoader} layout="responsive" objectFit="cover" src="/imgs/section1bg.png" alt="me" width="360px" height="327" />
          <div>
            <button onClick={applicationBtn}>지금 바로 똑똑쌤을 찾아보세요</button>
          </div>
        </div>
      </div>
    </Mainsection1Wrap>
  );
};

export default MainSection1;
