import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// 라우터 설정, 라이브러리 import
import { BrowserRouter } from "react-router-dom";
// import { HashRouter } from "react-router-dom";
// 조금 더 안전하게 라우팅을 할 수 있게 도와줌.

import { Provider } from "react-redux";
import { createStore } from "redux";

let store = createStore(() => {
  return [{ id: 0, name: "멋진신발", quan: 2 }];
});

// App 감싸기
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
