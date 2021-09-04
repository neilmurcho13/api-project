import React from "react";
import { EverythingLondon } from "../../lib/NewsApi";

// Neil's new branch

const Home = () => {
  return (
    <>
      <section className="hero is-fullheight-with-navbar is-warning">
        <div className="hero-body">
          <h2 className="title is-1">N & O NEWS</h2>
        </div>
        <div className="hero-body">
          <h3 className="subtitle is-2">
            Healines and Weather from 3 ish cities
          </h3>
        </div>
      </section>
    </>
  );
};
console.log(EverythingLondon);

export default Home;
