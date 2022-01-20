import produce from "immer";
import { createAction, handleActions } from "redux-actions";
import createRequestSaga from "../../../lib/createRequestSaga";
import * as API from "../../../lib/api/application";
import { takeLatest } from "@redux-saga/core/effects";

// 신청서 첫 작성
const APPLICATIONFIRST = "application/APPLICATIONFIRST";
const APPLICATIONFIRST_SUCCESS = "application/APPLICATIONFIRST_SUCCESS";

export const applicationFirst = createAction(APPLICATIONFIRST, ({ result, token }) => ({ result, token }));

// 쌍둥이 신청서 둘째

const APPLICATIONTWIN = "application/APPLICATIONTWIN";
const APPLICATIONTWIN_SUCCESS = "application/APPLICATIONTWIN_SUCCESS";
export const applicationTwin = createAction(APPLICATIONTWIN, ({ result, id, token }) => ({ result, id, token }));
const APPLICATIONPATCH = "application/APPLICATIONPATCH";
const APPLICATIONPATCH_SUCCESS = "application/APPLICATIONPATCH_SUCCESS";

export const applicationPatch = createAction(APPLICATIONPATCH, ({ result, id, token }) => ({ result, id, token }));
const CLEARID = "application/CLEARID";
export const clearId = createAction(CLEARID);

const GETAPPLIEDINFO = "application/GETAPPLIEDINFO";
const GETAPPLIEDINFO_SUCCESS = "application/GETAPPLIEDINFO_SUCCESS";
export const getAppliedInfo = createAction(GETAPPLIEDINFO, ({ token, id }) => ({ token, id }));

const SYNCLEAR = "application/SYNCLEAR";
export const synClear = createAction(SYNCLEAR);

// payment id

const PAYMENTPOST = "application/PAYMENTPOST";
const PAYMENTPOST_SUCCESS = "application/PAYMENTPOST_SUCCESS";
const PAYMENTPOST_FAILURE = "application/PAYMENTPOST_FAILURE";

export const postPayment = createAction(PAYMENTPOST, ({ token, result }) => ({ token, result }));

const initialState = {
  success: "",
  userId: null,
  twinId: null,
  userAppliedInfo: {},
  synState: "",
  payinfo: {},
};
const CLEARSUCCESS = "application/CLEARSUCCESS";
export const clearSuccess = createAction(CLEARSUCCESS);
const SYNCHRONIZETWIN = "application/SYNCHRONIZETWIN";
const SYNCHRONIZETWIN_SUCCESS = "application/SYNCHRONIZETWIN_SUCCESS";

export const synChronizetWin = createAction(SYNCHRONIZETWIN, ({ token, id, twinId }) => ({ token, id, twinId }));
// 치료 이력 post

const POSTCURELOGGED = "application/POSTCURELOGGED";
const POSTCURELOGGED_SUCCESS = "application/POSTCURELOGGED_SUCCESS";
export const postCureLogged = createAction(POSTCURELOGGED, ({ token, id, result }) => ({ token, id, result }));
const application = handleActions(
  {
    [SYNCLEAR]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.synState = "";
      });
    },
    [SYNCHRONIZETWIN_SUCCESS]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.synState = "성공";
      });
    },
    [PAYMENTPOST_SUCCESS]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.payinfo = payload.data;
      });
    },
    [APPLICATIONPATCH_SUCCESS]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.success = "성공";
      });
    },
    [CLEARSUCCESS]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.success = "";
      });
    },
    [APPLICATIONFIRST_SUCCESS]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.userId = payload.data.id;
      });
    },
    [GETAPPLIEDINFO_SUCCESS]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.userAppliedInfo = payload.data;
      });
    },
    [CLEARID]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.userId = null;
        draft.twinId = null;
      });
    },
    [APPLICATIONTWIN_SUCCESS]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.twinId = payload.data.id;
      });
    },
  },
  initialState
);
export default application;
const appliedSagaRequest = createRequestSaga(APPLICATIONPATCH, API.appliedApi);
const appliedFirstSagaRequest = createRequestSaga(APPLICATIONFIRST, API.appliedFirstApi);
const appliedTwinSagaRequest = createRequestSaga(APPLICATIONTWIN, API.twinAppliedApi);
const getAppliedInfoSagaRequest = createRequestSaga(GETAPPLIEDINFO, API.getAppliedApi);
const postCureLoggedSagaRequest = createRequestSaga(POSTCURELOGGED, API.postCureLoggedApi);
const synChRonizetwinSagaRequest = createRequestSaga(SYNCHRONIZETWIN, API.synchronizeTwin);
const paymentPostSagaRequest = createRequestSaga(PAYMENTPOST, API.postPaymentApi);
export function* applicationRequestSaga() {
  yield takeLatest(APPLICATIONPATCH, appliedSagaRequest);
  yield takeLatest(APPLICATIONFIRST, appliedFirstSagaRequest);
  yield takeLatest(APPLICATIONTWIN, appliedTwinSagaRequest);
  yield takeLatest(GETAPPLIEDINFO, getAppliedInfoSagaRequest);
  yield takeLatest(POSTCURELOGGED, postCureLoggedSagaRequest);
  yield takeLatest(SYNCHRONIZETWIN, synChRonizetwinSagaRequest);
  yield takeLatest(PAYMENTPOST, paymentPostSagaRequest);
}
