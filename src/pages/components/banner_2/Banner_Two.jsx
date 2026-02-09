import React from "react";

import banner_leftside_1 from "../../../assets/banner_leftside_1.jpg";
import arrow_right from "../../../assets/arrow-right.svg";
import top_corner from "../../../assets/top-corner.svg";
import bottom_corner from "../../../assets/bottom-corner.svg";

import data from "../../data.json";
import GetStartedBtn from "../GetStartedBtn";

const Banner_Two = () => {
  const { title, features } = data.banner_2;

  return (
    <>
      {/* <!--banner start right side content--> */}
      <section
        className="banner_rightside_content section_padding"
        id="company"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="banner_img_opportunity">
                {/* <!-- Corner SVGs --> */}
                <img
                  src={top_corner}
                  className="d-none d-md-block corner-svg top-left"
                  alt="Top Left Corner"
                />
                <img
                  src={bottom_corner}
                  className="d-none d-md-block corner-svg bottom-right"
                  alt="Bottom Right Corner"
                />

                {/* <!-- Main Image --> */}
                <img src={banner_leftside_1} alt="Main Image" />
              </div>
            </div>

            <div className="col-lg-5">
              <h1 className="gradient-text">{title}</h1>
              <div className="banner5_text">
                <ul className="custom-square-list">
                  {features.map((item, index) => (
                    <li key={index}>
                      <h3>{item.heading}</h3>
                      <p>{item.description}</p>
                    </li>
                  ))}
                </ul>
                <div className="started-btn mt-5">
                  {/* <button className="btn" type="button">Get Started &nbsp; <img src={arrow_right}
                                        alt="" /></button> */}
                  <GetStartedBtn />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--banner start right side content--> */}
    </>
  );
};

export default Banner_Two;
