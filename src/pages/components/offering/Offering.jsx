// -----------CODE PART:4-------------------
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
const STEP_DURATION_MS = 1700;

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

        {/* 🔥 High-level 3D Marquee + Gradient Hover */}
        <style>{`
          .offering_marquee_track {
            display: flex;
            animation: marquee 18s linear infinite;
            transform-style: preserve-3d;
          }
          .offering_marquee_row.reverse .offering_marquee_track {
            animation-direction: reverse;
          }
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .offering_marquee_chip {
            display: inline-flex;
            align-items: center;
            background: #fff;
            padding: 14px 24px;
            margin: 0 12px;
            border-radius: 16px;
            font-weight: 600;
            font-size: 1.15rem;
            box-shadow:
              0 10px 25px rgba(0,0,0,0.15),
              0 20px 50px rgba(0,0,0,0.1) inset;
            transform: perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0);
            transition: transform 0.5s ease, box-shadow 0.5s ease, filter 0.5s ease, background 0.5s ease;
          }
          .offering_marquee_chip span {
            margin-left: 10px;
          }
          .offering_marquee_chip:hover {
            transform: scale(1.25) rotateX(8deg) rotateY(-8deg) translateZ(30px);
            box-shadow:
              0 25px 60px rgba(0,0,0,0.35),
              0 15px 35px rgba(0,0,0,0.2) inset;
            background: linear-gradient(to right, #01AA23, #0193FF);
            color: #fff;
            animation: shine 1s ease-in-out infinite alternate;
          }
          @keyframes shine {
            0% { filter: brightness(1); }
            50% { filter: brightness(1.3); }
            100% { filter: brightness(1); }
          }
        `}</style>
      </section>
    </>
  );
};

export default Offering;




// -----------CODE PART:3-------------------
// import React, { useState, useEffect } from "react";
// import {
//   FaRegCheckCircle,
//   FaBolt,
//   FaBullseye,
//   FaBullhorn,
//   FaClipboardList,
//   FaMapMarkerAlt,
//   FaWhatsapp,
//   FaGlobe,
//   FaPlusCircle,
//   FaClipboardCheck,
//   FaPlay,
//   FaBroadcastTower,
//   FaCheckCircle,
// } from "react-icons/fa";
// import data from "../../data.json";
// import "./Offering.css";

// const offeringIconMap = {
//   leadgen: FaBullseye,
//   branding: FaBullhorn,
//   surveys: FaClipboardList,
//   hyperlocal: FaMapMarkerAlt,
//   whatsapp: FaWhatsapp,
// };

// const PROCESS_STEPS = [
//   { id: "create", heading: "Create Campaign", icon: FaPlusCircle, time: "05:40 pm" },
//   { id: "approve", heading: "Society Approves", icon: FaClipboardCheck, time: "05:41 pm" },
//   { id: "live", heading: "Go Live", icon: FaPlay, time: "05:42 pm" },
//   { id: "progress", heading: "Campaign Runs", icon: FaBroadcastTower, time: "05:43 pm" },
//   { id: "complete", heading: "Complete", icon: FaCheckCircle, time: "05:44 pm" },
// ];

// const STEP_COUNT = PROCESS_STEPS.length;
// const STEP_DURATION_MS = 1700;

// const Offering = () => {
//   const [activeStep, setActiveStep] = useState(0);
//   const { title, sub_heading, offering_content } = data.offering;
//   const offeringLabels = offering_content.map((item) => item.heading);
//   const marqueeRow = [...offeringLabels, ...offeringLabels];

//   useEffect(() => {
//     const t = setInterval(() => {
//       setActiveStep((prev) => (prev + 1) % STEP_COUNT);
//     }, STEP_DURATION_MS);
//     return () => clearInterval(t);
//   }, []);

