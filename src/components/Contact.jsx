import ListGroup from "react-bootstrap/ListGroup";
import dataContact from "../data/ContactData";

const Contact = () => {
  const openLinkInNewTab = (url) => {
    window.open(url, "_blank");
  };

  return (
    <ListGroup
      style={{
        width: "350px",
        height: "auto",
        margin: "15px",
      }}
    >
      {dataContact.map((dataContact) => (
        <ListGroup.Item
          key={dataContact.id}
          as="a"
          action
          onClick={() => openLinkInNewTab(dataContact.link)}
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#ffffff",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: "#dbf5e3",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {dataContact.icon}
          </div>
          {dataContact.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default Contact;
