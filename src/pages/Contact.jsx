import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import arrow_right from "../assets/arrow-right.svg";
import successIcon from "/success-icon.svg";
import { Link } from "react-router-dom";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "https://api.adz10x.com/api/contact-enquiry",
        formData
      );
      if (response.status === 200) {
        setShowModal(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (err) {
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
                  {/* <Link to="tel:+91 90115 30248">+91 90115 30248</Link> */}
                  <Link to="tel:+919271155815">+91 92711 55815</Link>
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
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="text"
                        name="subject"
                        className="form-control"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <textarea
                        name="message"
                        className="form-control"
                        rows="5"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  
                    {error && <div className="col-12 text-danger">{error}</div>}
                    <div className="col-12 text-end">
                      <div className="banner4_text  started-btn mt-5">
                        <button
                          className="btn"
                          type="submit"
                          disabled={loading}
                        >
                          {loading ? "Sending..." : "Send Message"} &nbsp;
                          {!loading && <img src={arrow_right} alt="" />}
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

      {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content text-center p-4 rounded-4">
              <button
                type="button"
                className="btn-close ms-auto"
                onClick={() => setShowModal(false)}
              ></button>

              {/* 🔽 YOUR SVG GOES HERE */}
              <div className="mb-3">
                <img src={successIcon} alt="Success" />
              </div>

              <h4 className="fw-bold mb-2">Thank You!</h4>

              <p className="text-muted">Our team will contact you shortly.</p>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
