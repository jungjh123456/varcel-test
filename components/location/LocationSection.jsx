import React, { useState } from "react";
import BigButton from "../asset/BigButton";
import SearchIcon from "../asset/SearchIcon";
import { LocationSectionWrap } from "./locationStyle";

const LocationSection = () => {
  const [addressList, setAddressList] = useState([
    {
      address: "서울",
      address_detail: ["강남구", "송파구", "서초구", "성복구", "서초구"],
    },
    { address: "부천", address_detail: ["상동구", "소사구", "무슨구", "어쩔구"] },
  ]);
  const [searchText, setSearchText] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [colorState, setColorState] = useState(false);
  // const [noList, setNoList]
  const onChangeBtn = (e) => {
    if (e.target.value === "") {
      // setSearchList([]);
      setColorState(false);
      setAddressList([
        {
          address: "서울",
          address_detail: ["강남구", "송파구", "서초구", "성복구", "서초구"],
        },
        { address: "부천", address_detail: ["상동구", "소사구", "무슨구", "어쩔구"] },
      ]);
      return;
    }
    setSearchText(e.target.value);
  };
  const onSearchBtn = (e) => {
    if (searchText.length === 0) return;
    const findAddress = addressList.filter((item) => {
      return item.address.indexOf(searchText) !== -1;
    });
    const findAddressDetail = addressList.filter((item) => {
      return item.address_detail.find((items) => {
        return items.indexOf(searchText) !== -1;
      });
    });
    if (findAddress.length === 0 && findAddressDetail.length === 0) {
      alert("해당 검색어에 맞는 정보가 없습니다.");
      return;
    }
    setColorState(true);
    // setSearchList([...findAddressDetail, ...findAddress]);
    setAddressList([...findAddressDetail, ...findAddress]);
  };
  const focusOutBtn = (e) => {
    if (searchText.length === 0) return;
    const findAddress = addressList.filter((item) => {
      return item.address.indexOf(searchText) !== -1;
    });
    const findAddressDetail = addressList.filter((item) => {
      return item.address_detail.find((items) => {
        return items.indexOf(searchText) !== -1;
      });
    });
    if (findAddress.length === 0 && findAddressDetail.length === 0) {
      alert("해당 검색어에 맞는 정보가 없습니다.");
      return;
    }
    setColorState(true);
    // setSearchList([...findAddressDetail, ...findAddress]);
    if (searchText.length === 0) return;
    setAddressList([...findAddressDetail, ...findAddress]);
  };
  const searchInput = (e) => {
    if (searchText.length === 0) return;
    if (e.key === "Enter") {
      const findAddress = addressList.filter((item) => {
        return item.address.indexOf(searchText) !== -1;
      });
      const findAddressDetail = addressList.filter((item) => {
        return item.address_detail.find((items) => {
          return items.indexOf(searchText) !== -1;
        });
      });
      if (findAddress.length === 0 && findAddressDetail.length === 0) {
        alert("해당 검색어에 맞는 정보가 없습니다.");
        return;
      }
      setColorState(true);
      // setSearchList([...findAddressDetail, ...findAddress]);
      setAddressList([...findAddressDetail, ...findAddress]);
    }
  };
  return (
    <LocationSectionWrap>
      <div className="container">
        <h1>방문지역 확인</h1>
        <div className="text-wrap">
          <span>우리동네가 방문수업이 가능한 지역인지</span>
          <span>아래에서 확인해보세요</span>
        </div>
        <div className="search-wrap">
          <div>
            <input onKeyPress={searchInput} onChange={onChangeBtn} type="text" />
            <button onClick={onSearchBtn}>
              <SearchIcon />
            </button>
          </div>
        </div>
        <div className="location-wrap">
          <h2>서비스 가능지역</h2>
          <span>업데이트 일자: 2021.11.30</span>

          {addressList.map((item, i) => {
            return (
              <div key={i}>
                <span style={!colorState ? {} : item.address.indexOf(searchText) !== -1 ? { color: "#6100ff" } : {}}>{item.address}</span>
                <div>
                  {item.address_detail.map((item, i) => {
                    return (
                      <span key={i} style={!colorState ? {} : item.indexOf(searchText) !== -1 ? { color: "#6100ff" } : {}}>
                        {item},{" "}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/* <div>
            <span>서울</span>
            <div>
              <span>강남구,송파구,서초구,성복구,동대문구</span>
            </div>
          </div> */}
        </div>
        <div className="btn-group">
          <BigButton>우리동네가 없다면, 예약을 걸어보세요!</BigButton>
        </div>
      </div>
    </LocationSectionWrap>
  );
};

export default LocationSection;
