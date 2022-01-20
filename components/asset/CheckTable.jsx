import React from "react";
import { CheckTableWrap } from "./CheckTableStyle";

const CheckTable = () => {
  return (
    <CheckTableWrap>
      <table>
        <thead>
          <tr>
            <th colSpan="2"></th>
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
            <th colSpan="2" rowSpan="6">
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
              <input type="checkbox" id="mon_08-10" />
              <label htmlFor="mon_08-10"></label>
            </td>
            <td>
              {" "}
              <input type="checkbox" id="tue_08-10" />
              <label htmlFor="tue_08-10"></label>
            </td>
            <td>
              <input type="checkbox" id="wed_08-10" />
              <label htmlFor="wed_08-10"></label>
            </td>
            <td>
              <input type="checkbox" id="thu_08-10" />
              <label htmlFor="thu_08-10"></label>
            </td>
            <td>
              <input type="checkbox" id="Fri_08-10" />
              <label htmlFor="Fri_08-10"></label>
            </td>
            <td>
              <input type="checkbox" id="sat_08-10" />
              <label htmlFor="sat_08-10"></label>
            </td>
            <td>
              <input type="checkbox" id="sun_08-10" />
              <label htmlFor="sun_08-10"></label>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" id="mon_10-12" />
              <label htmlFor="mon_10-12"></label>
            </td>
            <td>
              {" "}
              <input type="checkbox" id="tue_10-12" />
              <label htmlFor="tue_10-12"></label>
            </td>
            <td>
              <input type="checkbox" id="wed_10-12" />
              <label htmlFor="wed_10-12"></label>
            </td>
            <td>
              <input type="checkbox" id="thu_10-12" />
              <label htmlFor="thu_10-12"></label>
            </td>
            <td>
              <input type="checkbox" id="Fri_10-12" />
              <label htmlFor="Fri_10-12"></label>
            </td>
            <td>
              <input type="checkbox" id="sat_10-12" />
              <label htmlFor="sat_10-12"></label>
            </td>
            <td>
              <input type="checkbox" id="sun_10-12" />
              <label htmlFor="sun_10-12"></label>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" id="mon_12-14" />
              <label htmlFor="mon_12-14"></label>
            </td>
            <td>
              {" "}
              <input type="checkbox" id="tue_12-14" />
              <label htmlFor="tue_12-14"></label>
            </td>
            <td>
              <input type="checkbox" id="wed_12-14" />
              <label htmlFor="wed_12-14"></label>
            </td>
            <td>
              <input type="checkbox" id="thu_12-14" />
              <label htmlFor="thu_12-14"></label>
            </td>
            <td>
              <input type="checkbox" id="Fri_12-14" />
              <label htmlFor="Fri_12-14"></label>
            </td>
            <td>
              <input type="checkbox" id="sat_12-14" />
              <label htmlFor="sat_12-14"></label>
            </td>
            <td>
              <input type="checkbox" id="sun_12-14" />
              <label htmlFor="sun_12-14"></label>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" id="mon_14-16" />
              <label htmlFor="mon_14-16"></label>
            </td>
            <td>
              {" "}
              <input type="checkbox" id="tue_14-16" />
              <label htmlFor="tue_14-16"></label>
            </td>
            <td>
              <input type="checkbox" id="wed_14-16" />
              <label htmlFor="wed_14-16"></label>
            </td>
            <td>
              <input type="checkbox" id="thu_14-16" />
              <label htmlFor="thu_14-16"></label>
            </td>
            <td>
              <input type="checkbox" id="Fri_14-16" />
              <label htmlFor="Fri_14-16"></label>
            </td>
            <td>
              <input type="checkbox" id="sat_14-16" />
              <label htmlFor="sat_14-16"></label>
            </td>
            <td>
              <input type="checkbox" id="sun_14-16" />
              <label htmlFor="sun_14-16"></label>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" id="mon_16-18" />
              <label htmlFor="mon_16-18"></label>
            </td>
            <td>
              {" "}
              <input type="checkbox" id="tue_16-18" />
              <label htmlFor="tue_16-18"></label>
            </td>
            <td>
              <input type="checkbox" id="wed_16-18" />
              <label htmlFor="wed_16-18"></label>
            </td>
            <td>
              <input type="checkbox" id="thu_16-18" />
              <label htmlFor="thu_16-18"></label>
            </td>
            <td>
              <input type="checkbox" id="Fri_16-18" />
              <label htmlFor="Fri_16-18"></label>
            </td>
            <td>
              <input type="checkbox" id="sat_16-18" />
              <label htmlFor="sat_16-18"></label>
            </td>
            <td>
              <input type="checkbox" id="sun_16-18" />
              <label htmlFor="sun_16-18"></label>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" id="mon_18-20" />
              <label htmlFor="mon_18-20"></label>
            </td>
            <td>
              {" "}
              <input type="checkbox" id="tue_18-20" />
              <label htmlFor="tue_18-20"></label>
            </td>
            <td>
              <input type="checkbox" id="wed_18-20" />
              <label htmlFor="wed_18-20"></label>
            </td>
            <td>
              <input type="checkbox" id="thu_18-20" />
              <label htmlFor="thu_18-20"></label>
            </td>
            <td>
              <input type="checkbox" id="Fri_18-20" />
              <label htmlFor="Fri_18-20"></label>
            </td>
            <td>
              <input type="checkbox" id="sat_18-20" />
              <label htmlFor="sat_18-20"></label>
            </td>
            <td>
              <input type="checkbox" id="sun_18-20" />
              <label htmlFor="sun_18-20"></label>
            </td>
          </tr>
          {/* 2 */}
        </tbody>
      </table>
    </CheckTableWrap>
  );
};

export default CheckTable;
