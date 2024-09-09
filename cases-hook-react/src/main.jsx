import React from "react";
import ReactDom from "react-dom/client";
// import UseState_case01 from "./components/UseState_case01";
import UseState_case02 from "./components/UseState_case02";


ReactDom.createRoot(document.querySelector("#root")).render(
  <div>
    <UseState_case02 />
  </div>
)