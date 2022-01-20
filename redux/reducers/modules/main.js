import produce from "immer";
import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import * as API from "../../../lib/api/main";
import createRequestSaga from "../../../lib/createRequestSaga";
const GETCOMUNITY = "main/GETCOMUNITY";
const GETCOMUNITY_SUCCESS = "main/GETCOMUNITY_SUCCESS";

export const getComunity = createAction(GETCOMUNITY, ({ name }) => ({ name }));

const CLEARLIST = "main/CLEARLIST";
export const clearList = createAction(CLEARLIST);

const COUMNGET = "main/COUMNGET";
const COUMNGET_SUCCESS = "main/COUMNGET_SUCCESS";
export const getcounmInfo = createAction(COUMNGET, ({ name }) => ({ name }));
const initialState = {
  list: [],
  coumnInfo: {},
};

const main = handleActions(
  {
    [GETCOMUNITY_SUCCESS]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.list = payload.data.results;
      });
    },
    [CLEARLIST]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.list = [];
      });
    },
    [COUMNGET_SUCCESS]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.coumnInfo = [];
      });
    },
  },
  initialState
);

export default main;

const getComunitySagaRequest = createRequestSaga(GETCOMUNITY, API.getComunityApi);
const getComunityInfoSagaRequest = createRequestSaga(COUMNGET, API.getComunityInfoApi);

export function* mainRequestSaga() {
  yield takeLatest(GETCOMUNITY, getComunitySagaRequest);
  yield takeLatest(COUMNGET, getComunityInfoSagaRequest);
}
