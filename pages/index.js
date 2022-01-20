import MainContainer from "../containers/MainContainer";

export default function Home() {
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
