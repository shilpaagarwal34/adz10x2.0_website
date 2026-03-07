import React from "react";
import { FaRegCheckCircle, FaBolt } from "react-icons/fa";
import data from "../../data.json";

const Offering = () => {
  const { title, sub_heading, offering_content } = data.offering;
  const offeringLabels = offering_content.map((item) => item.heading);
  const marqueeRow = [...offeringLabels, ...offeringLabels];

  return (
    <>
      <section className="our_offering_section section_padding">
        <div className="offering_marquee_full_bleed">
          <div className="offering_marquee_shell">
            <div className="offering_marquee_row">
              <div className="offering_marquee_track">
                {marqueeRow.map((label, index) => (
                  <div key={`${label}-${index}`} className="offering_marquee_chip">
                    <FaBolt />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="offering_marquee_row reverse">
              <div className="offering_marquee_track">
                {marqueeRow.map((label, index) => (
                  <div key={`${label}-reverse-${index}`} className="offering_marquee_chip">
                    <FaRegCheckCircle />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="container section mt-4">
          <h1 className="gradient-text">{title}</h1>
          <p>{sub_heading}</p>
        </div>

        <div className="container section">
          <div className="offering_feature_grid mt-4">
            {offering_content.map((item) => (
              <article key={item.heading} className="offering_feature_card">
                <h3>{item.heading}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Offering;