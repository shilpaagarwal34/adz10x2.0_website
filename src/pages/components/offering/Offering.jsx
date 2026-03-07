import React, { useState, useEffect } from "react";
import {
  FaRegCheckCircle,
  FaBolt,
  FaBullseye,
  FaBullhorn,
  FaClipboardList,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaGlobe,
  FaPlusCircle,
  FaClipboardCheck,
  FaPlay,
  FaBroadcastTower,
  FaCheckCircle,
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

const PROCESS_STEPS = [
  { id: "create", heading: "Create Campaign", icon: FaPlusCircle, time: "05:40 pm" },
  { id: "approve", heading: "Society Approves", icon: FaClipboardCheck, time: "05:41 pm" },
  { id: "live", heading: "Go Live", icon: FaPlay, time: "05:42 pm" },
  { id: "progress", heading: "Campaign Runs", icon: FaBroadcastTower, time: "05:43 pm" },
  { id: "complete", heading: "Complete", icon: FaCheckCircle, time: "05:44 pm" },
];

const STEP_COUNT = PROCESS_STEPS.length;
const STEP_DURATION_MS = 2500;

const Offering = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { title, sub_heading, offering_content } = data.offering;
  const offeringLabels = offering_content.map((item) => item.heading);
  const marqueeRow = [...offeringLabels, ...offeringLabels];

  useEffect(() => {
    const t = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEP_COUNT);
    }, STEP_DURATION_MS);
    return () => clearInterval(t);
  }, []);

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

          <div className="offering_stepper_wrap">
            <div className="offering_stepper_line" aria-hidden="true" />
            <div className="offering_stepper_track">
              {PROCESS_STEPS.map((step, index) => {
                const Icon = step.icon;
                const isCompleted = index < activeStep;
                const isActive = index === activeStep;
                const isFuture = index > activeStep;
                const state = isCompleted ? "completed" : isActive ? "active" : "future";
                return (
                  <div
                    key={step.id}
                    className={`offering_stepper_card offering_stepper_card_${state}`}
                    onClick={() => setActiveStep(index)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && setActiveStep(index)}
                  >
                    <div className="offering_stepper_card_icon">
                      <Icon />
                    </div>
                    <h3 className="offering_stepper_card_heading">{step.heading}</h3>
                    <span className="offering_stepper_card_time">{step.time}</span>
                  </div>
                );
              })}
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
