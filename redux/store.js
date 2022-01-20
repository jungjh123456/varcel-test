import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer, { rootSaga } from "./reducers/rootReducer";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const initialState = {
  count: {
    num: 0,
    list: [],
  },
  myPage: {
    appliedList: [],
    paymentList: [],
    studyManageMentList: [],
    reviewList: [],
    success: "",
    profileInfo: {},
    alimeNoteInfo: {},
  },
  auth: {
    token:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQyNTkxOTM3LCJpYXQiOjE2NDI1ODQ3MzcsImp0aSI6ImNlYWM2ZThjOWY2YzRhOTNhNGQ3MmJiOTA4NjE5MGE5IiwidXNlcl9pZCI6Nn0.RuvFvj5SW9SlYY9_YUjXze-I7z_sIriP6MI2cXPdndo",
  },
  application: { success: "", userId: null, twinId: null, userAppliedInfo: {} },
  main: { list: [], coumnInfo: {} },
};

const middlewares = [applyMiddleware(sagaMiddleware)];

const store = createStore(rootReducer, initialState, composeWithDevTools(...middlewares));

sagaMiddleware.run(rootSaga);

export default store;
