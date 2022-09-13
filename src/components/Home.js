import React from "react";
import Navheader from "./Navheader";
import Statistics from "./Statistics";
import SimpleSteps from "./SimpleSteps";
import AboutUs from "./AboutUs";
import WhoWeHelp from "./WhoWeHelp";
import ContactUs from "./Contact";

export default function Home() {
  return (
    <div>
      <Navheader />
      <Statistics />
      <SimpleSteps />
      <AboutUs />
      <WhoWeHelp />
      <ContactUs />
    </div>
  );
}
