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

        <div className="inventory_path_shell">
          <div className="inventory_path_line" />
          <div className="inventory_path_grid">
          {items.map((item, index) => (
              <article
                className={`inventory_path_node ${index % 2 === 0 ? "up" : "down"}`}
                key={item.title}
              >
                <span className="inventory_step_badge">{index + 1}</span>
                <div className="inventory_path_node_title">
                  <span className="inventory_icon">
                    {React.createElement(iconMap[item.title] || FaBroadcastTower)}
                  </span>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.description}</p>
              </article>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inventory;
