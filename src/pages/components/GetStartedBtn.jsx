import React from "react";
import arrow_right from "../../assets/arrow-right.svg";
export default function GetStartedBtn({ accountType = "default" }) {
  const isLocal =
    typeof window !== "undefined" &&
    (window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1");

  const portalBase = isLocal ? "http://localhost:4000" : "https://portal.adz10x.com";

  const signupUrl =
    accountType === "society"
      ? `${portalBase}/register?step=2&type=society`
      : accountType === "company"
      ? `${portalBase}/register?step=2&type=company`
      : `${portalBase}/register?step=1`;

  return (
    <a
      href={signupUrl}
      target="_blank"
      rel="noreferrer"
      className="btn"
    >
      Get Started &nbsp; <img src={arrow_right} alt="" />
    </a>
  );
}
