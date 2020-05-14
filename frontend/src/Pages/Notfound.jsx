import React from "react";
import ErrorImg from "../Images/error.svg";

function Error() {
  return (
    <div style={{ margin: "5%", textAlign: "center", marginTop: "10%" }}>
      <img src={ErrorImg} height="60%" width="60%" />
    </div>
  );
}

export default Error;
