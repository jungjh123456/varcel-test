import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import createRequestSaga from "../../../lib/createRequestSaga";
import * as API from "../../../lib/api/counselor";
const TEACHERSCHEDULELIST = "alime/TEACHERSCHEDULELIST";
const TEACHERSCHEDULELIST_SUCCESS = "alime/TEACHERSCHEDULELIST_SUCCESS";
export const getTeacherScheduleList = createAction(TEACHERSCHEDULELIST, ({ id }) => ({ id }));

const initialState = {
  registeredInfo: {},
  classReviewInfo: {},
  success: "",

  profileInfo: {},
  teacherScheduleList: [],
  teacherSchedulePreSessionList: [],
  yesterdayClass: {
    data: "",
    session_list: [],
    presession: [],
  },
  todaydayClass: { data: "", session_list: [], presession: [] },
  tomorrowClassdayClass: { data: "", session_list: [], presession: [] },
  counselorName: "",
};

const counselor = handleActions(
  {
    [TEACHERSCHEDULELIST_SUCCESS]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.counselorName = payload.data?.Result.counselor;
        draft.yesterdayClass = payload.data?.Result.yesterday_class;
        draft.todaydayClass = payload.data?.Result.today_class;
        draft.tomorrowClassdayClass = payload.data?.Result.tomorrow_class;
      });
    },
  },
  initialState
);

export default counselor;

const teacherScheduleListSagaRequest = createRequestSaga(TEACHERSCHEDULELIST, API.getTeacherScheduleListApi);

export function* counselorSaga() {
  yield takeLatest(TEACHERSCHEDULELIST, teacherScheduleListSagaRequest);
}
