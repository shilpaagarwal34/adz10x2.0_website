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


        /* -----------------------RESPONSIVE ADJUSTMENTS------------------- */
        /* ============================= */
/* Tablets (≤1024px) */
/* ============================= */

@media (max-width:1024px){

.brands_grid{
gap:10px;
}

.brand_chip{
padding:10px 18px;
font-size:15px;
}

}


/* ============================= */
/* Phones (≤768px) */
/* ============================= */

@media (max-width:768px){

.brands_grid{
gap:10px;
}

.brand_chip{
padding:10px 16px;
font-size:14px;
border-radius:12px;
}

/* reduce hover scale so chips don't collide */

.brand_chip:hover{
transform:scale(1.08);
}

}


/* ============================= */
/* Small Smartphones (≤480px) */
/* ============================= */

@media (max-width:480px){

/* horizontal scroll style */

.brands_grid{
flex-wrap:nowrap;
overflow-x:auto;
padding-bottom:10px;
scroll-snap-type:x mandatory;
}

.brand_chip{
flex:0 0 auto;
padding:8px 14px;
font-size:13px;
border-radius:10px;
scroll-snap-align:start;
}

/* remove aggressive hover for touch devices */

.brand_chip:hover{
transform:none;
}

}


/* ============================= */
/* Very small phones (≤360px) */
/* ============================= */

@media (max-width:360px){

.brand_chip{
padding:7px 12px;
font-size:12px;
}

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
