import "./About.css";
import React from "react";

// import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      {/* <Helmet>
        <title> About Cakelicious</title>
        <meta name="description" content="Lorem ipsum" />
        <link rel="canonical" href="/about" />
      </Helmet> */}
      <main>
        <div className="about-main-container container">
          <h2> About Cakelicious</h2>

          <p>
            Cakelicious's journey began in 2008 with 1 small store. We have been
            established in a prime location of Liverpool for 6 years, providing
            a wide range of celebration cakes. Catering for any occasion, we
            specialise in weddings, birthday, christening and communion cakes.
            Over the years we have adapted to incorporate the ever changing
            trends as well as dietary needs of our valued customers, including
            the surrounding communities cultural requirements and preferences.
            <br></br>
            We always aim to offer a warm welcome and professional service to
            ensure you will be delighted from beginning to end. Through our
            expertise and array of products and services we are here to help
            you, whether you are looking for advice on sugarcraft equipment and
            courses or designing your dream celebration cake.
          </p>
        </div>
      </main>
    </>
  );
}
