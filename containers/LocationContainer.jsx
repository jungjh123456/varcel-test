import { useRouter } from "next/dist/client/router";
import React from "react";
import Footer from "../components/asset/Footer";
import MainHeader from "../components/asset/MainHeader";
import LocationSection from "../components/location/LocationSection";
import RegisterInfo from "../components/location/RegisterInfo";
import { LocationWrap } from "./mainStyle";

const LocationContainer = () => {
  const route = useRouter();

  return (
    <div>
      {+route.query.id === 1 && (
        <LocationWrap>
          <MainHeader white />
          <LocationSection />
          <Footer />
        </LocationWrap>
      )}
      {+route.query.id === 2 && (
        <LocationWrap>
          <MainHeader white />
          <RegisterInfo />
        </LocationWrap>
      )}
    </div>
  );
};

export default LocationContainer;
