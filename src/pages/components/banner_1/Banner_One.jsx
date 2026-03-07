import React, { useState, useEffect, useRef } from "react";
import data from "../../data.json";
import GetStartedBtn from "../GetStartedBtn";
import "./Banner_One.css";

const ROTATION_DURATION_MS = 30000;
const BOX_ANGLES = [210, 240, 270, 300, 330];

const Banner_One = () => {
  const { title, center_image, features } = data.banner_1;
  const [rotation, setRotation] = useState(0);
  const [arcRadius, setArcRadius] = useState(200);
  const zoneRef = useRef(null);

  useEffect(() => {
    const start = Date.now();
    let raf = 0;
    const tick = () => {
      const elapsed = Date.now() - start;
      const r = (elapsed / ROTATION_DURATION_MS) * 360 % 360;
      setRotation(r);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const measure = () => {
      if (!zoneRef.current) return;
      const rect = zoneRef.current.getBoundingClientRect();
      const r = Math.min(rect.width / 2, rect.height);
      setArcRadius(Math.max(100, Math.round(r * 0.82)));
    };
    const t = setTimeout(measure, 0);
    const ro = new ResizeObserver(measure);
    const el = zoneRef.current;
    if (el) ro.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      clearTimeout(t);
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <section className="banner4 banner4_society section_padding" id="society">
      <div className="container">
        <h1 className="banner4_society_title gradient-text">{title}</h1>
      </div>

      <div ref={zoneRef} className="banner4_society_semicircle_zone">
        <div className="banner4_society_center_image_wrap" aria-hidden>
          <img
            src={center_image || "/society-center.png"}
            alt="Society"
            className="banner4_society_center_image"
          />
        </div>
        <svg
          className="banner4_society_semicircle_svg"
          viewBox="0 0 800 400"
          preserveAspectRatio="xMidYMax meet"
          aria-hidden
        >
          <defs>
            <linearGradient id="banner4ArcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#01AA23" />
              <stop offset="100%" stopColor="#0193FF" />
            </linearGradient>
          </defs>
          <path
            className="banner4_society_arc_path"
            d="M 0 400 A 400 400 0 0 1 800 400"
            fill="none"
            stroke="url(#banner4ArcGrad)"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
        <div
          className="banner4_society_semicircle_rotate"
          style={{
            transform: `rotate(${rotation}deg)`,
            "--arc-r": `${arcRadius}px`,
          }}
        >
          {features.slice(0, 5).map((item, index) => {
            const angle = BOX_ANGLES[index];
            const counterRotate = -(rotation + angle);
            return (
              <div
                key={index}
                className="banner4_society_semicircle_box"
                style={{
                  "--angle": `${angle}deg`,
                }}
              >
                <div
                  className="banner4_society_semicircle_box_inner"
                  style={{ transform: `rotate(${counterRotate}deg)` }}
                >
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
