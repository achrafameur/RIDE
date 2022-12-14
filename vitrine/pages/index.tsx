import { InputTextComponent } from "../../my-lib-ui";
import { RadioButtonComponent } from "../../my-lib-ui";
import type { NextPage } from "next";

import FooterComponent from "../components/FooterComponent";
import HeadComponent from "../components/HeadComponent";
import NavbarComponent from "../components/NavbarComponent";
import InscriptionComponent from "../components/InscriptionComponent";

const Home: NextPage = () => {
  return (
      <main>
        <HeadComponent />
        <div>
        <NavbarComponent />
        <img
          src="/images/cars.png"
          style={{
            width: "100%",
            height: "500px",
            position: "relative",
            zIndex: -1,
          }}
        />
        <InscriptionComponent />
        </div>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <FooterComponent />
      </main>
  );
};

export default Home;
