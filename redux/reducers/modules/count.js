import produce from "immer";
import { createAction, handleActions } from "redux-actions";
import createRequestSaga from "../../../lib/createRequestSaga";
import * as API from "../../../lib/api/test";
import { takeLatest } from "@redux-saga/core/effects";
const COUNTPLUS = "count/COUNTPLUS";

export const countPlus = createAction(COUNTPLUS);

const TESTGET = "count/TESTGET";

const TESTGET_SUCCESS = "count/TESTGET_SUCCESS";

export const testGet = createAction(TESTGET);

const initialState = {
  num: 0,
  list: [],
};

const count = handleActions(
  {
    [COUNTPLUS]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.num = 3;
      });
    },
    [TESTGET_SUCCESS]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.list = payload.data.results;
      });
    },
  },
  initialState
);
export default count;

const getTextListGetSagaRequest = createRequestSaga(TESTGET, API.getText);

export function* countRequestSaga() {
  yield takeLatest(TESTGET, getTextListGetSagaRequest);
}