//   return (
//     <>
//       <section className="our_offering_section section_padding">
//         <div className="offering_marquee_full_bleed">
//           <div className="offering_marquee_shell">
//             <div className="offering_marquee_row">
//               <div className="offering_marquee_track">
//                 {marqueeRow.map((label, index) => (
//                   <div key={`${label}-${index}`} className="offering_marquee_chip">
//                     <FaBolt />
//                     <span>{label}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="offering_marquee_row reverse">
//               <div className="offering_marquee_track">
//                 {marqueeRow.map((label, index) => (
//                   <div key={`${label}-reverse-${index}`} className="offering_marquee_chip">
//                     <FaRegCheckCircle />
//                     <span>{label}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="container offering_container">
//           <div className="offering_header">
//             <div className="offering_accent_bar" />
//             <h1 className="offering_title gradient-text">{title}</h1>
//             <p className="offering_subtitle">{sub_heading}</p>
//           </div>

//           <div className="offering_stepper_wrap">
//             <div className="offering_stepper_line" aria-hidden="true" />
//             <div className="offering_stepper_track">
//               {PROCESS_STEPS.map((step, index) => {
//                 const Icon = step.icon;
//                 const isCompleted = index < activeStep;
//                 const isActive = index === activeStep;
//                 const isFuture = index > activeStep;
//                 const state = isCompleted ? "completed" : isActive ? "active" : "future";
//                 return (
//                   <div
//                     key={step.id}
//                     className={`offering_stepper_card offering_stepper_card_${state}`}
//                     onClick={() => setActiveStep(index)}
//                     role="button"
//                     tabIndex={0}
//                     onKeyDown={(e) => e.key === "Enter" && setActiveStep(index)}
//                   >
//                     <div className="offering_stepper_card_icon">
//                       <Icon />
//                     </div>
//                     <h3 className="offering_stepper_card_heading">{step.heading}</h3>
//                     <span className="offering_stepper_card_time">{step.time}</span>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           <div className="offering_cards_grid">
//             {offering_content.map((item) => {
//               const Icon = offeringIconMap[item.icon] || FaGlobe;
//               return (
//                 <article key={item.heading} className="offering_card">
//                   <div className="offering_card_icon">
//                     <Icon />
//                   </div>
//                   <h3>{item.heading}</h3>
//                   <p>{item.description}</p>
//                 </article>
//               );
//             })}
//           </div>
//         </div>

//         {/* 🔥 High-level 3D Marquee + Hover Effects */}
//         <style>{`
//           .offering_marquee_track {
//             display: flex;
//             animation: marquee 18s linear infinite;
//             transform-style: preserve-3d;
//           }
//           .offering_marquee_row.reverse .offering_marquee_track {
//             animation-direction: reverse;
//           }
//           @keyframes marquee {
//             0% { transform: translateX(0); }
//             100% { transform: translateX(-50%); }
//           }
//           .offering_marquee_chip {
//             display: inline-flex;
//             align-items: center;
//             background: #fff;
//             padding: 14px 24px;
//             margin: 0 12px;
//             border-radius: 16px;
//             font-weight: 600;
//             font-size: 1.15rem;
//             box-shadow:
//               0 10px 25px rgba(0,0,0,0.15),
//               0 20px 50px rgba(0,0,0,0.1) inset;
//             transform: perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0);
//             transition: transform 0.5s ease, box-shadow 0.5s ease, filter 0.5s ease;
//           }
//           .offering_marquee_chip span {
//             margin-left: 10px;
//           }
//           .offering_marquee_chip:hover {
//             transform: scale(1.25) rotateX(8deg) rotateY(-8deg) translateZ(30px);
//             box-shadow:
//               0 25px 60px rgba(0,0,0,0.35),
//               0 15px 35px rgba(0,0,0,0.2) inset;
//             animation: shine 1s ease-in-out infinite alternate;
//           }
//           @keyframes shine {
//             0% { filter: brightness(1); }
//             50% { filter: brightness(1.3); }
//             100% { filter: brightness(1); }
//           }
//         `}</style>
//       </section>
//     </>
//   );
// };

// export default Offering;


