import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { BsFillCupHotFill } from "react-icons/bs";
import "../css/ButtonS.css";

const handleDownload = () => {
  const pdfUrl =
    "https://drive.google.com/file/d/1ZIrR5vM4ffQQVfEKQziSdd3ijWOOGc6L/view?usp=sharing";
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.target = "_blank";
  link.click();
};

const NavbarComponents = () => {
  return (
    <>
      <Navbar
        bg="primary"
        data-bs-theme="dark"
        style={{
          position: "sticky",
          width: "100%",
          top: "0",
          zIndex: "100",
          // borderBottomLeftRadius: "50% 5%",
          // borderBottomRightRadius: "50% 5%",
        }}
      >
        <Container>
          <Navbar.Brand>Gabriel.</Navbar.Brand>
          {/* <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav> */}

          <button onClick={handleDownload} className="buttonn">
            <BsFillCupHotFill style={{ marginRight: "5px" }} /> C.V.
          </button>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponents;
