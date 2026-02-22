import React from 'react'

import society_banner4_right_img from "../../../assets/society_banner4_right_img.jpg";
import arrow_right from "../../../assets/arrow-right.svg";
import top_corner from "../../../assets/top-corner.svg"
import bottom_corner from "../../../assets/bottom-corner.svg"


import data from "../../data.json";
import GetStartedBtn from '../GetStartedBtn';

const Banner_One = () => {

    const { title, features } = data.banner_1

    return (
        <>



            {/* <!--banner start left side content --> */}
            <section className="banner4 section_padding" id='society'>
                <div className="container ">
                    <div className="row">
                        <div className="col-lg-6 mb-5">
                            <h1 className="gradient-text pe-3">{title}
                            </h1>
                            <div className="banner4_text">
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
                                         <GetStartedBtn accountType="society" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="banner_img_opportunity">
                                {/* <!-- Corner SVGs --> */}
                                <img src={top_corner} className="d-none d-md-block corner-svg top-left"
                                    alt="Top Left Corner" />
                                <img src={bottom_corner} className="d-none d-md-block corner-svg bottom-right"
                                    alt="Bottom Right Corner" />

                                {/* <!-- Main Image --> */}
                                <img src={society_banner4_right_img} alt="Main Image" />
                            </div>
                        </div>


                    </div>
                </div>
            </section>
            {/* <!--banner start left side content --> */}



        </>
    )
}

export default Banner_One