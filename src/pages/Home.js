import React from "react";
import "../App.css";

import HeroSection from "../components/HeroSection.js";
import Footer from "../components/Footer.js";

function Home() {
  return (
    <>
      <HeroSection />
      <div className="main">
        <h1>
          "Choosing the right career is crucial for long-term fulfillment and
          success. Consider your interests, skills, values, and job prospects
          before making a decision."
        </h1>
      </div>

      <div className="container">
        <div className="column">
          <img
            src="/images/board-3683740_1920.jpg"
            alt="Image"
          />
        </div>
        <div className="column">
          <h2>Let Saarthi guide you to the perfect career path</h2>
          <p>
            Saarthi is a trusted career guidance platform that empowers
            individuals to discover their potential, make informed decisions,
            and achieve professional success through personalized guidance and
            resources.
          </p>
          <button>Discover your dream career </button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