// -----------CODE PART: 2-------------------
// import React, { useState, useEffect } from "react";
// import {
//   FaRegCheckCircle,
//   FaBolt,
//   FaBullseye,
//   FaBullhorn,
//   FaClipboardList,
//   FaMapMarkerAlt,
//   FaWhatsapp,
//   FaGlobe,
//   FaPlusCircle,
//   FaClipboardCheck,
//   FaPlay,
//   FaBroadcastTower,
//   FaCheckCircle,
// } from "react-icons/fa";
// import data from "../../data.json";
// import "./Offering.css";

// const offeringIconMap = {
//   leadgen: FaBullseye,
//   branding: FaBullhorn,
//   surveys: FaClipboardList,
//   hyperlocal: FaMapMarkerAlt,
//   whatsapp: FaWhatsapp,
// };

// const PROCESS_STEPS = [
//   { id: "create", heading: "Create Campaign", icon: FaPlusCircle, time: "05:40 pm" },
//   { id: "approve", heading: "Society Approves", icon: FaClipboardCheck, time: "05:41 pm" },
//   { id: "live", heading: "Go Live", icon: FaPlay, time: "05:42 pm" },
//   { id: "progress", heading: "Campaign Runs", icon: FaBroadcastTower, time: "05:43 pm" },
//   { id: "complete", heading: "Complete", icon: FaCheckCircle, time: "05:44 pm" },
// ];

// const STEP_COUNT = PROCESS_STEPS.length;
// const STEP_DURATION_MS = 1700;

// const Offering = () => {
//   const [activeStep, setActiveStep] = useState(0);
//   const { title, sub_heading, offering_content } = data.offering;
//   const offeringLabels = offering_content.map((item) => item.heading);
//   const marqueeRow = [...offeringLabels, ...offeringLabels];

//   useEffect(() => {
//     const t = setInterval(() => {
//       setActiveStep((prev) => (prev + 1) % STEP_COUNT);
//     }, STEP_DURATION_MS);
//     return () => clearInterval(t);
//   }, []);

//   return (
//     <>
//       <section className="our_offering_section section_padding">
//         <div className="offering_marquee_full_bleed">
//           <div className="offering_marquee_shell">
//             <div className="offering_marquee_row">
//               <div className="offering_marquee_track">
//                 {marqueeRow.map((label, index) => (
//                   <div key={`${label}-${index}`} className="offering_marquee_chip">
//                     <FaBolt />
//                     <span>{label}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="offering_marquee_row reverse">
//               <div className="offering_marquee_track">
//                 {marqueeRow.map((label, index) => (
//                   <div key={`${label}-reverse-${index}`} className="offering_marquee_chip">
//                     <FaRegCheckCircle />
//                     <span>{label}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="container offering_container">
//           <div className="offering_header">
//             <div className="offering_accent_bar" />
//             <h1 className="offering_title gradient-text">{title}</h1>
//             <p className="offering_subtitle">{sub_heading}</p>
//           </div>

//           <div className="offering_stepper_wrap">
//             <div className="offering_stepper_line" aria-hidden="true" />
//             <div className="offering_stepper_track">
//               {PROCESS_STEPS.map((step, index) => {
//                 const Icon = step.icon;
//                 const isCompleted = index < activeStep;
//                 const isActive = index === activeStep;
//                 const isFuture = index > activeStep;
//                 const state = isCompleted ? "completed" : isActive ? "active" : "future";
//                 return (
//                   <div
//                     key={step.id}
//                     className={`offering_stepper_card offering_stepper_card_${state}`}
//                     onClick={() => setActiveStep(index)}
//                     role="button"
//                     tabIndex={0}
//                     onKeyDown={(e) => e.key === "Enter" && setActiveStep(index)}
//                   >
//                     <div className="offering_stepper_card_icon">
//                       <Icon />
//                     </div>
//                     <h3 className="offering_stepper_card_heading">{step.heading}</h3>
//                     <span className="offering_stepper_card_time">{step.time}</span>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           <div className="offering_cards_grid">
//             {offering_content.map((item) => {
//               const Icon = offeringIconMap[item.icon] || FaGlobe;
//               return (
//                 <article key={item.heading} className="offering_card">
//                   <div className="offering_card_icon">
//                     <Icon />
//                   </div>
//                   <h3>{item.heading}</h3>
//                   <p>{item.description}</p>
//                 </article>
//               );
//             })}
//           </div>
//         </div>

