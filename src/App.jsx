import BoxMajor from "./components/BoxMajor";
import BoxTex from "./components/BoxTex";
import Skylls from "./components/Skylls";
import Contact from "./components/Contact";
import Work from "./components/Work";
import NavbarComponents from "./components/NavbarComponents";
import Swiper from "swiper";
import { register } from "swiper/element/bundle";
import Tools from "./components/Tools";
register();

function App() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#f6f7f8",
        }}
      >
        <NavbarComponents />

        <BoxTex >
          <h2>Bienvenido a mi Portafolio</h2>
        </BoxTex>
        <BoxMajor>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h4>Blas Gabriel Santacruz Ramirez</h4>
          </div>
        </BoxMajor>
        <BoxTex>
          <h3>Mis Proyectos</h3>
        </BoxTex>
        <Work />
        <BoxTex>
          <h3>Mis Habilidades</h3>
        </BoxTex>
        <Skylls />
        <BoxTex>
          <h3>Herramientas</h3>
        </BoxTex>
        <Tools />
        <BoxTex>
          <h2>Contacto</h2>
        </BoxTex>
        <Contact />
      </div>
    </>
  );
}

export default App;
