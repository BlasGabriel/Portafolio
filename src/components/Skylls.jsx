import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import skylls from "../data/SkyllsData";
const Skylls = () => {
  const estiloLayout = {
    // width: "360px",
    // height: "800px",
    display: "flex",
    gap: "5px",
    flexWrap: "wrap",
    justifyContent: "center",
    // justifyContent: "space-between",
  };
  return (
    <>
      <Row xs={1} style={estiloLayout} className=" mx-1">
        {skylls.map((skylls) => (
          <Col
            key={skylls.id}
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
                src={skylls.src}
                style={{
                  width: "130px",
                  height: "130px",
                  margin: "15px",
                }}
              />
              <Card.Body>
                <Card.Title>{skylls.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Skylls;
