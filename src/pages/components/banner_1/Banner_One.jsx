import React from "react";
import { FaToggleOn, FaWallet, FaBuilding } from "react-icons/fa";
import data from "../../data.json";
import GetStartedBtn from "../GetStartedBtn";
import "./Banner_One.css";

const Banner_One = () => {
  const { title } = data.banner_1;

  return (
    <section className="banner4 banner4_bento section_padding" id="society">
      <div className="container">
        <h1 className="banner4_bento_title gradient-text">{title}</h1>

        <div className="banner4_bento_grid">
          <article className="banner4_bento_card banner4_bento_card_hero">
            <h2 className="banner4_bento_card_hero_title">
              Turn Engagement into Earnings.
            </h2>
            <p className="banner4_bento_card_hero_sub">
              Monetize WhatsApp groups with zero disruption.
            </p>
          </article>

          <article className="banner4_bento_card banner4_bento_card_small">
            <div className="banner4_bento_card_icon">
              <FaToggleOn />
            </div>
            <h3 className="banner4_bento_card_heading">100% Control.</h3>
          </article>

          <article className="banner4_bento_card banner4_bento_card_small">
            <div className="banner4_bento_card_icon">
              <FaWallet />
            </div>
            <h3 className="banner4_bento_card_heading">Instant Payouts.</h3>
          </article>

          <article className="banner4_bento_card banner4_bento_card_medium">
            <div className="banner4_bento_card_icon banner4_bento_card_icon_building">
              <FaBuilding />
            </div>
            <h3 className="banner4_bento_card_heading">Smart Revenue Hubs.</h3>
          </article>
        </div>

        <div className="banner4_bento_cta_wrap">
          <div className="banner4_bento_pill">
            <GetStartedBtn accountType="society" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner_One;
