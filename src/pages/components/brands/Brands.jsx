// ----------------------CODE PART:1---------------------------
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

      {/* Hover Gradient Effect Styles */}
      <style>{`
        .brands_grid {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
        .brand_chip {
          padding: 12px 20px;
          border-radius: 14px;
          background: #f1f1f1;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.4s ease, background 0.4s ease, box-shadow 0.4s ease, color 0.4s ease;
          display: inline-block;
          box-shadow: 0 6px 15px rgba(0,0,0,0.1);
        }
        .brand_chip:hover {
          transform: scale(1.2) translateZ(20px);
          background: linear-gradient(to right, #01AA23, #0193FF);
          color: #fff;
          box-shadow: 0 20px 40px rgba(0,0,0,0.25);
        }
      `}</style>
    </section>
  );
};

export default Brands;


// ----------------------CODE PART:0---------------------------
// import React from "react";
// import data from "../../data.json";

// const Brands = () => {
//   const { title, categories } = data.brands;

//   return (
//     <section className="brands_section section_padding">
//       <div className="container">
//         <h1 className="gradient-text mb-3">{title}</h1>
//         <div className="brands_grid">
//           {categories.map((category) => (
//             <span key={category} className="brand_chip">
//               {category}
//             </span>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Brands;
