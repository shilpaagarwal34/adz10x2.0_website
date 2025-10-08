import React from "react";
import { ListItem } from "../../utils/ListFormater.jsx";
import { Link } from "react-router-dom";

const RefundPolicy = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h1 className="text-center text-gradient fw-bold mb-4">
          Refund Policy
        </h1>
        <p className="fs-5 text-muted">
          Adz10x.com follows a strict <strong>no-cash-refund policy</strong>.
          Refunds are only issued under the following conditions:
        </p>

        <ul className="list-unstyled">
          <ListItem text="Failed or duplicate wallet recharge due to technical error." />
          <ListItem text="Incorrect charges due to billing system errors." />
        </ul>

        <p>
          In such cases, users must raise a request within 7 days at
          {""} <strong><Link to="mailto:support@adz10x.com">support@adz10x.com</Link></strong>.
          Refunds will be processed to the original payment method within 7–14
          business days.
        </p>
        <p>
          Wallet balances for unutilized campaigns are{" "}
          <strong>non-refundable</strong> but can be carried forward.
        </p>
      </div>
    </section>
  );
};

export default RefundPolicy;
