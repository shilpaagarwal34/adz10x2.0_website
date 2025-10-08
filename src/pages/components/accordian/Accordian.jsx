import React, { useState } from "react";
import data from "../../data.json";

const faqs = data.faqData;

const AccordianItem = ({ index, title, content, isOpen, onClick }) => {
  const collapseId = `collapse${index}`;
  const headingId = `heading${index}`;
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={headingId}>
        <button
          className={`accordion-button d-flex justify-content-between ${
            isOpen ? "" : "collapsed"
          }`}
          type="button"
          onClick={() => onClick(index)}
          aria-expanded={isOpen}
          aria-controls={collapseId}
        >
          <h3>{title}</h3>
          <span className="toggle-icon ms-auto  text-white px-2 py-1">
            {isOpen ? "-" : "+"}
          </span>
        </button>
      </h2>
      <div
        id={collapseId}
        className={`accordion-collapse collapse ${isOpen ? "show" : ""} `}
        aria-labelledby={headingId}
      >
        <div className="accordion-body">{content}</div>
      </div>
    </div>
  );
};

const Accordian = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      {/* <!--accordian start--> */}
      <section className="accordian_part section_padding">
        <div className="container">
          <div className="text_center">
            <h1 className="heading_accordian gradient-text">
              Frequently Asked Questions
            </h1>
          </div>
          <div className="accordion" id="accordionExample">
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
      {/* <!--accordian end--> */}
    </>
  );
};

export default Accordian;
