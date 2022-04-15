import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
//redux configuration
import { Provider } from "react-redux";
// import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { Reducers } from "./redux/reducers";
import { configureStore } from "@reduxjs/toolkit";

const storeReducer = configureStore({
  reducer: Reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ReduxThunk),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={storeReducer}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
