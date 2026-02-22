import React from "react";
import data from "../../data.json";

const Brands = () => {
  const { title, categories } = data.brands;

  return (
    <section className="brands_section section_padding">
      <div className="container">
        <h1 className="gradient-text mb-3">{title}</h1>
        <div className="brands_grid">
          {categories.map((category) => (
            <span key={category} className="brand_chip">
              {category}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
