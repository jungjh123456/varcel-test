import produce from "immer";
import { createAction, handleActions } from "redux-actions";
import createRequestSaga from "../../../lib/createRequestSaga";
import * as API from "../../../lib/api/test";
import { takeLatest } from "@redux-saga/core/effects";

const AUTH = "count/TESTGET";

export const authGet = createAction(AUTH);

const initialState = {
  token: "",
};

const auth = handleActions(
  {
    [AUTH]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.token =
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQwMDg5MTU0LCJpYXQiOjE2NDAwODE5NTQsImp0aSI6IjZiNjU3MzA0OGY2ZjQ5NzNhYzUxYWFjZTFhMDRlYjFlIiwidXNlcl9pZCI6Nn0.idzse1hxLKyCkjfOgyYhd6gwJ21i-PS1c9esQy6KjLY";
      });
    },
  },
  initialState
);
export default auth;
