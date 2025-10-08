import React from "react";
import arrow_right from "../../assets/arrow-right.svg";
export default function GetStartedBtn() {
  return (
    <a
      href="https://portal.adz10x.com/register"
      target="_blank"
      className="btn"
    >
      Get Started &nbsp; <img src={arrow_right} alt="" />
    </a>
  );
}
