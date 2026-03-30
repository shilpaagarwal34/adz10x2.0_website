import React from "react";
import arrow_right from "../../assets/arrow-right.svg";
export default function GetStartedBtn({ accountType = "default" }) {
  const isLocal =
    typeof window !== "undefined" &&
    (window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1");

  const registerBase = isLocal ? "http://localhost:4000" : "https://adz10x.com";

  const signupUrl =
    accountType === "society"
      ? `${registerBase}/register?step=2&type=society`
      : accountType === "company"
      ? `${registerBase}/register?step=2&type=company`
      : `${registerBase}/register`;

  return (
    <a
      href={signupUrl}
      target="_blank"
      rel="noreferrer"
      className="get_started_btn btn"
    >
      Get Started &nbsp; <img src={arrow_right} alt="" />
    </a>
  );
}
