import produce from "immer";
import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import createRequestSaga from "../../../lib/createRequestSaga";
import * as API from "../../../lib/api/myPage";
// 프로필

const GETPROFILE = "myPage/GETPROFILE";
const GETPROFILE_SUCCESS = "myPage/GETPROFILE_SUCCESS";
export const getProfile = createAction(GETPROFILE, ({ token }) => ({ token }));

const APPLIEDLIST = "myPage/APPLIEDLIST";

const APPLIEDLIST_SUCCESS = "myPage/APPLIEDLIST_SUCCESS";

// 신청내역
export const getappliedList = createAction(APPLIEDLIST, ({ token }) => ({ token }));
const PAYMENTLIST = "myPage/PAYMENTLIST";
const PAYMENTLIST_SUCCESS = "myPage/PAYMENTLIST_SUCCESS";
// 결제내역
export const getPaymentList = createAction(PAYMENTLIST, ({ token }) => ({ token }));

// 수업관리

const STUDYMANAGEMENTLIST = "myPage/STUDYMANAGEMENTLIST";
const STUDYMANAGEMENTLIST_SUCCESS = "myPage/STUDYMANAGEMENTLIST_SUCCESS";
export const getStudyManageMentList = createAction(STUDYMANAGEMENTLIST, ({ token }) => ({ token }));

// 후기 관리

const REVIEWLIST = "myPage/REVIEWLIST";
const REVIEWLIST_SUCCESS = "myPage/REVIEWLIST_SUCCESS";

export const getReviewList = createAction(REVIEWLIST, ({ token }) => ({ token }));
// 후기 저장

const REVIEWPATCH = "myPage/REVIEWPATCH";
const REVIEWPATCH_SUCCESS = "myPage/REVIEWPATCH_SUCCESS";
export const reviewPatch = createAction(REVIEWPATCH, ({ token, result }) => ({ token, result }));

const CLEARSUCCESS = "myPage/CLEARSUCCESS";
export const clearSuccess = createAction(CLEARSUCCESS);

// 프로필 저장
const PATCHPROFILE = "myPage/PATCHPROFILE";
const PATCHPROFILE_SUCCESS = "myPage/PATCHPROFILE_SUCCESS";
export const patchProfile = createAction(PATCHPROFILE, ({ token, name, result }) => ({ token, name, result }));

// 수업관리 정보

const GETSTUDYINFO = "myPage/GETSTUDYINFO";
const GETSTUDYINFO_SUCCESS = "myPage/GETSTUDYINFO_SUCCESS";
export const getStudyInfo = createAction(GETSTUDYINFO, ({ token, name }) => ({ token, name }));
// 알림노트

const GETALIMENOTE = "myPage/GETALIMENOTE";
const GETALIMENOTE_SUCCESS = "myPage/GETALIMENOTE_SUCCESS";
export const getAlimeNote = createAction(GETALIMENOTE, ({ token, name }) => ({ token, name }));

// clearnote

const CLEARNOTE = "myPage/CLEARNOTE";

export const clearNote = createAction(CLEARNOTE);
// clearStudy

const CLEARSTUDY = "myPage/CLEARSTUDY";
export const clearStudy = createAction(CLEARSTUDY);

// clear study list

const STUDYMANAGECLEAR = "myPage/STUDYMANAGECLEAR";
export const clearManageStudy = createAction(STUDYMANAGECLEAR);

// clear review

const CLEARREIVEW = "myPage/CLEARREIVEW";
export const clearReview = createAction(CLEARREIVEW);

// profile clear

const PROFILECLEAR = "myPage/PROFILECLEAR";
export const profileClear = createAction(PROFILECLEAR);

// clear applied list

const CLEARAPPLED = "myPage/CLEARAPPLED";
export const clearApplied = createAction(CLEARAPPLED);

// payment clear

const PAYMENTCLEAR = "myPage/PAYMENTCLEAR";
export const paymentClear = createAction(PAYMENTCLEAR);
const initialState = {
  appliedList: [],
  paymentList: [],
  studyManageMentList: [],
  realClassStudyManageMentList: [],
  reviewList: {},
  profileInfo: {},
  success: "",
  studyinfo: {},
  alimeNoteInfo: {},
};

const myPage = handleActions(
  {
    [PAYMENTCLEAR]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.paymentList = [];
      });
    },
    [CLEARAPPLED]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.appliedList = [];
      });
    },
    [PROFILECLEAR]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.profileInfo = {};
      });
    },
    [CLEARREIVEW]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.reviewList = {};
      });
    },
    [CLEARNOTE]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.alimeNoteInfo = {};
      });
    },
    [STUDYMANAGECLEAR]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.studyManageMentList = [];
        draft.realClassStudyManageMentList = [];
      });
    },
    [CLEARSTUDY]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.studyinfo = {};
      });
    },
    [GETSTUDYINFO_SUCCESS]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.studyinfo = payload.data;
      });
    },
    [GETALIMENOTE_SUCCESS]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.alimeNoteInfo = payload.data;
      });
    },
    [GETPROFILE_SUCCESS]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.profileInfo = payload.data.results[0];
      });
    },
    [REVIEWPATCH_SUCCESS]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.success = "저장 성공";
      });
    },
    [APPLIEDLIST_SUCCESS]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.appliedList = payload?.data;
      });
    },
    [PAYMENTLIST_SUCCESS]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.paymentList = payload.data;
      });
    },
    [PATCHPROFILE_SUCCESS]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.success = "저장 성공";
      });
    },
    [STUDYMANAGEMENTLIST_SUCCESS]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.studyManageMentList = payload.data.presession_list;
        draft.realClassStudyManageMentList = payload.data.sessionbatch_list;
      });
    },
    [CLEARSUCCESS]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.success = "";
      });
    },
    [REVIEWLIST_SUCCESS]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.reviewList = payload.data;
      });
    },
  },
  initialState
);
export default myPage;

const getProfileSagaRequest = createRequestSaga(GETPROFILE, API.getProfileApi);
const getAppliedSagaRequest = createRequestSaga(APPLIEDLIST, API.getAppliedApi);
const getPayMentList = createRequestSaga(PAYMENTLIST, API.getPaymentApi);
const reviewListSagaRequest = createRequestSaga(REVIEWLIST, API.reviewLIstApi);
const reviewPatchSagaRequest = createRequestSaga(REVIEWPATCH, API.reviewPatchApi);
const patchProfileSagaRequest = createRequestSaga(PATCHPROFILE, API.patchAPi);
const getStudyInfoSagaRequest = createRequestSaga(GETSTUDYINFO, API.getStudyInfo);
const studyManageMentListSagaRequest = createRequestSaga(STUDYMANAGEMENTLIST, API.getStudyManageApi);
const alimeNoteInfoSagaRequest = createRequestSaga(GETALIMENOTE, API.alimegetApi);
export function* myPageRequestSaga() {
  yield takeLatest(GETPROFILE, getProfileSagaRequest);
  yield takeLatest(APPLIEDLIST, getAppliedSagaRequest);
  yield takeLatest(PAYMENTLIST, getPayMentList);
  yield takeLatest(REVIEWLIST, reviewListSagaRequest);
  yield takeLatest(REVIEWPATCH, reviewPatchSagaRequest);
  yield takeLatest(PATCHPROFILE, patchProfileSagaRequest);
  yield takeLatest(GETSTUDYINFO, getStudyInfoSagaRequest);
  yield takeLatest(STUDYMANAGEMENTLIST, studyManageMentListSagaRequest);
  yield takeLatest(GETALIMENOTE, alimeNoteInfoSagaRequest);
}
