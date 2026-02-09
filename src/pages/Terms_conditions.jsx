import React from "react";
import { ListItem } from "../utils/ListFormater.jsx";

const Terms_conditions = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h1 className="text-center text-gradient fw-bold mb-4">
          Terms and Conditions
        </h1>
        <p className="fs-5 text-muted">
          By accessing or using the Adz10x.com platform, you agree to be bound
          by the following terms:
        </p>

        <ul className="list-unstyled">
          <ListItem text="All campaigns must comply with our ad guidelines." />
          <ListItem text="Societies retain control over approving or rejecting ads." />
          <ListItem text="Companies must maintain sufficient wallet balance for campaigns." />
          <ListItem text="Adz10x team reserves the right to suspend accounts violating policies." />
          <ListItem text="Platform content, branding, and code are protected under copyright laws." />
        </ul>
        <p>
          These terms may be updated from time to time. Continued use of the
          platform indicates acceptance of the updated terms.
        </p>
      </div>
    </section>
  );
};

export default Terms_conditions;
