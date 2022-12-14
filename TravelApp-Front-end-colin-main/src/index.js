import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Slider from "./components/Slider/Slider";
import Publish from "./components/Publish/publish";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="app">
    <div className="sections">
      <React.StrictMode>
        <Header />
        <Slider />
        <Body />
        <Footer />
      </React.StrictMode>
    <Publish/>
    </div>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
