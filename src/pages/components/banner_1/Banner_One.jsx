import React, { useState, useEffect, useRef } from "react";
import data from "../../data.json";
import GetStartedBtn from "../GetStartedBtn";
import "./Banner_One.css";

const ROTATION_SPEED = 0.5;
const ARC_START = 0;
const ARC_END = 360;
const SPACING = (ARC_END - ARC_START) / 5;

const Banner_One = () => {
  const { title, features } = data.banner_1;

  const [offset, setOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const requestRef = useRef();

  useEffect(() => {
    const animate = () => {
      if (!isPaused) {
        setOffset((prev) => (prev + ROTATION_SPEED) % 360);
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(requestRef.current);
  }, [isPaused]);

  return (
    <section className="banner4_society" id="society">
      <div className="container">
        <h1
          className="banner4_society_title gradient-text"
          style={{
            WebkitTextStroke: "1px rgba(255,255,255,0.85)",
            textShadow: "0 2px 6px rgba(0,0,0,0.25)",
            fontWeight: 900,
          }}
        >
          {title}
        </h1>
      </div>

      <div className="banner4_society_semicircle_zone">
        {/* SEMICIRCLE CONNECTOR LINE */}
          <div className="banner4_society_arc"></div>
        {/* CENTER IMAGE */}
        <div className="banner4_society_center_image">
          <img src="/building_behind_wheel.jpg" alt="center" />
        </div>
        {/* <svg className="orbit_connectors" viewBox="0 0 1000 600">
          {features.slice(0, 5).map((item, index) => {
            const angle =
              (ARC_START + index * SPACING + offset) * (Math.PI / 180);
            const radius = 300;

            const centerX = 500;
            const centerY = 350;

            const x = centerX + radius * Math.sin(angle);
            const y = centerY - radius * Math.cos(angle);

            return (
              <line
                key={index}
                x1={centerX}
                y1={centerY}
                x2={x}
                y2={y}
                stroke="url(#orbitGradient)"
                strokeWidth="3"
              />
            );
          })}

          <defs>
            <linearGradient id="orbitGradient">
              <stop offset="0%" stopColor="#00ff9c" />
              <stop offset="100%" stopColor="#00bfff" />
            </linearGradient>
          </defs>
        </svg> */}
        {/* Moving Boxes */}

        <div className="banner4_society_items_container">
          {features.slice(0, 5).map((item, index) => {
            const angle = ARC_START + index * SPACING + offset;

            return (
              <div
                key={index}
                className="banner4_society_semicircle_box"
                style={{
                  "--angle": `${angle}deg`,
                }}
              >
                <div className="banner4_society_semicircle_box_inner">
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

//-----------------ITSSS ALMOST PERFECT-------------------------
// import React, { useState, useEffect, useRef } from "react";
// import data from "../../data.json";
// import GetStartedBtn from "../GetStartedBtn";
// import "./Banner_One.css";

// const ROTATION_SPEED = 0.09;
// const ARC_START = 0;     // full circle start
// const ARC_END = 360;     // full circle end
// const SPACING = (ARC_END - ARC_START) / 5;

// const Banner_One = () => {

//   const { title, features } = data.banner_1;

//   const [offset, setOffset] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);

//   const requestRef = useRef();

//   useEffect(() => {

//     const animate = () => {

//       if (!isPaused) {
//         setOffset(prev => (prev + ROTATION_SPEED) % 360);
//       }

//       requestRef.current = requestAnimationFrame(animate);
//     };

//     requestRef.current = requestAnimationFrame(animate);

//     return () => cancelAnimationFrame(requestRef.current);

//   }, [isPaused]);

//   return (
//     <section className="banner4_society" id="society">

//       <div className="container">
//         <h1 className="banner4_society_title gradient-text">
//           {title}
//         </h1>
//       </div>

//       <div
//         className="banner4_society_semicircle_zone"
//         onMouseEnter={() => setIsPaused(true)}
//         onMouseLeave={() => setIsPaused(false)}
//       >

//         {/* Center Image */}

//         <div className="banner4_society_center_image_wrap">
//           <img
//             src="/my_image.jpg"
//             alt="High Rise Building"
//             className="banner4_society_center_image"
//           />
//         </div>

//         {/* SVG */}

//         <svg className="banner4_society_semicircle_svg" viewBox="0 0 800 400">

//           <defs>
//             <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
//               <stop offset="0%" stopColor="rgba(1,170,35,0.2)" />
//               <stop offset="100%" stopColor="rgba(1,147,255,0.2)" />
//             </linearGradient>
//           </defs>

//           {features.slice(0,5).map((_, index) => {

//             const angle = ARC_START + index * SPACING + offset;

//             const rad = (angle * Math.PI) / 180;

//             const x2 = 400 + 350 * Math.cos(rad);
//             const y2 = 400 + 350 * Math.sin(rad);

//             return (

//               <path
//                 key={index}
//                 d={`M 400 330 Q 400 360 ${x2} ${y2}`}
//                 stroke="url(#lineGrad)"
//                 strokeWidth="2"
//                 fill="none"
//                 className="wavy_connector"
//               />

//             );

//           })}

//         </svg>

//         {/* Moving Boxes */}

//         <div className="banner4_society_items_container">

//           {features.slice(0,5).map((item,index)=>{

//             const angle = ARC_START + index * SPACING + offset;

//             return(

//               <div
//                 key={index}
//                 className="banner4_society_semicircle_box"
//                 style={{
//                   "--angle": `${angle}deg`
//                 }}
//               >

//                 <div className="banner4_society_semicircle_box_inner">

//                   <span className="banner4_society_circle_heading">
//                     {item.heading}
//                   </span>

//                   <span className="banner4_society_circle_desc">
//                     {item.description}
//                   </span>

//                 </div>

//               </div>

//             );

//           })}

//         </div>

//       </div>

//       <div className="container">
//         <div className="banner4_society_cta">
//           <GetStartedBtn accountType="society"/>
//         </div>
//       </div>

//     </section>
//   );
// };

// export default Banner_One;
