import React from 'react'
import data from "../../data.json"


const About = () => {

    const { title, description_one, description_two, image } = data.about_us

    return (
        <>

            {/* <!--about us content start--> */}
            <section className="about_content section_padding" id='about'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <h1 className="gradient-text mb-3">{title}</h1>
                              <div
                                dangerouslySetInnerHTML={{ __html: description_one }}
                            />
                            <p className="paragraph2">{description_two}</p>
                        </div>

                        <div className="about_img col-lg-7 mt-4 mt-lg-0">
                            <img src={image || "/about-us-flow.png"} alt="about us flow" />
                        </div>

                    </div>
                </div>
            </section>
            {/* <!--about us content end--> */}

        </>
    )
}

export default About