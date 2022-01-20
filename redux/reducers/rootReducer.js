import { all } from "@redux-saga/core/effects";
import { combineReducers } from "redux";
import application, { applicationRequestSaga } from "./modules/application";
import auth from "./modules/auth";
import counselor, { counselorSaga } from "./modules/counselor";
import count, { countRequestSaga } from "./modules/count";
import loading from "./modules/loading";
import main, { mainRequestSaga } from "./modules/main";
import myPage, { myPageRequestSaga } from "./modules/myPage";
const rootReducer = combineReducers({
  count,
  loading,
  myPage,
  auth,
  counselor,
  application,
  main,
});

export function* rootSaga() {
  yield all([countRequestSaga(), myPageRequestSaga(), counselorSaga(), applicationRequestSaga(), mainRequestSaga()]);
}

export default rootReducer;
