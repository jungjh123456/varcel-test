import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BrainDevelopSection8wrap } from "../brainDevelop/brainDevelopStyle";
import PlusIcon from "../asset/PlusIcon";
const HomeGoSection8 = () => {
  return (
    <BrainDevelopSection8wrap>
      <div className="container">
        <h2>
          <span>믿을 수 있는 파트너,</span>
          <span>똑똑쌤은 어떻게 선발되나요?</span>
        </h2>
        <div className="linked-wrap">
          <Link href="/dockTeacher">
            <a>
              <span>똑똑쌤 선발이 궁금하다면?</span>
              <PlusIcon />
            </a>
          </Link>
        </div>
      </div>
    </BrainDevelopSection8wrap>
  );
};

export default HomeGoSection8;
