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
            <div className="banner4_society_visual_inner">
              <div className="banner4_society_semicircle_wrap">
                <svg
                  className="banner4_society_semicircle_svg"
                  viewBox="0 0 200 120"
                  fill="none"
                  aria-hidden
                >
                  <defs>
                    <linearGradient id="societyArcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#01AA23" />
                      <stop offset="100%" stopColor="#0193FF" />
                    </linearGradient>
                  </defs>
                  <path
                    className="banner4_society_arc"
                    d="M 20 100 A 80 80 0 0 1 180 100"
                    fill="none"
                    stroke="url(#societyArcGrad)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="banner4_society_arc_labels">
                  {["Earnings", "Control", "Income", "Payouts", "Growth"].map((word) => (
                    <span key={word} className="banner4_society_arc_label">
                      {word}
                    </span>
                  ))}
                </div>
                <div className="banner4_society_semicircle_center" aria-hidden />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner_One;
