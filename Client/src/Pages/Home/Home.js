import "./Home.css";
import React from "react";
import happybirthdaycake from "../../Assets/happybirthdaycake.jpg";
import weddingcake from "../../Assets/weddingcake.jpg";

// import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      {/* <Helmet> */}
      <title>Cakelicious Homepage</title>
      <meta name="description" content="Welcome to our Website" />
      <link rel="canonical" href="/" />
      {/* </Helmet> */}

      <main>
        <div className="home-main-container container">
          <h2>
            Award Winning Online Cake Service & Free Cake Delivery Merseyside
            Area
          </h2>
          <div className="img-container container">
            <img
              className="home-img"
              src={happybirthdaycake}
              alt="birthdaycake"
            />
            <img className="home-img" src={weddingcake} alt="weddingcake" />
          </div>
        </div>
      </main>
    </>
  );
}
