import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router ,Routes , Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import MidHeader from "./components/MidHeader";
import AdBar from "./components/AdBar";
import {  ReferButton } from "./components/PopUpForm";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <AdBar />
    <Header />
    <MidHeader />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/form" element={<ReferButton />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
