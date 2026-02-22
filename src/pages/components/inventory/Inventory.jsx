import React from "react";
import {
  FaBroadcastTower,
  FaStore,
  FaBuilding,
  FaClipboardList,
  FaDoorOpen,
  FaCalendarAlt,
} from "react-icons/fa";
import data from "../../data.json";

const Inventory = () => {
  const { title, subtitle, items } = data.inventory;
  const iconMap = {
    "Digital Assets": FaBroadcastTower,
    "Kiosk / Canopy": FaStore,
    "Lift Branding Panels": FaBuilding,
    "Notice Board Sponsorship": FaClipboardList,
    "Gate Entry/Exit Branding": FaDoorOpen,
    "Event Sponsorship": FaCalendarAlt,
  };

  return (
    <section className="inventory_section section_padding">
      <div className="container">
        <h1 className="gradient-text mb-2">{title}</h1>
        <p className="mb-4">{subtitle}</p>

        <div className="row g-3">
          {items.map((item) => (
            <div className="col-12 col-md-6 col-lg-4" key={item.title}>
              <div className="inventory_card h-100">
                <div className="inventory_card_title_wrap">
                  <span className="inventory_icon">
                    {React.createElement(iconMap[item.title] || FaBroadcastTower)}
                  </span>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Inventory;
