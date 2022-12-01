import { InputTextComponent } from "../../my-lib-ui";
import { RadioButtonComponent } from "../../my-lib-ui";
import type { NextPage } from "next";

import FooterComponent from "../components/FooterComponent";
import HeadComponent from "../components/HeadComponent";
import NavbarComponent from "../components/NavbarComponent";
import InscriptionComponent from "../components/InscriptionComponent";

const Home: NextPage = () => {
  return (
    <div>
      <HeadComponent />
      <div>
      <NavbarComponent />
      </div>
      <img src="../images/car.jpg" ></img>
      {/* {logo} */}
      {/* <img src={logo} alt=""></img> */}
      {/* <RadioButtonComponent label={"Un particulier"} /> */}
      {/* <ButtonComponent/> */}
      {/* <InputTextComponent label="Email" placeholder="Enter email" />
      <InputTextComponent label="Password " placeholder="Enter Password" /> */}
      <main>
        <div className="divInscription">
          <InscriptionComponent/>
        </div>
      </main>
      <FooterComponent />
    </div>
  );
};

export default Home;
