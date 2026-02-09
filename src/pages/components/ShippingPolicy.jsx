import React from "react";
import { ListItem, SectionTitle } from "../../utils/ListFormater";

const ShippingPolicy = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h1 className="text-center text-gradient fw-bold mb-4">
          Shipping and Delivery Policy
        </h1>
        <p className="fs-5 text-muted">
          At ADZ10X, we offer digital marketing and advertising services that
          are delivered electronically through our online platform.
        </p>

        <SectionTitle title="Nature of Services" />
        <p>
          Our services, including brand promotion, lead generation, and surveys,
          are entirely digital in nature. No physical goods are shipped.
        </p>

        <SectionTitle title="Delivery Timeline" />
        <p>Once a payment is confirmed and a campaign is created:</p>
        <ul className="list-unstyled">
          <ListItem text="Your campaign setup begins immediately." />
          <ListItem
            text="Ad campaigns are typically delivered (made live) within 24 to 72 business hours,
depending on society approvals and creative verification."
          />
          <ListItem text="You will receive real-time updates and notifications through your dashboard." />
        </ul>

        <SectionTitle title="Service Access" />
        <p>
          All services and earnings dashboards are accessible via your secure
          login at{" "}
          <strong>
            <a target="_blank" href="www.adz10x.com">
              www.adz10x.com
            </a>
          </strong>
          . No physical delivery is involved.
        </p>

        <SectionTitle title="Support" />
        <p>
          If you face any issues accessing your dashboard, viewing campaign
          status, or managing payouts, please contact our support team at{" "}
          <strong>
            <a href="mailto:support@adz10x.com">support@adz10x.com</a>
          </strong>{" "}
          within 24 hours of the issue. .
        </p>
        <p>
          We aim to ensure a seamless and transparent experience from campaign
          creation to payout.
        </p>
      </div>
    </section>
  );
};

export default ShippingPolicy;
