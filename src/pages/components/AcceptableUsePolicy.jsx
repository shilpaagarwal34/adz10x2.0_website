import React from "react";
import { ListItem, SectionTitle } from "../../utils/ListFormater";

const AcceptableUsePolicy = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h1 className="text-center text-gradient fw-bold mb-4">
          Acceptable Use Policy
        </h1>

        <SectionTitle title="Users must not" />
        <ul className="list-unstyled">
          <ListItem text="Upload misleading, harmful, or offensive content." />
          <ListItem text="Attempt to hack, exploit, or abuse platform resources." />
          <ListItem text="Violate intellectual property or advertising standards." />
          <ListItem text="Spam users or abuse society group access." />
        </ul>

        <p>
          Violation of this policy may result in suspension or termination of
          access without prior notice.
        </p>
      </div>
    </section>
  );
};

export default AcceptableUsePolicy;
