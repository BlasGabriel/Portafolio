import React from "react";

const BoxMajor = ({ children }) => {
  return (
    <div className="container mt-4  mb-4">
      <div
        style={{ backgroundColor: "#FFFFFF" }}
        className="rounded me-2 border  border-2 p-3"
      >
        {children}
      </div>
    </div>
  );
};

export default BoxMajor;
