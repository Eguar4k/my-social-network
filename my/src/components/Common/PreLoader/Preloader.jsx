import React from "react";
import preLoader from "./../../../img/loading-annoying.gif";

const Preloader = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        // width: "30px",
        // height: "30px",
        padding: "150px",
      }}
    >
      <img src={preLoader} alt="" />{" "}
    </div>
  );
};

export default Preloader;
