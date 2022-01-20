import React from "react";
import { useMediaQuery } from "react-responsive";
import Loading from "../components/asset/Loading";
import dynamic from "next/dynamic";
import QuestionContainer from "../containers/QuestionContainer";
const question = () => {
  const isPc = useMediaQuery({ query: "(min-width: 850px)" });
  const HeavyComponent = dynamic(import("../containers/QuestionContainer"), {
    loading: () => <QuestionContainer />,
    ssr: true,
  });
  return <QuestionContainer />;
};

export default question;
