import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import FooterComponent from "../components/FooterComponent";
import HeadComponent from "../components/HeadComponent";
import LoginComponent from "../components/LoginComponent";
import NavbarComponent from "../components/NavbarComponent";

const Login: NextPage = () => {
  const router = useRouter();
  return (
    <div>
      <HeadComponent />
      <NavbarComponent/>
      <br></br><br></br><br></br>
      <main>
        <a href={"/"} style={{color:"black",textAlign:"center"}}>
        <p style={{color:"black"}}><span style={{color:"#c00000"}}>←</span> retour</p>
        </a>
        <LoginComponent/>
      </main>
      <br></br><br></br><br></br><br></br><br></br>
      <FooterComponent />
    </div>
  );
};

export default Login;