//         {/* 3D Marquee + Shadow + Hover Glow */}
//         <style>{`
//           .offering_marquee_track {
//             display: flex;
//             animation: marquee 20s linear infinite;
//           }
//           .offering_marquee_row.reverse .offering_marquee_track {
//             animation-direction: reverse;
//           }
//           @keyframes marquee {
//             0% { transform: translateX(0); }
//             100% { transform: translateX(-50%); }
//           }
//           .offering_marquee_chip {
//             display: inline-flex;
//             align-items: center;
//             background: #fff;
//             padding: 14px 22px;
//             margin: 0 12px;
//             border-radius: 14px;
//             font-weight: 600;
//             font-size: 1.1rem;
//             box-shadow: 0 8px 20px rgba(0,0,0,0.15), 0 4px 10px rgba(0,0,0,0.1) inset;
//             transform: perspective(800px) translateZ(0);
//             transition: transform 0.4s ease, box-shadow 0.4s ease, filter 0.4s ease;
//           }
//           .offering_marquee_chip span {
//             margin-left: 8px;
//           }
//           .offering_marquee_chip:hover {
//             transform: scale(1.18) translateZ(25px);
//             box-shadow: 0 20px 40px rgba(0,0,0,0.35), 0 8px 15px rgba(0,0,0,0.2) inset;
//             animation: shine 1s ease-in-out infinite alternate;
//           }
//           @keyframes shine {
//             0% { filter: brightness(1); }
//             50% { filter: brightness(1.25); }
//             100% { filter: brightness(1); }
//           }
//         `}</style>
//       </section>
//     </>
//   );
// };

// export default Offering;




// -----------CODE PART: 1-------------------
// import React, { useState, useEffect } from "react";
// import {
//   FaRegCheckCircle,
//   FaBolt,
//   FaBullseye,
//   FaBullhorn,
//   FaClipboardList,
//   FaMapMarkerAlt,
//   FaWhatsapp,
//   FaGlobe,
//   FaPlusCircle,
//   FaClipboardCheck,
//   FaPlay,
//   FaBroadcastTower,
//   FaCheckCircle,
// } from "react-icons/fa";
// import data from "../../data.json";
// import "./Offering.css";

// const offeringIconMap = {
//   leadgen: FaBullseye,
//   branding: FaBullhorn,
//   surveys: FaClipboardList,
//   hyperlocal: FaMapMarkerAlt,
//   whatsapp: FaWhatsapp,
// };

// const PROCESS_STEPS = [
//   { id: "create", heading: "Create Campaign", icon: FaPlusCircle, time: "05:40 pm" },
//   { id: "approve", heading: "Society Approves", icon: FaClipboardCheck, time: "05:41 pm" },
//   { id: "live", heading: "Go Live", icon: FaPlay, time: "05:42 pm" },
//   { id: "progress", heading: "Campaign Runs", icon: FaBroadcastTower, time: "05:43 pm" },
//   { id: "complete", heading: "Complete", icon: FaCheckCircle, time: "05:44 pm" },
// ];

// const STEP_COUNT = PROCESS_STEPS.length;
// const STEP_DURATION_MS = 1700;

// const Offering = () => {
//   const [activeStep, setActiveStep] = useState(0);
//   const { title, sub_heading, offering_content } = data.offering;
//   const offeringLabels = offering_content.map((item) => item.heading);
//   const marqueeRow = [...offeringLabels, ...offeringLabels];

//   useEffect(() => {
//     const t = setInterval(() => {
//       setActiveStep((prev) => (prev + 1) % STEP_COUNT);
//     }, STEP_DURATION_MS);
//     return () => clearInterval(t);
//   }, []);

