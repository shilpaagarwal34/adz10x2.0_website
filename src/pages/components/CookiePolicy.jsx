import React from "react";
import { ListItem, SectionTitle } from "../../utils/ListFormater";

const CookiePolicy = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h1 className="text-center text-gradient fw-bold mb-4">
          Cookie Policy
        </h1>
        <p className="fs-5 text-muted">
          Our website uses cookies to improve your browsing experience and
          provide personalized content.
        </p>

        <SectionTitle title="What We Track with Cookies" />
        <ul className="list-unstyled">
          <ListItem text="Website usage patterns." />
          <ListItem text="Login preferences." />
          <ListItem text="Campaign activity." />
        </ul>

        <SectionTitle title="Managing Cookies" />
        <p>
          You can choose to disable cookies via your browser settings. However,
          doing so may limit certain features of the platform.
        </p>
        <p>By continuing to use our site, you consent to our use of cookies.</p>
      </div>
    </section>
  );
};

export default CookiePolicy;
