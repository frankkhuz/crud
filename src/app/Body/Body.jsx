import React from "react";
import Mainbody from "./components/Mainbody";
import Sidebar from "./components/sidebar";

const Body = () => {
  return (
    <div
      className="flex justify-between"
      style={{
        height: "100vh",
        overflow: "hidden",
        padding: "60px 20px 0px 20px ",
      }}
    >
      <Sidebar />
      <Mainbody />
    </div>
  );
};

export default Body;
