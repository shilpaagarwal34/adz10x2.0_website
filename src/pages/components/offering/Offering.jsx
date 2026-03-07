import React from "react";
import {
  FaRegCheckCircle,
  FaBolt,
  FaBullseye,
  FaBullhorn,
  FaClipboardList,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaCheckCircle,
  FaGlobe,
  FaEnvelope,
} from "react-icons/fa";
import data from "../../data.json";
import "./Offering.css";

const offeringIconMap = {
  leadgen: FaBullseye,
  branding: FaBullhorn,
  surveys: FaClipboardList,
  hyperlocal: FaMapMarkerAlt,
  whatsapp: FaWhatsapp,
};

const Offering = () => {
  const { title, sub_heading, offering_content, flow_messages, flow_right_messages } = data.offering;
  const offeringLabels = offering_content.map((item) => item.heading);
  const marqueeRow = [...offeringLabels, ...offeringLabels];

  const messages = flow_messages || [
    { type: "query", text: "New campaign request for our society", time: "05:41 pm" },
    { type: "response", text: "Campaign approved and live!", time: "05:42 pm" },
  ];

  const rightMessages = flow_right_messages || [
    { text: "Society earning in multiple folds!", time: "05:43 pm" },
    { text: "Extra income without raising maintenance.", time: "05:44 pm" },
  ];

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

        <div className="container offering_container">
          <div className="offering_header">
            <div className="offering_accent_bar" />
            <h1 className="offering_title gradient-text">{title}</h1>
            <p className="offering_subtitle">{sub_heading}</p>
          </div>

          <div className="offering_flow_diagram">
            <div className="offering_flow_svg_wrap">
              <svg className="offering_flow_svg" viewBox="0 0 1000 220" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="offeringLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#01AA23" stopOpacity="0.9" />
                    <stop offset="50%" stopColor="#0193FF" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#0d6efd" stopOpacity="0.9" />
                  </linearGradient>
                  <linearGradient id="offeringLineGrad2" x1="100%" y1="0%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#0d6efd" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#01AA23" stopOpacity="0.9" />
                  </linearGradient>
                </defs>
                {/* Main flowing curve - green to blue */}
                <path className="offering_flow_path offering_flow_path_main" d="M 80 110 C 200 80 280 140 360 110 C 440 80 520 140 600 110 C 680 80 760 140 920 110" fill="none" stroke="url(#offeringLineGrad)" strokeWidth="2.5" strokeDasharray="10 8" />
                {/* Top accent curve */}
                <path className="offering_flow_path offering_flow_path_top" d="M 200 110 Q 350 40 500 90 Q 650 140 800 110" fill="none" stroke="url(#offeringLineGrad)" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="6 10" />
                {/* Bottom accent curve */}
                <path className="offering_flow_path offering_flow_path_bot" d="M 200 110 Q 350 180 500 130 Q 650 80 800 110" fill="none" stroke="url(#offeringLineGrad)" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="6 10" />
                {/* Right segment emphasis */}
                <path className="offering_flow_path offering_flow_path_right" d="M 600 110 C 700 100 800 120 920 110" fill="none" stroke="url(#offeringLineGrad2)" strokeWidth="2" strokeOpacity="0.8" strokeDasharray="8 6" />
                {/* Dots along flow */}
                <circle cx="180" cy="110" r="4" fill="white" className="offering_flow_dot" />
                <circle cx="360" cy="110" r="4" fill="white" className="offering_flow_dot" />
                <circle cx="500" cy="110" r="4" fill="white" className="offering_flow_dot" />
                <circle cx="600" cy="110" r="4" fill="white" className="offering_flow_dot" />
                <circle cx="760" cy="110" r="4" fill="white" className="offering_flow_dot" />
              </svg>
            </div>

            <div className="offering_flow_row">
              <div className="offering_flow_node">
                <div className="offering_flow_icon_circle offering_flow_start">
                  <span className="offering_code_icon">&lt;/&gt;</span>
                </div>
                <span className="offering_node_label">Portal</span>
              </div>

              <div className="offering_flow_mid offering_flow_mid_left">
                <div className="offering_chat_bubbles">
                  {messages.map((msg, i) => (
                    <div
                      key={i}
                      className={`offering_bubble offering_bubble_${msg.type}`}
                    >
                      <span className="offering_bubble_text">{msg.text}</span>
                      <span className="offering_bubble_time">{msg.time}</span>
                      {msg.type === "response" && (
                        <FaCheckCircle className="offering_bubble_check" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="offering_flow_center">
                <div className="offering_stack">
                  {offering_content.slice(0, 3).map((item, i) => {
                    const Icon = offeringIconMap[item.icon] || FaGlobe;
                    return (
                      <div key={item.heading} className="offering_stack_icon">
                        <Icon />
                      </div>
                    );
                  })}
                </div>
                <div className="offering_platform_icons">
                  <div className="offering_platform_icon" title="WhatsApp">
                    <FaWhatsapp />
                  </div>
                  <div className="offering_platform_icon" title="Web Portal">
                    <FaGlobe />
                  </div>
                  <div className="offering_platform_icon" title="Email">
                    <FaEnvelope />
                  </div>
                </div>
              </div>

              <div className="offering_flow_mid offering_flow_mid_right">
                <div className="offering_right_bubbles">
                  {rightMessages.map((msg, i) => (
                    <div key={i} className="offering_bubble offering_bubble_earnings">
                      <span className="offering_bubble_text">{msg.text}</span>
                      <span className="offering_bubble_time">{msg.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="offering_flow_node">
                <div className="offering_flow_icon_circle offering_flow_end">
                  <FaCheckCircle />
                </div>
                <span className="offering_node_label">Live</span>
              </div>
            </div>
          </div>

          <div className="offering_cards_grid">
            {offering_content.map((item) => {
              const Icon = offeringIconMap[item.icon] || FaGlobe;
              return (
                <article key={item.heading} className="offering_card">
                  <div className="offering_card_icon">
                    <Icon />
                  </div>
                  <h3>{item.heading}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Offering;
