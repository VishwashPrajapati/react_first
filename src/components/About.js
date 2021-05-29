import React from "react";
import Common from "./Common";
import web from "../images/about-banner.svg";

function About() {
  return (
    <Common
      fname="Grow your Business with"
      lname="We are the team of who create excellent experience"
      button="Checkout our Work"
      link="/gallary"
      imgsrc={web}
    />
  );
}

export default About;
