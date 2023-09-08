import React from "react";

const BoxTex = ({ children }) => {
  return (
    <div
      className="container mt-5  mb-2"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </div>
  );
};

export default BoxTex;
