import client from "./client";
import { API } from "./restApi";

export const getTeacherScheduleListApi = ({ id, timedelta }) => {
  return client.get(`${API}/personnels/counselor/todayclasses/${id}/`);
};
