import React, { useState, useEffect } from "react";
import data from "../../data.json";
import GetStartedBtn from "../GetStartedBtn";
import "./Banner_One.css";

const ROTATION_DURATION_MS = 30000;
const BOX_ANGLES = [180, 225, 270, 315, 360];

const Banner_One = () => {
  const { title, features } = data.banner_1;
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const start = Date.now();
    let raf = 0;
    const tick = () => {
      const elapsed = Date.now() - start;
      const r = (elapsed / ROTATION_DURATION_MS) * 360 % 360;
      setRotation(r);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="banner4 banner4_society section_padding" id="society">
      <div className="container">
        <h1 className="banner4_society_title gradient-text">{title}</h1>
      </div>

      <div className="banner4_society_semicircle_zone">
        <svg
          className="banner4_society_semicircle_svg"
          viewBox="0 0 800 400"
          preserveAspectRatio="xMidYMax meet"
          aria-hidden
        >
          <defs>
            <linearGradient id="banner4ArcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#01AA23" />
              <stop offset="100%" stopColor="#0193FF" />
            </linearGradient>
          </defs>
          <path
            className="banner4_society_arc_path"
            d="M 0 400 A 400 400 0 0 1 800 400"
            fill="none"
            stroke="url(#banner4ArcGrad)"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
        <div
          className="banner4_society_semicircle_rotate"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {features.slice(0, 5).map((item, index) => {
            const angle = BOX_ANGLES[index];
            const counterRotate = -(rotation + angle);
            return (
              <div
                key={index}
                className="banner4_society_semicircle_box"
                style={{
                  "--angle": `${angle}deg`,
                }}
              >
                <div
                  className="banner4_society_semicircle_box_inner"
                  style={{ transform: `rotate(${counterRotate}deg)` }}
                >
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
