import React from "react";
import facebook_icon from "../../../assets/social-icons/facebook.svg";
import linkedin_icon from "../../../assets/social-icons/linkedin.svg";
import insta_icon from "../../../assets/social-icons/insta.svg";
import twitter_icon from "../../../assets/social-icons/twitter.svg";
import google_icon from "../../../assets/social-icons/google.svg";
import footer_logo from "../../../assets/footer_logo.png";
import { Link } from "react-router-dom";
// import { FaWhatsapp } from "react-icons/fa";
import { useVisualSettings } from "../../../../context/VisualSettingsContext.jsx";
import whatsapp_icon from "../../../assets/social-icons/whatsapp.svg";
const WHATSAPP_PRIMARY_E164 = "919271155815";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { fullLogo } = useVisualSettings();

  return (
    <>
      {/* <!--footer start--> */}
      <footer>
        <section className="foot_section">
          <div className="container">
            <div className="foot_box row">
              <div className="col-lg-5">
                <Link to={"/"}>
                  <img
                    className="footer-icon"
                    src={fullLogo || footer_logo}
                    alt=""
                  />
                </Link>
                {/* <p className="mt-4">
                  <b>Adz10x</b>, Pune's most trusted customer-centric real
                  estate company, is driven by innovation and expert management.
                  With a focus on quality and tech-driven solutions, it
                  redefines real estate while expanding trusted projects and
                  brands.
                </p> */}
                <p className="mt-4" style={{ textAlign: "justify" }}>
                  <b>Adz10x</b> is India’s first society-powered ad network,
                  helping communities earn from verified brand campaigns while
                  giving businesses trusted hyperlocal reach. We bring
                  transparency, consent-based advertising, and value creation
                  for both societies and brands.
                </p>
                <div className="social-icons">
                  <a href="" target="_blank">
                    <div className="single-social-icon">
                      <img src={google_icon} alt="" />
                    </div>
                  </a>
                  <a href="" target="_blank">
                    <div className="single-social-icon">
                      <img src={twitter_icon} alt="" />
                    </div>
                  </a>

                  <a
                    href="https://www.instagram.com/adz10x.india"
                    target="_blank"
                  >
                    <div className="single-social-icon">
                      <img src={insta_icon} alt="" />
                    </div>
                  </a>
                  <a href="" target="_blank">
                    <div className="single-social-icon">
                      <img src={linkedin_icon} alt="" />
                    </div>
                  </a>
                  <a
                    href="https://www.facebook.com/people/Adz10x/61577302864537/"
                    target="_blank"
                  >
                    <div className="single-social-icon">
                      <img src={facebook_icon} alt="" />
                    </div>
                  </a>
                  {/* <a
                    href={`https://wa.me/${WHATSAPP_PRIMARY_E164}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contact us on WhatsApp"
                  >
                    <div className="single-social-icon">
                      <FaWhatsapp
                        aria-hidden
                        style={{ fontSize: 22, color: "#fff"}}
                      />
                    </div>
                  </a> */}
                  <a
                    href={`https://wa.me/${WHATSAPP_PRIMARY_E164}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contact us on WhatsApp"
                  >
                    <div
                      className="single-social-icon"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={whatsapp_icon}
                        alt="whatsapp"
                        style={{
                          width: "22px",
                          height: "22px",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-6">
                <div className="footer-links mb-2">
                  <h1>Start a conversation</h1>
                  <a href="mailto:support@adz10x.com">support@adz10x.com</a>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="footer_more">
                  <h1>More</h1>
                  <Link to="/privacy-policy">Privacy Policy</Link> <br />
                  <Link to="/cookie-policy">Cookie Policy</Link> <br />
                  <Link to="/terms-conditions">Terms Conditions</Link> <br />
                  <Link to="/refund-policy">Refund Policy</Link> <br />
                  <Link to="/disclaimer">Disclaimer</Link> <br />
                  <Link to="/acceptable-use-policy">
                    Acceptable Use Policy
                  </Link>{" "}
                  <br />
                  <Link to="/shipping-policy">
                    Shipping and Delivery Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
      {/* <!--footer end--> */}

      {/* <!-- Start Copy Right Area --> */}
      <section className="copy_area">
        <div className="copy-right-area py-1">
          <div className="container">
            <div className="">
              <p className="">
                {" "}
                Copyright &copy;
                {currentYear}. <b>Adz10x</b>, All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* // <!-- End Copy Right Area --> */}
    </>
  );
};

export default Footer;
