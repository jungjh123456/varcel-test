import React from "react";
import { useMediaQuery } from "react-responsive";
import Loading from "../../components/asset/Loading";
import dynamic from "next/dynamic";
import LocationContainer from "../../containers/LocationContainer";
const location = () => {
  const isPc = useMediaQuery({ query: "(min-width: 850px)" });
  const HeavyComponent = dynamic(import("../../containers/LocationContainer"), {
    loading: () => <LocationContainer />,
    ssr: isPc ? true : true,
  });
  return <LocationContainer />;
};

export default location;