//   return (
//     <>
//       <section className="our_offering_section section_padding">
//         <div className="offering_marquee_full_bleed">
//           <div className="offering_marquee_shell">
//             <div className="offering_marquee_row">
//               <div className="offering_marquee_track">
//                 {marqueeRow.map((label, index) => (
//                   <div key={`${label}-${index}`} className="offering_marquee_chip">
//                     <FaBolt />
//                     <span>{label}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="offering_marquee_row reverse">
//               <div className="offering_marquee_track">
//                 {marqueeRow.map((label, index) => (
//                   <div key={`${label}-reverse-${index}`} className="offering_marquee_chip">
//                     <FaRegCheckCircle />
//                     <span>{label}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="container offering_container">
//           <div className="offering_header">
//             <div className="offering_accent_bar" />
//             <h1 className="offering_title gradient-text">{title}</h1>
//             <p className="offering_subtitle">{sub_heading}</p>
//           </div>

//           <div className="offering_stepper_wrap">
//             <div className="offering_stepper_line" aria-hidden="true" />
//             <div className="offering_stepper_track">
//               {PROCESS_STEPS.map((step, index) => {
//                 const Icon = step.icon;
//                 const isCompleted = index < activeStep;
//                 const isActive = index === activeStep;
//                 const isFuture = index > activeStep;
//                 const state = isCompleted ? "completed" : isActive ? "active" : "future";
//                 return (
//                   <div
//                     key={step.id}
//                     className={`offering_stepper_card offering_stepper_card_${state}`}
//                     onClick={() => setActiveStep(index)}
//                     role="button"
//                     tabIndex={0}
//                     onKeyDown={(e) => e.key === "Enter" && setActiveStep(index)}
//                   >
//                     <div className="offering_stepper_card_icon">
//                       <Icon />
//                     </div>
//                     <h3 className="offering_stepper_card_heading">{step.heading}</h3>
//                     <span className="offering_stepper_card_time">{step.time}</span>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           <div className="offering_cards_grid">
//             {offering_content.map((item) => {
//               const Icon = offeringIconMap[item.icon] || FaGlobe;
//               return (
//                 <article key={item.heading} className="offering_card">
//                   <div className="offering_card_icon">
//                     <Icon />
//                   </div>
//                   <h3>{item.heading}</h3>
//                   <p>{item.description}</p>
//                 </article>
//               );
//             })}
//           </div>
//         </div>

//         {/* Improved Marquee + Hover Effect */}
//         <style>{`
//           .offering_marquee_track {
//             display: flex;
//             animation: marquee 20s linear infinite;
//           }
//           .offering_marquee_row.reverse .offering_marquee_track {
//             animation-direction: reverse;
//           }
//           @keyframes marquee {
//             0% { transform: translateX(0); }
//             100% { transform: translateX(-50%); }
//           }
//           .offering_marquee_chip {
//             display: inline-flex;
//             align-items: center;
//             background: #fff;
//             padding: 12px 20px;
//             margin: 0 10px;
//             border-radius: 12px;
//             font-weight: 600;
//             font-size: 1.1rem;
//             box-shadow: 0 4px 15px rgba(0,0,0,0.1);
//             transform: perspective(600px) translateZ(0);
//             transition: transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease;
//           }
//           .offering_marquee_chip span {
//             margin-left: 8px;
//           }
//           .offering_marquee_chip:hover {
//             transform: scale(1.15) translateZ(20px);
//             box-shadow: 0 10px 25px rgba(0,0,0,0.25);
//             animation: shine 1s ease-in-out infinite alternate;
//           }
//           @keyframes shine {
//             0% { filter: brightness(1); }
//             50% { filter: brightness(1.2); }
//             100% { filter: brightness(1); }
//           }
//         `}</style>
//       </section>
//     </>
//   );
// };

// export default Offering;



// -----------CODE PART: 0-------------------
// import React, { useState, useEffect } from "react";
// import {
//   FaRegCheckCircle,
//   FaBolt,
//   FaBullseye,
//   FaBullhorn,
//   FaClipboardList,
//   FaMapMarkerAlt,
//   FaWhatsapp,
//   FaGlobe,
//   FaPlusCircle,
//   FaClipboardCheck,
//   FaPlay,
//   FaBroadcastTower,
//   FaCheckCircle,
// } from "react-icons/fa";
// import data from "../../data.json";
// import "./Offering.css";

