import React from 'react'
import offering_leftside_vector_1 from "../../../assets/offering_leftside_vector_1.png"
import offering_leftside_vector_img2 from "../../../assets/offering_leftside_vector_img2.png"
import offering_leftside_vector_img3 from "../../../assets/offering_leftside_vector_img3.png"
import right_side_promotion_1 from "../../../assets/right_side_promotion_1.png"
import right_side_promotion_2 from "../../../assets/right_side_promotion_2.png"


import data from "../../data.json";


const Offering = () => {

    const { title, sub_heading, offering_content } = data.offering

    return (
        <>

            {/* <!--our offering start--> */}
            <section className="our_offering_section section_padding">
                <div className="container section">
                    <h1 className="gradient-text">{title}</h1>
                    <p>{sub_heading}
                    </p>
                    <div className="row mt-5">
                        <div className="col-lg-5">


                            <div className="our_offering_parent_first">

                                <div className="our_offering_child_left">
                                    <div className="circle">
                                        <div className="inner-circle">
                                            <img src={offering_leftside_vector_1} alt="Profile" />
                                        </div>
                                    </div>
                                </div>
                                <div className="our_offering_child_right">
                                    <div className="text_offering_left">
                                        <h1>{offering_content[0].heading}</h1>
                                        <p>{offering_content[0].description}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="our_offering_parent_first">
                                <div className="our_offering_child_left">
                                    <div className="circle">
                                        <div className="inner-circle">
                                            <img src={offering_leftside_vector_img2} alt="Profile" />
                                        </div>
                                    </div>
                                </div>
                                <div className="our_offering_child_right">
                                    <div className="text_offering_left">
                                        <h1>{offering_content[1].heading}</h1>
                                        <p>{offering_content[1].description}
                                        </p>
                                    </div>
                                </div>
                            </div>


                            <div className="our_offering_parent_first">
                                <div className="our_offering_child_left">
                                    <div className="circle">
                                        <div className="inner-circle">
                                            <img src={offering_leftside_vector_img3} alt="Profile" />
                                        </div>
                                    </div>
                                </div>
                                <div className="our_offering_child_right">
                                    <div className="text_offering_left">
                                        <h1>{offering_content[2].heading}</h1>
                                        <p>
                                            {offering_content[2].description}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* <!--right part--> */}

                        <div className="col-lg-7">
                            <section className="socialmedia_contentbox">

                                <div className="card_main1">
                                    <div className="img_card1">
                                        <img src={right_side_promotion_1} alt="" />
                                    </div>
                                    <div className="content_card1">
                                        <h2>{offering_content[3].heading}</h2>
                                        <p>{offering_content[3].description}
                                        </p>
                                    </div>
                                </div>
                                <div className="card_main2">
                                    <div className="img_card2">
                                        <img src={right_side_promotion_2} alt="" />
                                    </div>
                                    <div className="content_card2">
                                        <h2>{offering_content[4].heading}</h2>
                                        <p>{offering_content[4].description}
                                        </p>
                                    </div>
                                </div>


                            </section>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--our offering end--> */}

        </>


    )
}

export default Offering