import React from "react";
import { EverythingLondon } from "../../lib/NewsApi";
import London from "../cities/London"
// Neil's new branch

const Home = () => {
  return (
    <>
      <section className="hero is-fullheight-with-navbar is-warning">
        <div className="hero-body">
          <div className="container">
            <London />
          </div>
        </div>
      </section>
      {/* <h1>
        The Neil and Olly News App!!! <br></br>On this homepage we need a list of
        the 3 cities.
        <br></br> When click on each city it will link to this component.{" "}
        <br></br>On each component should have the top headlines articles for the
        city and an image and current weather status.
      </h1> */}
    </>
  );
};
console.log(EverythingLondon);

export default Home;
