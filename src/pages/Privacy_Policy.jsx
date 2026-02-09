import React from "react";
import { ListItem, SectionTitle } from "../utils/ListFormater";


const Privacy_Policy = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h1 className="text-center text-gradient fw-bold mb-4">
          Privacy Policy
        </h1>
        <p className="fs-5 text-muted">
          We at <strong>Adz10x.com</strong> value your privacy and are committed
          to protecting your personal data. We collect minimal information
          necessary to provide our services, including society and company
          details, contact information, and ad campaign preferences.
        </p>

        <SectionTitle title="What We Collect" />
        <ul className="list-unstyled">
          <ListItem text="Name, email, and contact number." />
          <ListItem text="Society and company registration information." />
          <ListItem text="Ad campaign data and performance metrics." />
        </ul>

        <SectionTitle title="Why We Collect It" />
        <ul className="list-unstyled">
          <ListItem text="To facilitate onboarding and campaign execution." />
          <ListItem text="For communication, analytics, and payment purposes." />
          <ListItem text="To enhance platform performance and personalization." />
        </ul>

        <SectionTitle title="Data Sharing" />
        <p>
          We do <strong>not</strong> sell or rent your data. We only share
          information with verified third-party partners when required for
          campaign execution or compliance.
        </p>

        <SectionTitle title="Your Right" />
        <p>
          You may access, update, or request deletion of your personal data at
          any time by contacting us at{" "}
          <strong>
            <a href="mailto:support@adz10x.com">support@adz10x.com</a>
          </strong>
          .
        </p>
      </div>
    </section>
  );
};

export default Privacy_Policy;
