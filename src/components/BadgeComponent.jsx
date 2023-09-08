import React from "react";
import { Badge } from "react-bootstrap";

const BadgeComponent = ({ children, src }) => {
  return (
    <Badge 
    pill
     bg="light" text="dark"
      style={{ border: "1px solid #0b5ed7", 
      fontSize: "10px",
       margin: 0 }}
      >
      <img src={src} style={{ width: "17px", height: "17px" }} />{children}
       
    </Badge>
  );
};

export default BadgeComponent;
