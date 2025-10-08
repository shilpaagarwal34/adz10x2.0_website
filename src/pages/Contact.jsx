import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import arrow_right from "../assets/arrow-right.svg";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <div className="contact-page bg-light py-5">
        <div className="container">
          <div className="d-flex flex-column align-items-center">
            <h2 className="text-center mb-4 display-5 fw-bold gradient-text">
              Get in Touch
            </h2>
            <p className="text-center mb-5 text-muted">
              We’re here to help — whether you're a society exploring
              partnership opportunities, a brand ready to launch a campaign,{" "}
              <br /> or simply curious about how <strong>Adz10X</strong> works.
            </p>
          </div>

          <div className="row g-4">
            {/* Contact Info */}
            <div className="col-lg-5">
              <div className="p-4 rounded shadow bg-white contact-card">
                <h4 className="mb-4 ">Contact Information</h4>
                <p className="d-flex align-items-start">
                  <FaMapMarkerAlt className="me-2 text-primary mt-1" />
                  ANANTA CONSULTACY <br />
                  305, Nyati Enthral, <br />
                  Kharadi By pass road, <br />
                  Pune – 411014
                </p>
                <p className="d-flex align-items-start">
                  <FaEnvelope className="me-2 text-primary mt-1" />
                  <Link to="mailto:support@adz10x.com">support@adz10x.com</Link>
                </p>
                <p className="d-flex align-items-start">
                  <FaPhoneAlt className="me-2 text-primary mt-1" />
                  <Link to="tel:+91 90115 30248">+91 90115 30248</Link>
                </p>

                <div className="mt-4">
                  <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236.40898988272124!2d73.93751540165712!3d18.549504878880526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3f15eed6129%3A0x8b7639614ff646cb!2sNyati%20Enthral!5e0!3m2!1sen!2sin!4v1757917847102!5m2!1sen!2sin"
                    width="100%"
                    height="250"
                    style={{ border: 0, borderRadius: "10px" }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-7">
              <div className="p-4 rounded shadow bg-white contact-card">
                <h4 className="mb-4">Send Us a Message</h4>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <textarea
                        className="form-control"
                        rows="5"
                        placeholder="Your Message"
                        required
                      ></textarea>
                    </div>
                    <div className="col-12 text-end">
                      <div className="banner4_text  started-btn mt-5">
                        <button className="btn" type="button">
                          Send Message &nbsp; <img src={arrow_right} alt="" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Optional custom styles */}
        <style>{`
                .form-control {
                    border-radius: 10px;
                }
                .btn-primary {
                    border-radius: 30px;
                }
                .contact-page {
                    background: linear-gradient(to bottom right, #f8f9fa, #e9ecef);
                }
            `}</style>
      </div>
    </div>
  );
};

export default Contact;
