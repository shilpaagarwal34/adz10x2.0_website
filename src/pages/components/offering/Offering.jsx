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
            <div className="offering_flow_row">
              <div className="offering_flow_node">
                <div className="offering_flow_icon_circle offering_flow_start">
                  <span className="offering_code_icon">&lt;/&gt;</span>
                </div>
                <span className="offering_node_label">Portal</span>
              </div>

              <div className="offering_flow_mid">
                <div className="offering_flow_line" />
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

              <div className="offering_flow_mid offering_flow_mid_right">
                <div className="offering_flow_line offering_flow_line_right" />
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
