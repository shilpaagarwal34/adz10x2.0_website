import React from "react";
import data from "../../data.json";
import GetStartedBtn from "../GetStartedBtn";
import "./Banner_One.css";

const BOX_ANGLES = [0, 72, 144, 216, 288];
const CIRCLE_SIZE = 420;
const RADIUS = 198;

const Banner_One = () => {
  const { title, features } = data.banner_1;

  return (
    <section className="banner4 banner4_society section_padding" id="society">
      <div className="container">
        <h1 className="banner4_society_title gradient-text">{title}</h1>
      </div>

      <div className="banner4_society_circle_zone">
        <div
          className="banner4_society_circle_rotate"
          style={{ width: CIRCLE_SIZE, height: CIRCLE_SIZE }}
        >
          <svg
            className="banner4_society_circle_ring"
            viewBox={`0 0 ${CIRCLE_SIZE} ${CIRCLE_SIZE}`}
            aria-hidden
          >
            <defs>
              <linearGradient id="banner4CircleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#01AA23" />
                <stop offset="100%" stopColor="#0193FF" />
              </linearGradient>
            </defs>
            <circle
              cx={CIRCLE_SIZE / 2}
              cy={CIRCLE_SIZE / 2}
              r={CIRCLE_SIZE / 2 - 4}
              fill="none"
              stroke="url(#banner4CircleGrad)"
              strokeWidth="3"
            />
          </svg>
          {features.slice(0, 5).map((item, index) => {
            const angle = BOX_ANGLES[index];
            return (
              <div
                key={index}
                className="banner4_society_circle_box"
                style={{
                  "--angle": `${angle}deg`,
                  "--radius": `${RADIUS}px`,
                }}
              >
                <div className="banner4_society_circle_box_inner">
                  <span className="banner4_society_circle_heading">
                    {item.heading}
                  </span>
                  <span className="banner4_society_circle_desc">
                    {item.description}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="container">
        <div className="banner4_society_cta">
          <GetStartedBtn accountType="society" />
        </div>
      </div>
    </section>
  );
};

export default Banner_One;
