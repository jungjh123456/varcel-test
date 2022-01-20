import React from "react";
import Image from "next/image";
import { myLoader } from "../asset/myLoader";
import { Program5Wrap } from "./ProgramStyle";
import BigButton from "../asset/BigButton";
import Link from "next/link";
import PlusIcon from "../asset/PlusIcon";
const ProgramSection5 = ({ goDockTeacherBtn }) => {
  return (
    <Program5Wrap>
      <div className="container">
        <h2>
          <span>우리아이 발달의</span>
          <span>믿을 수 있는 파트너</span>
        </h2>

        <div className="teacher_text">
          <span>똑똑쌤은 모두 공인 발달재활 자격과 2년 이상의 아동발달 치료교육 실무경력, 아동발달 관련 학과 학위 및 후기/인터뷰를 통해 인성까지 검증된 믿을 수 있는 발달 선생님을 만나보세요!</span>
        </div>
        <div className="plus-btn">
          <Link href="/">
            <a>
              <span>자세히 보기</span>
              <PlusIcon />
            </a>
          </Link>
        </div>
        <div className="img-wrap">
          <Image loader={myLoader} src="/imgs/CircleImg.png" layout="responsive" objectFit="contain" alt="me" width="290" height="235" />
        </div>
      </div>
    </Program5Wrap>
  );
};

export default ProgramSection5;
