import React from "react";
import "./Loader.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <div style={{ display: "flex", justifyContent: "center", margin: "5rem" }}>
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);