// const offeringIconMap = {
//   leadgen: FaBullseye,
//   branding: FaBullhorn,
//   surveys: FaClipboardList,
//   hyperlocal: FaMapMarkerAlt,
//   whatsapp: FaWhatsapp,
// };

// const PROCESS_STEPS = [
//   { id: "create", heading: "Create Campaign", icon: FaPlusCircle, time: "05:40 pm" },
//   { id: "approve", heading: "Society Approves", icon: FaClipboardCheck, time: "05:41 pm" },
//   { id: "live", heading: "Go Live", icon: FaPlay, time: "05:42 pm" },
//   { id: "progress", heading: "Campaign Runs", icon: FaBroadcastTower, time: "05:43 pm" },
//   { id: "complete", heading: "Complete", icon: FaCheckCircle, time: "05:44 pm" },
// ];

// const STEP_COUNT = PROCESS_STEPS.length;
// const STEP_DURATION_MS = 1700;

// const Offering = () => {
//   const [activeStep, setActiveStep] = useState(0);
//   const { title, sub_heading, offering_content } = data.offering;
//   const offeringLabels = offering_content.map((item) => item.heading);
//   const marqueeRow = [...offeringLabels, ...offeringLabels];

//   useEffect(() => {
//     const t = setInterval(() => {
//       setActiveStep((prev) => (prev + 1) % STEP_COUNT);
//     }, STEP_DURATION_MS);
//     return () => clearInterval(t);
//   }, []);

//   return (
//     <>
//       <section className="our_offering_section section_padding">
//         <div className="offering_marquee_full_bleed">
//           <div className="offering_marquee_shell">
//             <div className="offering_marquee_row">
//               <div className="offering_marquee_track">
//                 {marqueeRow.map((label, index) => (
//                   <div key={`${label}-${index}`} className="offering_marquee_chip">
//                     <FaBolt />
//                     <span>{label}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="offering_marquee_row reverse">
//               <div className="offering_marquee_track">
//                 {marqueeRow.map((label, index) => (
//                   <div key={`${label}-reverse-${index}`} className="offering_marquee_chip">
//                     <FaRegCheckCircle />
//                     <span>{label}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="container offering_container">
//           <div className="offering_header">
//             <div className="offering_accent_bar" />
//             <h1 className="offering_title gradient-text">{title}</h1>
//             <p className="offering_subtitle">{sub_heading}</p>
//           </div>

//           <div className="offering_stepper_wrap">
//             <div className="offering_stepper_line" aria-hidden="true" />
//             <div className="offering_stepper_track">
//               {PROCESS_STEPS.map((step, index) => {
//                 const Icon = step.icon;
//                 const isCompleted = index < activeStep;
//                 const isActive = index === activeStep;
//                 const isFuture = index > activeStep;
//                 const state = isCompleted ? "completed" : isActive ? "active" : "future";
//                 return (
//                   <div
//                     key={step.id}
//                     className={`offering_stepper_card offering_stepper_card_${state}`}
//                     onClick={() => setActiveStep(index)}
//                     role="button"
//                     tabIndex={0}
//                     onKeyDown={(e) => e.key === "Enter" && setActiveStep(index)}
//                   >
//                     <div className="offering_stepper_card_icon">
//                       <Icon />
//                     </div>
//                     <h3 className="offering_stepper_card_heading">{step.heading}</h3>
//                     <span className="offering_stepper_card_time">{step.time}</span>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           <div className="offering_cards_grid">
//             {offering_content.map((item) => {
//               const Icon = offeringIconMap[item.icon] || FaGlobe;
//               return (
//                 <article key={item.heading} className="offering_card">
//                   <div className="offering_card_icon">
//                     <Icon />
//                   </div>
//                   <h3>{item.heading}</h3>
//                   <p>{item.description}</p>
//                 </article>
//               );
//             })}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Offering;
