import React from "react";
import "./styles.css";
import Button from "./../../components/button/Button";

function Home() {
  return (
    <div className="home">
      <div className="home_background"></div>
      <div className="home_content" style={{ background: "none" }}>
        <h1>Formamos profesionales
          que se adelantan a los desafíos
          de un mundo en constante evolución.</h1>
        {/* <h1>La mejor educacion al alcance de un click!</h1> */}
        <Button
          text={"Ver Carreras"}
          linkRef={"/login"}
          customButton={"home"}
        />
      </div>
    </div>
  );
}

export default Home;
