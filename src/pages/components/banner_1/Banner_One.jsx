import React from "react";
import data from "../../data.json";
import GetStartedBtn from "../GetStartedBtn";
import top_corner from "../../../assets/top-corner.svg";
import bottom_corner from "../../../assets/bottom-corner.svg";
import "./Banner_One.css";

const RADIUS = 115;
const BOX_ANGLES = [0, 72, 144, 216, 288];

const Banner_One = () => {
  const { title, features } = data.banner_1;

  return (
    <section className="banner4 banner4_society section_padding" id="society">
      <div className="container">
        <div className="banner4_society_layout">
          <div className="banner4_society_content">
            <h1 className="banner4_society_title gradient-text">{title}</h1>
            <div className="banner4_society_cta">
              <GetStartedBtn accountType="society" />
            </div>
          </div>
          <div className="banner4_society_visual">
            <img
              src={top_corner}
              className="banner4_society_corner banner4_society_corner_tl"
              alt=""
              aria-hidden
            />
            <img
              src={bottom_corner}
              className="banner4_society_corner banner4_society_corner_br"
              alt=""
              aria-hidden
            />
            <div className="banner4_society_visual_inner">
              <div className="banner4_society_circle_rotate">
                {features.slice(0, 5).map((item, index) => {
                  const angle = BOX_ANGLES[index];
                  return (
                    <div
                      key={index}
                      className="banner4_society_circle_box"
                      style={{
                        transform: `rotate(${angle}deg) translateY(-${RADIUS}px)`,
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner_One;
