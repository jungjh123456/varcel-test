import Head from "next/head";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { SlugWrap } from "../components/style";
import MainContainer from "../containers/MainContainer";
import MainPcContainer from "../containers/MainPcContainer";
import dynamic from "next/dynamic";
import Loading from "../components/asset/Loading";
export default function Home() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 850px)" });
  const isPc = useMediaQuery({ query: "(min-width: 768px)" });
  const HeavyComponent = dynamic(import("../containers/MainContainer"), {
    loading: () => <MainContainer />,
    ssr: false,
  });
  // const HeavyPcComponent = dynamic(import("../containers/MainPcContainer"), {
  //   loading: () => <MainPcContainer />,
  //   ssr: true,
  // });
  return (
    <>
      <MainContainer />
      {/* <MainContainer /> */}
      {/* {isTabletOrMobile && <HeavyComponent />}
      {isPc && <HeavyPcComponent />} */}
      {/* {isPc ? <HeavyPcComponent /> : <HeavyComponent />} */}
    </>
  );
}
