import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import LocationReservationInfo from "../../components/locationReserve/LocationReservationInfo";
import VisitConsiderations from "../../components/locationReserve/VisitConsiderations";
import { LocationSearchContainerWrap } from "../mainStyle";

const LocationSearchContainer = () => {
  const param = useRouter();
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if (param.query.id) setPercent((param.query.id / 7) * 100);
  }, [param.query.id]);
  const [addressModal, setAddressModal] = useState(false);
  const modalStatebtb = (e) => {
    setAddressModal(true);
  };
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress += extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    setAddressModal(false);
  };
  return (
    <LocationSearchContainerWrap>
      {+param.query.id === 1 && <LocationReservationInfo param={param} percent={percent} addressModal={addressModal} modalStatebtb={modalStatebtb} handleComplete={handleComplete} />}
      {+param.query.id === 2 && <VisitConsiderations param={param} percent={percent} addressModal={addressModal} modalStatebtb={modalStatebtb} handleComplete={handleComplete} />}
    </LocationSearchContainerWrap>
  );
};

export default LocationSearchContainer;
