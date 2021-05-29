import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";

import web from "../images/front-banner.svg";

function Home() {
  return (
    <>
      <Common
        fname="Grow your Business with"
        lname="We are the team of talented developer making websites"
        button="Get Started"
        link="/about"
        imgsrc={web}
      />
    </>
  );
}

export default Home;
