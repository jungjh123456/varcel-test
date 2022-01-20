import React from "react";
import { CheckTableWrap } from "./TableStyle";

const UserCheckTable = ({ dateList, dateCheckTableInput }) => {
  return (
    <CheckTableWrap>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>월</th>
            <th>화</th>
            <th>수</th>
            <th>목</th>
            <th>금</th>
            <th>토</th>
            <th>일</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th rowSpan="6">
              <div>
                <span>8:00</span>

                <span>10:00</span>

                <span>12:00</span>

                <span>14:00</span>

                <span>16:00</span>
                <span>18:00</span>
                <span>20:00</span>
              </div>
            </th>
            <td>
              <input onChange={dateCheckTableInput} checked={dateList?.filter((item) => item === "Mon 8:00~10:00").length ? true : false} type="checkbox" id="mon_08-10" value="Mon 8:00~10:00" />
              <label htmlFor="mon_08-10"></label>
            </td>
            <td>
              {" "}
              <input onChange={dateCheckTableInput} checked={dateList?.filter((item) => item === "Tue 8:00~10:00").length ? true : false} type="checkbox" id="tue_08-10" value="Tue 8:00~10:00" />
              <label htmlFor="tue_08-10"></label>
            </td>
            <td>
              <input onChange={dateCheckTableInput} type="checkbox" id="wed_08-10" value="Wed 8:00~10:00" checked={dateList?.filter((item) => item === "Wed 8:00~10:00").length ? true : false} />
              <label htmlFor="wed_08-10"></label>
            </td>
            <td>
              <input onChange={dateCheckTableInput} type="checkbox" id="thu_08-10" value="Thu 8:00~10:00" checked={dateList?.filter((item) => item === "Thu 8:00~10:00").length ? true : false} />
              <label htmlFor="thu_08-10"></label>
            </td>
            <td>
              <input onChange={dateCheckTableInput} type="checkbox" id="Fri_08-10" checked={dateList?.filter((item) => item === "Fri 8:00~10:00").length ? true : false} value="Fri 8:00~10:00" />
              <label htmlFor="Fri_08-10"></label>
            </td>
            <td>
              <input onChange={dateCheckTableInput} type="checkbox" id="sat_08-10" checked={dateList?.filter((item) => item === "Sat 8:00~10:00").length ? true : false} value="Sat 8:00~10:00" />
              <label htmlFor="sat_08-10"></label>
            </td>
            <td>
              <input onChange={dateCheckTableInput} type="checkbox" id="sun_08-10" checked={dateList?.filter((item) => item === "Sun 8:00~10:00").length ? true : false} value="Sun 8:00~10:00" />
              <label htmlFor="sun_08-10"></label>
            </td>
          </tr>
          <tr>
            <td>
              <input onChange={dateCheckTableInput} type="checkbox" id="mon_10-12" checked={dateList?.filter((item) => item === "Mon 10:00~12:00").length ? true : false} value="Mon 10:00~12:00" />
              <label htmlFor="mon_10-12"></label>
            </td>
            <td>
              {" "}
              <input onChange={dateCheckTableInput} type="checkbox" id="tue_10-12" checked={dateList?.filter((item) => item === "Tue 10:00~12:00").length ? true : false} value="Tue 10:00~12:00" />
              <label htmlFor="tue_10-12"></label>
            </td>
            <td>
              <input onChange={dateCheckTableInput} type="checkbox" id="wed_10-12" checked={dateList?.filter((item) => item === "Wed 10:00~12:00").length ? true : false} value="Wed 10:00~12:00" />
              <label htmlFor="wed_10-12"></label>
            </td>
            <td>
              <input onChange={dateCheckTableInput} type="checkbox" id="thu_10-12" checked={dateList?.filter((item) => item === "Thu 10:00~12:00").length ? true : false} value="Thu 10:00~12:00" />
              <label htmlFor="thu_10-12"></label>
            </td>
            <td>
              <input onChange={dateCheckTableInput} type="checkbox" id="Fri_10-12" checked={dateList?.filter((item) => item === "Fri 10:00~12:00").length ? true : false} value="Fri 10:00~12:00" />
              <label htmlFor="Fri_10-12"></label>
            </td>
            <td>
              <input onChange={dateCheckTableInput} type="checkbox" id="sat_10-12" checked={dateList?.filter((item) => item === "Sat 10:00~12:00").length ? true : false} value="Sat 10:00~12:00" />
              <label htmlFor="sat_10-12"></label>
            </td>
            <td>
              <input type="checkbox" id="sun_10-12" onChange={dateCheckTableInput} checked={dateList?.filter((item) => item === "Sun 10:00~12:00").length ? true : false} value="Sun 10:00~12:00" />
              <label htmlFor="sun_10-12"></label>
            </td>
          </tr>
          <tr>
            <td>
              <input onChange={dateCheckTableInput} type="checkbox" id="mon_12-14" checked={dateList?.filter((item) => item === "Mon 12:00~14:00").length ? true : false} value="Mon 12:00~14:00" />
              <label htmlFor="mon_12-14"></label>
            </td>
            <td>
              {" "}
              <input onChange={dateCheckTableInput} type="checkbox" id="tue_12-14" checked={dateList?.filter((item) => item === "Tue 12:00~14:00").length ? true : false} value="Tue 12:00~14:00" />
              <label htmlFor="tue_12-14"></label>
            </td>
            <td>
              <input onChange={dateCheckTableInput} type="checkbox" id="wed_12-14" checked={dateList?.filter((item) => item === "Wed 12:00~14:00").length ? true : false} value="Wed 12:00~14:00" />
              <label htmlFor="wed_12-14"></label>
            </td>
            <td>
              <input onChange={dateCheckTableInput} type="checkbox" id="thu_12-14" checked={dateList?.filter((item) => item === "Thu 12:00~14:00").length ? true : false} value="Thu 12:00~14:00" />
              <label htmlFor="thu_12-14"></label>
            </td>
            <td>
              <input onChange={dateCheckTableInput} type="checkbox" id="Fri_12-14" checked={dateList?.filter((item) => item === "Fri 12:00~14:00").length ? true : false} value="Fri 12:00~14:00" />
              <label htmlFor="Fri_12-14"></label>
            </td>
            <td>
              <input onChange={dateCheckTableInput} type="checkbox" id="sat_12-14" checked={dateList?.filter((item) => item === "Sat 12:00~14:00").length ? true : false} value="Sat 12:00~14:00" />
              <label htmlFor="sat_12-14"></label>
            </td>
            <td>
              <input onChange={dateCheckTableInput} type="checkbox" id="sun_12-14" checked={dateList?.filter((item) => item === "Sun 12:00~14:00").length ? true : false} value="Sun 12:00~14:00" />
              <label htmlFor="sun_12-14"></label>
            </td>
          </tr>
          <tr>
            <td>
              <input onChange={dateCheckTableInput} type="checkbox" id="mon_14-16" checked={dateList?.filter((item) => item === "Mon 14:00~16:00").length ? true : false} value="Mon 14:00~16:00" />
              <label htmlFor="mon_14-16"></label>
            </td>
            <td>
              {" "}
              <input onChange={dateCheckTableInput} type="checkbox" id="tue_14-16" checked={dateList?.filter((item) => item === "Tue 14:00~16:00").length ? true : false} value="Tue 14:00~16:00" />
              <label htmlFor="tue_14-16"></label>
            </td>
            <td>
              <input onChange={dateCheckTableInput} type="checkbox" id="wed_14-16" checked={dateList?.filter((item) => item === "Wed 14:00~16:00").length ? true : false} value="Wed 14:00~16:00" />
              <label htmlFor="wed_14-16"></label>
            </td>
            <td>
              <input onChange={dateCheckTableInput} type="checkbox" id="thu_14-16" checked={dateList?.filter((item) => item === "Thu 14:00~16:00").length ? true : false} value="Thu 14:00~16:00" />
              <label htmlFor="thu_14-16"></label>
            </td>
            <td>
              <input onChange={dateCheckTableInput} type="checkbox" id="Fri_14-16" checked={dateList?.filter((item) => item === "Fri 14:00~16:00").length ? true : false} value="Fri 14:00~16:00" />
              <label htmlFor="Fri_14-16"></label>
            </td>
            <td>
              <input onChange={dateCheckTableInput} type="checkbox" id="sat_14-16" checked={dateList?.filter((item) => item === "Sat 14:00~16:00").length ? true : false} value="Sat 14:00~16:00" />
              <label htmlFor="sat_14-16"></label>
            </td>
            <td>
              <input onChange={dateCheckTableInput} type="checkbox" id="sun_14-16" checked={dateList?.filter((item) => item === "Sun 14:00~16:00").length ? true : false} value="Sun 14:00~16:00" />
              <label htmlFor="sun_14-16"></label>
            </td>
          </tr>
          <tr>
            <td>
              <input onChange={dateCheckTableInput} type="checkbox" id="mon_16-18" checked={dateList?.filter((item) => item === "Mon 16:00~18:00").length ? true : false} value="Mon 16:00~18:00" />
              <label htmlFor="mon_16-18"></label>
            </td>
            <td>
              {" "}
              <input onChange={dateCheckTableInput} type="checkbox" id="tue_16-18" checked={dateList?.filter((item) => item === "Tue 16:00~18:00").length ? true : false} value="Tue 16:00~18:00" />
              <label htmlFor="tue_16-18"></label>
            </td>
            <td>
              <input onChange={dateCheckTableInput} type="checkbox" id="wed_16-18" checked={dateList?.filter((item) => item === "Wed 16:00~18:00").length ? true : false} value="Wed 16:00~18:00" />
              <label htmlFor="wed_16-18"></label>
            </td>
            <td>
              <input onChange={dateCheckTableInput} type="checkbox" id="thu_16-18" checked={dateList?.filter((item) => item === "Thu 16:00~18:00").length ? true : false} value="Thu 16:00~18:00" />
              <label htmlFor="thu_16-18"></label>
            </td>
            <td>
              <input onChange={dateCheckTableInput} type="checkbox" id="Fri_16-18" checked={dateList?.filter((item) => item === "Fri 16:00~18:00").length ? true : false} value="Fri 16:00~18:00" />
              <label htmlFor="Fri_16-18"></label>
            </td>
            <td>
              <input onChange={dateCheckTableInput} type="checkbox" id="sat_16-18" checked={dateList?.filter((item) => item === "Sat 16:00~18:00").length ? true : false} value="Sat 16:00~18:00" />
              <label htmlFor="sat_16-18"></label>
            </td>
            <td>
              <input onChange={dateCheckTableInput} type="checkbox" id="sun_16-18" checked={dateList?.filter((item) => item === "Sun 16:00~18:00").length ? true : false} value="Sun 16:00~18:00" />
              <label htmlFor="sun_16-18"></label>
            </td>
          </tr>
          <tr>
            <td>
              <input onChange={dateCheckTableInput} type="checkbox" id="mon_18-20" checked={dateList?.filter((item) => item === "Mon 18:00~20:00").length ? true : false} value="Mon 18:00~20:00" />
              <label htmlFor="mon_18-20"></label>
            </td>
            <td>
              {" "}
              <input onChange={dateCheckTableInput} type="checkbox" id="tue_18-20" checked={dateList?.filter((item) => item === "Tue 18:00~20:00").length ? true : false} value="Tue 18:00~20:00" />
              <label htmlFor="tue_18-20"></label>
            </td>
            <td>
              <input onChange={dateCheckTableInput} type="checkbox" id="wed_18-20" checked={dateList?.filter((item) => item === "Wed 18:00~20:00").length ? true : false} value="Wed 18:00~20:00" />
              <label htmlFor="wed_18-20"></label>
            </td>
            <td>
              <input onChange={dateCheckTableInput} type="checkbox" id="thu_18-20" checked={dateList?.filter((item) => item === "Thu 18:00~20:00").length ? true : false} value="Thu 18:00~20:00" />
              <label htmlFor="thu_18-20"></label>
            </td>
            <td>
              <input onChange={dateCheckTableInput} type="checkbox" id="Fri_18-20" checked={dateList?.filter((item) => item === "Fri 18:00~20:00").length ? true : false} value="Fri 18:00~20:00" />
              <label htmlFor="Fri_18-20"></label>
            </td>
            <td>
              <input onChange={dateCheckTableInput} type="checkbox" id="sat_18-20" checked={dateList?.filter((item) => item === "Sat 18:00~20:00").length ? true : false} value="Sat 18:00~20:00" />
              <label htmlFor="sat_18-20"></label>
            </td>
            <td>
              <input onChange={dateCheckTableInput} type="checkbox" id="sun_18-20" checked={dateList?.filter((item) => item === "Sun 18:00~20:00").length ? true : false} value="Sun 18:00~20:00" />
              <label htmlFor="sun_18-20"></label>
            </td>
          </tr>
          {/* 2 */}
        </tbody>
      </table>
    </CheckTableWrap>
  );
};

export default UserCheckTable;
