import React, { useState } from "react";
import data from "../../data.json";

const faqs = data.faqData;

const AccordianItem = ({ index, title, content, isOpen, onClick }) => {
  return (
    <div
      className={`faq-card ${isOpen ? "open" : ""}`}
      onClick={() => onClick(index)}
    >
      <div className="faq-inner">
        <div className="faq-front">
          <h3>{title}</h3>
          <span className="icon">{isOpen ? "−" : "+"}</span>
        </div>
        <div className="faq-back">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

const Accordian = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <style>{`
        .faq-section {
          padding: 60px 0;
          background: linear-gradient(135deg, #ecfdf5, #e0f2fe);
          color: #1e293b;
          min-height: 100vh;
        }

        .faq-title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 40px;
          background: linear-gradient(90deg, #16a34a, #0284c7);
          -webkit-background-clip: text;
          color: transparent;
        }

        .faq-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 25px;
          perspective: 1200px;
        }

        .faq-card {
          height: 180px;
          cursor: pointer;
          perspective: 1000px;
        }

        .faq-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.8s cubic-bezier(0.4, 0.2, 0.2, 1);
          transform-style: preserve-3d;
        }

        .faq-card.open .faq-inner {
          transform: rotateY(180deg) scale(1.05);
        }

        .faq-front,
        .faq-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 20px;
          padding: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }

        .faq-front {
          background: linear-gradient(135deg, #ffffff, #ecfdf5);
        }

        .faq-back {
          background: linear-gradient(135deg, #16a34a, #0284c7);
          transform: rotateY(180deg);
          justify-content: center;
          text-align: center;
        }

        .faq-card:hover .faq-inner {
          transform: rotateY(10deg) scale(1.02);
        }

        .faq-card.open:hover .faq-inner {
          transform: rotateY(180deg) scale(1.08);
        }

        .icon {
          color: #0f172a;
          font-size: 1.5rem;
          background: rgba(0,0,0,0.05);
          padding: 6px 12px;
          border-radius: 10px;
        }

        .faq-back p {
          color: white;
          font-size: 0.95rem;
          line-height: 1.5;
        }
      `}</style>

      <section className="faq-section">
        <div className="container">
          <h1 className="faq-title">Frequently Asked Questions</h1>

          <div className="faq-grid">
            {faqs.map((item, index) => (
              <AccordianItem
                key={index}
                index={index}
                title={item.title}
                content={item.content}
                isOpen={openIndex === index}
                onClick={handleToggle}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Accordian;







// import React, { useState } from "react";
// import data from "../../data.json";

// const faqs = data.faqData;

// const AccordianItem = ({ index, title, content, isOpen, onClick }) => {
//   const collapseId = `collapse${index}`;
//   const headingId = `heading${index}`;
//   return (
//     <div className="accordion-item">
//       <h2 className="accordion-header" id={headingId}>
//         <button
//           className={`accordion-button d-flex justify-content-between ${
//             isOpen ? "" : "collapsed"
//           }`}
//           type="button"
//           onClick={() => onClick(index)}
//           aria-expanded={isOpen}
//           aria-controls={collapseId}
//         >
//           <h3>{title}</h3>
//           <span className="toggle-icon ms-auto  text-white px-2 py-1">
//             {isOpen ? "-" : "+"}
//           </span>
//         </button>
//       </h2>
//       <div
//         id={collapseId}
//         className={`accordion-collapse collapse ${isOpen ? "show" : ""} `}
//         aria-labelledby={headingId}
//       >
//         <div className="accordion-body">{content}</div>
//       </div>
//     </div>
//   );
// };

// const Accordian = () => {
//   const [openIndex, setOpenIndex] = useState(0);

//   const handleToggle = (index) => {
//     setOpenIndex((prev) => (prev === index ? null : index));
//   };

//   return (
//     <>
//       {/* <!--accordian start--> */}
//       <section className="accordian_part section_padding">
//         <div className="container">
//           <div className="text_center">
//             <h1 className="heading_accordian gradient-text">
//               Frequently Asked Questions
//             </h1>
//           </div>
//           <div className="accordion" id="accordionExample">
//             {faqs.map((item, index) => (
//               <AccordianItem
//                 key={index}
//                 index={index}
//                 title={item.title}
//                 content={item.content}
//                 isOpen={openIndex === index}
//                 onClick={handleToggle}
//               />
//             ))}
//           </div>
//         </div>
//       </section>
//       {/* <!--accordian end--> */}
//     </>
//   );
// };

// export default Accordian;
