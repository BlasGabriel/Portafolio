import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import WorkData from "../data/WorkData";
import Carousel from "react-bootstrap/Carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey);

  return (
    <Button type="button" onClick={decoratedOnClick}>
      {children}
    </Button>
  );
}
import React, { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowWidth;
};

const Work = () => {
  const windowWidth = useWindowWidth();

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };
  return (
    <div
      style={{
        display: "flex",
        gap: "5px",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <AliceCarousel
        mouseTracking
        responsive={windowWidth < 768 ? null : responsive}
        controlsStrategy="responsive"
        infinite="true"
        mouseTrackingEnabled={true}
        autoPlay={true}
        autoPlayInterval={2000}
        disableButtonsControls
      >
        {WorkData.map((work) => (
          <Accordion
            defaultActiveKey="1"
            key={work.id}
            style={{ margin: "2px" }}
            className="item"
            data-value={work.id}
          >
            <Card>
              <Carousel>
                {work.src.map((src) => (
                  <Carousel.Item key={src}>
                    <Card.Img variant="top" src={src} />
                  </Carousel.Item>
                ))}
              </Carousel>

              <Card.Header>
                <Card.Title>{work.title}</Card.Title>
                <Card.Text>{work.skylls}</Card.Text>
                <CustomToggle eventKey="0">Mas detalles</CustomToggle>
                <Button
                  style={{
                    margin: "10px",
                  }}
                  href={work.link}
                  target="_blank"
                >
                  Codigo
                </Button>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>{work.description}</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        ))}
      </AliceCarousel>
    </div>
  );
};

export default Work;
