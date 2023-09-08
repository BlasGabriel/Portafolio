import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ToolsData from "../data/ToolsData";

const Tools = () => {
  const estiloLayout = {
    display: "flex",
    gap: "5px",
    flexWrap: "wrap",
    justifyContent: "center",
  };
  return (
    <>
      <Row xs={1} style={estiloLayout} className=" mx-1">
        {ToolsData.map((ToolsData) => (
          <Col
            key={ToolsData.id}
            style={{
              width: "auto",
              height: "auto",
              // margin: "1px",
              padding: "1px",
            }}
          >
            <Card
              style={{
                width: "auto",
                height: "auto",
              }}
            >
              <Card.Img
                variant="top"
                src={ToolsData.src}
                style={{
                  width: "130px",
                  height: "130px",
                  margin: "15px",
                }}
              />
              <Card.Body>
                <Card.Title>{ToolsData.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Tools;
