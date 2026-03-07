import React from "react";
import {
  FaCoins,
  FaShieldAlt,
  FaPiggyBank,
  FaWallet,
  FaRocket,
} from "react-icons/fa";
import data from "../../data.json";
import GetStartedBtn from "../GetStartedBtn";
import top_corner from "../../../assets/top-corner.svg";
import bottom_corner from "../../../assets/bottom-corner.svg";
import "./Banner_One.css";

const FEATURE_ICONS = [FaCoins, FaShieldAlt, FaPiggyBank, FaWallet, FaRocket];

const Banner_One = () => {
  const { title, features } = data.banner_1;

  return (
    <section className="banner4 banner4_society section_padding" id="society">
      <div className="container">
        <div className="banner4_society_layout">
          <div className="banner4_society_content">
            <h1 className="banner4_society_title gradient-text">{title}</h1>
            <ul className="banner4_society_list">
              {features.map((item, index) => {
                const Icon = FEATURE_ICONS[index] || FaCoins;
                return (
                  <li key={index} className="banner4_society_item">
                    <span className="banner4_society_item_icon">
                      <Icon />
                    </span>
                    <div className="banner4_society_item_text">
                      <h3>{item.heading}</h3>
                      <p>{item.description}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
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
            <div className="banner4_society_visual_inner" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner_One;
