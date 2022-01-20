import { Provider } from "react-redux";
import store from "../redux/store";

import withRedux, { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
