import React from "react";
import { FaWhatsapp, FaGlobe, FaEnvelope, FaCheckCircle } from "react-icons/fa";
import data from "../../data.json";
import "./ChannelsSection.css";

const iconMap = {
  whatsapp: FaWhatsapp,
  portal: FaGlobe,
  email: FaEnvelope,
};

const ChannelsSection = () => {
  const { title, subtitle, channels_list, flow_messages } = data.channels || {
    title: "24/7 Access Through Preferred Channels",
    subtitle: "Reach societies and brands where they are—WhatsApp, web portal, and more.",
    channels_list: [],
    flow_messages: [],
  };

  return (
    <section className="channels_section section_padding">
      <div className="channels_backdrop" />
      <div className="container position-relative">
        <div className="channels_header">
          <div className="channels_accent_bar" />
          <h2 className="channels_title">{title}</h2>
          <p className="channels_subtitle">{subtitle}</p>
        </div>

        <div className="channels_flow_diagram">
          <div className="channels_flow_row">
            {/* Start node */}
            <div className="channels_flow_node channels_flow_start">
              <div className="channels_flow_icon_circle">
                <span className="channels_code_icon">&lt;/&gt;</span>
              </div>
              <span className="channels_node_label">Portal</span>
            </div>

            {/* Flow line + messages */}
            <div className="channels_flow_mid">
              <div className="channels_flow_line" />
              <div className="channels_chat_bubbles">
                {flow_messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`channels_bubble channels_bubble_${msg.type}`}
                  >
                    <span className="channels_bubble_text">{msg.text}</span>
                    <span className="channels_bubble_time">{msg.time}</span>
                    {msg.type === "response" && (
                      <FaCheckCircle className="channels_bubble_check" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Channel icons stack */}
            <div className="channels_stack">
              {channels_list.map((ch, i) => {
                const Icon = iconMap[ch.icon] || FaGlobe;
                return (
                  <div
                    key={ch.name}
                    className="channels_stack_icon"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <Icon />
                  </div>
                );
              })}
            </div>

            {/* Flow line */}
            <div className="channels_flow_mid">
              <div className="channels_flow_line channels_flow_line_right" />
            </div>

            {/* End node */}
            <div className="channels_flow_node channels_flow_end">
              <div className="channels_flow_icon_circle channels_flow_icon_resolved">
                <FaCheckCircle />
              </div>
              <span className="channels_node_label">Resolved</span>
            </div>
          </div>
        </div>

        {/* Channel cards */}
        <div className="channels_cards_grid">
          {channels_list.map((ch) => {
            const Icon = iconMap[ch.icon] || FaGlobe;
            return (
              <article key={ch.name} className="channels_card">
                <div className="channels_card_icon">
                  <Icon />
                </div>
                <h3>{ch.name}</h3>
                <p>{ch.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ChannelsSection;
