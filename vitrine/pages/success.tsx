import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import FooterComponent from "../components/FooterComponent";
import HeadComponent from "../components/HeadComponent";
import NavbarComponent from "../components/NavbarComponent";
import SuccessComponent from "../components/SuccessComponent";

const Success: NextPage = () => {
  const router = useRouter();
  return (
    <div>
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
        <SuccessComponent />
        </div>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <FooterComponent />
    </div>
  );
};

export default Success;
