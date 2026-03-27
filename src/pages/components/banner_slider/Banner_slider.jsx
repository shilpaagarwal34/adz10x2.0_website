import React from "react";
import {
  FaWhatsapp,
  FaBuilding,
  FaBullhorn,
  FaDoorOpen,
  FaStore,
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";
import data from "../../data.json";

const Banner_slider = () => {
  const {
    title,
    description,
    video_url,
    poster_image,
    fallback_image,
    cta_text,
    cta_link,
    media_platforms,
    journey_steps = [],
  } = data.hero_video;
  const [videoError, setVideoError] = React.useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = React.useState(false);
  const heroRef = React.useRef(null);

  React.useEffect(() => {
    if (!heroRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "200px 0px" }
    );

    observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);
  const platformIconMap = {
    "WhatsApp Group Promotion": FaWhatsapp,
    "Lift Branding Panels": FaBuilding,
    "Notice Board Advertising": FaBullhorn,
    "Main Gate Branding": FaDoorOpen,
    "Society Kiosk Activities": FaStore,
    "Society Event Sponsorship": FaCalendarAlt,
  };

  return (
    <div id="home" className="video_hero" ref={heroRef}>
      <div
        className="video_hero_fallback_bg"
        style={{ backgroundImage: `url(${fallback_image || poster_image})` }}
      ></div>

      {!videoError && video_url && shouldLoadVideo ? (
        <video
          className="video_hero_bg"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster={poster_image || fallback_image}
          onError={() => setVideoError(true)}
        >
          <source src={video_url} type="video/mp4" />
        </video>
      ) : null}

      <div className="video_hero_overlay"></div>

      <div className="container video_hero_content">
        <div className="video_hero_left">
          <span className="video_hero_badge">
            <FaCheckCircle />
            India's Verified Society Advertising Network
          </span>
          <h1>{title}</h1>
          <p>{description}</p>
          <a href={cta_link} target="_blank" rel="noreferrer" className="btn video_hero_btn">
            {cta_text}
          </a>
          {journey_steps.length ? (
            <div className="video_journey_strip">
              {journey_steps.map((step, index) => (
                <div key={step} className="video_journey_step">
                  <span className="video_journey_index">{index + 1}</span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          ) : null}
        </div>

        <div className="video_hero_right">
          <h3>Multi-Platform Inventory</h3>
          <div className="video_hero_platform_cards">
            {media_platforms.map((item) => (
              <div key={item} className="video_platform_card">
                <span className="video_platform_icon">
                  {React.createElement(platformIconMap[item] || FaBullhorn)}
                </span>
                <span className="video_platform_label">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner_slider;
